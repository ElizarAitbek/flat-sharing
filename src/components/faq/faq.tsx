import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { FAQ_DATA } from "@/utils/constants";

export const FrequentlyAskedQuestions = () => {
  return (
    <div className="container mt-[180px] flex justify-evenly">
      <h2 className="mb-6 font-roboto-condensed text-6xl font-bold italic">
        Questions?
        <br />
        We&apos;re here to help
      </h2>

      <Accordion
        type="single"
        collapsible
        className="flex w-[630px] flex-col gap-5"
      >
        {FAQ_DATA.map((item) => (
          <AccordionItem
            key={item.id}
            className="rounded-3xl bg-primary-light px-10"
            value={item.id}
          >
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
