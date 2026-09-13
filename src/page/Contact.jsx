import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <main className="contact-page min-h-screen bg-[#071111] px-6 pb-24 pt-36 text-[#f3f0e9] lg:px-10 lg:pt-44">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <section>
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[#d9ad62]">Get in touch / 05</p>
            <h1 className="max-w-xl text-6xl font-extrabold uppercase leading-[0.88] tracking-[-0.08em] sm:text-8xl">
              Start the
              <span className="block font-serif italic font-semibold normal-case tracking-[-0.04em] text-[#d9ad62]">next chapter.</span>
            </h1>
            <p className="mt-10 max-w-md text-base leading-8 text-white/60">Training, competition, coaching or collaboration. Tell us what you are building and we will get back to you.</p>
            <div className="mt-14 space-y-6 border-t border-white/15 pt-7 text-sm text-white/70">
              <a className="flex items-center gap-4 transition-colors hover:text-[#d9ad62]" href="mailto:hello@galleygodwin.com"><Mail size={18} strokeWidth={1.5} className="text-[#d9ad62]" /> hello@galleygodwin.com</a>
              <div className="flex items-center gap-4"><MapPin size={18} strokeWidth={1.5} className="text-[#d9ad62]" /> Accra, Ghana / Worldwide</div>
              <a className="flex items-center gap-4 transition-colors hover:text-[#d9ad62]" href="https://wa.me/" target="_blank" rel="noreferrer"><MessageCircle size={18} strokeWidth={1.5} className="text-[#d9ad62]" /> WhatsApp enquiry <ArrowUpRight size={15} /></a>
            </div>
          </section>

          <section className="border border-white/15 bg-white/[0.035] p-6 sm:p-10">
            <div className="mb-10 flex items-center justify-between border-b border-white/15 pb-5"><h2 className="text-xl font-semibold uppercase tracking-tight">Send an enquiry</h2><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Response within 48h</span></div>
            <form className="grid gap-7" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-7 sm:grid-cols-2">
                <label className="grid gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">Name<input required name="name" type="text" placeholder="Your name" className="border-b border-white/20 bg-transparent px-0 py-3 font-sans text-base normal-case tracking-normal text-white outline-none placeholder:text-white/30 focus:border-[#d9ad62]" /></label>
                <label className="grid gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">Email<input required name="email" type="email" placeholder="you@example.com" className="border-b border-white/20 bg-transparent px-0 py-3 font-sans text-base normal-case tracking-normal text-white outline-none placeholder:text-white/30 focus:border-[#d9ad62]" /></label>
              </div>
              <label className="grid gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">What can we build together?<select name="interest" defaultValue="" className="border-b border-white/20 bg-transparent px-0 py-3 font-sans text-base tracking-normal text-white outline-none focus:border-[#d9ad62]"><option value="" disabled className="bg-[#071111]">Select an enquiry type</option><option className="bg-[#071111]">Private training</option><option className="bg-[#071111]">Competition or event</option><option className="bg-[#071111]">Coaching partnership</option><option className="bg-[#071111]">Media or collaboration</option></select></label>
              <label className="grid gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">Message<textarea required name="message" rows="5" placeholder="Tell us a little about your goals..." className="resize-y border-b border-white/20 bg-transparent px-0 py-3 font-sans text-base normal-case tracking-normal text-white outline-none placeholder:text-white/30 focus:border-[#d9ad62]" /></label>
              <button type="submit" className="mt-3 inline-flex w-fit items-center gap-10 bg-[#d9ad62] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071111] transition-colors hover:bg-[#efc879]">Send enquiry <ArrowUpRight size={18} strokeWidth={1.5} /></button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
