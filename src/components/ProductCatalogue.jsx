import { useMemo, useState } from 'react';
import { ArrowUpRightIcon, CheckIcon, SearchIcon } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { catalogueNames, catalogues, productCategories, productFamilies } from '../data/catalog';
import { FadeUp, WordReveal } from './Reveal';
import { CatalogImage } from './CatalogImage';

function ProductCatalogue() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get('category');
  const category = productCategories.some(({ slug }) => slug === requestedCategory)
    ? requestedCategory
    : 'all';
  const requestedCatalogue = searchParams.get('catalogue');
  const catalogue = catalogueNames.includes(requestedCatalogue) ? requestedCatalogue : 'all';
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(24);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return productFamilies.filter((product) => {
      const matchesCategory = category === 'all' || product.category === category;
      const matchesCatalogue = catalogue === 'all' || product.catalogue === catalogue;
      const matchesQuery =
        !normalizedQuery ||
        `${product.name} ${product.type} ${product.catalogue}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesCatalogue && matchesQuery;
    });
  }, [catalogue, category, query]);
  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const categoryNames = useMemo(
    () => new Map(productCategories.map((item) => [item.slug, item.name])),
    [],
  );

  const changeCatalogue = (nextCatalogue) => {
    const nextParams = new URLSearchParams(searchParams);
    if (nextCatalogue === 'all') nextParams.delete('catalogue');
    else nextParams.set('catalogue', nextCatalogue);
    setSearchParams(nextParams, { replace: true });
  };

  const resetFilters = () => {
    setQuery('');
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('category');
    nextParams.delete('catalogue');
    setSearchParams(nextParams, { replace: true });
  };

  return (
    <section id="catalogue" className="scroll-mt-20 bg-ivory py-24 md:scroll-mt-24 md:py-32" aria-labelledby="catalogue-title">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <WordReveal
            as="h2"
            id="catalogue-title"
            text="Product Families"
            className="font-display text-[14vw] font-light leading-[0.9] text-ink sm:text-[8vw] lg:col-span-7 lg:text-[5.2vw]"
          />
          <FadeUp className="lg:col-span-4 lg:col-start-9">
            <p className="font-sans text-sm font-light leading-loose text-ink/60">
              Browse genuine product swatches extracted from the five client-supplied catalogues.
              Final shade, finish and stock availability is confirmed during enquiry.
            </p>
          </FadeUp>
        </div>

        <div className="mt-12 grid gap-px bg-ink/15 border border-ink/15 sm:grid-cols-2 xl:grid-cols-5">
          {catalogues.map((item) => (
            <article key={item.name} className="flex min-h-40 flex-col justify-between bg-ivory p-5">
              <div>
                <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-rust">Official catalogue</p>
                <h3 className="mt-3 font-display text-2xl font-light leading-tight text-ink">{item.name}</h3>
                <p className="mt-2 font-sans text-xs text-ink/50">{item.count} product designs</p>
              </div>
              {item.pdf && (
                <a href={item.pdf} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-sans text-[9px] uppercase tracking-[0.18em] text-ink hover:text-rust">
                  View catalogue <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 border-y border-ink/15 py-6">
          <div className="grid gap-3 md:grid-cols-[1fr_auto]">
            <label className="flex items-center gap-3 border border-ink/15 bg-white px-4 py-3 focus-within:border-rust">
              <SearchIcon className="h-4 w-4 text-ink/45" aria-hidden="true" />
              <span className="sr-only">Search product families</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search a family, finish or catalogue"
                className="w-full bg-transparent font-sans text-sm text-ink outline-none placeholder:text-ink/35"
              />
            </label>
            <label className="border border-ink/15 bg-white px-4 py-3">
              <span className="sr-only">Filter by catalogue</span>
              <select
                value={catalogue}
                onChange={(event) => changeCatalogue(event.target.value)}
                className="min-w-56 bg-transparent font-sans text-xs uppercase tracking-[0.12em] text-ink outline-none"
              >
                <option value="all">All catalogues</option>
                {catalogueNames.map((name) => <option key={name}>{name}</option>)}
              </select>
            </label>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-ink/45" aria-live="polite">
            {filteredProducts.length} product {filteredProducts.length === 1 ? 'family' : 'families'}
          </p>
          <p className="hidden font-sans text-[10px] text-ink/40 sm:block">Catalogue spellings retained</p>
        </div>

        {filteredProducts.length ? (
          <div className="mt-8 grid gap-x-5 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
            {visibleProducts.map((product, index) => (
              <article key={`${product.catalogue}-${product.name}`} className="group min-w-0">
                <div className="relative aspect-[5/4] overflow-hidden bg-ink/5">
                  <CatalogImage
                    loader={product.imageLoader}
                    alt={`${product.name}, product code ${product.code}`}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.035]"
                  />
                  <span className="absolute left-4 top-4 bg-ink/85 px-3 py-2 font-sans text-[9px] uppercase tracking-[0.16em] text-ivory backdrop-blur-sm">
                    {product.catalogue}
                  </span>
                </div>
                <div className="border-b border-ink/15 py-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[9px] uppercase tracking-[0.18em]">
                    <span className="text-rust">{categoryNames.get(product.category)}</span>
                    <span className="text-ink/35" aria-hidden="true">/</span>
                    <span className="text-ink/50">{product.series}</span>
                  </div>
                  <h3 className="mt-3 font-display text-3xl font-light text-ink sm:text-4xl">{product.name}</h3>
                  <dl className="mt-5 space-y-2 font-sans text-xs leading-relaxed text-ink/55">
                    <div className="flex gap-2"><dt className="sr-only">Product code</dt><CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rust" /><dd>Product code: {product.code}</dd></div>
                    <div className="flex gap-2"><dt className="sr-only">Catalogue</dt><CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rust" /><dd>{product.catalogue}</dd></div>
                  </dl>
                  <Link to={`/contact?product=${encodeURIComponent(product.name)}`} className="mt-6 inline-flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.2em] text-ink transition-colors hover:text-rust">
                    Enquire for shades <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 border border-ink/15 px-6 py-16 text-center">
            <h3 className="font-display text-3xl text-ink">No matching product family</h3>
            <button type="button" onClick={resetFilters} className="mt-5 font-sans text-[10px] uppercase tracking-[0.2em] text-rust">
              Clear all filters
            </button>
          </div>
        )}
        {visibleCount < filteredProducts.length && (
          <div className="mt-14 flex justify-center">
            <button type="button" onClick={() => setVisibleCount((count) => count + 24)} className="rounded-full bg-ink px-7 py-4 font-sans text-[10px] uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-rust">
              Load 24 more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export { ProductCatalogue };
