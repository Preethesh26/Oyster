// All images from Unsplash (free, hotlink-friendly)
export const MUSHROOM_IMG = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80'
export const ABOUT_IMG    = 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80'

export const WHATSAPP_NUMBER = '919019417813'
export const WHATSAPP_MSG    = encodeURIComponent('Hi! I want to order fresh oyster mushrooms from Hima Organic.')

export const varieties = [
  {
    name: 'White Oyster',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    desc: 'Delicate, mild flavour with a silky texture. Our most popular variety.',
    retail: 120,
    bulk: 90,
    unit: 'kg',
  },
  {
    name: 'Gray Oyster',
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80',
    desc: 'Earthy, rich umami flavour. Firm texture, great for stir-fries and curries.',
    retail: 110,
    bulk: 85,
    unit: 'kg',
  },
  {
    name: 'Light Gray Oyster',
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80',
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
    img: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=600&q=80',
    icon: '📍', color: '#fdf6ee',
  },
  {
    stage: 5, label: 'Full Harvest',
    desc: 'Fan-shaped clusters reach peak size and are hand-picked fresh — packed and dispatched the same day.',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    icon: '🍄', color: '#eef4ee',
  },
]

export const features = [
  { icon: '🌱', title: '100% Organic',    desc: 'Cultivated on organic paddy straw — no chemicals, no pesticides, ever.' },
  { icon: '🌊', title: 'Coastal Climate', desc: 'The humid air of Dakshina Kannada creates ideal natural growing conditions.' },
  { icon: '🚚', title: 'Same-Day Fresh',  desc: 'Hand-harvested at peak freshness and dispatched the same day.' },
  { icon: '♻️', title: 'Zero Waste',      desc: 'Spent substrate is composted and returned to local farms.' },
]
