// ─────────────────────────────────────────────────────────────
// Single source of truth. Everything below comes from the invitation card.
// Anything wrapped in [square brackets] is a PLACEHOLDER for you to fill in.
// ─────────────────────────────────────────────────────────────
const asset = (p) => `${import.meta.env.BASE_URL}images/${p}`

export const couple = {
  groom: 'Aayush',
  bride: 'Bridhi',
  monogram: 'B A',
  blessing: '|| Om Shree Ganeshay Namah ||',
  hosts: 'Bindu and Prakash Somani',
  message: 'request your gracious presence at the wedding celebrations of their son.',
  groomFamily: 'GS/O Smt. Sita Devi Somani and Shri Shyam lal Somani',
  brideFamily: 'GD/O Smt Sushila Tibrewal & Lt. Shri Bishwanath Tibrewal',
  dateText: '23 & 24 November 2026',
  closing: 'The Somani & Tibrewal families eagerly await to celebrate with you.',
}

export const venue = {
  name: 'The Marutinandan Grand',
  city: 'Nathdwara',
  address: '[Add full street address]', // card lists only name + city
  mapsQuery: 'The Marutinandan Grand Nathdwara',
}
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venue.mapsQuery)}`
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(venue.mapsQuery)}&output=embed`

// Countdown target = first ceremony (Vinayak Sthapna). +05:30 assumes India time; change if needed.
export const countdownTarget = '2026-11-23T09:15:00+05:30'
export const countdownLabel = 'until the celebrations begin'

// Listed in chronological order. `time` is shown exactly as printed on the card.
export const events = [
  { id: 'vinayak-sthapna', name: 'Vinayak Sthapna', start: '2026-11-23T09:15:00+05:30', time: '9:15 AM', spot: 'Vinayak Sthapna Room', accent: '#B8862B', icon: 'flower', image: asset('cards/vinayak-sthapna.jpg') },
  { id: 'mangal-kalash', name: 'Mangal Kalash', start: '2026-11-23T10:00:00+05:30', time: '10:00 AM', spot: 'The Marutinandan Grand, Entrance', accent: '#B8862B', icon: 'kalash', image: asset('cards/mangal-kalash.jpg') },
  { id: 'baarat', name: 'Baarat', start: '2026-11-23T10:00:00+05:30', time: '10:00 AM', spot: 'The Marutinandan Grand', accent: '#9B2C2C', icon: 'horse', image: asset('cards/baarat.jpg') },
  { id: 'haldi', name: 'Haldi', start: '2026-11-23T12:30:00+05:30', time: '12:30 PM', spot: 'Main Lawn', accent: '#C98A00', icon: 'sun', image: asset('cards/haldi.jpg') },
  { id: 'sangeet', name: 'Sangeet', start: '2026-11-23T18:30:00+05:30', time: '6:30 PM', spot: 'Main Lawn', accent: '#8C1D3F', icon: 'music', image: asset('cards/sangeet.jpg') },
  { id: 'mayra', name: 'Mayra', start: '2026-11-24T10:00:00+05:30', time: '10 AM', spot: 'Banquet Hall', accent: '#C2447A', icon: 'flower', image: asset('cards/mayra.jpg') },
  { id: 'reception', name: 'Reception', start: '2026-11-24T19:00:00+05:30', time: '7 PM', spot: 'Main Lawn', accent: '#8C1D3F', icon: 'lamp', image: asset('cards/reception-phera.jpg') },
  { id: 'phera', name: 'Phera', start: '2026-11-24T23:30:00+05:30', time: '11:30 PM', spot: 'Poolside', accent: '#A6192E', icon: 'fire', image: asset('cards/reception-phera.jpg') },
]

export const blessings = [
  'Smt. Sita Devi & Shri Shyamlal Somani',
  'Smt. Shalini & Shri Kamal Somani',
  'Smt. Asha & Shri Ashok Inani',
  'Smt. Jashoda Devi & Shri Madhav Lal Jhanwar',
  'Smt. Saroj & Shri Ashish Jhanwar',
  'Smt. Kusum & Shri Dinesh Inani',
]
export const firm = { label: 'Firm Name', name: 'Vinayak Auto Parts' }
export const bestWishes = 'Ishika, Kanishk'

// Our Story: leave `bio` empty to show the placeholder.
export const story = {
  groom: { name: 'Aayush', line: 'Son of Bindu and Prakash Somani', family: couple.groomFamily, bio: '', photo: '' },
  bride: { name: 'Bridhi', line: '', family: couple.brideFamily, bio: '', photo: '' },
}

// Gallery: add a real photo by setting `src` (put files in public/images/gallery/).
export const gallery = [
  { label: 'Couple portrait', src: '', shape: 'tall' },
  { label: 'Pre-wedding', src: '', shape: 'wide' },
  { label: 'The families', src: '', shape: '' },
  { label: 'Pre-wedding', src: '', shape: '' },
  { label: 'Ceremony', src: '', shape: 'tall' },
  { label: 'Celebration', src: '', shape: '' },
  { label: 'Wedding moments', src: '', shape: 'wide' },
  { label: 'Details', src: '', shape: '' },
]

// Card pages shown on the Invitation page.
export const cardPages = [
  { src: asset('cards/cover.jpg'), alt: 'Cover: Aayush weds Bridhi' },
  { src: asset('cards/invite.jpg'), alt: 'Invitation from Bindu and Prakash Somani' },
  { src: asset('cards/vinayak-sthapna.jpg'), alt: 'Vinayak Sthapna, 9:15 AM, 23 Nov 2026' },
  { src: asset('cards/mangal-kalash.jpg'), alt: 'Mangal Kalash, 10:00 AM, 23 Nov 2026' },
  { src: asset('cards/baarat.jpg'), alt: 'Baarat, 10:00 AM, 23 Nov 2026' },
  { src: asset('cards/haldi.jpg'), alt: 'Haldi, 12:30 PM, 23 Nov 2026' },
  { src: asset('cards/sangeet.jpg'), alt: 'Sangeet, 6:30 PM, 23 Nov 2026' },
  { src: asset('cards/mayra.jpg'), alt: 'Mayra, 10 AM, 24 Nov 2026' },
  { src: asset('cards/reception-phera.jpg'), alt: 'Reception 7 PM and Phera 11:30 PM, 24 Nov 2026' },
  { src: asset('cards/blessings.jpg'), alt: 'With the blessings of the family' },
]

// RSVP: the form is a front-end demo. Add a WhatsApp number (digits with country code)
// or an email below and replies can be sent from the guest's own device after submitting.
export const rsvp = { whatsapp: '', email: '' }

// Contact: the card prints no phone numbers or addresses, so these are placeholders.
export const contacts = [
  { who: 'Groom’s family (Somani)', phone: '[Add phone number]' },
  { who: 'Bride’s family (Tibrewal)', phone: '[Add phone number]' },
]

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Our Story' },
  { id: 'events', label: 'Events' },
  { id: 'venue', label: 'Venue' },
]

export const formatDay = (iso) =>
  new Date(iso).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' })
export const dayKey = (iso) => iso.slice(0, 10)
