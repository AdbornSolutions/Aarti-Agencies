import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { catalogues } from '../data/catalog';
import { CatalogImage } from './CatalogImage';
import { DrawLine, FadeUp, WordReveal } from './Reveal';

function CatalogueCollections() {
  return (
    <section className="bg-ivory py-24 md:py-32" aria-labelledby="catalogue-collections-heading">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <WordReveal
            as="h2"
            id="catalogue-collections-heading"
            text="The Catalogue Library"
            className="font-display text-[13vw] font-light leading-[0.9] text-ink sm:text-[8vw] lg:col-span-7 lg:text-[5vw]"
          />
          <FadeUp className="lg:col-span-4 lg:col-start-9">
            <p className="font-sans text-sm font-light leading-loose text-ink/60">
              Five client-supplied catalogues, presented with their real product imagery and a
              concise overview of each collection&apos;s surface direction.
            </p>
          </FadeUp>
        </div>
        <DrawLine className="mt-12 h-px w-full bg-ink/15" />

        <div className="mt-12 space-y-16 md:space-y-24">
          {catalogues.map((catalogue, index) => (
            <article key={catalogue.name} className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className={`lg:col-span-6 ${index % 2 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[16/10] overflow-hidden bg-ink/5">
                  <CatalogImage
                    loader={catalogue.imageLoader}
                    alt={`${catalogue.name} representative laminate design`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-editorial hover:scale-[1.025]"
                  />
                </div>
              </div>
              <FadeUp className={`lg:col-span-5 ${index % 2 ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-8'}`}>
                <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-rust">
                  0{index + 1} / {catalogue.focus}
                </p>
                <h3 className="mt-5 font-display text-4xl font-light leading-tight text-ink md:text-5xl">
                  {catalogue.name}
                </h3>
                <p className="mt-6 font-sans text-sm font-light leading-loose text-ink/60">
                  {catalogue.brief}
                </p>
                <p className="mt-5 font-sans text-[10px] uppercase tracking-[0.2em] text-ink/45">
                  {catalogue.count} selected products
                </p>
                <div className="mt-8 flex flex-wrap gap-5">
                  <Link
                    to={`/products?catalogue=${encodeURIComponent(catalogue.name)}#catalogue`}
                    className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 font-sans text-[9px] uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-rust"
                  >
                    Explore products <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                  {catalogue.pdf && (
                    <a
                      href={catalogue.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-ink/20 px-6 py-3.5 font-sans text-[9px] uppercase tracking-[0.2em] text-ink transition-colors hover:border-rust hover:text-rust"
                    >
                      View PDF <ArrowUpRightIcon className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </FadeUp>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { CatalogueCollections };
