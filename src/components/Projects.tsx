import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { projects } from '../data/site';
import { CurtainImage, DrawLine, FadeUp, WordReveal } from './Reveal';
import { useCursor } from './CursorProvider';

export function Projects() {
  const { hoverProps } = useCursor();

  return (
    <section id="projects" className="w-full bg-sand py-28 md:py-36" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <WordReveal
            as="h2"
            id="projects-heading"
            text="Spaces Inspired by Arti"
            className="font-display text-[11vw] font-light leading-[0.94] text-ink sm:text-[7vw] lg:text-[4.4vw]" />
          
          <FadeUp delay={0.15}>
            <a
              href="#projects"
              {...hoverProps()}
              className="group inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.22em] text-ink">
              
              View All Projects
              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-1.5"
                strokeWidth={1.3} />
              
            </a>
          </FadeUp>
        </div>
        <DrawLine className="mt-12 h-px w-full bg-ink/15" />

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) =>
          <a
            key={project.name}
            href="#projects"
            {...hoverProps('View')}
            className={`group block ${project.height}`}>
            
              <div className="relative overflow-hidden">
                <CurtainImage
                src={project.image}
                alt={`${project.name} — ${project.location}`}
                className="aspect-[4/5] w-full" />
              
                <span
                className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 ease-editorial group-hover:bg-ink/25"
                aria-hidden="true" />
              
              </div>
              <div className="mt-5 flex items-baseline justify-between border-t border-ink/12 pt-4">
                <h3 className="font-display text-2xl font-light text-ink transition-colors duration-300 ease-editorial group-hover:text-rust">
                  {project.name}
                </h3>
                <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-graphite/45">
                  {project.year}
                </span>
              </div>
              <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.18em] text-graphite/50">
                {project.location}
              </p>
            </a>
          )}
        </div>
      </div>
    </section>);

}