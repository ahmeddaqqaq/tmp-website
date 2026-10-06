export const CONTACT_EMAIL = "mrktngtpm@gmail.com";
export const WHATSAPP_DISPLAY = "+63 945 134 2386";

const WHATSAPP_NUMBER = "639451342386";

export const whatsappUrl = (prefill: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(prefill)}`;

export const mailtoUrl = (subject?: string) =>
  subject
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
    : `mailto:${CONTACT_EMAIL}`;

/** Henson Building, A. Mabini St., Ermita, Manila (OpenStreetMap). */
export const OFFICE_COORDINATES = { lat: 14.574166, lng: 120.9827448 };
