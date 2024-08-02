import ContactForm from "@/components/ui/contactForm";
import ContactSubmission from "@/actions/action"


export default function Contactsubmit(){
  return <ContactForm action={ContactSubmission}/>
}