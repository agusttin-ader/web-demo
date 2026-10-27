import { Reveal } from "@/components/Reveal";

function ArtMarks() {
  return (
    <>
      <path
        d="M-90 330C140 210 310 150 470 200C630 250 780 170 1080 110"
        stroke="#8b5cf6"
        strokeWidth="34"
        strokeLinecap="round"
        opacity="0.38"
      />
      <path
        d="M-110 380C130 260 330 210 490 255C650 300 810 220 1100 155"
        stroke="#3b82f6"
        strokeWidth="15"
        strokeLinecap="round"
        opacity="0.86"
      />
      <path
        d="M-70 420C160 310 350 270 510 310C670 350 830 270 1080 210"
        stroke="#e11d48"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.9"
      />
    </>
  );
}

/** Arte rectangular en el hueco al lado de La Guarida; se funde con el fondo. */
export function PortfolioArtPanel({ delay = 0 }: { delay?: number }) {
  return (
    <Reveal variant="fade" delay={delay}>
      <div className="portfolio-art" aria-hidden="true">
        <svg
          className="portfolio-art__svg portfolio-art__svg--blur"
          viewBox="0 0 1000 500"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <ArtMarks />
        </svg>
        <svg
          className="portfolio-art__svg"
          viewBox="0 0 1000 500"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <ArtMarks />
        </svg>
      </div>
    </Reveal>
  );
}
