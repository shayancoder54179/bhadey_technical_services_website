export type ServiceIconColor = 'blue' | 'green' | 'orange' | 'navy';

export const services = [
  {
    id: 'gpr-scanning',
    title: 'GPR Concrete Scanning',
    fullTitle: 'GPR Concrete Scanning (Ground Penetrating Radar)',
    shortDescription: 'Non-destructive concrete scanning using Proceq GP8000 technology, with scanning depth up to 1 m in concrete.',
    overviewHighlight: '1m in Concrete | Proceq GP8000',
    overviewFeatures: ['Rebar detection', 'Post-tension cables', 'Utility mapping', '3D visualization'],
    iconColor: 'blue' as ServiceIconColor,
    longDescription: 'Our GPR scanning service uses the industry-leading Proceq GP8000 ground penetrating radar system to detect and map objects embedded in concrete — rebar, post-tension cables, conduits and voids — before any cutting or drilling operations. Scanning depth in concrete is up to 1 m. This non-destructive testing method ensures maximum safety and prevents costly damage to embedded structures. For locating buried utilities in soil before excavation, we use the Proceq GS8000, which reaches 3–5 m depending on soil conditions.',
    icon: 'Radar', // lucide icon name
    slug: 'gpr-scanning',
    features: [
      'Scanning depth up to 1 m in concrete',
      'Real-time 3D visualization of subsurface structures',
      'Detection of rebar, post-tension cables, conduits & voids',
      'Non-destructive and completely safe',
      'Detailed professional reports provided',
      'Accurate utility and obstruction mapping',
      'Pre-cutting safety verification',
      'Compliance with UAE construction safety standards'
    ],
    equipment: 'Proceq GP8000',
    equipmentDescription: 'The Proceq GP8000 is a state-of-the-art ground penetrating radar that provides real-time 3D visualization of concrete structures, enabling accurate detection of embedded objects at depths up to 1 m in concrete.',
    benefits: [
      'Prevent hitting rebar and post-tension cables',
      'Avoid costly utility damage',
      'Ensure worker and structural safety',
      'Save time and money on projects',
      'Meet construction safety compliance',
      'Accurate pre-construction planning'
    ],
    applications: [
      'Pre-core cutting scanning',
      'Post-tension cable detection',
      'Rebar mapping and cover measurement',
      'Void and delamination detection',
      'Utility locating in concrete',
      'Slab-on-grade inspection',
      'Bridge deck assessment',
      'Structural integrity evaluation'
    ],
    stats: {
      depth: '1m in concrete',
      accuracy: '±10mm',
      technology: 'Proceq GP8000'
    }
  },
  {
    id: 'gs8000-scanning',
    title: 'GPR Ground Scanning',
    fullTitle: 'GPR Ground Scanning & Underground Utility Mapping',
    shortDescription: 'Ground scanning with the Proceq GS8000 to locate buried utilities before excavation — 3–5 m depth depending on soil.',
    overviewHighlight: '3–5m in Soil | Proceq GS8000',
    overviewFeatures: ['Buried utility locating', 'Pre-excavation surveys', 'Grid mapping', 'Marked-up site drawings'],
    iconColor: 'green' as ServiceIconColor,
    longDescription: 'Before any excavation begins, we scan the ground with the Proceq GS8000 to locate buried services — power cables, water and sewer lines, telecom ducts, gas pipes, tanks and voids. Working depth is typically 3–5 m depending on soil conditions: dry sand allows deeper penetration, while wet or heavy clay soils reduce it. Findings are marked on site and issued as a survey report, so excavation crews know exactly what is below before the first bucket goes in. This is a different instrument and a different job from concrete scanning — the GP8000 images the inside of concrete, the GS8000 images the ground.',
    icon: 'Magnet',
    slug: 'gs8000-scanning',
    features: [
      'Working depth 3–5 m depending on soil conditions',
      'Locates power, water, sewer, telecom, gas and unknown services',
      'Pre-excavation utility surveys and clearance',
      'Grid scanning with on-site marking and paint-out',
      'Void, tank and buried obstruction detection',
      'Survey report with mapped utility positions',
      'Non-destructive — no trial pits needed to start',
      'Covers roads, open ground, compounds and yards'
    ],
    equipment: 'Proceq GS8000',
    equipmentDescription: 'The Proceq GS8000 is a subsurface mapping ground penetrating radar built for utility locating in soil. It uses stepped-frequency continuous wave technology across a 0.2–3.4 GHz bandwidth, balancing penetration and resolution in a single pass, and covers large areas quickly for road, site and infrastructure surveys.',
    benefits: [
      'Know what is buried before you excavate',
      'Avoid utility strikes, injuries and shutdowns',
      'Prevent costly repairs and project delays',
      'Meet authority requirements for pre-dig surveys',
      'Faster and safer than exploratory trial pits',
      'Scanning and excavation from one contractor'
    ],
    applications: [
      'Pre-excavation utility surveys',
      'Trenching and utility corridor clearance',
      'Road and highway subsurface surveys',
      'Buried tank and void detection',
      'Site investigation before piling',
      'Utility mapping for as-built records',
      'Landscaping and compound works',
      'Infrastructure and municipality projects'
    ],
    stats: {
      depth: '3–5m in soil',
      technology: 'Proceq GS8000',
      coverage: 'All UAE'
    }
  },
  {
    id: 'core-cutting',
    title: 'Core Cutting',
    fullTitle: 'Diamond Core Cutting Services',
    shortDescription: 'Precision diamond core cutting from 12mm to 500mm diameter using professional equipment.',
    overviewHighlight: '12-500mm | Professional Equipment',
    overviewFeatures: ['Diamond cutting', 'Clean precision', 'Any angle', 'Pre-scan included'],
    iconColor: 'orange' as ServiceIconColor,
    longDescription: 'Our diamond core cutting service provides clean, precise holes in concrete, masonry, and other building materials. Using professional-grade diamond core cutting equipment, we deliver holes ranging from 12mm to 500mm in diameter for plumbing, electrical, HVAC, and structural applications. Every core cutting job is preceded by GPR scanning to ensure safety.',
    icon: 'CircleDot',
    slug: 'core-cutting',
    features: [
      'Core hole sizes from 12mm to 500mm diameter',
      'Diamond-tipped precision cutting',
      'Clean cuts with minimal dust and vibration',
      'Pre-cutting GPR scanning included',
      'Suitable for concrete, masonry, and stone',
      'Vertical, horizontal, and overhead cutting',
      'Professional-grade equipment',
      'Quick and efficient execution'
    ],
    equipment: 'Professional Diamond Core Cutting Systems',
    equipmentDescription: 'We use professional-grade diamond core cutting systems known for their reliability, precision, and performance. These systems deliver clean, accurate cuts with minimal noise and vibration.',
    benefits: [
      'Clean and precise holes every time',
      'Minimal structural disturbance',
      'Fast completion times',
      'Reduced dust and debris',
      'Pre-scanning ensures safety',
      'Professional finish guaranteed'
    ],
    applications: [
      'Plumbing pipe installations',
      'Electrical conduit routing',
      'HVAC duct penetrations',
      'Drainage installations',
      'Anchor bolt holes',
      'Sample extraction for testing',
      'Window and door openings',
      'Structural modifications'
    ],
    stats: {
      minSize: '12mm',
      maxSize: '500mm',
      technology: 'Diamond Core Systems'
    }
  },
  {
    id: 'excavation',
    title: 'Excavation',
    fullTitle: 'Professional Excavation Services',
    shortDescription: 'Safe and efficient excavation services for construction, utility installation, and site preparation across UAE.',
    overviewHighlight: 'GPR Scan First | 3–5m Depth in Soil',
    overviewFeatures: ['GPR scan before every dig', 'Utility trenching', 'Foundation work', 'Safety compliance'],
    iconColor: 'navy' as ServiceIconColor,
    longDescription: 'Before we excavate, we scan. Every excavation job starts with a GPR survey of the dig area using the Proceq GS8000, which reads 3–5 m into the ground depending on soil conditions, so buried services and obstructions are located and marked before any machine breaks ground. From there our excavation services cover site preparation, utility trenching, foundation excavation and grading — carried out with a map of what is underneath, not a guess.',
    icon: 'Shovel',
    slug: 'excavation',
    features: [
      'GPR scanning before excavation on every job',
      'Ground scanning to 3–5 m depending on soil',
      'Utility-safe digging practices',
      'Site preparation and grading',
      'Trenching for utilities and drainage',
      'Foundation excavation',
      'Experienced operators and crew',
      'Compliance with UAE safety regulations',
      'Efficient project completion'
    ],
    equipment: 'Professional Excavation Machinery + Proceq GS8000',
    equipmentDescription: 'We utilize modern excavation equipment paired with the Proceq GS8000 ground scanning radar. The GS8000 surveys the dig area to 3–5 m depending on soil conditions before excavation begins, so utilities are located and marked rather than discovered by the bucket.',
    benefits: [
      'Pre-scanned excavation zones for safety',
      'Reduced risk of utility strikes',
      'Efficient project timelines',
      'Experienced and certified operators',
      'Full compliance with regulations',
      'Integrated scanning and excavation service'
    ],
    applications: [
      'Construction site preparation',
      'Utility trench excavation',
      'Foundation digging',
      'Drainage system installation',
      'Road and infrastructure work',
      'Landscaping and grading',
      'Underground utility installation',
      'Pool and basement excavation'
    ],
    stats: {
      experience: '7+ Years',
      safety: 'GPR scan before every dig',
      depth: '3–5m in soil'
    }
  },
  {
    id: 'oversized-cargo',
    title: 'Oversized Cargo Movement',
    fullTitle: 'Oversized Cargo Movement Assistance',
    shortDescription: 'Expert ground support, escort services, and route planning for oversized and heavy cargo movement across the UAE.',
    overviewHighlight: 'UAE-Wide | RTA Compliant',
    overviewFeatures: ['Route survey & planning', 'Escort & flagging services', 'GPR route scanning', 'Regulatory compliance'],
    iconColor: 'navy' as ServiceIconColor,
    longDescription: 'Bhadeya Technical Services provides comprehensive ground support and technical assistance for oversized and heavy cargo movement across all UAE emirates. We combine expert route planning, RTA regulatory compliance, and our unique GPR scanning capability to ensure every oversized load moves safely. No other UAE provider offers this integrated scanning-and-escort service.',
    icon: 'Truck',
    slug: 'oversized-cargo',
    features: [
      'Pre-movement route survey and road clearance assessment',
      'RTA permit assistance and oversized load documentation',
      'Professional escort vehicles and certified flagmen',
      'GPR scanning of roads and bridges along the route',
      'On-site trained technicians throughout the operation',
      '24/7 emergency assistance during transport',
      'Compliance with UAE and emirate-specific authority regulations',
      'Coordination with relevant traffic and civil authorities'
    ],
    equipment: 'Professional Escort & Support Fleet',
    equipmentDescription: 'Our oversized cargo operations are supported by a professional fleet of escort vehicles, certified flagmen, and technical equipment including GPR scanners for pre-movement road and bridge structural assessment.',
    benefits: [
      'Integrated GPR scanning + cargo escort — unique in UAE',
      'Full RTA compliance and permit support',
      'Reduced risk of route incidents or infrastructure damage',
      'Experienced technical crew on-site at all times',
      '24/7 emergency coverage across all UAE emirates',
      'Single point of contact for complex cargo movements'
    ],
    applications: [
      'Heavy machinery transport',
      'Industrial equipment relocation',
      'Construction material haulage',
      'Oil & gas equipment movement',
      'Large prefabricated structure transport',
      'Project cargo logistics support'
    ],
    stats: {
      coverage: 'All UAE',
      compliance: 'RTA Certified',
      support: '24/7'
    }
  },
  {
    id: 'interlock-road-pavement',
    title: 'Interlock & Road Pavement',
    fullTitle: 'Interlock Paving & Road Pavement Works',
    shortDescription: 'Interlock tile laying, repair and re-levelling, plus road pavement and hardstanding works across the UAE.',
    overviewHighlight: 'Laying, Repair & Re-Levelling',
    overviewFeatures: ['Interlock tile laying', 'Sub-base preparation', 'Road & hardstanding paving', 'Repair & re-levelling'],
    iconColor: 'orange' as ServiceIconColor,
    longDescription: 'We lay, repair and re-level interlock paving and carry out road pavement works for driveways, parking areas, yards, walkways and internal site roads. Every job starts with the ground beneath it: correct excavation, a properly compacted sub-base and accurate levels are what decide whether paving stays flat or sinks within a year. Because we also handle excavation and ground scanning in-house, we can locate buried services before breaking ground and hand over a finished surface from a single contractor.',
    icon: 'Layers',
    slug: 'interlock-road-pavement',
    features: [
      'Interlock tile laying in standard and decorative patterns',
      'Excavation, sub-base preparation and compaction',
      'Accurate levels, falls and drainage set-out',
      'Kerbstones, edge restraints and channel drains',
      'Lifting, re-levelling and reinstatement of sunken paving',
      'Road pavement, hardstanding and internal site roads',
      'Utility locating before breaking ground',
      'Reinstatement after trenching and utility works'
    ],
    equipment: 'Compaction & Paving Equipment',
    equipmentDescription: 'We use plate compactors, rollers, block cutters and laser levelling equipment for interlock and pavement works, supported by our own excavation machinery and GPR scanning for pre-works utility clearance.',
    benefits: [
      'Paving that stays level — sub-base done properly',
      'Correct falls, so water drains instead of ponding',
      'Utilities located before excavation begins',
      'Excavation, scanning and paving from one contractor',
      'Clean reinstatement after utility or trenching works',
      'Coverage across Dubai, Abu Dhabi, Sharjah and the UAE'
    ],
    applications: [
      'Villa and residential driveways',
      'Parking areas and car parks',
      'Warehouse and industrial yards',
      'Walkways, pathways and landscaping',
      'Internal site and compound roads',
      'Road pavement and hardstanding',
      'Reinstatement after trenching works',
      'Sunken or uneven paving repair'
    ],
    stats: {
      scope: 'Lay, repair & re-level',
      coverage: 'All UAE',
      experience: '7+ Years'
    }
  }
]
