const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Products', href: '/products' },
  { label: 'Collections', href: '/collections' },
  { label: 'Contact', href: '/contact' },
];
const textures = [
  {
    name: 'Natural Wood',
    caption: 'Warm textures drawn from open-pore timber and slow-grown grain.',
    code: 'AA\u2013104',
    image: '/e99e9369-98e1-4217-880a-9359e801f918.jpg',
    tone: '#241C15',
    ink: '#EFE7DA',
  },
  {
    name: 'Soft Matte',
    caption: 'Refined elegance with a contemporary, fingerprint-resistant touch.',
    code: 'AA\u2013218',
    image: '/2957d797-ef03-42cf-8af1-8858c87d6e7f.jpg',
    tone: '#171716',
    ink: '#F5F1E8',
  },
  {
    name: 'Marble Surface',
    caption: 'Luxury-inspired veining for timeless, light-filled interiors.',
    code: 'AA\u2013332',
    image: '/49bcc927-28c1-4d55-b930-df37bf8d286c.jpg',
    tone: '#2A2621',
    ink: '#F5F1E8',
  },
  {
    name: 'Woven Linen',
    caption: 'A fabric-inspired emboss that softens hard architecture.',
    code: 'AA\u2013407',
    image: '/6bf361c1-92fe-4af3-93e4-41e2ce82b664.jpg',
    tone: '#221E19',
    ink: '#F0E9DC',
  },
  {
    name: 'Bronze Gloss',
    caption: 'A high-clarity finish that carries light across long spans.',
    code: 'AA\u2013512',
    image: '/ee756f37-e1f3-497b-adc5-b4c9a3c28f97.jpg',
    tone: '#2B2119',
    ink: '#F5EDDF',
  },
];
const strengths = [
  {
    index: '01',
    title: 'Wide Product Selection',
    description:
      'A diverse range of laminate designs, colours, textures and finishes to meet different customer requirements.',
  },
  {
    index: '02',
    title: 'Wholesale Expertise',
    description:
      'A strong focus on the B2B and trade market, with solutions designed around dealer and professional requirements.',
  },
  {
    index: '03',
    title: 'Vidarbha Focus',
    description:
      'Strategically based in Nagpur, with a business focus on serving customers throughout Vidarbha.',
  },
  {
    index: '04',
    title: 'Reliable Supply',
    description:
      'We work towards maintaining product availability and efficient order fulfilment for our trade partners.',
  },
  {
    index: '05',
    title: 'Competitive Value',
    description:
      'Our objective is to offer the right combination of product quality, selection and competitive wholesale value.',
  },
  {
    index: '06',
    title: 'Long-Term Relationships',
    description:
      'We believe our growth is directly connected to the success of our customers and dealers.',
  },
];
const kitchen = '/4c4d61ab-7aef-4eac-b3d5-7633a5de1edc.jpg';
const office = '/cb003827-0147-48f2-9818-66353234791d.jpg';
const retail = '/28ffd6af-b887-4af8-a65f-ffd5f2914642.jpg';
const bedroom = '/40d0d71d-62ab-444b-a2ac-b9c53954440e.jpg';
const lobby = '/6685c196-9b05-4b5d-8f8c-60aa3d49bba4.jpg';
const living = '/07485c3d-84e1-4750-959a-5808688b348c.jpg';
const applications = [
  { name: 'Residential Interiors', image: living, span: 'md:col-span-2 md:row-span-2' },
  { name: 'Modular Kitchens', image: kitchen, span: 'md:col-span-2' },
  { name: 'Bedrooms & Wardrobes', image: bedroom, span: '' },
  { name: 'Offices', image: office, span: '' },
  { name: 'Retail Spaces', image: retail, span: 'md:col-span-2' },
  { name: 'Hospitality', image: lobby, span: 'md:col-span-2' },
];
const projects = [
  { name: 'Living Spaces', category: 'Residential interiors', image: living, height: 'lg:mt-0' },
  {
    name: 'Modular Kitchens',
    category: 'Furniture applications',
    image: kitchen,
    height: 'lg:mt-24',
  },
  {
    name: 'Bedrooms & Wardrobes',
    category: 'Residential interiors',
    image: bedroom,
    height: 'lg:mt-0',
  },
  {
    name: 'Professional Workspaces',
    category: 'Commercial interiors',
    image: office,
    height: 'lg:mt-24',
  },
  {
    name: 'Retail Environments',
    category: 'Commercial interiors',
    image: retail,
    height: 'lg:mt-0',
  },
  {
    name: 'Hospitality Spaces',
    category: 'Interior applications',
    image: lobby,
    height: 'lg:mt-24',
  },
];
const imagery = {
  hero: living,
  brandStory: '/aaed8cbf-0919-43a6-9ee1-e35498d07969.jpg',
  collectionMain: bedroom,
  collectionTexture: '/e99e9369-98e1-4217-880a-9359e801f918.jpg',
  collectionInterior: kitchen,
  cta: lobby,
};
export { applications, imagery, navLinks, projects, strengths, textures };
