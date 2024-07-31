"use server"
import { createMessage } from "@/lib/sendMessage"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export default async function contactSubmission(prevState,formData:any){
    
    const firstName =formData.get('firstN')
    const secondName = formData.get('secondN')
    const options = formData.get('option')
    const emailAddress = formData.get('email')
    const contactNumber = formData.get('Number')
    const Message = formData.get('Message')
    console.log(firstName,secondName,options,emailAddress,contactNumber,Message)

   
    let errors = [];

    if (!firstName || firstName.trim().length === 0) {
      errors.push('first Name is required.');
    }
  
    if (!secondName || secondName.trim().length === 0) {
      errors.push('Last name is required.');
    }
    if (!contactNumber || contactNumber.trim().length === 0) {
      errors.push('Contact Number is required.');
    }
    if (!emailAddress || emailAddress.trim().length === 0) {
      errors.push('email address is required.');
    }
    if (!Message || Message.trim().length === 0) {
      errors.push('Message is required is required.');
    }
  
    
  
    if (errors.length > 0) {
      return { errors };}


    await createMessage({
        firstName,
        secondName,
        options,
        emailAddress,
        contactNumber,
        Message,
        User_id: 1

    })
    revalidatePath('/', 'layout')
  redirect('/');
    
  }
  