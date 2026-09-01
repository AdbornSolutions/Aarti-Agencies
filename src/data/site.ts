export const navLinks = [
'Home',
'About Us',
'Products',
'Collections',
'Applications',
'Projects',
'Contact'];


export type Category = {
  index: string;
  name: string;
  blurb: string;
  image: string;
};

export const categories: Category[] = [
{
  index: '01',
  name: 'Decorative Laminates',
  blurb: 'Pattern-led surfaces for feature walls and statement joinery.',
  image: "/9ce7fbc4-5b3b-400b-97de-e601e0add92c.jpg"

},
{
  index: '02',
  name: 'Woodgrain Laminates',
  blurb: 'Faithful grain structures, from pale oak to deep walnut.',
  image: "/2571978b-fd12-40f8-9f6d-5eaba4d67673.jpg"

},
{
  index: '03',
  name: 'Solid Colour Laminates',
  blurb: 'A disciplined palette of neutrals, deep tones and warm whites.',
  image: "/92101459-20a6-45db-a4c3-4733cc03817b.jpg"

},
{
  index: '04',
  name: 'Texture & Finish Laminates',
  blurb: 'Tactile embossing that reads as linen, suede and raw timber.',
  image: "/6bf361c1-92fe-4af3-93e4-41e2ce82b664.jpg"

},
{
  index: '05',
  name: 'Premium Surface Collections',
  blurb: 'Curated editions for hospitality and high-specification interiors.',
  image: "/ee756f37-e1f3-497b-adc5-b4c9a3c28f97.jpg"

}];


export type Texture = {
  name: string;
  caption: string;
  code: string;
  image: string;
  tone: string;
  ink: string;
};

export const textures: Texture[] = [
{
  name: 'Natural Wood',
  caption: 'Warm textures drawn from open-pore timber and slow-grown grain.',
  code: 'AA–104',
  image: "/e99e9369-98e1-4217-880a-9359e801f918.jpg",

  tone: '#241C15',
  ink: '#EFE7DA'
},
{
  name: 'Soft Matte',
  caption: 'Refined elegance with a contemporary, fingerprint-resistant touch.',
  code: 'AA–218',
  image: "/2957d797-ef03-42cf-8af1-8858c87d6e7f.jpg",

  tone: '#171716',
  ink: '#F5F1E8'
},
{
  name: 'Marble Surface',
  caption: 'Luxury-inspired veining for timeless, light-filled interiors.',
  code: 'AA–332',
  image: "/49bcc927-28c1-4d55-b930-df37bf8d286c.jpg",

  tone: '#2A2621',
  ink: '#F5F1E8'
},
{
  name: 'Woven Linen',
  caption: 'A fabric-inspired emboss that softens hard architecture.',
  code: 'AA–407',
  image: "/6bf361c1-92fe-4af3-93e4-41e2ce82b664.jpg",

  tone: '#221E19',
  ink: '#F0E9DC'
},
{
  name: 'Bronze Gloss',
  caption: 'A high-clarity finish that carries light across long spans.',
  code: 'AA–512',
  image: "/ee756f37-e1f3-497b-adc5-b4c9a3c28f97.jpg",

  tone: '#2B2119',
  ink: '#F5EDDF'
}];


export type Strength = {
  index: string;
  title: string;
  description: string;
};

export const strengths: Strength[] = [
{
  index: '01',
  title: 'Premium Quality',
  description:
  'Every sheet is pressed, tested and graded to hold its colour, edge and finish for decades of daily use.'
},
{
  index: '02',
  title: 'Extensive Collection',
  description:
  'Over five thousand décors across woodgrain, stone, solid and textured families — specified from one place.'
},
{
  index: '03',
  title: 'Trusted Expertise',
  description:
  'Two decades of supplying architects, contractors and furniture manufacturers across the region.'
},
{
  index: '04',
  title: 'Modern Designs',
  description:
  'Seasonal décor releases developed alongside interior designers to stay ahead of specification trends.'
},
{
  index: '05',
  title: 'Reliable Service',
  description:
  'Held stock, sampling support and scheduled site delivery that keeps installation programmes on time.'
}];


export type Application = {
  name: string;
  image: string;
  span: string;
};

const kitchen = "/4c4d61ab-7aef-4eac-b3d5-7633a5de1edc.jpg";

const office = "/cb003827-0147-48f2-9818-66353234791d.jpg";

const retail = "/28ffd6af-b887-4af8-a65f-ffd5f2914642.jpg";

const bedroom = "/40d0d71d-62ab-444b-a2ac-b9c53954440e.jpg";

const lobby = "/6685c196-9b05-4b5d-8f8c-60aa3d49bba4.jpg";

const living = "/07485c3d-84e1-4750-959a-5808688b348c.jpg";


export const applications: Application[] = [
{ name: 'Residential Interiors', image: living, span: 'md:col-span-2 md:row-span-2' },
{ name: 'Modular Kitchens', image: kitchen, span: 'md:col-span-2' },
{ name: 'Bedrooms & Wardrobes', image: bedroom, span: '' },
{ name: 'Offices', image: office, span: '' },
{ name: 'Retail Spaces', image: retail, span: 'md:col-span-2' },
{ name: 'Hospitality', image: lobby, span: 'md:col-span-2' }];


export type Project = {
  name: string;
  location: string;
  year: string;
  image: string;
  height: string;
};

export const projects: Project[] = [
{ name: 'Modern Living Room', location: 'Bandra, Mumbai', year: '2025', image: living, height: 'lg:mt-0' },
{ name: 'Contemporary Kitchen', location: 'Koregaon Park, Pune', year: '2025', image: kitchen, height: 'lg:mt-24' },
{ name: 'Luxury Bedroom', location: 'Jubilee Hills, Hyderabad', year: '2024', image: bedroom, height: 'lg:mt-0' },
{ name: 'Executive Office', location: 'BKC, Mumbai', year: '2024', image: office, height: 'lg:mt-24' },
{ name: 'Retail Interior', location: 'Indiranagar, Bengaluru', year: '2024', image: retail, height: 'lg:mt-0' },
{ name: 'Hospitality Space', location: 'Alibaug, Maharashtra', year: '2023', image: lobby, height: 'lg:mt-24' }];


export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
{ value: 22, suffix: '', label: 'Years of experience' },
{ value: 5000, suffix: '+', label: 'Décors in the catalogue' },
{ value: 1000, suffix: '+', label: 'Clients served' },
{ value: 40, suffix: '+', label: 'Cities supplied' }];


export const imagery = {
  hero: living,
  brandStory: "/aaed8cbf-0919-43a6-9ee1-e35498d07969.jpg",

  collectionMain: bedroom,
  collectionTexture: "/e99e9369-98e1-4217-880a-9359e801f918.jpg",

  collectionInterior: kitchen,
  cta: lobby
};