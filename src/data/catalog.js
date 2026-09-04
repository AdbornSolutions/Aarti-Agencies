const productImageModules = import.meta.glob('../assetss/Products/**/*.{jpg,jpeg,png,webp}', {
  import: 'default',
});

const cataloguePdfModules = import.meta.glob('../assetss/Products/*.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
});

const catalogueDefinitions = [
  { folder: 'Acrylica_2026_Product_Images (1)', name: 'Acrylica 2026', pdfMatch: 'ACRYLICA_FINAL', focus: 'Premium acrylic laminates', brief: 'A focused acrylic collection spanning marble, matt, gloss, sparkle and mirror surfaces for contemporary vertical cabinetry, wardrobes and decorative panels.' },
  { folder: 'Salient_Mica_Vol6_Product_Images', name: 'Salient Mica Vol. 6', pdfMatch: 'Salient Mica_Vol-6', focus: 'Decorative surface library', brief: 'A broad decorative laminate portfolio combining fluted, jute, wood, stone, concrete, high-gloss, veneer, suede and coordinated solid finishes.' },
  { folder: 'Sayaji_1mm_2026_Product_Images', name: 'Sayaji 1.00 MM 2026', pdfMatch: 'Sayaji_1mm (2026)', focus: '1.00 mm high-pressure laminates', brief: 'A versatile 1.00 mm surface collection covering synchronized textures, stone and marble looks, woodgrains, louvers, metallics, velvet, suede and solid colours.' },
  { folder: 'Sayaji_Project_2026_Product_Images', name: 'Sayaji Project 2026', pdfMatch: 'Sayaji Project_2026', focus: 'Wood Grains Premium', brief: 'A timber-led collection of teak, walnut, oak, ash, cherry and pine designs, supported by neutral coordinating shades for furniture and interior joinery.' },
  { folder: 'Shade_Me_2026_Product_Images', name: 'Shade Me 2026', pdfMatch: 'Shade Me_2026', focus: 'Texture and finish collection', brief: 'An expressive surface edit featuring liquid metal, wood panels, cement and stone effects, acrylic colours, geometric blocks, flutes, matt finishes and polished veneer.' },
];

const categoryTemplates = [
  { slug: 'woodgrain-veneer', name: 'Woodgrain & Veneer', shortName: 'Woodgrain', keywords: ['WOOD', 'VENEER', 'OAK', 'TEAK', 'ASH', 'LOUVER', 'PANEL'] },
  { slug: 'stone-marble-cement', name: 'Stone, Marble & Cement', shortName: 'Stone & Marble', keywords: ['STONE', 'MARBLE', 'CEMENT', 'CRETE', 'TRAVERTINE'] },
  { slug: 'fluted-linear', name: 'Fluted & Linear', shortName: 'Fluted', keywords: ['FLUTE', 'LINE', 'CHANNEL', 'CROSS', 'ANGLE', 'BLOCK', 'CUBE'] },
  { slug: 'acrylic-high-gloss', name: 'Acrylic & High Gloss', shortName: 'Acrylic', keywords: ['ACRYLIC', 'ACRYLLIC', 'GLOSS', 'SPARKLE', 'SHINY', 'SHINE'] },
  { slug: 'matt-velvet-suede', name: 'Matt, Velvet & Suede', shortName: 'Matt & Suede', keywords: ['MATT', 'VELVET', 'SUEDE', 'CHIFFON'] },
  { slug: 'metal-mirror', name: 'Metal & Mirror', shortName: 'Metal & Mirror', keywords: ['METAL', 'MIRROR'] },
  { slug: 'solid-pastel-colours', name: 'Solid & Pastel Colours', shortName: 'Solid Colours', keywords: ['SOLID', 'PASTEL', 'COLOUR', 'COLOR', 'CLASSIC', 'FINISH'] },
];

const classificationPriority = [
  'fluted-linear',
  'stone-marble-cement',
  'acrylic-high-gloss',
  'matt-velvet-suede',
  'metal-mirror',
  'solid-pastel-colours',
  'woodgrain-veneer',
];

const categoryOrder = new Map(
  [...categoryTemplates.map(({ slug }) => slug), 'designer-surfaces'].map((slug, index) => [
    slug,
    index,
  ]),
);

