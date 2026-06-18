export interface RAMProduct {
  id: string;
  name: string;
  shortName: string;
  capacity: string;
  speed: string;
  type: string;
  latency: string;
  rgb: boolean;
  category: string[];
  price: number;
  description: string;
  features: string[];
  benchmarks: { label: string; value: number; max: number }[];
  specs: { label: string; value: string }[];
  color: 'purple' | 'blue' | 'cyan' | 'pink';
}

export const ramProducts: RAMProduct[] = [
  {
    id: 'furyx-ddr5-rgb-32gb',
    name: 'FuryX DDR5 RGB',
    shortName: 'FuryX DDR5',
    capacity: '32GB (2x16GB)',
    speed: '7200MHz',
    type: 'DDR5',
    latency: 'CL30',
    rgb: true,
    category: ['DDR5', 'Gaming', 'RGB'],
    price: 289.99,
    description:
      'Dominate every frame with FuryX DDR5 RGB. Engineered for gamers who refuse to compromise, pushing 7200MHz with synchronized RGB that reacts to your gameplay.',
    features: [
      '7200MHz extreme overclocking potential',
      'Synced RGB with 16.8M colors',
      'Custom 10-layer PCB for signal integrity',
      'Aluminum heatspreader with direct-contact thermal pads',
    ],
    benchmarks: [
      { label: 'Read Speed', value: 85, max: 100 },
      { label: 'Write Speed', value: 82, max: 100 },
      { label: 'Latency Score', value: 90, max: 100 },
      { label: 'Gaming FPS Impact', value: 88, max: 100 },
    ],
    specs: [
      { label: 'Capacity', value: '32GB (2x16GB)' },
      { label: 'Speed', value: 'DDR5-7200' },
      { label: 'Latency', value: 'CL30-38-38-76' },
      { label: 'Voltage', value: '1.45V' },
      { label: 'RGB', value: 'Addressable RGB' },
      { label: 'Warranty', value: 'Limited Lifetime' },
    ],
    color: 'purple',
  },
  {
    id: 'quantum-ram-pro-64gb',
    name: 'Quantum RAM Pro',
    shortName: 'Quantum Pro',
    capacity: '64GB (2x32GB)',
    speed: '8000MHz',
    type: 'DDR5',
    latency: 'CL28',
    rgb: true,
    category: ['DDR5', 'Workstation', 'RGB'],
    price: 549.99,
    description:
      'The apex of memory engineering. Quantum RAM Pro delivers 8000MHz workstation-class performance with RGB aesthetics that redefine premium hardware.',
    features: [
      'Industry-leading 8000MHz speed',
      'ECC-compatible reliability for workstations',
      'Patented cryo-cool thermal solution',
      'Auto-overclock XMP 3.0 profiles',
    ],
    benchmarks: [
      { label: 'Read Speed', value: 95, max: 100 },
      { label: 'Write Speed', value: 93, max: 100 },
      { label: 'Latency Score', value: 96, max: 100 },
      { label: 'Gaming FPS Impact', value: 92, max: 100 },
    ],
    specs: [
      { label: 'Capacity', value: '64GB (2x32GB)' },
      { label: 'Speed', value: 'DDR5-8000' },
      { label: 'Latency', value: 'CL28-36-36-72' },
      { label: 'Voltage', value: '1.5V' },
      { label: 'RGB', value: 'Addressable RGB' },
      { label: 'Warranty', value: 'Limited Lifetime' },
    ],
    color: 'blue',
  },
  {
    id: 'neonblade-ddr5-48gb',
    name: 'NeonBlade DDR5',
    shortName: 'NeonBlade',
    capacity: '48GB (2x24GB)',
    speed: '6800MHz',
    type: 'DDR5',
    latency: 'CL32',
    rgb: true,
    category: ['DDR5', 'Gaming', 'RGB'],
    price: 219.99,
    description:
      'Slash through the competition with NeonBlade DDR5. Vibrant RGB lighting with aggressive styling built for gamers who live on the edge.',
    features: [
      '6800MHz gaming-optimized frequency',
      'Dynamic RGB edge lighting',
      'Reinforced DIMM slot compatibility',
      'Low-profile heatsink for cooler clearance',
    ],
    benchmarks: [
      { label: 'Read Speed', value: 78, max: 100 },
      { label: 'Write Speed', value: 75, max: 100 },
      { label: 'Latency Score', value: 82, max: 100 },
      { label: 'Gaming FPS Impact', value: 85, max: 100 },
    ],
    specs: [
      { label: 'Capacity', value: '48GB (2x24GB)' },
      { label: 'Speed', value: 'DDR5-6800' },
      { label: 'Latency', value: 'CL32-40-40-80' },
      { label: 'Voltage', value: '1.4V' },
      { label: 'RGB', value: 'Edge-lit RGB' },
      { label: 'Warranty', value: 'Limited Lifetime' },
    ],
    color: 'cyan',
  },
  {
    id: 'phantom-ddr4-32gb',
    name: 'Phantom DDR4',
    shortName: 'Phantom DDR4',
    capacity: '32GB (2x16GB)',
    speed: '3600MHz',
    type: 'DDR4',
    latency: 'CL16',
    rgb: false,
    category: ['DDR4', 'Gaming'],
    price: 129.99,
    description:
      'Stealth performance at an unbeatable price. Phantom DDR4 delivers rock-solid 3600MHz for gamers building on a budget without sacrificing quality.',
    features: [
      '3600MHz sweet spot for DDR4 gaming',
      'Sleek stealth black heatspreader',
      'Broad motherboard compatibility',
      'XMP 2.0 one-click overclock',
    ],
    benchmarks: [
      { label: 'Read Speed', value: 60, max: 100 },
      { label: 'Write Speed', value: 58, max: 100 },
      { label: 'Latency Score', value: 65, max: 100 },
      { label: 'Gaming FPS Impact', value: 70, max: 100 },
    ],
    specs: [
      { label: 'Capacity', value: '32GB (2x16GB)' },
      { label: 'Speed', value: 'DDR4-3600' },
      { label: 'Latency', value: 'CL16-18-18-38' },
      { label: 'Voltage', value: '1.35V' },
      { label: 'RGB', value: 'None' },
      { label: 'Warranty', value: 'Limited Lifetime' },
    ],
    color: 'purple',
  },
  {
    id: 'spectra-ddr5-64gb-ws',
    name: 'Spectra DDR5 WS',
    shortName: 'Spectra WS',
    capacity: '64GB (4x16GB)',
    speed: '6400MHz',
    type: 'DDR5',
    latency: 'CL32',
    rgb: true,
    category: ['DDR5', 'Workstation', 'RGB'],
    price: 479.99,
    description:
      'Quad-channel workstation dominance. Spectra DDR5 WS is purpose-built for content creators and professionals who demand stability under sustained loads.',
    features: [
      'Quad-channel optimized for thread-heavy workloads',
      '4-stick stability certification',
      'Thermal monitoring sensor onboard',
      'Creator-validated for Adobe Suite & Blender',
    ],
    benchmarks: [
      { label: 'Read Speed', value: 80, max: 100 },
      { label: 'Write Speed', value: 84, max: 100 },
      { label: 'Latency Score', value: 78, max: 100 },
      { label: 'Gaming FPS Impact', value: 72, max: 100 },
    ],
    specs: [
      { label: 'Capacity', value: '64GB (4x16GB)' },
      { label: 'Speed', value: 'DDR5-6400' },
      { label: 'Latency', value: 'CL32-40-40-84' },
      { label: 'Voltage', value: '1.4V' },
      { label: 'RGB', value: 'Addressable RGB' },
      { label: 'Warranty', value: 'Limited Lifetime' },
    ],
    color: 'pink',
  },
  {
    id: 'vortex-ddr4-16gb',
    name: 'Vortex DDR4',
    shortName: 'Vortex DDR4',
    capacity: '16GB (2x8GB)',
    speed: '3200MHz',
    type: 'DDR4',
    latency: 'CL16',
    rgb: false,
    category: ['DDR4', 'Gaming'],
    price: 59.99,
    description:
      'Entry-level performance that punches above its weight. Vortex DDR4 gives you 3200MHz reliability for entry gaming builds.',
    features: [
      '3200MHz reliable performance',
      'Compact heatspreader design',
      'Universal DDR4 compatibility',
      'JEDEC and XMP profiles included',
    ],
    benchmarks: [
      { label: 'Read Speed', value: 45, max: 100 },
      { label: 'Write Speed', value: 42, max: 100 },
      { label: 'Latency Score', value: 55, max: 100 },
      { label: 'Gaming FPS Impact', value: 50, max: 100 },
    ],
    specs: [
      { label: 'Capacity', value: '16GB (2x8GB)' },
      { label: 'Speed', value: 'DDR4-3200' },
      { label: 'Latency', value: 'CL16-18-18-38' },
      { label: 'Voltage', value: '1.35V' },
      { label: 'RGB', value: 'None' },
      { label: 'Warranty', value: 'Limited Lifetime' },
    ],
    color: 'blue',
  },
];

