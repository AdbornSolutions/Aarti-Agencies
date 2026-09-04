import { useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { DrawLine, FadeUp, WordReveal } from '../Reveal';

const mapUrl =
  'https://www.google.com/maps/search/?api=1&query=16+A+Arti+Agencies+opposite+Jagat+Regency+near+Hari+Har+Mandir+Sudarshan+Square+Old+Bhandara+Road+Lakadganj+Nagpur';

function ContactDetails() {
  const [searchParams] = useSearchParams();
  const requestedProduct = searchParams.get('product');
  const [form, setForm] = useState(() => ({
    name: '',
    email: '',
    message: requestedProduct ? `I would like shade and availability details for ${requestedProduct}.` : '',
  }));
  const update = (event) =>
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:artiagencies123@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-sand py-28 md:py-36" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <FadeUp>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-bronze">
              Office &amp; Showroom
            </span>
          </FadeUp>
          <WordReveal
            as="h2"
            id="contact-heading"
            text="Visit Arti Agencies in Nagpur."
            className="mt-8 font-display text-[11vw] font-light leading-[0.94] text-ink sm:text-[7vw] lg:text-[4.4vw]"
          />
          <DrawLine className="mt-10 h-px w-full bg-ink/15" />
          <address className="mt-10 space-y-5 font-sans text-sm font-light not-italic leading-relaxed text-graphite/70">
            <p>
              16 A, Arti Agencies, opposite Jagat Regency,
              <br />
              near Hari Har Mandir, Sudarshan Square,
              <br />
              Old Bhandara Road, Lakadganj, Nagpur 08
            </p>
            <p>
              <a className="transition-colors hover:text-rust" href="tel:+918983455122">
                +91 89834 55122
              </a>
            </p>
            <p>
              <a
                className="transition-colors hover:text-rust"
                href="mailto:artiagencies123@gmail.com"
              >
                artiagencies123@gmail.com
              </a>
            </p>
            <p>
              <span className="text-ink">Working hours:</span> 10:00 AM–8:00 PM
            </p>
            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.22em] text-rust"
            >
              Open in Google Maps
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </address>
        </div>
        <FadeUp className="lg:col-span-7" delay={0.15}>
          <form onSubmit={submit} className="grid gap-8" aria-label="Contact form">
            <label className="grid gap-3 font-sans text-[10px] uppercase tracking-[0.22em] text-graphite/55">
              Name
              <input
                required
                name="name"
                value={form.name}
                onChange={update}
                className="border-b border-ink/20 bg-transparent py-3 font-sans text-base normal-case tracking-normal text-ink outline-none transition-colors focus:border-rust"
              />
            </label>
            <label className="grid gap-3 font-sans text-[10px] uppercase tracking-[0.22em] text-graphite/55">
              Email
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                className="border-b border-ink/20 bg-transparent py-3 font-sans text-base normal-case tracking-normal text-ink outline-none transition-colors focus:border-rust"
              />
            </label>
            <label className="grid gap-3 font-sans text-[10px] uppercase tracking-[0.22em] text-graphite/55">
              Requirement
              <textarea
                required
                name="message"
                rows="5"
                value={form.message}
                onChange={update}
                className="resize-none border-b border-ink/20 bg-transparent py-3 font-sans text-base normal-case tracking-normal text-ink outline-none transition-colors focus:border-rust"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-fit items-center gap-4 rounded-full bg-ink px-7 py-4 font-sans text-[10px] uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-rust"
            >
              Send Enquiry
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}

export { ContactDetails };
