import { ExternalLink } from "@/components/ExternalLink";
import { IconWhatsApp } from "@/components/icons";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppFab() {
  return (
    <div className="whatsapp-fab-shell">
      <ExternalLink
        href={WHATSAPP_URL}
        aria-label="Abrir chat de WhatsApp"
        className="whatsapp-fab focus-ring inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-md)] transition-[transform,box-shadow] duration-200 ease-[var(--ease-out)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(37,211,102,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] sm:h-14 sm:w-14"
      >
        <IconWhatsApp className="h-6 w-6" aria-hidden />
      </ExternalLink>
    </div>
  );
}
