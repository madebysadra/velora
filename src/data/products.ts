import { Product, ReviewItem } from '../types';

import veloraAirImg from '../assets/images/velora_air_real_1790151560374.jpg';
import veloraHomeImg from '../assets/images/velora_home_real_1790151576147.jpg';
import veloraWatchImg from '../assets/images/velora_watch_real_1790151589745.jpg';
import veloraHubImg from '../assets/images/velora_hub_real_1790151603531.jpg';
import veloraAirLifestyle from '../assets/images/velora_lifestyle_human_1790151621161.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'velora-air',
    sku: 'VA-01-TI',
    modelNumber: 'Model A2940',
    name: 'VELORA Air',
    category: 'Wireless Headphones',
    tagline: 'Pure acoustic immersion in sculpted titanium.',
    shortDescription: 'Custom 40mm electrodynamic drivers, adaptive active noise cancellation, and breathable magnetic memory cushions.',
    fullStory: 'Engineered for listeners who refuse compromises between acoustic fidelity and industrial elegance. Machined from solid bead-blasted titanium and stainless steel telescoping arms, VELORA Air wraps your senses in balanced, distortion-free sound with 36 hours of continuous playback.',
    price: '$299',
    priceNum: 299,
    image: veloraAirImg,
    lifestyleImage: veloraAirLifestyle,
    materials: {
      primary: 'Grade-5 Titanium & 6000-Series Recycled Aluminum',
      acoustic: 'Acoustically Transparent Polyester Knit & Magnetic Memory Foam',
    },
    compatibility: 'iOS 17+, macOS Sonoma+, Android 14+, Windows 11, Bluetooth 5.4, Lossless USB-C Audio',
    inTheBox: [
      { name: 'VELORA Air Wireless Headphones', qty: '1×' },
      { name: 'Magnetic Smart Shield Travel Case', qty: '1×' },
      { name: '1.2m Braided USB-C to USB-C Audio/Charging Cable', qty: '1×' },
      { name: 'Gold-plated 3.5mm Analog Audio Adapter', qty: '1×' },
      { name: 'Quick Start & Calibration Guide', qty: '1×' },
    ],
    warranty: '2-Year Global Limited Hardware Warranty · 30-Day Return Privilege',
    specs: [
      { label: 'Transducer', value: '40mm Bespoke Electrodynamic Driver' },
      { label: 'Frequency Range', value: '8 Hz – 48,000 Hz (< 0.08% THD @ 1kHz)' },
      { label: 'Noise Cancellation', value: 'Hybrid ANC with Adaptive Transparency' },
      { label: 'Battery Life', value: '36 Hours (ANC On) · 15min USB-C Fast Charge = 6 Hours' },
      { label: 'Weight', value: '325 grams (11.46 oz)' },
    ],
    keyFeatures: [
      {
        title: 'Adaptive Room Transparency',
        desc: 'Internal and external microphones adjust ambient passthrough in real time for effortless conversation.',
      },
      {
        title: 'Lossless 24-bit Architecture',
        desc: 'Direct lossless transmission preserves master-track dynamics without compression artifacts.',
      },
      {
        title: 'Zero-Fatigue Canopy',
        desc: 'Custom-tensioned breathable mesh balances ear pressure for effortless day-long wear.',
      },
    ],
    colors: [
      { name: 'Titanium Gray', hex: '#8E8E93' },
      { name: 'Obsidian Black', hex: '#161618' },
      { name: 'Pearl Silver', hex: '#E2E2E0' },
    ],
  },
  {
    id: 'velora-atmos',
    sku: 'VA-02-AT',
    modelNumber: 'Model S1020',
    name: 'VELORA Atmos',
    category: 'Acoustic Room Speaker',
    tagline: 'Room-filling 360° sound wrapped in acoustic knit.',
    shortDescription: 'High-excursion woofer with 5 beamforming tweeters, real-time room sensing, and ambient touch illumination.',
    fullStory: 'VELORA Atmos transforms living spaces into natural acoustic stages. Its seamless cylindrical 3D knit fabric is sonically transparent, while internal computational microphones dynamically calibrate equalization to your room geometry within ten seconds of placement.',
    price: '$199',
    priceNum: 199,
    image: veloraHomeImg,
    materials: {
      primary: 'Anodized 6000-series Aluminum & Matte Composite Chassis',
      acoustic: 'Seamless 3D Knitted Melange Acoustic Fabric',
    },
    compatibility: 'Apple AirPlay 2, Spotify Connect, Matter 1.2, Thread Border Router, Wi-Fi 6E',
    inTheBox: [
      { name: 'VELORA Atmos Acoustic Speaker', qty: '1×' },
      { name: 'Color-matched 2.0m Braided Power Cable', qty: '1×' },
      { name: 'Setup & Placement Guide', qty: '1×' },
    ],
    warranty: '2-Year Global Limited Hardware Warranty · Dedicated Audio Support',
    specs: [
      { label: 'Acoustic Array', value: '4-inch Woofer + 5 Beamforming Tweeters' },
      { label: 'Spatial Calibration', value: 'Automatic Room Geometry Compensation' },
      { label: 'Touch Interface', value: 'Capacitive Glass Ring with Ambient Halo LED' },
      { label: 'Weight', value: '2.14 kg (4.72 lbs)' },
    ],
    keyFeatures: [
      {
        title: '360° Soundstage',
        desc: 'Consistent clarity anywhere in the room without directional acoustic dead zones.',
      },
      {
        title: 'Stereo Pair Link',
        desc: 'Pair two VELORA Atmos speakers for an expanded stereo image.',
      },
      {
        title: 'Hardware Privacy Switch',
        desc: 'Physically disconnect internal microphones with a dedicated hardware slider.',
      },
    ],
    colors: [
      { name: 'Slate Gray', hex: '#4A4B4F' },
      { name: 'Pearl White', hex: '#F0F0EE' },
    ],
  },
  {
    id: 'velora-core',
    sku: 'VC-01-TI',
    modelNumber: 'Model W3100',
    name: 'VELORA Core',
    category: 'Smart Watch',
    tagline: 'Titanium precision engineered for daily endurance.',
    shortDescription: 'Grade-5 titanium case, always-on 2000-nit sapphire display, and advanced biometric tracking.',
    fullStory: 'Crafted for life in motion, VELORA Core balances featherweight comfort with rugged architectural durability. Its edge-to-edge sapphire crystal display delivers brilliant outdoor visibility, while advanced photoplethysmography sensors track heart rate, sleep cycles, and daily recovery.',
    price: '$249',
    priceNum: 249,
    image: veloraWatchImg,
    materials: {
      primary: 'Solid Grade-5 Titanium Chassis (Ti-6Al-4V) with Ceramic Back',
      acoustic: 'Sapphire Crystal (9 Mohs Hardness) & High-density Fluoroelastomer Strap',
    },
    compatibility: 'iOS 16+, Android 12+, Apple Health, Health Connect, Bluetooth 5.3 Low Energy',
    inTheBox: [
      { name: 'VELORA Core (Titanium 44mm)', qty: '1×' },
      { name: 'Textured Fluoroelastomer Strap (S/M and M/L)', qty: '2×' },
      { name: 'Magnetic Fast Charger (USB-C 1m)', qty: '1×' },
      { name: 'Warranty Card & Authenticity Certificate', qty: '1×' },
    ],
    warranty: '2-Year Global Hardware Warranty · Sapphire Scratch Guarantee',
    specs: [
      { label: 'Chassis', value: 'Grade-5 Titanium with Ceramic Sensor Back' },
      { label: 'Display', value: '1.43-inch Always-on LTPO AMOLED (2,000 nits)' },
      { label: 'Battery Life', value: '7 Days Typical Use · Fast Charge (0-80% in 35m)' },
      { label: 'Water Rating', value: '5 ATM / 50 meters (ISO 22810:2010 certified)' },
    ],
    keyFeatures: [
      {
        title: 'Sapphire Crystal Surface',
        desc: 'Diamond-grade hardness prevents scratches from keys, concrete, and metal surfaces.',
      },
      {
        title: 'Restorative Readiness',
        desc: 'Monitors HRV and restorative deep sleep to give clear daily energy guidance.',
      },
      {
        title: 'Ecosystem Wrist Remote',
        desc: 'Fine-tune VELORA Air volume and toggle VELORA Link scenes effortlessly.',
      },
    ],
    colors: [
      { name: 'Raw Titanium', hex: '#87888C' },
      { name: 'Midnight Titanium', hex: '#222326' },
      { name: 'Champagne Gold', hex: '#C8A46A' },
    ],
  },
  {
    id: 'velora-link',
    sku: 'VL-01-MK',
    modelNumber: 'Model H4200',
    name: 'VELORA Link',
    category: 'Smart Home Controller',
    tagline: 'A tactile glass dial for effortless home orchestration.',
    shortDescription: 'Rotary haptic glass dial and local Matter automation bridge for lighting, climate, and sound.',
    fullStory: 'VELORA Link brings physical satisfaction back to home living. A weighted bead-blasted aluminum puck holds a silky optical glass dial with micro-click haptic feedback. Adjust ambient lighting, control sound zones, or set evening routines with a single intuitive twist.',
    price: '$149',
    priceNum: 149,
    image: veloraHubImg,
    materials: {
      primary: 'Solid Milled 6061 Anodized Aluminum with Magnetic Core',
      acoustic: 'Smoked Optical Gorilla Glass with Haptic Feedback Engine',
    },
    compatibility: 'Matter 1.2, Apple Home, Google Home, Philips Hue, Sonos, Home Assistant, Thread',
    inTheBox: [
      { name: 'VELORA Link Controller', qty: '1×' },
      { name: 'Magnetic Quick-Release Wall Mount', qty: '1×' },
      { name: 'Silicone Desk Stand Base', qty: '1×' },
      { name: 'Flat USB-C Cable (1.8m)', qty: '1×' },
    ],
    warranty: '2-Year Global Hardware Warranty · Lifetime Local Firmware Updates',
    specs: [
      { label: 'Interface', value: 'Rotary Glass Ring with Micro-Haptic Click Engine' },
      { label: 'Protocols', value: 'Matter, Thread Border Router, Zigbee 3.0, Wi-Fi' },
      { label: 'Processing', value: 'Zero-cloud Local Routine Execution (< 8ms latency)' },
      { label: 'Power', value: 'Continuous USB-C or 6-Month Rechargeable Operation' },
    ],
    keyFeatures: [
      {
        title: 'Tactile Precision Dial',
        desc: 'Satisfying mechanical micro-clicks give physical feedback for every lighting increment.',
      },
      {
        title: 'Zero Latency Local Engine',
        desc: 'All routines process locally on the device, ensuring lighting responds in milliseconds.',
      },
      {
        title: 'Universal Ecosystem Link',
        desc: 'Directly harmonizes with Apple Home, Google Home, Philips Hue, and Sonos.',
      },
    ],
    colors: [
      { name: 'Matte Obsidian', hex: '#18191B' },
      { name: 'Anodized Silver', hex: '#E4E4E2' },
    ],
  },
];

/* Minimal, typography-driven authentic impressions without fake avatars or exaggerated claims */
export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-01',
    quote: 'The attention to detail feels closer to a luxury object than a consumer device. The weight distribution is balanced to perfection.',
    author: 'Verified Customer',
    productTag: 'VELORA Air',
  },
  {
    id: 'rev-02',
    quote: 'It blends into the room so quietly that you only notice it when music fills the space. Unmatched acoustic clarity.',
    author: 'Interior Architect',
    productTag: 'VELORA Atmos',
  },
  {
    id: 'rev-03',
    quote: 'No intrusive screen clutter, no cheap plastic. The titanium casing and sapphire crystal feel genuinely indestructible.',
    author: 'Product Designer',
    productTag: 'VELORA Core',
  },
];
