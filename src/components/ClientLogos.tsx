import Image from "next/image";
import { ExternalLink } from "@/components/ExternalLink";
import { TRUST_LOGOS } from "@/lib/constants";

type ClientLogosProps = {
  listClassName: string;
  linkClassName?: string;
  imageSizes: string;
  imageMaxClass?: string;
  ariaLabel?: string;
};

export function ClientLogos({
  listClassName,
  linkClassName = "",
  imageSizes,
  imageMaxClass,
  ariaLabel,
}: ClientLogosProps) {
  return (
    <ul className={listClassName} aria-label={ariaLabel}>
      {TRUST_LOGOS.map((logo) => {
        const mono = logo.trustMonoOnLight ? " client-logos__item--mono" : "";

        return (
          <li key={logo.id} className={`client-logos__item${mono}`.trim()}>
            <ExternalLink
              href={logo.href}
              className={`client-logos__link${linkClassName ? ` ${linkClassName}` : ""}`}
              showHint={false}
              aria-label={logo.alt}
            >
              <Image
                src={logo.src}
                alt=""
                width={200}
                height={72}
                sizes={imageSizes}
                className={imageMaxClass}
              />
            </ExternalLink>
          </li>
        );
      })}
    </ul>
  );
}
