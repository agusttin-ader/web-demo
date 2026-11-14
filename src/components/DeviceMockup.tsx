import Image from "next/image";

type DeviceMockupProps = {
  title: string;
  desktopSrc: string;
  mobileSrc: string;
  urlLabel?: string;
  priority?: boolean;
  className?: string;
};

export function DeviceMockup({
  title,
  desktopSrc,
  mobileSrc,
  urlLabel,
  priority = false,
  className = "",
}: DeviceMockupProps) {
  const desktopAlt = `${title} — vista desktop`;
  const mobileAlt = `${title} — vista mobile`;

  return (
    <div className={`device-mockup${className ? ` ${className}` : ""}`}>
      <div className="device-mockup__cluster">
        <div className="device-mockup__desktop">
          <div className="device-mockup__chrome">
            <span className="device-mockup__dot" />
            <span className="device-mockup__dot" />
            <span className="device-mockup__dot" />
            {urlLabel ? (
              <span className="device-mockup__url">{urlLabel}</span>
            ) : null}
          </div>
          <div className="device-mockup__desktop-screen">
            <Image
              src={desktopSrc}
              alt={desktopAlt}
              fill
              unoptimized
              sizes="(min-width: 1180px) 28vw, (min-width: 768px) 42vw, 90vw"
              className="device-mockup__shot"
              priority={priority}
              loading={priority ? "eager" : "lazy"}
            />
          </div>
        </div>

        <div className="device-mockup__phone">
          <div className="device-mockup__phone-bezel">
            <div className="device-mockup__phone-screen">
              <Image
                src={mobileSrc}
                alt={mobileAlt}
                fill
                unoptimized
                sizes="(min-width: 768px) 200px, 180px"
                className="device-mockup__shot device-mockup__shot--phone"
                priority={priority}
                loading={priority ? "eager" : "lazy"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
