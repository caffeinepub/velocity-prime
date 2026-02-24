import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'I already have a coach. Why would I need this?',
    a: 'We aim to work with your coach. They handle the training, the workouts, the periodization, building your aerobic base. We handle the medical side — making sure your body can actually handle what the training plan is asking of it. We aim to get the most out of your work load to provide the maximal adaptation. Coaching and medical optimization: different roles, both important.',
  },
  {
    q: 'How is this different from my regular doctor?',
    a: 'Your PCP is great for managing disease, but they\'re not set up to optimize elite athletic performance. Most of them don\'t know much about endurance physiology, and they\'re working within an insurance-based system that doesn\'t support this kind of preventive, performance-focused care.',
  },
  {
    q: 'What exactly am I paying for?',
    a: 'Everything listed in this program. All the diagnostic testing with concierge level treatment and personalized service, three physician visits, continuous monitoring, weekly guidance, ongoing support. No hidden fees, no surprise bills. It\'s $12,000 for 6 months.',
  },
  {
    q: 'Are peptides and hormones safe?',
    a: 'When prescribed appropriately and monitored by a physician, yes. We\'re not handing out hormones to everyone who walks through the door. We use them when your diagnostic data shows a clear indication and when the benefit-risk ratio makes sense for your specific situation. Everything is tracked via serial bloodwork to ensure safety and efficacy.',
  },
  {
    q: 'What about stem cells or other similar therapies?',
    a: 'We provide preferred access to our partners who enable stem cell therapies through their clinic in the Bahamas and other preferred locations across the US.',
  },
  {
    q: 'What about cardiac screening?',
    a: 'We believe a thorough cardiac screening through a Coronary Artery CT scan is necessary for complete medical evaluation in high level athletes. The test is a detailed look at your heart to make sure you can train hard safely. Years of high training volume create real cardiovascular demands, and a standard EKG doesn\'t tell the whole story.',
  },
  {
    q: 'How does the weekly monitoring actually work?',
    a: 'We sync with your wearable. Whatever you\'re already using works. We pull your HRV, heart rate, sleep data, training load. Every week someone on our medical team reviews it and gives you feedback — when to push, when to back off, when something looks wrong. It\'s not automated; there\'s an actual person looking at your data.',
  },
  {
    q: 'Do I really need all these tests?',
    a: 'Probably not all of them will show problems. That\'s kind of the point — we\'re casting a wide net to find what\'s actually limiting you. Most athletes have 2–3 things that need attention. The comprehensive testing helps us find them instead of guessing.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="bg-vp-dark section-pad">
      <div className="container-site">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-vp-amber font-display text-sm uppercase tracking-[0.25em] font-600">
            Common Questions
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl uppercase text-vp-white mt-3 leading-tight">
            FAQ
          </h2>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-vp-dark-2 border border-vp-dark-border rounded-lg px-6 data-[state=open]:border-vp-amber/40 transition-colors"
              >
                <AccordionTrigger className="font-display font-600 text-base uppercase tracking-wide text-vp-white hover:text-vp-amber hover:no-underline py-5 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-vp-white-muted text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
