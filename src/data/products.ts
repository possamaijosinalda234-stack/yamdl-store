import type { Product, Category } from '@/types';

// 产品图片 URLs
const IMAGES = {
  // 产品图
  keyboardBlackberry: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/a9ab.png?auth_key=8acae6eb8379979b056bc42bba874c10f08694347edcd5f4bfc2819afdf2c470',
  mouseBeige: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/1768.png?auth_key=b8c189a16fe8c742943d5693ef340c4596fa8e1d51ddf5163c96d0063dae5484',
  monitorCurved: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/ec20.png?auth_key=b1dd4a384df356c355597348c12726915212e92aef9ad5b7b4efff69321fc190',
  mouseMagenta: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/75f6.png?auth_key=f433338b13cac18525cb603e6af91a87efc386eab13da145d164e1a2527d92a5',
  keyboardGray: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/b344.png?auth_key=bfad8f673d01d0f1c65a01585c07ec6e4587ecd7273b638e5d3518fb62f8ab24',
  mouseKhaki: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/0184.png?auth_key=ca34292f670e5f058a5fbe704304af3977780297166c301aad69e82686d3e150',
  comboSet: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/3ecf.png?auth_key=5473de7fc6baf33bd8aac943bde2f500d4b87188b62221ffd817e780089c6297',
  monitorGaming: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/be92.png?auth_key=b17d307fd1fe2d569e3a6a04dbb062d5688e5baf49bee596afe29ab34412557f',
  keyboardKhaki: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/75e5.png?auth_key=3769f39448abf16378ca7ad80486e0c2963b6e8d0d8e32cff40b5b06b587b361',
  mouseRGB: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/e53c.png?auth_key=1b53455add284ac40d27391d746318fd23c2ff6a2627aa39937cec373befb84c',
  // 新商品图片
  keyboardWhite: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/d8d6.png?auth_key=c67ad8d5c05308f85efb8bfa2219eb05adc49b06cdbd4159609bcd58fd579c43',
  mouseVertical: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/9774.png?auth_key=c381c9336eb7f7133a39d926b74167b9db4665bf7e0a5f3aa4c94c9ae3b58812',
  monitor4K: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/2d1c.png?auth_key=230a06c4cf1c6f436ff7e1b905df9c4d66f4f8c51ea4ba8cf80719d4e5e63e3a',
  keyboardCompact: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/3567.png?auth_key=6abf19cfb0d85743dd9151700b94fcf9fb404e5e186e9ca8058e31101b924a2d',
  mouseHoneycomb: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/779a.png?auth_key=3a842694b78412f4f03953510adff78e5bc15dbfd8b23e4c38df6178157dd4c5',
  // 分类图
  heroBanner: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/7f83.png?auth_key=3656086a86f4f811da582a728f94b82a36c467010ff3fc38ff6744a17c7c5794',
  categoryMonitor: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/f6d5.png?auth_key=9c53ec67aa3af3a42bcee2a53fb6ef9647d2b511ad9babfd92e36b78303cea52',
  categoryKeyboard: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/68d5.png?auth_key=a988239dd8f5bf1be6b519ff723120efeba0b848002ee8c45a0675eb0a5981c5',
  categoryMouse: '//g.cdn.meoo.host/agent-generated-images/aoe6zxx37kdr/e0b4.png?auth_key=7b1329699b9a12fa674c386b014ecbd1c03b8da1c49bbc08f867edb6fe39dbe3',
};

export const categories: Category[] = [
  {
    id: 'monitor',
    name: 'Computer Monitor',
    image: IMAGES.categoryMonitor,
    slug: 'computer-monitor',
  },
  {
    id: 'mouse',
    name: 'Computer Mouse',
    image: IMAGES.categoryMouse,
    slug: 'computer-mouse',
  },
  {
    id: 'keyboard',
    name: 'Computer Keyboard',
    image: IMAGES.categoryKeyboard,
    slug: 'computer-keyboard',
  },
];