export interface PCComponent {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

export const cpuOptions: PCComponent[] = [
  { id: 'i9-14900k', name: 'Intel Core i9-14900K', category: 'CPU', price: 589, image: '/cpu.png' },
  { id: 'i7-14700k', name: 'Intel Core i7-14700K', category: 'CPU', price: 419, image: '/cpu.png' },
  { id: 'r9-7950x', name: 'AMD Ryzen 9 7950X', category: 'CPU', price: 549, image: '/cpu.png' },
  { id: 'r7-7700x', name: 'AMD Ryzen 7 7700X', category: 'CPU', price: 349, image: '/cpu.png' },
];

export const gpuOptions: PCComponent[] = [
  { id: 'rtx4090', name: 'NVIDIA RTX 4090', category: 'GPU', price: 1599, image: '/gpu.png' },
  { id: 'rtx4080', name: 'NVIDIA RTX 4080 Super', category: 'GPU', price: 999, image: '/gpu.png' },
  { id: 'rx7900xtx', name: 'AMD RX 7900 XTX', category: 'GPU', price: 949, image: '/gpu.png' },
  { id: 'rtx4070ti', name: 'NVIDIA RTX 4070 Ti Super', category: 'GPU', price: 799, image: '/gpu.png' },
];

export const ramOptions: PCComponent[] = [
  { id: 'furyx-32', name: '7thconfig FuryX 32GB DDR5', category: 'RAM', price: 289, image: '/ram.png' },
  { id: 'quantum-64', name: '7thconfig Quantum 64GB DDR5', category: 'RAM', price: 549, image: '/ram.png' },
  { id: 'neonblade-48', name: '7thconfig NeonBlade 48GB DDR5', category: 'RAM', price: 219, image: '/ram.png' },
];

export const storageOptions: PCComponent[] = [
  { id: 'nvme-2tb', name: '7thconfig NVMe Gen5 2TB', category: 'Storage', price: 249, image: '/storage.png' },
  { id: 'nvme-1tb', name: '7thconfig NVMe Gen5 1TB', category: 'Storage', price: 149, image: '/storage.png' },
  { id: 'ssd-2tb', name: '7thconfig SATA SSD 2TB', category: 'Storage', price: 129, image: '/storage.png' },
];

export const coolingOptions: PCComponent[] = [
  { id: 'aio-360', name: '7thconfig Cryo AIO 360mm', category: 'Cooling', price: 199, image: '/cooler.png' },
  { id: 'aio-240', name: '7thconfig Cryo AIO 240mm', category: 'Cooling', price: 149, image: '/cooler.png' },
  { id: 'air-tower', name: '7thconfig Air Tower Pro', category: 'Cooling', price: 89, image: '/cooler.png' },
];

export const moboOptions: PCComponent[] = [
  { id: 'z790-e', name: 'ASUS ROG Z790-E Gaming', category: 'Motherboard', price: 399, image: '/mobo.png' },
  { id: 'x670e-hero', name: 'ASUS ROG X670E Hero', category: 'Motherboard', price: 629, image: '/mobo.png' },
  { id: 'b650-a', name: 'MSI MAG B650 Tomahawk', category: 'Motherboard', price: 219, image: '/mobo.png' },
];
