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
        text: "Working depth is typically 5 to 10 metres, and the soil decides which end of that range you get. This is the part of ground scanning most often oversold, so it is worth being precise about.",
      },
      {
        type: "ul",
        items: [
          "Dry sand — the best case. Inland sites in Al Quoz, Dubai Investments Park and the Sharjah Industrial Areas can read to the full 10 m.",
          "Compacted fill — generally good, depending on what the fill contains.",
          "Wet or clay-heavy ground — signal attenuates faster and depth drops.",
          "Sabkha with saline groundwater — the hardest condition for radar. On Abu Dhabi Island and coastal strips this can pull achievable depth below 5 m.",
        ],
      },
      {
        type: "callout",
        text: "Depth in ground is decided by the soil, not by marketing. If your excavation goes deeper than the ground lets us read, you should know that before you dig rather than after.",
      },
      {
        type: "p",
        text: "This is why we quote 5–10 m as a realistic working range and assess the actual conditions on site. A survey that reports clean results to 10 m in saline sabkha is not a better survey — it is a less honest one.",
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
        text: "Ground scanning and concrete scanning get conflated constantly, and they are separate jobs. The GS8000 images the ground to find buried utilities before excavation, reaching 5–10 m depending on soil. The GP8000 images the inside of concrete to find rebar and post-tension cables before cutting, reaching up to 1 m in concrete.",
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
          "Typically 5 to 10 metres, decided by soil conditions rather than the equipment. Dry inland sand can read to the full 10 m. Wet ground and heavy clay reduce it. Sabkha with saline groundwater, common on Abu Dhabi Island and coastal strips, is the hardest condition and can pull achievable depth below 5 m. We assess the site and report the depth we can actually confirm.",
      },
      {
        question: "Do I still need a survey if I have utility drawings from DEWA?",
        answer:
          "Yes. Authority records show what was designed or recorded at installation, which is not always what was built, and they omit abandoned services and later diversions entirely. Depths also shift as ground levels change through regrading and resurfacing. In a developed area you will typically hold records from several separate owners that do not agree with each other. The survey reconciles them against what is physically in the ground.",
      },
      {
        question: "Is ground scanning the same as concrete scanning?",
        answer:
          "No — different instruments for different jobs. The Proceq GS8000 images the ground to locate buried utilities before excavation, working to 5–10 m depending on soil. The Proceq GP8000 images the inside of concrete to locate rebar and post-tension cables before cutting or drilling, working to 1 m in concrete. We operate both.",
      },
    ],
    related: [
      {
        label: "Underground Utility Scanning",
        href: "/services/gpr-ground-scanning",
      },
      { label: "Excavation Services", href: "/services/excavation" },
      {
        label: "Utility scanning in Dubai",
        href: "/services/gpr-ground-scanning/dubai",
      },
    ],
  },
  {
    slug: "utility-strike-cost-uae",
    title: "What a Utility Strike Actually Costs in the UAE",
    heading: "What it costs when an excavator hits a live cable",
    description:
      "The real cost of a utility strike on a UAE site: emergency repair, third-party liability, programme delay and the injury risk. Why a survey is the cheap option.",
    excerpt:
      "Contractors weigh a survey against its invoice. The honest comparison is against the repair bill, the outage claim, the standstill and the incident report.",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    readingMinutes: 6,
    category: "Ground scanning",
    blocks: [
      {
        type: "p",
        text: "Every contractor who has ever queried the price of a utility survey has made the same comparison: the survey costs money, and digging without one costs nothing. That comparison is wrong, and the reason it is wrong is that the cost of a strike does not arrive as a single invoice. It arrives in four separate places, and only one of them is the repair.",
      },
      { type: "h2", text: "The repair is the smallest part" },
      {
        type: "p",
        text: "When a machine pulls through a live 11 kV feeder, the physical repair is a jointing crew, a length of cable and a few hours. That is the bill people imagine. It is real, and on a distribution cable it is not trivial, but it is the part of the event that is easiest to absorb.",
      },
      {
        type: "p",
        text: "What follows is harder. The utility owner does not just repair the cable and move on — it establishes who caused the damage, and the answer determines who pays for everything else.",
      },
      { type: "h2", text: "Third-party liability is the part that hurts" },
      {
        type: "p",
        text: "A struck cable is rarely serving only your site. It feeds other buildings, other tenants, sometimes a district cooling plant or a set of commercial units. When it goes down, they lose supply, and their losses become a claim against whoever cut it.",
      },
      {
        type: "p",
        text: "This scales with what is at the other end of the cable. Take out the feed to an occupied tower or a trading retail centre and the exposure is not the cable, it is the hours of lost operation for everyone downstream. The same logic applies to a struck water main that floods adjacent basements, or a telecom duct that drops connectivity for a business park.",
      },
      {
        type: "callout",
        text: "The question that decides your exposure is not how deep the cable was. It is whether you took reasonable steps to establish it was there before you dug.",
      },
      { type: "h2", text: "Your own programme stops" },
      {
        type: "p",
        text: "The third cost is the one contractors underestimate most consistently. After a strike, excavation in that area stops. It does not restart when the cable is repaired — it restarts when the utility owner, the consultant and often the municipality are satisfied about what happened and what is being done differently.",
      },
      {
        type: "p",
        text: "In practice that means an incident investigation, a method statement revision, and very often a requirement to carry out the utility survey that was skipped in the first place before anyone is allowed to break ground again. The survey still gets done. It just gets done after the strike, with the programme standing still and plant sitting idle on site.",
      },
      { type: "h2", text: "And someone is standing next to it" },
      {
        type: "p",
        text: "A high-voltage strike is not a commercial event first. It is a safety event. Arc flash from a struck cable causes severe burns, and the operator and the banksman are the closest people to it. A gas line strike carries an obvious and immediate risk to everyone on site and beyond the hoarding.",
      },
      {
        type: "p",
        text: "This is the reason the major contractors and the ADNOC and DEWA-adjacent sites mandate surveys rather than recommending them. It stopped being a cost question for them a long time ago.",
      },
      { type: "h2", text: "Why the drawings do not protect you" },
      {
        type: "p",
        text: "The common defence is that the drawings were obtained and followed. That helps, but it is weaker than most people assume, because authority records have known limitations that any investigation will surface.",
      },
      {
        type: "ul",
        items: [
          "Each utility owner records only its own assets, so no single drawing set shows everything.",
          "Records reflect what was designed or recorded at installation, not always what was built.",
          "Services get diverted around obstructions during construction and the diversion is not always drawn.",
          "Private in-plot services installed by previous occupiers are recorded by nobody at all.",
          "Depths shift as ground levels change through regrading and resurfacing.",
        ],
      },
      {
        type: "p",
        text: "A survey does not replace the drawings. It checks them against the ground, which is the only record that matters at the moment the bucket goes in.",
      },
      { type: "h2", text: "The arithmetic" },
      {
        type: "p",
        text: "A GPR ground survey of a trench corridor or a single plot is a few hours of work and priced accordingly. Set that against an emergency repair, a third-party outage claim, a stalled programme and an incident on your safety record, and the comparison is not close. Scanning first is not the cautious option. It is the cheap one.",
      },
    ],
    faqs: [
      {
        question: "Who is liable if we strike a cable that was not on the drawings?",
        answer:
          "Being absent from the drawings is not automatically a defence. The question asked is whether reasonable steps were taken to establish what was in the ground, and because authority records are known to be incomplete, relying on them alone is often judged insufficient on its own. A survey is the evidence that reasonable steps were taken.",
      },
      {
        question: "Does a utility survey guarantee we will not hit anything?",
        answer:
          "No, and anyone who promises that is overselling. Ground radar has real limits — saturated ground, saline soil and very congested services all reduce what it can resolve. What a survey does is remove the unknowns it can see, tell you honestly where the ground limited the reading, and give you a documented basis for how you dig. Safe digging practice still applies on top of it.",
      },
      {
        question: "How long does a survey take on a typical site?",
        answer:
          "A trench corridor or a single plot is usually surveyed and marked within a few hours. Larger footprints, road sections and full compounds are scoped by area and can run to a day or more. We confirm timing after reviewing the survey extent with you.",
      },
    ],
    related: [
      {
        label: "GPR Ground Scanning",
        href: "/services/gpr-ground-scanning",
      },
      {
        label: "Utility surveys before excavation",
        href: "/blog/utility-survey-before-excavation-uae",
      },
      { label: "Excavation Services", href: "/services/excavation" },
    ],
  },
  {
    slug: "gpr-vs-cable-locator",
    title: "GPR vs Cable Locator: Which Finds What",
    heading: "GPR vs electromagnetic cable locators underground",
    description:
      "An EML finds conductive services. GPR finds objects. Where each one works, where each one fails, and why serious UAE utility surveys use both together.",
    excerpt:
      "A cable locator cannot see a plastic water pipe. Radar cannot label what it finds. The two instruments answer different questions and are strongest together.",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    readingMinutes: 7,
    category: "Ground scanning",
    blocks: [
      {
        type: "p",
        text: "There are two instruments used to find buried services, and they work on completely different physics. Choosing between them by price or availability is how sites end up with a survey that was never capable of finding the thing that later got struck.",
      },
      { type: "h2", text: "How an electromagnetic locator works" },
      {
        type: "p",
        text: "An electromagnetic locator, usually shortened to EML or just called a cable locator or CAT, detects electromagnetic fields around conductive services. It works in three ways: passively picking up the field radiating from a live power cable, passively picking up re-radiated broadcast signals travelling along long conductors, or actively applying a signal to a service with a transmitter and tracing it.",
      },
      {
        type: "p",
        text: "Where it works, it works very well. It is fast, it is cheap, and when a signal is applied directly to a known service it traces the route with good accuracy and gives a usable depth. For live power cables it is often the single most reliable instrument available.",
      },
      { type: "h2", text: "Where the cable locator goes blind" },
      {
        type: "p",
        text: "The entire method depends on the target being conductive or carrying a traceable signal. That excludes a great deal of what is actually in UAE ground.",
      },
      {
        type: "ul",
        items: [
          "Plastic water, irrigation and drainage pipes — no conductor, no signal, invisible.",
          "Concrete and clay drainage and sewer runs.",
          "Fibre optic ducts with no tracer wire, or with a tracer wire that has broken.",
          "De-energised and abandoned cables with no accessible connection point.",
          "Buried tanks, chambers, voids, foundations and general obstructions.",
        ],
      },
      {
        type: "p",
        text: "That list is not marginal. In Al Ain, where the irrigation network is extensive and largely plastic, an EML-only survey misses much of what the excavator will actually encounter. Across the older industrial areas, abandoned and de-energised runs are common and invisible to a passive sweep.",
      },
      { type: "h2", text: "How ground penetrating radar works" },
      {
        type: "p",
        text: "GPR does not care whether a target conducts. It transmits electromagnetic pulses into the ground and records the reflections that come back from boundaries where the material properties change. A pipe, a duct, a cable, a tank, a void or a buried slab all create that contrast, so all of them produce a return.",
      },
      {
        type: "p",
        text: "That is the fundamental advantage: radar finds objects, not just conductors. It picks up plastic pipes, empty ducts, voids and obstructions that no locator will ever see, and it maps them spatially rather than tracing a single line at a time.",
      },
      { type: "h2", text: "Where radar has limits" },
      {
        type: "p",
        text: "Radar has its own failure modes, and they are worth stating plainly rather than discovering on site.",
      },
      {
        type: "ul",
        items: [
          "It does not identify what it finds. Radar shows you an object at a position and a depth; it does not tell you it is a water main rather than a duct.",
          "Conductive and saline ground attenuates the signal. Coastal and reclaimed ground in the UAE is the hardest case, and depth drops accordingly.",
          "Saturated ground, heavy clay and coarse gravel all reduce usable depth.",
          "Dense congestion of services can make individual targets hard to separate.",
          "Interpretation matters. The instrument produces data; the value is in who reads it.",
        ],
      },
      { type: "h2", text: "Why the two belong together" },
      {
        type: "p",
        text: "The instruments fail in opposite directions, which is exactly why a serious utility survey uses both. The EML identifies and traces the live conductive services with confidence and tells you what they are. Radar sweeps the same ground and picks up everything the locator could not see — the plastic, the abandoned, the non-conductive, the voids.",
      },
      {
        type: "p",
        text: "Run together, the EML gives identity to some of what radar found, and radar gives coverage the EML could not reach. Run alone, each leaves a category of service entirely unexamined.",
      },
      {
        type: "callout",
        text: "If a survey quote is significantly cheaper than the others, it is worth asking which instruments are being used. A passive EML sweep is a fraction of the work of a gridded radar survey, and it is not the same product.",
      },
      { type: "h2", text: "What we use" },
      {
        type: "p",
        text: "Our ground surveys run on the Proceq GS8000, a stepped-frequency radar working to 5–10 m depending on soil, gridded across the survey area so the coverage is systematic rather than a set of single traces. Findings are marked on the ground surface with estimated depths and issued as a survey report. Where the ground has limited what the radar could resolve, we say so in the report rather than leaving a blank area to be read as clear.",
      },
    ],
    faqs: [
      {
        question: "Can GPR detect plastic pipes?",
        answer:
          "Yes. Radar responds to the contrast between an object and the surrounding soil rather than to conductivity, so plastic water, irrigation and drainage pipes produce a return. This is the single biggest advantage over an electromagnetic locator, which cannot see them at all because there is no conductor to detect.",
      },
      {
        question: "Can GPR tell us what a detected service actually is?",
        answer:
          "Not on its own. Radar gives you position, depth and often an indication of size and material class, but it does not label a target as a water main or a telecom duct. That identification comes from combining the radar data with electromagnetic tracing, authority records and site knowledge — which is why interpretation is the part of the survey that matters most.",
      },
      {
        question: "Is a cable locator ever enough by itself?",
        answer:
          "Only where you can be confident everything in the ground is conductive and traceable, which is rarely true on a UAE site. For a quick check over a known live power route it is a reasonable tool. As the whole of a pre-excavation survey it leaves plastic, abandoned and non-conductive services completely unexamined.",
      },
    ],
    related: [
      {
        label: "GPR Ground Scanning",
        href: "/services/gpr-ground-scanning",
      },
      {
        label: "What a utility strike costs",
        href: "/blog/utility-strike-cost-uae",
      },
      {
        label: "Ground scanning in Al Ain",
        href: "/services/gpr-ground-scanning/al-ain",
      },
    ],
  },
  {
    slug: "how-deep-does-gpr-scan-uae",
    title: "How Deep Does GPR Scan in UAE Ground?",
    heading: "How deep GPR really reads in UAE ground",
    description:
      "GPR depth in UAE soil is 5–10 m and the ground decides which end you get. Why sabkha and reclaimed land cut it short, and where radar reads deepest.",
    excerpt:
      "Every equipment brochure quotes a maximum. What you get depends on moisture and salinity — and the UAE has both extremes within an hour of each other.",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    readingMinutes: 6,
    category: "Ground scanning",
    blocks: [
      {
        type: "p",
        text: "The most common question we get before a ground survey is how deep the radar reads. The honest answer is 5 to 10 m in UAE soil, and which end of that you get is decided by the ground rather than by the instrument. Anyone quoting a single fixed number for every site is quoting a brochure, not a survey.",
      },
      { type: "h2", text: "What actually limits radar depth" },
      {
        type: "p",
        text: "Ground penetrating radar sends electromagnetic pulses into the ground and reads what comes back. Every metre the pulse travels, some energy is absorbed. Depth is simply the point at which too little energy returns to distinguish a reflection from noise. Two properties of the ground control that absorption.",
      },
      { type: "h3", text: "Moisture" },
      {
        type: "p",
        text: "Water absorbs radar energy. Dry ground lets the pulse travel; saturated ground consumes it. This is why depth falls off sharply below the water table, and why a site surveyed after heavy rain or beside active irrigation can read noticeably shallower than the same site in dry conditions.",
      },
      { type: "h3", text: "Salinity" },
      {
        type: "p",
        text: "Salt water is conductive, and conductive ground attenuates radar far more aggressively than fresh water alone. This is the dominant constraint along the UAE coast, and it is the reason coastal depth figures and inland depth figures are not comparable numbers.",
      },
      { type: "h2", text: "What that means emirate by emirate" },
      {
        type: "p",
        text: "The UAE happens to contain most of the range radar can encounter, sometimes within a single emirate.",
      },
      {
        type: "ul",
        items: [
          "Al Ain and the inland gravel plains: the best ground in the country. Dry sand and gravel with a deep water table, reading towards the top of the range.",
          "Sharjah industrial belt, Al Quoz, Dubai Investments Park: dry sand and compacted fill, clean returns, consistently good depth.",
          "Abu Dhabi Island and the coastal strip: sabkha with saline groundwater near the surface. The hardest case, and depth can fall below 5 m.",
          "Reclaimed ground — Dubai Marina, the Palm, Al Marjan, Al Hamra: saline fill, signal attenuates quickly, expect the lower end.",
          "Fujairah and the east coast: wadi gravel and rock near the surface. Coarse gravel scatters energy and can cut depth well short of nominal.",
        ],
      },
      { type: "h2", text: "Depth is not the only thing the ground decides" },
      {
        type: "p",
        text: "There is a second effect that matters as much as depth and gets discussed far less. A strongly reflective or hard layer near the surface can mask everything beneath it, so the issue is not that the radar ran out of energy at 6 m — it is that a layer at 1.5 m prevented anything below it being resolved at all.",
      },
      {
        type: "p",
        text: "This comes up on rocky ground in the northern emirates and under buried slabs and old hardstanding anywhere. It is the reason a blank area on a radar plot must never be read as an empty area. If we could not see through something, that belongs in the report as a stated limitation.",
      },
      {
        type: "callout",
        text: "A blank area on a survey means one of two things: nothing is there, or the ground stopped us seeing. A report that does not distinguish between them is not doing its job.",
      },
      { type: "h2", text: "Is 5 m enough anyway?" },
      {
        type: "p",
        text: "Usually, yes. Most buried utilities that excavation actually encounters sit within the first 2 to 3 m. Distribution power, water, telecom ducts and drainage are typically well inside that band, so even on difficult coastal ground the survey generally reaches past everything the machine is going to meet.",
      },
      {
        type: "p",
        text: "Depth becomes the deciding factor for deeper targets — trunk sewers, transmission mains, deep chambers and tanks, or site investigation ahead of piling. Those are the jobs where knowing the ground conditions before quoting matters, because they are the jobs where difficult ground can genuinely put the target out of reach.",
      },
      { type: "h2", text: "How we handle it" },
      {
        type: "p",
        text: "We assess the conditions when we arrive and tell you the realistic depth for your ground before the survey rather than after it. If the depth you need is not achievable in the ground you have, that is a conversation to have on day one — not a limitation discovered in a report you have already paid for.",
      },
    ],
    faqs: [
      {
        question: "How deep can the GS8000 scan?",
        answer:
          "Typically 5–10 m in UAE ground. Dry inland sand and gravel read towards the top of that range; saline coastal and reclaimed ground can pull it below 5 m. We assess the site conditions and tell you what your specific ground supports rather than quoting the equipment maximum.",
      },
      {
        question: "Why is concrete scanning quoted at 1 m and ground scanning at 5–10 m?",
        answer:
          "Different instruments for different materials. Concrete scanning uses the Proceq GP8000 at high frequency to resolve rebar and tendons at fine detail, which trades depth for resolution and reaches around 1 m in concrete. Ground scanning uses the GS8000 at lower frequency, which sacrifices fine detail for penetration through soil.",
      },
      {
        question: "Does rain affect a ground survey?",
        answer:
          "Yes. Saturated ground absorbs radar energy, so a site surveyed shortly after heavy rain can read shallower than the same site in dry conditions. It rarely prevents a survey in the UAE, but where a job is depth-critical and the ground is wet, it is worth allowing it to drain first.",
      },
    ],
    related: [
      {
        label: "GPR Ground Scanning",
        href: "/services/gpr-ground-scanning",
      },
      {
        label: "GPR vs cable locators",
        href: "/blog/gpr-vs-cable-locator",
      },
      {
        label: "GPR Concrete Scanning",
        href: "/services/gpr-scanning",
      },
    ],
  },
  {
    slug: "ground-scanning-cost-dubai",
    title: "What a GPR Ground Survey Costs in Dubai",
    heading: "What drives the cost of a utility survey in Dubai",
    description:
      "What a GPR ground scanning survey costs in Dubai and the UAE, what actually drives the price, and which quotes are cheap because they are a different service.",
    excerpt:
      "Survey pricing follows area, grid density, access and deliverable — not a flat rate per site. What moves the number, and what a suspiciously low quote is missing.",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    readingMinutes: 6,
    category: "Working with us",
    blocks: [
      {
        type: "p",
        text: "There is no published rate card for utility surveys in Dubai, and any firm that gives you a number before knowing the site is guessing. What we can do is set out exactly what moves the price, so you can scope a survey properly and read competing quotes for what they actually contain.",
      },
      { type: "h2", text: "Area and grid density" },
      {
        type: "p",
        text: "Survey pricing is fundamentally area-based, but the area alone does not settle it. What settles it is how tightly the grid needs to be run across that area.",
      },
      {
        type: "p",
        text: "A trench corridor being cleared for a single service run needs a narrow, dense grid along the route. An open compound being mapped for as-built records needs full coverage at a spacing that will not miss a service between passes. Halving the grid spacing roughly doubles the time on site, so the detail you need is as much a cost driver as the footprint.",
      },
      { type: "h2", text: "What is on the surface" },
      {
        type: "p",
        text: "Radar surveys need the cart in contact with the ground and moving in straight, recorded lines. Anything that prevents that costs time.",
      },
      {
        type: "ul",
        items: [
          "Clear, level hardstanding or compacted ground surveys fastest.",
          "Rough, rutted or heavily obstructed ground slows the grid considerably.",
          "Stored material, parked plant and active traffic mean either clearing the area or working around it in sections.",
          "Landscaping, soft sand and steep falls all reduce the rate of progress.",
        ],
      },
      { type: "h2", text: "Access and working hours" },
      {
        type: "p",
        text: "A survey that can run during normal hours costs less than one that cannot. Live yards, trafficked roads and operating facilities frequently require night work, escorted access or short possession windows, and each of those adds mobilisation rather than survey time. Roads in particular often need the work done overnight, with traffic management arranged separately.",
      },
      { type: "h2", text: "The deliverable you need" },
      {
        type: "p",
        text: "This is the driver most often left unspecified in an enquiry, and it makes a real difference to the price.",
      },
      {
        type: "ul",
        items: [
          "On-site marking only — services painted on the ground for the excavation crew. The fastest option.",
          "Marking plus a survey report with mapped findings and estimated depths. The normal deliverable.",
          "Marked-up drawings over your own site plan, for larger sites and consultant submission.",
          "CAD or GIS deliverables, where the project team needs the data in their own environment.",
        ],
      },
      {
        type: "p",
        text: "Processing and drafting happen off site, after the survey. If you need CAD output, say so in the enquiry — it is a different amount of work from paint on the ground, and retrofitting it afterwards is slower than planning for it.",
      },
      { type: "h2", text: "Ground conditions" },
      {
        type: "p",
        text: "Difficult ground does not usually change the price directly, but it changes what the survey can deliver, and that is worth establishing before anyone commits. Saline coastal and reclaimed ground limits depth; rock and coarse gravel scatter the signal. If your target sits deeper than the ground will allow, we would rather tell you at quotation stage than issue a report that quietly fails to answer your question.",
      },
      { type: "h2", text: "Why some quotes are much cheaper" },
      {
        type: "p",
        text: "When one quote comes in far below the others, it is usually not the same service. The common differences are worth checking directly.",
      },
      {
        type: "ul",
        items: [
          "An electromagnetic locator sweep rather than a gridded radar survey — much faster, and blind to plastic and non-conductive services.",
          "Spot checks along a route rather than systematic grid coverage of the area.",
          "Marking on the ground with no report, where you assumed a report was included.",
          "No stated treatment of areas the ground prevented reading, so limitations never appear.",
        ],
      },
      {
        type: "callout",
        text: "Ask any surveyor two questions: what instrument is being used, and what happens in the report to areas where the ground limited the reading. The answers separate a survey from a sweep.",
      },
      { type: "h2", text: "How to get an accurate quote quickly" },
      {
        type: "p",
        text: "Tell us the location, the approximate survey area, what the surface is like, whether the work can happen in normal hours, and what you need at the end — marking, report, or CAD. With those five things we can quote properly rather than hedging, and in most of Dubai we can attend the same day or the following morning.",
      },
    ],
    faqs: [
      {
        question: "Do you charge per square metre or per day?",
        answer:
          "It depends on the job. Small, well-defined areas such as a trench corridor or a single plot are usually priced as a fixed job. Larger footprints and ongoing programmes are priced by area or by day, because progress rate varies so much with surface condition and grid density. We confirm which basis applies when we scope it.",
      },
      {
        question: "Is the report included in the price?",
        answer:
          "In our quotes, yes — on-site marking and a survey report with mapped findings and estimated depths are the standard deliverable. CAD, GIS and marked-up drawings over your own site plan are scoped separately because they involve off-site drafting. It is worth confirming this point with any surveyor, as it is a common gap between quotes.",
      },
      {
        question: "Can you scan and then carry out the excavation?",
        answer:
          "Yes. We provide excavation as well as the survey, and the crew works to the marked-up survey rather than to a drawing handed over by someone else. Combining them removes the gap where information gets lost between two contractors.",
      },
      {
        question: "How quickly can you attend in Dubai?",
        answer:
          "For most Dubai locations, the same day or the following morning, subject to site access and permits. Abu Dhabi and Sharjah are usually next day. Al Ain, Ras Al Khaimah and Fujairah are planned visits, so a day of notice helps us cover the full scope in one mobilisation.",
      },
    ],
    related: [
      {
        label: "GPR Ground Scanning",
        href: "/services/gpr-ground-scanning",
      },
      {
        label: "Concrete scanning cost in Dubai",
        href: "/blog/gpr-scanning-cost-dubai",
      },
      {
        label: "Ground scanning in Dubai",
        href: "/services/gpr-ground-scanning/dubai",
      },
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
