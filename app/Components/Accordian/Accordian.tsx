import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import styles from './accordian.module.css';

const accordianData = [
  {
    title: 'Is breakfast included in the room rate?',
    desc: 'Breakfast may be included in some room rates.Please check the terms of your booking or contact our reservations team for more details.',
  },
  {
    title: ' Are pets allowed at the hotel?',
    desc: 'Yes, pets are allowed at Al Noor Starlet Hotel, but upon request.',
  },
  {
    title: 'Is there free Wi-Fi available at the hotel?',
    desc: 'Yes, we offer complimentary high-speed Wi-Fi throughout the hotel, including in all guest rooms and public areas.',
  },
  {
    title: 'Are the rooms air-conditioned?',
    desc: 'Yes, most of our guest rooms are equipped with air conditioning to ensure your comfort. For a complete list of amenities available in each room type, please refer to the Room section on our website.',
  },
];

export default function AccordionPage() {
  return (
    <section className={styles.accordian}>
      <h1>Frequently Asked Questions</h1>
      <div className={styles.accordianContainer}>
        {accordianData.map((accordian, index) => (
          <Accordion
            key={index}
            type='single'
            collapsible
            className={styles.accordianBox}
          >
            <AccordionItem value='item-1'>
              <AccordionTrigger className={styles.title}>
                {accordian.title}
              </AccordionTrigger>
              <AccordionContent>{accordian.desc}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