const titleCase = (value) =>
  value.toLowerCase().replace(/(^|[\s-])\p{L}/gu, (letter) => letter.toUpperCase());

const getCatalogue = (path) =>
  catalogueDefinitions.find(({ folder }) => path.includes(`/${folder}/`));

const getSeries = (path, catalogue) => {
  const parts = path.split('/');
  const catalogueIndex = parts.findIndex((part) => part === catalogue.folder);
  const rawFolder = parts[catalogueIndex + 1] || 'Collection';
  let tokens = rawFolder.replace(/^\d+_/, '').split('_');

  if (catalogue.folder === 'Sayaji_1mm_2026_Product_Images' && tokens.length > 1) {
    tokens = tokens.slice(1);
  }

  return titleCase(tokens.join(' ').replace(/\s+Cluster$/i, ''));
};

const parseProduct = ([path, imageLoader], index) => {
  const catalogue = getCatalogue(path);
  const filename = path.split('/').pop().replace(/\.(jpg|jpeg|png|webp)$/i, '');
  const tokens = filename.split('_');
  const code =
    catalogue.folder === 'Acrylica_2026_Product_Images (1)'
      ? tokens[1]
      : `${tokens[1]}-${tokens[2]}`;
  const name = titleCase(tokens.slice(3).join(' ') || code);
  const series = getSeries(path, catalogue);
  const seriesText = series.toUpperCase();
  const productText = `${series} ${name}`.toUpperCase();
  const matchedCategory = classificationPriority
    .map((slug) => categoryTemplates.find((category) => category.slug === slug))
    .find(({ keywords }) => keywords.some((keyword) => seriesText.includes(keyword))) ||
    classificationPriority
      .map((slug) => categoryTemplates.find((category) => category.slug === slug))
      .find(({ keywords }) => keywords.some((keyword) => productText.includes(keyword)));

  return {
    id: `${catalogue.folder}-${filename}-${index}`,
    sequence: Number.parseInt(tokens[0], 10) || index + 1,
    name,
    code,
    series,
    catalogue: catalogue.name,
    category: matchedCategory?.slug || 'designer-surfaces',
    imageLoader,
  };
};

const allProducts = Object.entries(productImageModules)
  .filter(
    ([path]) =>
      catalogueDefinitions.some(({ folder }) => path.includes(`/${folder}/`)) &&
      !path.split('/').pop().startsWith('00_'),
  )
  .map(parseProduct);

const productFamilies = catalogueDefinitions
  .flatMap((catalogue) =>
    allProducts
      .filter((product) => product.catalogue === catalogue.name)
      .sort((a, b) => a.sequence - b.sequence)
      .slice(0, 10),
  )
  .sort(
    (a, b) =>
      categoryOrder.get(a.category) - categoryOrder.get(b.category) ||
      a.catalogue.localeCompare(b.catalogue) ||
      a.series.localeCompare(b.series) ||
      a.name.localeCompare(b.name),
  );

const productCategories = [
  ...categoryTemplates,
  { slug: 'designer-surfaces', name: 'Designer Surfaces', shortName: 'Designer', keywords: [] },
].map((category, index) => {
  const products = productFamilies.filter((product) => product.category === category.slug);
  return {
    ...category,
    index: String(index + 1).padStart(2, '0'),
    count: products.length,
    blurb: `${products.length} genuine catalogue designs across client-supplied collections.`,
    imageLoader: products[0]?.imageLoader || productFamilies[0]?.imageLoader,
  };
});

const catalogues = catalogueDefinitions.map((catalogue) => ({
  name: catalogue.name,
  focus: catalogue.focus,
  brief: catalogue.brief,
  count: productFamilies.filter((product) => product.catalogue === catalogue.name).length,
  imageLoader: productFamilies.find((product) => product.catalogue === catalogue.name)?.imageLoader,
  pdf: Object.entries(cataloguePdfModules).find(([path]) => path.includes(catalogue.pdfMatch))?.[1],
}));

const catalogueNames = catalogues.map(({ name }) => name);

export { catalogueNames, catalogues, productCategories, productFamilies };