export const products: Product[] = [
  {
    id: 'blackberry-mechanical-keyboard',
    name: 'BlackBerry Mechanical Keyboard',
    price: 258.00,
    image: IMAGES.keyboardBlackberry,
    images: [IMAGES.keyboardBlackberry, IMAGES.keyboardBlackberry, IMAGES.keyboardBlackberry],
    category: 'Computer Keyboard',
    categoryId: 'keyboard',
    description: 'Precision Meets Personality. Elevate your workspace with a mechanical keyboard designed for performance, comfort, and style.',
    inStock: true,
    badge: 'Hot',
    features: [
      {
        title: 'Premium Build Quality',
        description: 'Crafted with a durable aluminum frame and high-quality PBT keycaps, this keyboard is built to withstand millions of keystrokes.',
        highlights: ['CNC-machined aluminum case', 'Durable PBT double-shot keycaps', 'Fade-resistant legends', 'Premium matte finish'],
      },
      {
        title: 'Smooth Mechanical Performance',
        description: 'Experience responsive, tactile feedback with every keystroke. Pre-lubed switches provide a smoother, quieter typing experience.',
        highlights: ['Mechanical switches', 'Fast actuation response', 'Reduced key wobble', 'Enhanced typing comfort'],
      },
      {
        title: 'Dynamic RGB Lighting',
        description: 'Personalize your setup with vibrant RGB illumination and multiple lighting effects.',
        highlights: ['16.8 million colors', 'Multiple animation modes', 'Adjustable brightness', 'Custom lighting profiles'],
      },
      {
        title: 'Compact & Efficient Layout',
        description: 'The space-saving design maximizes desk space while retaining essential keys.',
        highlights: ['Compact 98% layout', 'More room for mouse movement', 'Improved desktop organization', 'Ideal for home or office'],
      },
    ],
    specifications: [
      { label: 'Layout', value: '98% Compact' },
      { label: 'Keycap Material', value: 'PBT Double-Shot' },
      { label: 'Switch Type', value: 'Mechanical' },
      { label: 'Backlight', value: 'RGB' },
      { label: 'Connection', value: 'USB Type-C' },
      { label: 'Compatibility', value: 'Windows / macOS / Linux' },
      { label: 'Frame Material', value: 'Aluminum Alloy' },
    ],
  },
  {
    id: 'bluetooth-keyboard-gray',
    name: 'Bluetooth Computer Keyboard (Gray)',
    price: 128.00,
    originalPrice: 158.00,
    image: IMAGES.keyboardGray,
    images: [IMAGES.keyboardGray, IMAGES.keyboardGray, IMAGES.keyboardGray],
    category: 'Computer Keyboard',
    categoryId: 'keyboard',
    description: 'Sleek and modern Bluetooth keyboard in elegant gray. Perfect for minimalist workspaces.',
    inStock: true,
    features: [
      {
        title: 'Wireless Freedom',
        description: 'Connect seamlessly via Bluetooth to multiple devices.',
        highlights: ['Bluetooth 5.0', 'Multi-device pairing', '30-day battery life', 'Auto-sleep mode'],
      },
    ],
    specifications: [
      { label: 'Connection', value: 'Bluetooth 5.0' },
      { label: 'Battery', value: 'Rechargeable Li-ion' },
      { label: 'Compatibility', value: 'Windows / macOS / iOS / Android' },
    ],
  },
  {
    id: 'bluetooth-keyboard-khaki',
    name: 'Bluetooth Computer Keyboard (Khaki)',
    price: 128.00,
    image: IMAGES.keyboardKhaki,
    images: [IMAGES.keyboardKhaki, IMAGES.keyboardKhaki, IMAGES.keyboardKhaki],
    category: 'Computer Keyboard',
    categoryId: 'keyboard',
    description: 'Stylish khaki-colored Bluetooth keyboard with retro-modern design aesthetics.',
    inStock: true,
    features: [
      {
        title: 'Retro Modern Design',
        description: 'Unique khaki colorway brings warmth to your workspace.',
        highlights: ['Vintage-inspired aesthetics', 'Warm color palette', 'Compact form factor', 'Premium build'],
      },
    ],
    specifications: [
      { label: 'Connection', value: 'Bluetooth 5.0' },
      { label: 'Battery', value: 'Rechargeable Li-ion' },
      { label: 'Compatibility', value: 'Windows / macOS / iOS / Android' },
    ],
  },
  {
    id: 'creamy-beige-mouse',
    name: 'Creamy Beige Wireless Office Mouse',
    price: 68.00,
    image: IMAGES.mouseBeige,
    images: [IMAGES.mouseBeige, IMAGES.mouseBeige, IMAGES.mouseBeige],
    category: 'Computer Mouse',
    categoryId: 'mouse',
    description: 'Elegant wireless mouse in creamy beige, designed for comfortable all-day office use.',
    inStock: true,
    badge: 'New',
    features: [
      {
        title: 'Ergonomic Design',
        description: 'Contoured shape fits naturally in your hand for extended comfort.',
        highlights: ['Ergonomic grip', 'Silent clicking', 'Precision tracking', 'Long battery life'],
      },
    ],
    specifications: [
      { label: 'DPI', value: '1600' },
      { label: 'Connection', value: '2.4GHz Wireless' },
      { label: 'Battery', value: 'AA Battery (included)' },
    ],
  },
  {
    id: 'curved-ultrawide-monitor',
    name: 'Curved Ultra-Wide Gaming Monitor',
    price: 758.00,
    image: IMAGES.monitorCurved,
    images: [IMAGES.monitorCurved, IMAGES.monitorCurved, IMAGES.monitorCurved],
    category: 'Computer Monitor',
    categoryId: 'monitor',
    description: 'Immersive curved ultra-wide monitor for gaming and productivity.',
    inStock: true,
    badge: 'Best Seller',
    features: [
      {
        title: 'Immersive Display',
        description: 'Curved screen wraps around your field of view for deeper immersion.',
        highlights: ['34-inch curved panel', '144Hz refresh rate', '1ms response time', 'HDR support'],
      },
    ],
    specifications: [
      { label: 'Size', value: '34 inches' },
      { label: 'Resolution', value: '3440 x 1440' },
      { label: 'Refresh Rate', value: '144Hz' },
      { label: 'Panel Type', value: 'VA' },
    ],
  },
  {
    id: 'keyboard-mouse-headset-combo',
    name: 'Keyboard + Mouse + Headset Combo',
    price: 388.00,
    originalPrice: 458.00,
    image: IMAGES.comboSet,
    images: [IMAGES.comboSet, IMAGES.comboSet, IMAGES.comboSet],
    category: 'Computer Accessories',
    categoryId: 'accessories',
    description: 'Complete gaming setup with matching keyboard, mouse, and headset.',
    inStock: true,
    badge: 'Bundle',
    features: [
      {
        title: 'Complete Setup',
        description: 'Everything you need for gaming or work in one package.',
        highlights: ['Mechanical keyboard', 'RGB gaming mouse', 'Surround sound headset', 'Matching design'],
      },
    ],
    specifications: [
      { label: 'Keyboard', value: 'Mechanical RGB' },
      { label: 'Mouse DPI', value: '12000' },
      { label: 'Headset', value: '7.1 Surround' },
    ],
  },
  {
    id: 'office-gaming-monitor',
    name: 'Office Game Curved Monitor',
    price: 458.00,
    image: IMAGES.monitorGaming,
    images: [IMAGES.monitorGaming, IMAGES.monitorGaming, IMAGES.monitorGaming],
    category: 'Computer Monitor',
    categoryId: 'monitor',
    description: 'Versatile curved monitor perfect for both office work and casual gaming.',
    inStock: true,
    features: [
      {
        title: 'Dual Purpose Design',
        description: 'Optimized for productivity during work hours and gaming after.',
        highlights: ['100Hz refresh rate', 'Eye care technology', 'Adjustable stand', 'Multiple ports'],
      },
    ],
    specifications: [
      { label: 'Size', value: '27 inches' },
      { label: 'Resolution', value: '2560 x 1440' },
      { label: 'Refresh Rate', value: '100Hz' },
    ],
  },
  {
    id: 'rgb-gaming-mouse',
    name: 'RGB Lightweight Wireless Gaming Mouse',
    price: 88.00,
    image: IMAGES.mouseRGB,
    images: [IMAGES.mouseRGB, IMAGES.mouseRGB, IMAGES.mouseRGB],
    category: 'Computer Mouse',
    categoryId: 'mouse',
    description: 'Ultra-lightweight wireless gaming mouse with customizable RGB lighting.',
    inStock: true,
    features: [
      {
        title: 'Lightweight Performance',
        description: 'Featherlight design for lightning-fast movements.',
        highlights: ['58g ultra-lightweight', 'PixArt sensor', 'RGB lighting', 'Wireless freedom'],
      },
    ],
    specifications: [
      { label: 'Weight', value: '58g' },
      { label: 'DPI', value: '16000' },
      { label: 'Connection', value: '2.4GHz / Bluetooth' },
    ],
  },
  {
    id: 'simple-fashionable-keyboard',
    name: 'Simple Fashionable Computer Keyboard',
    price: 98.00,
    image: IMAGES.keyboardGray,
    images: [IMAGES.keyboardGray, IMAGES.keyboardGray, IMAGES.keyboardGray],
    category: 'Computer Keyboard',
    categoryId: 'keyboard',
    description: 'Minimalist keyboard design that complements any modern workspace.',
    inStock: true,
    features: [
      {
        title: 'Minimalist Aesthetic',
        description: 'Clean lines and simple design for the modern professional.',
        highlights: ['Slim profile', 'Quiet typing', 'Plug and play', 'Durable build'],
      },
    ],
    specifications: [
      { label: 'Type', value: 'Membrane' },
      { label: 'Connection', value: 'USB Wired' },
      { label: 'Layout', value: 'Full Size' },
    ],
  },
  {
    id: 'vibrant-magenta-mouse',
    name: 'Vibrant Magenta Wireless Gaming Mouse',
    price: 78.00,
    image: IMAGES.mouseMagenta,
    images: [IMAGES.mouseMagenta, IMAGES.mouseMagenta, IMAGES.mouseMagenta],
    category: 'Computer Mouse',
    categoryId: 'mouse',
    description: 'Stand out with this bold magenta wireless gaming mouse.',
    inStock: true,
    badge: 'Popular',
    features: [
      {
        title: 'Bold Design',
        description: 'Vibrant magenta color makes a statement on any desk.',
        highlights: ['Eye-catching color', 'RGB accents', 'Ergonomic shape', 'Wireless connectivity'],
      },
    ],
    specifications: [
      { label: 'DPI', value: '12000' },
      { label: 'Connection', value: '2.4GHz Wireless' },
      { label: 'Battery', value: 'Rechargeable' },
    ],
  },
  // 新商品 - AUD 价格
  {
    id: 'premium-white-keyboard',
    name: 'Premium White Wireless Mechanical Keyboard',
    price: 299,
    image: IMAGES.keyboardWhite,
    images: [IMAGES.keyboardWhite, IMAGES.keyboardWhite, IMAGES.keyboardWhite],
    category: 'Computer Keyboard',
    categoryId: 'keyboard',
    description: 'Elegant white wireless mechanical keyboard with premium build quality and RGB lighting.',
    inStock: true,
    badge: 'New',
    features: [
      {
        title: 'Premium Design',
        description: 'Sleek white and silver design with customizable RGB lighting.',
        highlights: ['White & silver finish', 'RGB backlighting', 'Wireless connectivity', 'Compact 75% layout'],
      },
    ],
    specifications: [
      { label: 'Price', value: '299 AUD' },
      { label: 'Layout', value: '75% Compact' },
      { label: 'Connection', value: 'Bluetooth / 2.4GHz' },
      { label: 'Backlight', value: 'RGB' },
    ],
  },
  {
    id: 'ergonomic-vertical-mouse',
    name: 'Ergonomic Vertical Wireless Mouse',
    price: 199,
    image: IMAGES.mouseVertical,
    images: [IMAGES.mouseVertical, IMAGES.mouseVertical, IMAGES.mouseVertical],
    category: 'Computer Mouse',
    categoryId: 'mouse',
    description: 'Vertical ergonomic mouse designed to reduce wrist strain and improve comfort.',
    inStock: true,
    badge: 'New',
    features: [
      {
        title: 'Ergonomic Design',
        description: 'Vertical grip reduces wrist pressure for all-day comfort.',
        highlights: ['Vertical grip', 'Wrist-friendly', 'Wireless freedom', 'Matte black finish'],
      },
    ],
    specifications: [
      { label: 'Price', value: '199 AUD' },
      { label: 'DPI', value: '3200' },
      { label: 'Connection', value: '2.4GHz Wireless' },
      { label: 'Battery', value: 'Rechargeable' },
    ],
  },
  // 新商品 - SGD 价格
  {
    id: '4k-ultra-hd-monitor',
    name: '4K Ultra HD IPS Gaming Monitor',
    price: 268,
    image: IMAGES.monitor4K,
    images: [IMAGES.monitor4K, IMAGES.monitor4K, IMAGES.monitor4K],
    category: 'Computer Monitor',
    categoryId: 'monitor',
    description: 'Stunning 4K Ultra HD monitor with IPS panel and thin bezels for immersive viewing.',
    inStock: true,
    badge: 'New',
    features: [
      {
        title: '4K Clarity',
        description: 'Crystal clear 4K resolution with vibrant IPS colors.',
        highlights: ['4K UHD resolution', 'IPS panel', 'Thin bezels', 'Adjustable stand'],
      },
    ],
    specifications: [
      { label: 'Price', value: '268 SGD' },
      { label: 'Resolution', value: '3840 x 2160' },
      { label: 'Panel', value: 'IPS' },
      { label: 'Size', value: '27 inches' },
    ],
  },
  {
    id: 'compact-60-keyboard',
    name: 'Compact 60% Hot-Swappable Keyboard',
    price: 178,
    image: IMAGES.keyboardCompact,
    images: [IMAGES.keyboardCompact, IMAGES.keyboardCompact, IMAGES.keyboardCompact],
    category: 'Computer Keyboard',
    categoryId: 'keyboard',
    description: 'Ultra-compact 60% keyboard with hot-swappable switches for customization.',
    inStock: true,
    badge: 'New',
    features: [
      {
        title: 'Compact & Customizable',
        description: 'Tiny footprint with hot-swappable switches for easy customization.',
        highlights: ['60% layout', 'Hot-swappable', 'White keycaps', 'Minimalist design'],
      },
    ],
    specifications: [
      { label: 'Price', value: '178 SGD' },
      { label: 'Layout', value: '60% Compact' },
      { label: 'Switches', value: 'Hot-swappable' },
      { label: 'Connection', value: 'USB Type-C' },
    ],
  },
  {
    id: 'honeycomb-gaming-mouse',
    name: 'Ultra-Lightweight Honeycomb Gaming Mouse',
    price: 128,
    image: IMAGES.mouseHoneycomb,
    images: [IMAGES.mouseHoneycomb, IMAGES.mouseHoneycomb, IMAGES.mouseHoneycomb],
    category: 'Computer Mouse',
    categoryId: 'mouse',
    description: 'Featherlight honeycomb shell gaming mouse with RGB lighting.',
    inStock: true,
    badge: 'New',
    features: [
      {
        title: 'Ultra-Lightweight',
        description: 'Honeycomb design reduces weight while maintaining durability.',
        highlights: ['Honeycomb shell', 'Ultra-lightweight', 'RGB lighting', 'Gaming grade sensor'],
      },
    ],
    specifications: [
      { label: 'Price', value: '128 SGD' },
      { label: 'Weight', value: '58g' },
      { label: 'DPI', value: '16000' },
      { label: 'Connection', value: 'Wired USB' },
    ],
  },
];

export const heroBanner = IMAGES.heroBanner;

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(p => p.categoryId === categoryId);
};

export const getHotProducts = (): Product[] => {
  return products.filter(p => p.badge);
};
