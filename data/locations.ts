/**
 * Service-area location pages.
 *
 * Each service/city combination gets its own page. Content is written per
 * combination rather than templated from a single string, because near-identical
 * location pages read as doorway pages to Google and get filtered out of the
 * index. If a combination has no genuine local content to say, it should not
 * exist here.
 */

export interface City {
  slug: string;
  /** Display name, e.g. "Abu Dhabi" */
  name: string;
  /** Districts and zones we actually cover, used in the coverage section. */
  areas: string[];
  /** Utility owners and permitting bodies relevant to subsurface work here. */
  authorities: string[];
  /** How local ground conditions affect scanning depth. */
  groundNote: string;
}

export const cities: Record<string, City> = {
  dubai: {
    slug: "dubai",
    name: "Dubai",
    areas: [
      "Downtown Dubai",
      "Business Bay",
      "Dubai Marina & JLT",
      "Deira & Bur Dubai",
      "Al Quoz",
      "Dubai Investments Park",
      "Jebel Ali",
      "Dubai Silicon Oasis",
      "Al Barsha",
      "Dubai South",
    ],
    authorities: ["Dubai Municipality", "DEWA", "RTA", "du and Etisalat"],
    groundNote:
      "Ground conditions vary sharply across the emirate. Inland sites in Al Quoz and Dubai Investments Park are dry sand and read well, often to the full 10 m. Coastal and reclaimed ground around the Marina and Palm sits on saline fill where signal attenuates quickly, and we will tell you on site if the depth you need is not achievable.",
  },
  "abu-dhabi": {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    areas: [
      "Abu Dhabi Island & Corniche",
      "Mussafah",
      "ICAD I–III",
      "Khalifa City",
      "Al Reem Island",
      "Yas Island",
      "Saadiyat Island",
      "Al Shamkha",
    ],
    authorities: [
      "Abu Dhabi City Municipality",
      "ADDC",
      "Department of Municipalities and Transport",
      "ADNOC site permitting",
    ],
    groundNote:
      "Much of Abu Dhabi Island and the coastal strip is sabkha with saline groundwater close to the surface, which is the hardest ground condition for radar and can pull working depth below 5 m. Inland at Khalifa City and Al Shamkha the ground is drier and reads considerably deeper.",
  },
  sharjah: {
    slug: "sharjah",
    name: "Sharjah",
    areas: [
      "Industrial Areas 1–18",
      "Al Nahda",
      "Al Majaz",
      "Al Qasimia",
      "Muwaileh",
      "University City",
      "Al Sajaa",
      "Al Layyah",
    ],
    authorities: ["Sharjah Municipality", "SEWA", "Etisalat"],
    groundNote:
      "Sharjah's industrial belt sits on dry sand and compacted fill, which is good radar ground — we routinely read to the top of the 5–10 m range in the Industrial Areas and Al Sajaa. Older parts of Al Qasimia and Al Layyah carry decades of unrecorded service runs, which is exactly where scanning earns its cost.",
  },
};

export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface LocationContent {
  /** ~60 char page title fragment, brand appended by the metadata template. */
  title: string;
  /** ~155 char meta description. */
  description: string;
  h1: string;
  /** Opening paragraph — must be specific to this service in this city. */
  intro: string;
  /** Why this work comes up here specifically. */
  localContext: { heading: string; body: string }[];
  faqs: LocationFAQ[];
}

/**
 * Which cities each service has a location page for, and the content for each.
 * Keys are the service slug (matching the parent route folder).
 */
export const locationContent: Record<
  string,
  Record<string, LocationContent>
