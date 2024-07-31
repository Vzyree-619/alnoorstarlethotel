import ContactForm from "@/components/ui/contactForm";
import contactSubmission from "@/actions/action"


export default function Contactsubmit(){
  return <ContactForm action={contactSubmission}/>
}