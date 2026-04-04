export type ServiceIconColor = 'blue' | 'green' | 'orange' | 'navy';

export const services = [
  {
    id: 'gpr-scanning',
    title: 'GPR Scanning',
    fullTitle: 'Ground Penetrating Radar (GPR) Scanning',
    shortDescription: 'Non-destructive subsurface scanning using Proceq GP8000 technology with up to 500cm depth detection.',
    overviewHighlight: '500cm Depth | Proceq GP8000',
    overviewFeatures: ['Rebar detection', 'Post-tension cables', 'Utility mapping', '3D visualization'],
    iconColor: 'blue' as ServiceIconColor,
    longDescription: 'Our GPR scanning service uses the industry-leading Proceq GP8000 ground penetrating radar system to detect and map subsurface objects including rebar, post-tension cables, conduits, voids, and utilities before any concrete cutting or drilling operations. This non-destructive testing method ensures maximum safety and prevents costly damage to embedded structures.',
    icon: 'Radar', // lucide icon name
    slug: 'gpr-scanning',
    features: [
      'Maximum scanning depth of 500cm',
      'Real-time 3D visualization of subsurface structures',
      'Detection of rebar, post-tension cables, conduits & voids',
      'Non-destructive and completely safe',
      'Detailed professional reports provided',
      'Accurate utility and obstruction mapping',
      'Pre-cutting safety verification',
      'Compliance with UAE construction safety standards'
    ],
    equipment: 'Proceq GP8000',
    equipmentDescription: 'The Proceq GP8000 is a state-of-the-art ground penetrating radar that provides real-time 3D visualization of concrete structures, enabling accurate detection of embedded objects at depths up to 500cm.',
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
      depth: '500cm',
      accuracy: '±5mm',
      technology: 'Proceq GP8000'
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
    overviewHighlight: 'GPR Pre-Scanned | Safe Digging',
    overviewFeatures: ['Site preparation', 'Utility trenching', 'Foundation work', 'Safety compliance'],
    iconColor: 'navy' as ServiceIconColor,
    longDescription: 'Our excavation services cover a wide range of construction needs including site preparation, utility trenching, foundation excavation, and grading. We combine our GPR scanning expertise with excavation to ensure underground utilities and structures are identified before any digging begins, minimizing risk and maximizing efficiency.',
    icon: 'Shovel',
    slug: 'excavation',
    features: [
      'Pre-excavation GPR scanning for safety',
      'Utility-safe digging practices',
      'Site preparation and grading',
      'Trenching for utilities and drainage',
      'Foundation excavation',
      'Experienced operators and crew',
      'Compliance with UAE safety regulations',
      'Efficient project completion'
    ],
    equipment: 'Professional Excavation Machinery',
    equipmentDescription: 'We utilize modern excavation equipment combined with GPR scanning technology to ensure safe and efficient excavation operations.',
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
      safety: 'GPR Pre-Scan',
      coverage: 'All UAE'
    }
  },
  {
    id: 'gs8000-scanning',
    title: 'GS8000 Ground Scanning',
    fullTitle: 'Proceq GS8000 Large-Scale Ground Scanning',
    shortDescription: 'Large-scale utility mapping and road scanning up to 10m depth using the Proceq GS8000 pushcart GPR system.',
    overviewHighlight: '10m Depth | Proceq GS8000',
    overviewFeatures: ['Utility mapping', 'Road scanning', 'GNSS geolocation', 'Up to 80km/h'],
    iconColor: 'green' as ServiceIconColor,
    longDescription: 'Our GS8000 ground scanning service uses the Proceq GS8000 pushcart GPR system for large-scale subsurface utility mapping, road scanning, and infrastructure inspection. With scanning depths up to 10 metres and speeds up to 80km/h, we deliver fast, accurate underground mapping for major civil and infrastructure projects across UAE.',
    icon: 'Layers',
    slug: 'gs8000-scanning',
    features: [
      'Maximum scanning depth of 10m (33ft)',
      'Scan speed up to 80km/h',
      'SFCW technology for superior resolution',
      'Integrated GNSS geolocation',
      'Real-time 2D and 3D visualization via iPad',
      'CAD and GIS data output',
      'Large-area grid scanning up to 80x80m',
      'Non-destructive and completely safe'
    ],
    equipment: 'Proceq GS8000',
    equipmentDescription: 'The Proceq GS8000 is a large-scale pushcart GPR system using SFCW technology with 0.2–3.4GHz bandwidth, capable of scanning up to 10m depth at speeds of 80km/h with integrated GNSS geolocation.',
    benefits: [
      'Cover vast areas rapidly with precision',
      'Accurate utility detection before excavation',
      'GNSS-tagged data for engineering use',
      'CAD and GIS export for project teams',
      'Non-destructive and safe',
      'Fast deployment on large civil sites'
    ],
    applications: [
      'Underground utility mapping',
      'Road and pavement scanning',
      'Bridge deck assessment',
      'Pre-excavation surveys',
      'Infrastructure asset inspection',
      'Geophysical investigations'
    ],
    stats: {
      depth: '10m',
      speed: '80km/h',
      technology: 'Proceq GS8000'
    }
  }
]
