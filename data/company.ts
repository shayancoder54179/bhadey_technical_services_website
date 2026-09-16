export const company = {
  name: 'Bhadeya Technical Services L.L.C',
  shortName: 'Bhadeya Technical',
  tagline: 'Precision Scanning. Safe Construction.',
  description: 'UAE\'s trusted partner for GPR scanning, core cutting, and excavation services. Over 7 years of experience serving major projects across Dubai, Abu Dhabi, Sharjah, and beyond.',
  phone: '+971 55 692 6286',
  phoneClean: '+971556926286',
  email: 'Bhadeyatechnical@gmail.com',
  website: 'https://www.bhadeya.com',
  foundingYear: 2019,
  yearsInBusiness: '7+',
  hours: {
    weekday: { days: 'Sunday - Thursday', time: '8:00 AM - 6:00 PM' },
    saturday: { days: 'Saturday', time: '9:00 AM - 3:00 PM' },
    friday: { days: 'Friday', time: 'Closed' }
  },
  /**
   * Registered premises, taken from the DED trade licence / Ejari tenancy
   * contract 0120260715006163. Keep these strings byte-identical to the Google
   * Business Profile listing (NAP consistency) — components/seo/JsonLd.tsx,
   * the footer and the contact page all read this object.
   *
   * Dubai does not use postal codes, so postalCode is intentionally absent.
   *
   * `geo` is the plot resolved from Makani 3195 695 208 via Dubai
   * Municipality's makani.ae (street 128, Al Khabaisi) — not an approximation.
   * If the Google Business Profile pin is later placed elsewhere, change this
   * to match it rather than leaving the two disagreeing.
   */
  address: {
    streetAddress: 'Office A-51, Al Shaikh Building 05, Al Khabeesi',
    locality: 'Deira',
    region: 'Dubai',
    country: 'AE',
    countryName: 'United Arab Emirates',
    makani: '3195 695 208',
    geo: { latitude: 25.2639665, longitude: 55.3311331 },
    /** One-line form for display in the footer, contact page and citations. */
    full: 'Office A-51, Al Shaikh Building 05, Al Khabeesi, Deira, Dubai, United Arab Emirates',
  },
  /** DED Dubai trade licence. Shown on the site as a trust/verification signal. */
  license: {
    number: '844806',
    issuer: 'Department of Economy and Tourism, Dubai',
    issuerShort: 'DED Dubai',
  },
  serviceAreas: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ras Al Khaimah', 'Fujairah', 'Al Ain'],
  stats: {
    yearsExperience: '7+',
    clientSatisfaction: '100%',
    serviceAreas: '6+ Cities'
  },
  socialLinks: {
    whatsapp: 'https://wa.me/971556926286',
  }
}
