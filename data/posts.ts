/**
 * Blog articles.
 *
 * Content is stored as typed blocks rather than raw HTML so it stays safe to
 * render and consistent with the rest of the data layer. Each article targets a
 * question a UAE contractor or consultant actually searches for before hiring.
 */

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export interface PostFAQ {
  question: string;
  answer: string;
}

export interface Post {
  slug: string;
  /** ~60 char title fragment; the brand suffix is appended by the template. */
  title: string;
  /** Full H1, may be longer than the meta title. */
  heading: string;
  /** ~155 char meta description. */
  description: string;
  /** One-line summary for the index page. */
  excerpt: string;
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  category: string;
  /**
   * Article hero image, site-root-relative (e.g. "/images/gpr-slab-scan.jpg").
   * Feeds Article.image in the JSON-LD, which Google requires for Article rich
   * results. Falls back to the shared OG image when unset — replace that
   * fallback with a real per-post image (1200px wide minimum) to qualify.
   */
  image?: string;
  blocks: PostBlock[];
  faqs?: PostFAQ[];
  /** Internal links surfaced at the end of the article. */
  related?: { label: string; href: string }[];
}

export const posts: Post[] = [
  {
    slug: "cutting-through-post-tension-cable",
    title: "What Happens If You Cut a Post-Tension Cable",
    heading: "What happens if you cut a post-tension cable",
    description:
      "Cutting a post-tension tendon is a structural incident, not a repair job. What actually happens, what it costs, and how scanning prevents it.",
    excerpt:
      "A cut tendon releases stored energy instantly and permanently weakens the slab. Here is what actually happens, and why it is not something you patch and move on from.",
    datePublished: "2026-08-10",
    dateModified: "2026-08-10",
    readingMinutes: 6,
    category: "Concrete scanning",
    blocks: [
      {
        type: "p",
        text: "Most of the concrete in Dubai's high-rise stock is post-tensioned. Steel tendons are run through the slab in ducts, tensioned to enormous force once the concrete cures, and anchored at the edges. That tension is what allows the slab to span further and sit thinner than reinforced concrete would allow. It is also what makes an accidental cut so serious.",
      },
      {
        type: "p",
        text: "Contractors sometimes treat a strike as a bad day that ends with a patch. It does not. Understanding why changes how seriously the scan before the cut gets taken.",
      },
      { type: "h2", text: "The immediate moment" },
      {
        type: "p",
        text: "A post-tension tendon holds stored elastic energy along its whole length. When a core barrel severs it, that energy releases at once. The tendon whips inside its duct and the anchorage at the slab edge can fail violently, sometimes ejecting the anchor head and the concrete around it. People have been seriously injured by this, and the danger is not confined to the person holding the drill — the anchor may be many metres away at the edge of the building.",
      },
      {
        type: "p",
        text: "There is usually a loud report, and often visible damage at the anchorage rather than at the cut. On an occupied floor that alone triggers an evacuation and an incident investigation.",
      },
      { type: "h2", text: "What it does to the structure" },
      {
        type: "p",
        text: "The slab was designed on the assumption that every tendon is carrying its share of the load. Remove one and the load redistributes to the tendons either side, which were not designed for it. A single severed tendon in a lightly loaded area may be tolerable once an engineer has assessed it. Several, or one in a critical location, may not be.",
      },
      {
        type: "p",
        text: "The consequence is that the decision leaves your hands entirely. The slab has to be assessed by a structural engineer, and the outcome is theirs to determine. Options range from accepting the loss, to installing external post-tensioning or carbon fibre strengthening, to structural propping while a permanent solution is designed.",
      },
      {
        type: "callout",
        text: "A cut tendon cannot be repaired by filling the hole. The tension is gone from the entire length of that tendon, not just at the point of damage.",
      },
      { type: "h2", text: "What it actually costs" },
      {
        type: "p",
        text: "The core hole is the cheapest part. The real cost sits in everything the strike sets in motion:",
      },
      {
        type: "ul",
        items: [
          "Immediate stop-work on the affected area, often the whole floor",
          "A structural engineer's assessment, which has to be commissioned and waited for",
          "Remedial design and works — external PT, carbon fibre wrap or a structural repair",
          "Programme delay for every trade sequenced behind that penetration",
          "An incident report, and on many projects a formal investigation",
          "Damage to your standing with the main contractor and the consultant",
        ],
      },
      {
        type: "p",
        text: "On a live fit-out with a fixed handover date, the delay routinely costs more than the physical repair. That is the calculation worth keeping in mind when scanning looks like an expense to trim.",
      },
      { type: "h2", text: "Why drawings are not enough" },
      {
        type: "p",
        text: "The obvious objection is that the tendon layout is on the drawings. Sometimes it is, and sometimes the drawings are accurate. But tendons are laid by hand into a profile that curves through the slab depth, and the as-built position routinely deviates from the design. Ducts get shifted to clear penetrations, service routes and reinforcement congestion during the pour.",
      },
      {
        type: "p",
        text: "Then the building ages. Fit-outs come and go, penetrations get made, drawings get superseded, and the set that reaches you on site is often not the set that reflects the slab. In an older building the drawings may not exist at all.",
      },
      {
        type: "p",
        text: "A drawing gives you an expectation. A scan gives you the position. On a post-tensioned slab, the difference between those two is the whole risk.",
      },
      { type: "h2", text: "What scanning actually involves" },
      {
        type: "p",
        text: "Ground penetrating radar images the inside of the slab non-destructively. We use the Proceq GP8000, which reads up to 1 m into concrete and produces real-time 3D visualisation of what is embedded — reinforcement, post-tension ducts, conduits and voids.",
      },
      {
        type: "p",
        text: "In practice, scanning a penetration takes minutes, not hours. We scan the area around the proposed position, mark the tendons and reinforcement directly on the slab surface, and mark the safe zone where the core can go. If the intended position cannot be cleared, we say so before anything is cut and mark the nearest workable alternative, which is usually only a short distance away.",
      },
      {
        type: "p",
        text: "Unlike X-ray, GPR needs no exclusion zone and no access to both faces of the slab, so it can be done in an occupied building with people working nearby. That is why it has largely displaced X-ray for this work in the UAE.",
      },
      { type: "h2", text: "The rule worth adopting" },
      {
        type: "p",
        text: "Scan every penetration in a post-tensioned slab. Not a sample, not the ones that look risky. The tendon you did not scan for is the one that costs you the programme, and the marginal cost of scanning the next hole once the operator is already on the floor is small.",
      },
    ],
    faqs: [
      {
        question: "Can a cut post-tension cable be repaired?",
        answer:
          "Not by filling the hole. Severing a tendon releases the tension along its entire length, so the tendon is permanently out of service. Remediation is a structural engineering exercise — typically external post-tensioning, carbon fibre strengthening, or a designed structural repair — and the slab must be assessed by an engineer before the area returns to normal use.",
      },
      {
        question: "How do I know if a slab is post-tensioned?",
        answer:
          "Most high-rise floor slabs built in Dubai and the wider UAE in recent decades are post-tensioned, and anchor heads are sometimes visible at slab edges. But you should not rely on visual assessment. A GPR scan confirms whether tendons are present and where they run, which is the only reliable answer before you cut.",
      },
      {
        question: "Is GPR scanning safe to use in an occupied building?",
        answer:
          "Yes. GPR uses low-power electromagnetic pulses, poses no radiation risk, and requires no exclusion zone or shielding. Adjacent areas can remain occupied and in use while scanning takes place, which is the main practical advantage over X-ray for concrete scanning in live buildings.",
      },
    ],
    related: [
      { label: "GPR Concrete Scanning", href: "/services/gpr-scanning" },
      { label: "GPR Scanning in Dubai", href: "/services/gpr-scanning/dubai" },
      { label: "Diamond Core Cutting", href: "/services/core-cutting" },
    ],
  },

  {
    slug: "gpr-scanning-vs-x-ray-concrete",
    title: "GPR Scanning vs X-Ray for Concrete",
    heading: "GPR scanning vs X-ray: which one for concrete?",
    description:
      "GPR and X-ray both image inside concrete, but they suit different jobs. A practical comparison of access, safety, speed and what each can actually resolve.",
    excerpt:
      "Both image the inside of concrete, but only one needs you to clear the floor above and below. Where each method genuinely wins.",
    datePublished: "2026-08-10",
    dateModified: "2026-08-10",
    readingMinutes: 5,
    category: "Concrete scanning",
    blocks: [
      {
        type: "p",
        text: "Two methods dominate concrete imaging: ground penetrating radar and radiography, usually called X-ray. Both will tell you what is inside a slab. They differ enormously in what they demand from the site, and on most UAE projects that difference decides the choice long before image quality does.",
      },
      { type: "h2", text: "How each one works" },
      {
        type: "p",
        text: "GPR sends short electromagnetic pulses into the concrete from an antenna moved across the surface and reads the reflections that come back from anything with different electrical properties — steel, air, plastic conduit. It works entirely from one face.",
      },
      {
        type: "p",
        text: "X-ray passes radiation through the element to a film or digital plate on the far side, producing a shadow image. It needs access to both faces of the slab, and it needs a radiation exclusion zone around the work.",
      },
      { type: "h2", text: "Access is usually the deciding factor" },
      {
        type: "p",
        text: "X-ray requires you to get to both sides. For a suspended slab that means access to the floor below, and it must be cleared of people. For a ground-bearing slab, a shear wall against earth, or a raft foundation, there is no far side to reach — X-ray is simply not an option.",
      },
      {
        type: "p",
        text: "GPR works from whichever face you can reach. On the majority of UAE concrete scanning work — floor slabs in occupied towers, warehouse floors, walls, columns — that is the whole argument.",
      },
      { type: "h2", text: "Safety and disruption" },
      {
        type: "p",
        text: "Radiography means ionising radiation, which means a controlled exclusion zone, a licensed operator, and clearing everyone out of a defined area on both floors. In a live hotel or a trading mall that usually pushes the work into a night shift and adds a permit process.",
      },
      {
        type: "p",
        text: "GPR emits low-power electromagnetic pulses at levels comparable to everyday wireless equipment. No exclusion zone, no shielding, no clearing the floor. Work continues around the operator. On an occupied building this is often the difference between scanning today and scanning next weekend.",
      },
      { type: "h2", text: "Speed and what you get back" },
      {
        type: "p",
        text: "GPR gives results in real time. The operator sees reflections as the antenna moves and can mark findings directly on the concrete immediately. A single penetration can be cleared in minutes; the marks are on the slab before the scan is finished.",
      },
      {
        type: "p",
        text: "X-ray requires exposure and then processing. Even digital systems introduce a wait, and if the exposure was wrong you repeat it. On a job needing many penetrations cleared quickly, GPR is substantially faster in practice.",
      },
      { type: "h2", text: "Where X-ray is genuinely better" },
      {
        type: "p",
        text: "It would be dishonest to present GPR as strictly superior. Radiography produces a clearer picture of very congested reinforcement, and it is better at distinguishing objects that sit close together or directly above one another. GPR can struggle to separate a conduit sitting immediately beneath a dense reinforcement mat, because the upper layer dominates the reflection.",
      },
      {
        type: "callout",
        text: "If you need to resolve fine detail in heavily congested concrete, and you can access both faces and clear the area, X-ray will give you the better image.",
      },
      { type: "h2", text: "Practical summary" },
      {
        type: "ul",
        items: [
          "One face accessible only — GPR, X-ray is not possible",
          "Occupied or trading building — GPR, no exclusion zone required",
          "Many penetrations to clear quickly — GPR, real-time marking",
          "Ground-bearing slab, raft or retaining wall — GPR",
          "Extremely congested reinforcement, both faces accessible — X-ray gives a clearer image",
          "Depth beyond about 1 m in concrete — neither is reliable; discuss the element with an engineer",
        ],
      },
      {
        type: "p",
        text: "For the great majority of UAE concrete scanning — locating rebar, post-tension tendons and conduits before coring or drilling — GPR is the appropriate method, which is why it has become the default across the region. We operate the Proceq GP8000, reading up to 1 m into concrete with real-time 3D visualisation.",
      },
    ],
    faqs: [
      {
        question: "Is GPR as accurate as X-ray for concrete scanning?",
        answer:
          "For locating rebar, post-tension tendons and conduits before cutting, GPR is accurate enough that it is the standard method across the UAE, typically resolving positions to around ±10 mm. X-ray produces a clearer image in very congested reinforcement where objects sit close together or stacked, but it requires access to both faces and a radiation exclusion zone, which rules it out on most jobs.",
      },
      {
        question: "Does GPR scanning require the area to be cleared?",
        answer:
          "No. GPR emits low-power electromagnetic pulses with no radiation risk, so no exclusion zone or shielding is needed and people can continue working nearby. This is the principal practical reason GPR has displaced X-ray for concrete scanning in occupied buildings.",
      },
      {
        question: "Can GPR scan a slab if I can only reach one side?",
        answer:
          "Yes, and this is GPR's main structural advantage. It operates entirely from the accessible face. X-ray needs the source on one side and the detector on the other, so on ground-bearing slabs, rafts and retaining walls it cannot be used at all.",
      },
    ],
    related: [
      { label: "GPR Concrete Scanning", href: "/services/gpr-scanning" },
      { label: "Diamond Core Cutting", href: "/services/core-cutting" },
      {
        label: "What happens if you cut a post-tension cable",
        href: "/blog/cutting-through-post-tension-cable",
      },
    ],
  },

  {
    slug: "gpr-scanning-cost-dubai",
    title: "What Drives GPR Scanning Cost in Dubai",
    heading: "What actually drives the cost of a GPR scan in Dubai",
    description:
      "Why GPR scanning quotes vary so widely in Dubai, the factors that genuinely move the price, and how to get a quote that will not change on site.",
    excerpt:
      "Scanning quotes vary more than they should because the scope is often undefined. Here is what genuinely moves the number.",
    datePublished: "2026-08-10",
    dateModified: "2026-08-10",
    readingMinutes: 5,
    category: "Working with us",
    blocks: [
      {
        type: "p",
        text: "Ask three companies to price a concrete scan in Dubai and the numbers can differ by a factor of several. That usually is not because one is overcharging — it is because the three of them have priced three different jobs. Scanning scope is easy to describe loosely and expensive to get wrong.",
      },
      {
        type: "p",
        text: "Here is what genuinely moves the price, so you can define the scope well enough to compare quotes properly.",
      },
      { type: "h2", text: "Area, not the number of holes" },
      {
        type: "p",
        text: "The intuitive assumption is that ten penetrations cost twice five. In practice the driver is the area scanned, not the hole count. Clearing a single position still means scanning a zone around it, so one isolated core in a large floor plate can cost more than twenty holes clustered in one bay.",
      },
      {
        type: "p",
        text: "If your penetrations are grouped, say so when you ask for a price. Grid scanning a defined zone once and marking every position within it is considerably cheaper than treating each hole as its own visit.",
      },
      { type: "h2", text: "Mobilisation and access" },
      {
        type: "p",
        text: "Getting to the slab is a real cost. A ground-floor warehouse in Al Quoz with a roller door and a parking space is a different job from level 34 of a Business Bay tower where equipment goes up in a goods lift booked in advance. High-rise work, restricted access and long carry distances all add time before any scanning happens.",
      },
      {
        type: "p",
        text: "Multiple sites in one area can share a mobilisation. Contractors running work across Al Quoz, DIP and Jebel Ali often sequence several sites into one visit, which is cheaper than three separate callouts.",
      },
      { type: "h2", text: "When the work has to happen" },
      {
        type: "p",
        text: "A significant share of Dubai scanning is in occupied buildings — trading malls, live hotels, working offices — and has to happen outside operating hours. Night and early-morning work carries a premium, and where the building requires a permit or a security escort that adds time too.",
      },
      {
        type: "p",
        text: "If the work can be done in normal hours, it will be cheaper. Where it cannot, factoring that into the enquiry avoids a quote that changes once we learn the constraint.",
      },
      { type: "h2", text: "What you need at the end" },
      {
        type: "p",
        text: "Marking positions on the slab so the cutting crew can work is one level of output. A formal PDF report with annotated layouts, submitted to a consultant for approval, is another. 3D rendered data, or CAD and GIS deliverables for a project team, is another again.",
      },
      {
        type: "p",
        text: "None of these is unreasonable, but they are different amounts of work. Saying up front what the consultant or the permit process expects prevents a mismatch between what you were quoted for and what you actually need.",
      },
      { type: "h2", text: "Urgency" },
      {
        type: "p",
        text: "Same-day attendance is often possible and it is priced accordingly, because it means rescheduling other work. If your programme allows a day or two of notice, you will usually pay less. Where a permit to work is involved — common on Abu Dhabi and government projects — the approval process, not our availability, is normally the constraint anyway.",
      },
      { type: "h2", text: "How to get a quote that holds" },
      {
        type: "ul",
        items: [
          "The site address, and which floor",
          "Roughly how large an area needs scanning, and whether penetrations are clustered or spread out",
          "What the element is — suspended slab, ground-bearing slab, wall, column",
          "Whether the building is occupied, and whether work must be out of hours",
          "What documentation you need at the end",
          "Your date, and whether a permit to work applies",
        ],
      },
      {
        type: "callout",
        text: "A quote given without these details is a guess, and guesses get revised on site. Six lines in a WhatsApp message is usually enough for a number that holds.",
      },
      {
        type: "p",
        text: "One thing we will not do is quote a scan and then cut without it. Scanning before coring is not an upsell in our pricing — it is the sequence we work to, because the cost of a strike falls on the project long after the invoice is settled.",
      },
    ],
    faqs: [
      {
        question: "Is GPR scanning charged per hole or per area?",
        answer:
          "Primarily by area and time on site rather than by hole count. Clearing one position still requires scanning a zone around it, so clustered penetrations are far cheaper per hole than scattered ones. If your penetrations are grouped in a defined area, mention it when requesting a quote — grid scanning the zone once is the cheapest way to clear many positions.",
      },
      {
        question: "Do you charge extra for out-of-hours scanning in Dubai?",
        answer:
          "Night and early-morning work in occupied buildings carries a premium, because it means working outside normal hours and often arranging building permits or security escorts. Much of our Dubai mall and hotel work happens this way, so it is priced normally rather than treated as an exception — but if the work can be done in standard hours it will cost less.",
      },
      {
        question: "What information do you need to give me an accurate quote?",
        answer:
          "The site address and floor, roughly how much area needs scanning, whether penetrations are clustered or spread out, what the element is, whether the building is occupied or the work must be out of hours, what documentation you need, and your target date. With that we can give a number that will not change when we arrive.",
      },
    ],
    related: [
      { label: "GPR Concrete Scanning", href: "/services/gpr-scanning" },
      { label: "GPR Scanning in Dubai", href: "/services/gpr-scanning/dubai" },
      { label: "Contact us for a quote", href: "/contact" },
    ],
  },

  {
    slug: "utility-survey-before-excavation-uae",
    title: "Utility Surveys Before Excavation in the UAE",
    heading: "Before you dig: utility surveys on UAE sites",
    description:
      "Why utility drawings are not enough before excavation in the UAE, what a GPR ground survey actually finds, and how soil conditions limit how deep it reads.",
    excerpt:
      "Utility records from separate authorities rarely agree with each other, let alone with the ground. What a survey adds, and what it honestly cannot do.",
    datePublished: "2026-08-10",
    dateModified: "2026-08-10",
    readingMinutes: 6,
    category: "Ground scanning",
    blocks: [
      {
        type: "p",
        text: "Every excavation in the UAE starts with the same question: what is under here? The usual answer is a set of utility drawings obtained from the relevant authorities. That is a starting point, but treating it as a complete answer is how sites hit cables.",
      },
      { type: "h2", text: "Why the drawings are not enough" },
      {
        type: "p",
        text: "Underground services in a developed area belong to several different owners. In Dubai that means DEWA for power and water, du and Etisalat for telecoms, the municipality for sewer and irrigation, and district cooling providers on top. Each maintains its own records, in its own format, to its own standard of accuracy.",
      },
      {
        type: "p",
        text: "Those records are drawn from what was designed or what was recorded at the time of installation, which is not always what was built. Services get diverted around obstructions during construction. Abandoned runs stay in the ground and stay on the drawing. Depths are frequently approximate, and ground levels change afterwards through regrading and resurfacing, so a service recorded at 1.2 m may now sit at 600 mm.",
      },
      {
        type: "p",
        text: "Overlay drawings from four authorities and they will not agree with each other. The survey is what resolves the contradictions against physical reality.",
      },
      { type: "h2", text: "What a GPR ground survey actually does" },
      {
        type: "p",
        text: "We survey the dig area with the Proceq GS8000, pushing a survey cart over the ground in a grid pattern and reading reflections from buried objects. The result is a map of what is physically beneath the site — power cables, water and sewer lines, telecom ducts, gas pipes, tanks and voids.",
      },
      {
        type: "p",
        text: "Findings are marked directly on the ground surface where the excavation crew will actually see them, and issued as a survey report. For larger sites we provide marked-up drawings, and data can be delivered in CAD or GIS formats where the project team works that way.",
      },
      {
        type: "p",
        text: "The important distinction is that GPR finds objects, not records. It will locate an abandoned duct nobody documented and a service that was diverted during construction, because it responds to what is there rather than what was written down.",
      },
      { type: "h2", text: "Depth: what the ground allows" },
      {
        type: "p",
        text: "Working depth is typically 3 to 5 metres, and the soil decides which end of that range you get. This is the part of ground scanning most often oversold, so it is worth being precise about.",
      },
      {
        type: "ul",
        items: [
          "Dry sand — the best case. Inland sites in Al Quoz, Dubai Investments Park and the Sharjah Industrial Areas can read past 5 m.",
          "Compacted fill — generally good, depending on what the fill contains.",
          "Wet or clay-heavy ground — signal attenuates faster and depth drops.",
          "Sabkha with saline groundwater — the hardest condition for radar. On Abu Dhabi Island and coastal strips this can pull achievable depth below 3 m.",
        ],
      },
      {
        type: "callout",
        text: "Depth in ground is decided by the soil, not by marketing. If your excavation goes deeper than the ground lets us read, you should know that before you dig rather than after.",
      },
      {
        type: "p",
        text: "This is why we quote 3–5 m as a realistic working range and assess the actual conditions on site. A survey that reports clean results to 5 m in saline sabkha is not a better survey — it is a less honest one.",
      },
      { type: "h2", text: "What a strike actually costs" },
      {
        type: "p",
        text: "The repair bill for a severed cable is rarely the largest number. Hitting a live power cable is first a safety event, with genuine risk of serious injury to the operator. After that come the consequences:",
      },
      {
        type: "ul",
        items: [
          "Loss of supply to everything downstream, which may include buildings well beyond your site",
          "Emergency attendance and reinstatement charged by the utility owner",
          "Stop-work while the incident is investigated",
          "Programme delay across every trade behind the excavation",
          "Potential liability for third-party losses caused by the outage",
        ],
      },
      {
        type: "p",
        text: "Against that, a pre-excavation survey is a small, predictable cost incurred before anything can go wrong.",
      },
      { type: "h2", text: "Two different instruments" },
      {
        type: "p",
        text: "Ground scanning and concrete scanning get conflated constantly, and they are separate jobs. The GS8000 images the ground to find buried utilities before excavation, reaching 3–5 m depending on soil. The GP8000 images the inside of concrete to find rebar and post-tension cables before cutting, reaching up to 1 m in concrete.",
      },
      {
        type: "p",
        text: "They are different machines built for different tasks. We operate both, which means the right radar goes to the right job rather than one instrument being stretched across both and doing neither well.",
      },
      { type: "h2", text: "A workable sequence" },
      {
        type: "p",
        text: "Obtain the utility records from the authorities, then survey the dig area and reconcile the two. Mark the findings on the ground, agree the excavation limits and identify anything that must be hand-dug. Then excavate to that map, treating the survey as live guidance rather than a document filed at the start.",
      },
      {
        type: "p",
        text: "Because we run both the scanning and the excavation, there is no gap in responsibility between the survey and the dig — the crew excavating is working to a map produced by the same company that will answer for it.",
      },
    ],
    faqs: [
      {
        question: "How deep can GPR detect buried utilities in the UAE?",
        answer:
          "Typically 3 to 5 metres, decided by soil conditions rather than the equipment. Dry inland sand can read past 5 m. Wet ground and heavy clay reduce it. Sabkha with saline groundwater, common on Abu Dhabi Island and coastal strips, is the hardest condition and can pull achievable depth below 3 m. We assess the site and report the depth we can actually confirm.",
      },
      {
        question: "Do I still need a survey if I have utility drawings from DEWA?",
        answer:
          "Yes. Authority records show what was designed or recorded at installation, which is not always what was built, and they omit abandoned services and later diversions entirely. Depths also shift as ground levels change through regrading and resurfacing. In a developed area you will typically hold records from several separate owners that do not agree with each other. The survey reconciles them against what is physically in the ground.",
      },
      {
        question: "Is ground scanning the same as concrete scanning?",
        answer:
          "No — different instruments for different jobs. The Proceq GS8000 images the ground to locate buried utilities before excavation, working to 3–5 m depending on soil. The Proceq GP8000 images the inside of concrete to locate rebar and post-tension cables before cutting or drilling, working to 1 m in concrete. We operate both.",
      },
    ],
    related: [
      {
        label: "Underground Utility Scanning",
        href: "/services/gs8000-scanning",
      },
      { label: "Excavation Services", href: "/services/excavation" },
      {
        label: "Utility scanning in Dubai",
        href: "/services/gs8000-scanning/dubai",
      },
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
