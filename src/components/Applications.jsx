import { applications } from '../data/site';
import { DrawLine, FadeUp, WordReveal } from './Reveal';
import { useCursor } from './CursorProvider';
function Applications() {
  const { hoverProps } = useCursor();
  return (
    <section className="w-full bg-sand py-28 md:py-36" aria-labelledby="applications-heading">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <WordReveal
            as="h2"
            id="applications-heading"
            text="Designed for Every Space."
            className="font-display text-[11vw] font-light leading-[0.94] text-ink sm:text-[7vw] lg:text-[4.4vw]"
          />
          <FadeUp delay={0.15}>
            <p className="max-w-sm font-sans text-sm font-light leading-relaxed text-graphite/65">
              Supporting furniture, kitchen, residential, commercial, retail and hospitality
              professionals with versatile surface solutions.
            </p>
          </FadeUp>
        </div>
        <DrawLine className="mt-12 h-px w-full bg-ink/15" />
      </div>
      <div className="mx-auto mt-12 grid max-w-[1600px] auto-rows-[220px] grid-cols-1 gap-3 px-6 md:auto-rows-[240px] md:grid-cols-4 md:px-10">
        {applications.map((application) => (
          <a
            key={application.name}
            href="#projects"
            {...hoverProps('View')}
            className={`group relative overflow-hidden ${application.span}`}
          >
            <img
              src={application.image}
              alt={`${application.name} finished with Arti Agencies laminates`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.06]"
            />
            <span
              className="absolute inset-0 bg-ink/0 transition-colors duration-500 ease-editorial group-hover:bg-ink/55"
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute inset-3 border border-ivory/0 transition-colors duration-500 ease-editorial group-hover:border-ivory/45"
              aria-hidden="true"
            />
            <span className="absolute bottom-5 left-5 right-5 translate-y-3 font-display text-2xl font-light text-ivory opacity-0 transition-[opacity,transform] duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
              {application.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
export { Applications };
