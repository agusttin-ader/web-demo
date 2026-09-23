"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqList({ items }: { items: FaqItem[] }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="faq__list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const triggerId = `faq-trigger-${index}`;

        return (
          <Reveal key={item.question} variant="up" delay={index * 45}>
            <div className={`faq__item${isOpen ? " faq__item--open" : ""}`}>
              <button
                type="button"
                className="faq__trigger"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                {item.question}
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                aria-hidden={!isOpen}
                className="faq__panel"
                data-open={isOpen ? "true" : "false"}
                data-motion={prefersReducedMotion ? "reduce" : "animate"}
              >
                <div className="faq__panel-inner">
                  <div className="faq__answer faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