> = {
  "gpr-scanning": {
    dubai: {
      title: "GPR Concrete Scanning in Dubai",
      description:
        "GPR concrete scanning across Dubai. Rebar, post-tension cables and conduits located to 1 m before you cut or drill. Same-day callout on most sites.",
      h1: "GPR Concrete Scanning in Dubai",
      intro:
        "Most of our Dubai scanning work is in towers. Fit-out contractors in Business Bay, Downtown and the Marina need to core through slabs that are almost always post-tensioned, and a single cut through a live tendon turns a routine penetration into a structural repair and an incident report. We scan the slab with the Proceq GP8000, mark the safe zones on the surface, and issue a report before anyone starts drilling.",
      localContext: [
        {
          heading: "Post-tension slabs are the default here, not the exception",
          body: "Dubai's high-rise stock is overwhelmingly post-tensioned, and tendon layouts rarely match the as-built drawings by the time a building is a few years into its life. Drawings get you an expectation; the scan gets you the actual position. On tower fit-outs we scan every penetration rather than sampling, because the cost of one strike exceeds the cost of scanning an entire floor.",
        },
        {
          heading: "Working around live buildings and mall trading hours",
          body: "A significant share of Dubai work is in occupied buildings — hotel refurbishments, retail fit-outs in trading malls, office strip-outs. GPR suits this because it is non-destructive and needs no exclusion zone, unlike X-ray, so we can scan with people working nearby and outside trading hours where the centre requires it.",
        },
        {
          heading: "Coverage and response",
          body: "We cover the whole emirate and can usually be on a Dubai site the same day or next morning. For contractors running multiple sites across Al Quoz, DIP and Jebel Ali we schedule scanning as a single visit sequence rather than separate mobilisations.",
        },
      ],
      faqs: [
        {
          question: "Can you scan a post-tensioned slab in an occupied Dubai tower?",
          answer:
            "Yes. GPR is non-destructive and emits low-power electromagnetic pulses, so no exclusion zone or radiation shielding is needed and adjacent areas can stay occupied while we scan. This is the main reason GPR has largely replaced X-ray for concrete scanning in Dubai's occupied buildings — X-ray requires clearing both sides of the slab, which is rarely practical in a working tower.",
        },
        {
          question: "How quickly can you get to a site in Dubai?",
          answer:
            "For most Dubai locations we can attend the same day or the following morning, subject to site access and permits. Fit-out work in malls and hotels often has to happen outside trading hours, and we schedule night and early-morning scanning where the building requires it.",
        },
        {
          question: "Do you provide a report we can submit to the consultant?",
          answer:
            "Yes. Every scan is issued as a PDF report with annotated slab layouts showing rebar, post-tension tendons, conduits and the safe drilling zones we have marked on site. For GP8000 scans we can also supply 3D rendered output. Consultants and main contractors in Dubai typically require this documentation before approving penetrations.",
        },
      ],
    },
    "abu-dhabi": {
      title: "GPR Concrete Scanning in Abu Dhabi",
      description:
        "GPR concrete scanning across Abu Dhabi. Rebar and post-tension detection to 1 m, with documentation suited to ADNOC and government project safety files.",
      h1: "GPR Concrete Scanning in Abu Dhabi",
      intro:
        "Abu Dhabi work runs to a different rhythm than Dubai. A larger share of it sits on government, oil and gas, and infrastructure projects where a permit to work has to be raised before anything is cut, and where the scan report becomes part of the project safety file rather than just a note to the site engineer. We scan with the Proceq GP8000 and issue documentation built for that scrutiny.",
      localContext: [
        {
          heading: "Permit-to-work culture changes the sequence",
          body: "On ADNOC sites and most Abu Dhabi government projects, no penetration happens without an approved permit, and the permit generally requires evidence that the slab has been surveyed. That means scanning has to be planned into the programme rather than called in the morning it is needed. We work to that sequence and provide the survey documentation the permit process asks for.",
        },
        {
          heading: "Industrial slabs in Mussafah and ICAD",
          body: "Mussafah and the ICAD zones carry heavy industrial floor slabs — machinery bases, equipment plinths, workshop floors thickened well beyond typical commercial construction. Scanning these means dealing with dense reinforcement mats and, frequently, historic modifications that appear on no drawing anyone still holds.",
        },
        {
          heading: "Coverage and response",
          body: "We cover Abu Dhabi Island, Mussafah, the ICAD zones, Khalifa City, Al Reem, Yas and Saadiyat. Response is usually next-day for the city and surrounding zones; where site induction and gate passes are required we factor that into the schedule rather than turning up and waiting.",
        },
      ],
      faqs: [
        {
          question: "Do you have experience on ADNOC and government sites in Abu Dhabi?",
          answer:
            "Yes — ADNOC Headquarters is among the projects we have delivered scanning on. We are familiar with the permit-to-work sequence, site induction requirements and the standard of documentation these projects expect, and we plan mobilisation around gate passes and inductions rather than treating them as an afterthought.",
        },
        {
          question: "Does Abu Dhabi's ground affect concrete scanning depth?",
          answer:
            "Not for concrete scanning. The GP8000 images the inside of a concrete element, so the surrounding ground is irrelevant and the 1 m working depth in concrete applies anywhere. Ground conditions matter for the separate GS8000 ground survey used before excavation, and there the sabkha and saline groundwater common on Abu Dhabi Island genuinely do reduce achievable depth.",
        },
        {
          question: "Can you scan thickened industrial floor slabs?",
          answer:
            "Yes. Heavy industrial slabs in Mussafah and ICAD often carry dense reinforcement and can be considerably thicker than commercial floors. The GP8000 reads to 1 m in concrete, which covers the great majority of industrial slabs. Where a slab is thicker than we can image fully, we say so and report what we can confirm rather than implying full coverage.",
        },
      ],
    },
    sharjah: {
      title: "GPR Concrete Scanning in Sharjah",
      description:
        "GPR concrete scanning across Sharjah. Rebar, conduits and post-tension cables located before coring — warehouse slabs, industrial floors and older buildings.",
      h1: "GPR Concrete Scanning in Sharjah",
      intro:
        "Sharjah scanning is mostly industrial and mostly older. Warehouse slabs in the Industrial Areas get cored for machinery bases, drainage and new service runs, and the buildings are frequently old enough that the drawings are long gone or were never accurate. Scanning is not a formality here — it is often the only record of what is in the slab.",
      localContext: [
        {
          heading: "Buildings older than their documentation",
          body: "Much of Sharjah's industrial stock has been through several occupiers, each adding conduits, drainage and power runs without updating anything. When we scan a slab in Industrial Area 6 or Al Qasimia we regularly find services that appear on no drawing the client holds. On this kind of building the scan is the as-built.",
        },
        {
          heading: "Machinery bases and equipment plinths",
          body: "A lot of Sharjah coring is for fixing machinery down — anchor bolts, plinths, drainage penetrations for wash bays and workshops. These are clustered, repetitive penetrations in a small area, which suits grid scanning: we map the whole zone once and mark every safe position, rather than scanning each hole separately.",
        },
        {
          heading: "Coverage and response",
          body: "We cover the Industrial Areas, Al Nahda, Al Majaz, Al Qasimia, Muwaileh, University City and Al Sajaa. Sharjah is a short run from our Dubai operations, so same-day and next-day attendance is normally straightforward.",
        },
      ],
      faqs: [
        {
          question: "The building is old and we have no drawings. Can you still scan it?",
          answer:
            "Yes, and that is the case where scanning is worth the most. GPR does not depend on drawings — it images what is physically present in the slab now, including the additions and modifications no drawing records. For older Sharjah industrial buildings, the scan output often becomes the only accurate record of the slab that anyone has.",
        },
        {
          question: "We need twenty holes in one workshop floor. Do you scan each one?",
          answer:
            "For clustered penetrations we grid scan the whole zone in one visit and mark every safe position, which is faster and cheaper than treating each hole as a separate scan. You get one report covering the area with all penetrations marked, rather than twenty individual ones.",
        },
        {
          question: "Do you cover the Sharjah Industrial Areas?",
          answer:
            "Yes, Industrial Areas 1 through 18 are among the areas we work in most often, along with Al Sajaa, Muwaileh and Al Qasimia. Sharjah is a short drive from our Dubai base, so same-day attendance is usually possible.",
        },
      ],
    },
  },

  "core-cutting": {
    dubai: {
      title: "Diamond Core Cutting in Dubai",
      description:
        "Diamond core cutting across Dubai, 12 mm to 500 mm. Every hole is GPR scanned first, so we never cut into rebar or post-tension cables. Same-day callout.",
      h1: "Diamond Core Cutting in Dubai",
      intro:
        "We core from 12 mm to 500 mm across Dubai, and we scan before every one of them. That order matters more here than almost anywhere, because Dubai slabs are post-tensioned by default and a cut tendon is not a patch-and-continue problem — it is a structural incident with a stop-work notice attached. Scanning and cutting are both ours, so nobody is waiting on a third party between the two.",
      localContext: [
        {
          heading: "Fit-out programmes that cannot absorb a strike",
          body: "Most Dubai coring sits inside fit-out programmes with fixed handover dates — MEP penetrations for a tower floor, drainage for a restaurant unit, riser openings for a hotel refurbishment. A strike does not just cost the repair; it costs the sequence behind it. Scanning first is cheap insurance against a delay that lands on the whole programme.",
        },
        {
          heading: "Occupied buildings and out-of-hours work",
          body: "Coring in trading malls, live hotels and occupied offices generally has to happen at night or during shutdown windows, with water management and noise control that keep the rest of the building usable. We plan the cut so slurry is contained and the area is handed back clean, because in an occupied building the mess is as much of a problem as the hole.",
        },
        {
          heading: "Coverage and response",
          body: "We cover the whole of Dubai, from Downtown and Business Bay through Al Quoz, DIP and Jebel Ali out to Dubai South. Same-day or next-morning attendance is normal, and for multi-site contractors we sequence several sites into one mobilisation.",
        },
      ],
      faqs: [
        {
          question: "What core diameters can you cut?",
          answer:
            "12 mm to 500 mm. The most common sizes on Dubai fit-out work are 50 mm, 75 mm, 100 mm, 150 mm and 200 mm for MEP penetrations and structural testing. Larger diameters up to 500 mm are typically riser openings and drainage penetrations.",
        },
        {
          question: "Is GPR scanning included in the core cutting price?",
          answer:
            "Scanning is part of how we work rather than an optional extra — we do not cut blind. On a quotation the scanning element is shown so you can see what it costs, but we will not proceed with coring on an unscanned slab regardless.",
        },
        {
          question: "Can you core at night in an occupied building?",
          answer:
            "Yes. Most of our coring in Dubai malls, hotels and occupied offices happens outside trading or business hours. We manage slurry and water containment so the area can be handed back clean and in use the following morning.",
        },
      ],
    },
    "abu-dhabi": {
      title: "Diamond Core Cutting in Abu Dhabi",
      description:
        "Diamond core cutting across Abu Dhabi, 12 mm to 500 mm. GPR scanned before every cut, with documentation suited to permit-to-work project requirements.",
      h1: "Diamond Core Cutting in Abu Dhabi",
      intro:
        "Coring in Abu Dhabi usually means paperwork before machinery. Government, oil and gas and infrastructure projects want an approved permit and evidence the slab has been surveyed before a core barrel touches concrete. We scan with the GP8000, issue the survey documentation the permit needs, then cut from 12 mm to 500 mm.",
      localContext: [
        {
          heading: "The permit comes before the core",
          body: "On most Abu Dhabi projects of any size, coring requires a permit to work, and the permit requires survey evidence. Turning up to cut without that sequence completed means turning up and waiting. We plan scanning far enough ahead of the cut that the permit can be raised and approved without holding up the programme.",
        },
        {
          heading: "Heavy industrial coring in Mussafah and ICAD",
          body: "Workshop and warehouse floors in Mussafah and the ICAD zones are built for machinery loads — thick, densely reinforced, and often modified over decades. Coring these means larger diameters, longer cuts and a genuine likelihood of encountering reinforcement that no drawing predicts, which is precisely why we scan the zone before committing to a position.",
        },
        {
          heading: "Coverage and response",
          body: "We cover Abu Dhabi Island, Mussafah, ICAD, Khalifa City, Al Reem, Yas and Saadiyat. Where gate passes and site inductions are needed we arrange them ahead of mobilisation rather than losing a day at the gate.",
        },
      ],
      faqs: [
        {
          question: "Can you supply the survey documentation our permit to work requires?",
          answer:
            "Yes. Every scan is issued as a PDF report with annotated layouts showing reinforcement, post-tension tendons, conduits and the marked safe cutting positions. This is the documentation most Abu Dhabi permit-to-work processes ask for as evidence the element has been surveyed before penetration.",
        },
        {
          question: "How far in advance should we book coring in Abu Dhabi?",
          answer:
            "If the site requires a permit to work, book the scan far enough ahead that the permit can be raised and approved on the survey results — usually a few days. Where no permit is needed we can generally attend next-day. The constraint is almost always the approval process, not our availability.",
        },
        {
          question: "Do you cut thickened industrial slabs in Mussafah?",
          answer:
            "Yes. Industrial floor slabs in Mussafah and ICAD are frequently much thicker and more heavily reinforced than commercial floors, and we core them regularly. We scan first to locate the reinforcement mat and choose a position that avoids cutting through it wherever the design allows.",
        },
      ],
    },
    sharjah: {
      title: "Diamond Core Cutting in Sharjah",
      description:
        "Diamond core cutting across Sharjah, 12 mm to 500 mm. Warehouse slabs, machinery bases and workshop floors, GPR scanned before every cut.",
      h1: "Diamond Core Cutting in Sharjah",
      intro:
        "Sharjah coring is industrial work — machinery bases in the Industrial Areas, drainage for wash bays and workshops, service penetrations through warehouse slabs. The buildings are often old, the drawings are often missing, and the slabs frequently contain service runs added by previous occupiers. We scan first, then cut from 12 mm to 500 mm.",
      localContext: [
        {
          heading: "Clustered penetrations, one grid scan",
          body: "Fixing machinery down usually means a pattern of anchor holes rather than a single core, and drainage for a workshop means several penetrations in a confined area. We grid scan the zone once, mark every viable position, then cut them in sequence — faster and cheaper than treating each hole as a separate job.",
        },
        {
          heading: "Undocumented services in older industrial stock",
          body: "Warehouses in Industrial Areas 1 to 18 have typically served several occupiers, each adding power, drainage and compressed air without recording it. Cutting a slab like this on the assumption that the drawings are complete is how a workshop loses its power supply for a week. The scan is what makes the cut predictable.",
        },
        {
          heading: "Coverage and response",
          body: "We cover Industrial Areas 1 to 18, Al Sajaa, Muwaileh, Al Nahda, Al Majaz, Al Qasimia and University City. Sharjah is close to our Dubai operations, so same-day and next-day attendance is routine.",
        },
      ],
      faqs: [
        {
          question: "Can you core a warehouse floor for machinery anchor bolts?",
          answer:
            "Yes, this is a large part of our Sharjah work. Anchor patterns are normally a cluster of small-diameter holes, which we grid scan as a single zone and then cut in sequence. If the scan shows reinforcement or a service running through a planned position, we flag it before cutting so the fixing pattern can be shifted rather than the slab damaged.",
        },
        {
          question: "What if you find a service exactly where we need the hole?",
          answer:
            "We stop and tell you before cutting. In most cases the position can be shifted by a small amount to clear the obstruction, and we mark the nearest safe alternative on the slab. Where the position genuinely cannot move, that becomes a design conversation with your engineer rather than something we cut through and report afterwards.",
        },
        {
          question: "Do you handle the water and slurry from coring?",
          answer:
            "Yes. Wet coring produces slurry, and in an operating warehouse or workshop that matters. We contain and extract the water so the surrounding floor stays usable and hand the area back clean.",
        },
      ],
    },
  },

  "gs8000-scanning": {
    dubai: {
      title: "Underground Utility Scanning in Dubai",
      description:
        "Underground utility scanning across Dubai before excavation. The Proceq GS8000 maps cables, pipes and ducts to 5–10 m, marked on site and reported.",
      h1: "Underground Utility Scanning in Dubai",
      intro:
        "Before you excavate anywhere in Dubai, you need to know what is under the ground — and a DEWA cable strike is a very expensive way to find out. We survey the dig area with the Proceq GS8000, mark the buried services on the surface, and issue a survey report so the excavation crew works from a map instead of a guess.",
      localContext: [
        {
          heading: "Dense service corridors in the developed areas",
          body: "Downtown, Business Bay and the Marina sit above congested service corridors — DEWA power and district cooling, du and Etisalat telecoms, sewer and irrigation, all layered into a narrow band of ground. Utility drawings from separate authorities rarely align with each other or with reality. A single survey that shows what is actually there resolves the contradictions before a machine arrives.",
        },
        {
          heading: "Reclaimed and coastal ground limits depth",
          body: "Ground conditions govern how deep radar reads, and Dubai spans the full range. Inland sand in Al Quoz and DIP reads well, sometimes to the full 10 m. Reclaimed and coastal ground around the Marina and Palm carries saline moisture that attenuates the signal quickly, and there we will tell you on site what the ground actually allows rather than quoting a best case.",
        },
        {
          heading: "Coverage and response",
          body: "We survey across the whole emirate and can usually attend the same day or next morning. For larger sites we grid the area and issue marked-up drawings alongside the on-surface marking.",
        },
      ],
      faqs: [
        {
          question: "How deep can you scan under a Dubai site?",
          answer:
            "Typically 5–10 m, and the ground decides which end of that range you get. Dry inland sand in Al Quoz or Dubai Investments Park can read to the full 10 m. Reclaimed coastal ground with saline moisture can pull it below 5 m. We assess conditions on site and tell you the realistic depth for your ground rather than quoting a best-case figure.",
        },
        {
          question: "Is this the same as the concrete scanning service?",
          answer:
            "No — different instrument, different job. The GS8000 images the ground to find buried utilities before excavation. The GP8000 images the inside of concrete to find rebar and post-tension cables before cutting. We operate both, so the right radar goes to the right job instead of one machine being stretched across both.",
        },
        {
          question: "What do we actually receive at the end of the survey?",
          answer:
            "Buried services are marked directly on the ground surface where the excavation crew will see them, and you receive a survey report with the findings. For larger sites we grid the area and provide marked-up drawings, and data can be supplied in CAD or GIS formats where your project team works that way.",
        },
      ],
    },
    "abu-dhabi": {
      title: "Underground Utility Scanning in Abu Dhabi",
      description:
        "Pre-excavation utility surveys across Abu Dhabi. The Proceq GS8000 maps buried services before you dig, with documentation for project safety files.",
      h1: "Underground Utility Scanning in Abu Dhabi",
      intro:
        "Pre-excavation surveys are routine on Abu Dhabi government, oil and gas and civil projects, and for good reason — on an operating ADNOC site a utility strike is a safety event before it is a commercial one. We survey the dig area with the Proceq GS8000, mark what is buried, and issue documentation that supports the project safety file.",
      localContext: [
        {
          heading: "Sabkha and saline groundwater are the real constraint",
          body: "Abu Dhabi Island and the coastal strip sit largely on sabkha, with saline groundwater close to the surface. This is the most difficult ground condition for radar, and it can pull achievable depth below 5 m. We would rather tell you that at the survey stage than have you discover it when the excavation goes deeper than our data. Inland at Khalifa City and Al Shamkha the ground is drier and reads considerably deeper.",
        },
        {
          heading: "Surveys that have to stand up in a safety file",
          body: "On government and oil and gas projects the survey is not just guidance to the excavation crew — it becomes part of the documentation trail for the permit and the safety case. We report what the data actually supports, including the depth limit the ground imposed, rather than issuing a clean-looking survey that overstates its own confidence.",
        },
        {
          heading: "Coverage and response",
          body: "We survey Abu Dhabi Island, Mussafah, the ICAD zones, Khalifa City, Al Reem, Yas, Saadiyat and Al Shamkha. Where site induction and gate passes are required we arrange them before mobilising.",
        },
      ],
      faqs: [
        {
          question: "Will sabkha ground stop you finding our utilities?",
          answer:
            "It reduces depth rather than stopping the survey. Saline groundwater attenuates radar quickly, so on sabkha-dominated sites on Abu Dhabi Island achievable depth can fall below 5 m. We assess this on site and tell you what depth we can actually confirm. If your excavation goes deeper than the ground lets us read, you will know that before you dig, not after.",
        },
        {
          question: "Can the survey support our permit and safety documentation?",
          answer:
            "Yes. We issue a survey report with the located services, the area surveyed and the depth confidence achieved. On ADNOC and government projects this typically forms part of the excavation permit evidence and the project safety file, so we write it to be read by someone assessing risk rather than as a marketing document.",
        },
        {
          question: "Do you work inside operating industrial facilities?",
          answer:
            "Yes. Surveys inside operating plants in Mussafah, ICAD and on ADNOC sites are a regular part of our work. GPR is non-destructive and needs no exclusion zone, so surveying can proceed alongside normal operations subject to the site's own permit and induction requirements.",
        },
      ],
    },
  },
};

/** Every service/city pair that has a page, for the sitemap and link blocks. */
export const locationRoutes: { service: string; city: string }[] =
  Object.entries(locationContent).flatMap(([service, byCity]) =>
    Object.keys(byCity).map((city) => ({ service, city }))
  );

/** Service slug -> human label, used in breadcrumbs and cross-links. */
export const serviceLabels: Record<string, string> = {
  "gpr-scanning": "GPR Concrete Scanning",
  "core-cutting": "Diamond Core Cutting",
  "gs8000-scanning": "Underground Utility Scanning",
};
