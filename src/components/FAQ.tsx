import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { FAQContent } from "@/data/pagesData";

interface FAQProps {
  content: FAQContent;
}

const FAQ = ({ content }: FAQProps) => {
  // 1. Calculate the split point (Halfway through the list)
  const midPoint = Math.ceil(content.faqs.length / 2);
  
  // 2. Create two separate arrays. 
  // This ensures that on Mobile (stacked), the reading order is still 1, 2, 3, 4...
  const leftColumnFaqs = content.faqs.slice(0, midPoint);
  const rightColumnFaqs = content.faqs.slice(midPoint);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-[22px] leading-tight sm:text-3xl md:text-4xl font-bruta font-bold tracking-tight text-foreground mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* LAYOUT CHANGE:
          - grid-cols-1: Mobile (Stack columns on top of each other)
          - lg:grid-cols-2: Desktop (Two distinct columns side-by-side)
          - items-start: Critical. Prevents the columns from stretching to match height.
        */}
        {/* Mobile: gap-4 (matches the spacing inside the accordion). Desktop: lg:gap-6 (keeps the columns separated) */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
          
          {/* Left Column */}
          <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
            {leftColumnFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-border bg-card px-5 shadow-sm"
              >
                <AccordionTrigger className="text-left font-recoleta font-medium text-card-foreground hover:no-underline py-3 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-3">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Right Column */}
          <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
            {rightColumnFaqs.map((faq, index) => (
              <AccordionItem
                key={index + midPoint} // Offset the key so they remain unique
                value={`item-${index + midPoint}`}
                className="rounded-lg border border-border bg-card px-5 shadow-sm"
              >
                <AccordionTrigger className="text-left font-recoleta font-medium text-card-foreground hover:no-underline py-3 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-3">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Still have questions?{" "}
            <a href="#contact" className="font-recoleta text-primary hover:underline">
              Get in touch with our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;