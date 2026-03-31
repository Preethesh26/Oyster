export const MUSHROOM_IMG = 'https://pixabay.com/get/gbd84c23772d96e9d20b39b9337a61e7d90ca7813a3d1a658cc738266b8215783bff493e2c9d07b74405ff7208d63fac9_1920.jpg'
export const ABOUT_IMG    = 'https://pixabay.com/get/gc521352c09a83d3491e0688c7dc381124e92025b4db8a637094039cf7e59877f703ecfd4a5bb2a888c714630a633dc5e_1920.jpg'

export const WHATSAPP_NUMBER = '919019417813'
export const WHATSAPP_MSG    = encodeURIComponent('Hi! I want to order fresh oyster mushrooms from Hima Organic.')

export const varieties = [
  {
    name: 'White Oyster',
    img: MUSHROOM_IMG,
    desc: 'Delicate, mild flavour with a silky texture. Our most popular variety.',
    retail: 120,
    bulk: 90,
    unit: 'kg',
  },
  {
    name: 'Gray Oyster',
    img: ABOUT_IMG,
    desc: 'Earthy, rich umami flavour. Firm texture, great for stir-fries and curries.',
    retail: 110,
    bulk: 85,
    unit: 'kg',
  },
  {
    name: 'Light Gray Oyster',
    img: MUSHROOM_IMG,
    desc: 'Soft, tender caps with a subtle flavour. Perfect for soups and light dishes.',
    retail: 110,
    bulk: 85,
    unit: 'kg',
  },
]

export const growthStages = [
  {
    stage: 1, label: 'Substrate Prep',
    desc: 'Locally sourced paddy straw is soaked, sterilised and packed tightly into grow bags.',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    icon: '🌾', color: '#f5ead8',
  },
  {
    stage: 2, label: 'Spawning',
    desc: 'White oyster mushroom spawn is carefully mixed into the substrate bags under clean conditions.',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    icon: '🧪', color: '#e8f0d8',
  },
  {
    stage: 3, label: 'Mycelium Growth',
    desc: 'Over 15–20 days, white mycelium threads spread through the straw, preparing for fruiting.',
    img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=80',
    icon: '🕸️', color: '#eef4ee',
  },
  {
    stage: 4, label: 'Pinning',
    desc: 'Tiny mushroom pins emerge from the bag openings — the first visible sign of clusters forming.',
    img: 'https://pixabay.com/get/g991c524a477847fcc72610b59c92779b6e8a6d632ba11eb7c7b030eb5492578af91131cd9ec27caa05a3648ad0a74356_1920.jpg',
    icon: '📍', color: '#fdf6ee',
  },
  {
    stage: 5, label: 'Full Harvest',
    desc: 'Fan-shaped clusters reach peak size and are hand-picked fresh — packed and dispatched the same day.',
    img: MUSHROOM_IMG,
    icon: '🍄', color: '#eef4ee',
  },
]

export const features = [
  { icon: '🌱', title: '100% Organic',    desc: 'Cultivated on organic paddy straw — no chemicals, no pesticides, ever.' },
  { icon: '🌊', title: 'Coastal Climate', desc: 'The humid air of Dakshina Kannada creates ideal natural growing conditions.' },
  { icon: '🚚', title: 'Same-Day Fresh',  desc: 'Hand-harvested at peak freshness and dispatched the same day.' },
  { icon: '♻️', title: 'Zero Waste',      desc: 'Spent substrate is composted and returned to local farms.' },
]
