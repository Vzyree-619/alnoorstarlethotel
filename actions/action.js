'use server';
import { createMessage } from '@/lib/sendMessage';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createBooking } from '@/lib/sendBooking';

import { createRoomImage } from '@/lib/sendRoomImg';


import { uploadImage } from '@/lib/cloudinary';
import { createNightImage } from '@/lib/sendNightImg';
import { createDiningImage } from '@/lib/sendDiningImg';
import { createGardenImage } from '@/lib/sendGardenImg';

export default async function ContactSubmission(prevState, formData) {
  const firstName = formData.get('firstN');
  const secondName = formData.get('secondN');
  const emailAddress = formData.get('email');
  
  const contactNumber = formData.get('Number');
  const description = formData.get('description');
  console.log(firstName, secondName, emailAddress, contactNumber, description,);

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
  if (!description || description.trim().length === 0) {
    errors.push('Message is required is required.');
  }

  if (errors.length > 0) {
    return { errors };
  }

  await createMessage({
    firstName,
    secondName,
    emailAddress,
    contactNumber,
    description,
    User_id: 1,
  });
  revalidatePath('/admin/messages', 'layout');
  redirect('/');
}

export async function BookingSubmission(prevState, formData) {
  
  const suiteMapping = {
    1: "Family Suite",
    2: "Luxury Suite",
    3: "Executive Suite",
    4: "Executive Lite"
  };
  const checkIn = formData.get("checkIn")
  const checkOut = formData.get("checkOut")
  
  const firstName = formData.get('firstName');
  const secondName = formData.get('lastName');
  const emailAddress = formData.get('emailAdd');
  const contactNumber = formData.get('Number');
  const description = formData.get('description');
  const guests = formData.get('guests');
  const roomtype = formData.get('roomtype');
  
  const suiteText = suiteMapping[roomtype]


  console.log(
    firstName,
    secondName,
    emailAddress,
    contactNumber,
    description,
    guests,
    suiteText,
    checkIn,
    checkOut
  );

  await createBooking({
    firstName,
    secondName,
    emailAddress,
    contactNumber,
    description,
    guests,
    roomtype:suiteText,
    checkIn,
    checkOut,
    user_id: 1,
  });

  revalidatePath('/admin/reservation_requests', 'layout');
  redirect('/');
}


export async function gardenImageSubmission(prevState, formData) {
  const Image = formData.get('ImageGarden');

  let errors = [];
  if (!Image || Image.size === 0) {
    errors.push('Image is required.');
  }

  if (errors.length > 0) {
    return { errors };
  }

  let imageUrl;
  try {
    imageUrl = await uploadImage(Image);
  } catch (error) {
    throw new Error(
      'Image upload failed, post was not created. Please try again later.'
    );
  }
  await createGardenImage({
    imageUrl: imageUrl,
  });
  revalidatePath('/gallery', 'layout');
  revalidatePath('/admin/dashboard/garden', 'layout');
  redirect('/admin/dashboard/garden');
}
export async function roomImageSubmission(prevState, formData) {
  const Image = formData.get('RoomImage');
  let errors = [];
  if (!Image || Image.size === 0) {
    errors.push('Image is required.');
  }

  if (errors.length > 0) {
    return { errors };
  }

  let imageUrl;
  try {
    imageUrl = await uploadImage(Image);
  } catch (error) {
    throw new Error(
      'Image upload failed, post was not created. Please try again later.'
    );
  }
  await createRoomImage({
    imageUrl: imageUrl,
  });
  revalidatePath('/gallery', 'layout');
  revalidatePath('/admin/dashboard/room', 'layout');
  redirect('/admin/dashboard/room');
}
export async function DiningImageSubmission(prevState, formData) {
  const Image = formData.get('ImageDining');
  let errors = [];
  if (!Image || Image.size === 0) {
    errors.push('Image is required.');
  }

  if (errors.length > 0) {
    return { errors };
  }

  let imageUrl;
  try {
    imageUrl = await uploadImage(Image);
    console.log(imageUrl)
  } catch (error) {
    throw new Error(
      'Image upload failed, post was not created. Please try again later.'
    );
  }
  await createDiningImage({
    imageUrl: imageUrl,
  });
  revalidatePath('/gallery', 'layout');
  revalidatePath('/admin/dashboard/dining', 'layout');
  redirect('/admin/dashboard/dining');
}

export async function nightImageSubmission(prevState, formData) {
  const Image = formData.get('ImageNight');
  let errors = [];
  if (!Image || Image.size === 0) {
    errors.push('Image is required.');
  }

  if (errors.length > 0) {
    return { errors };
  }

  let imageUrl;
  try {
    imageUrl = await uploadImage(Image);
  } catch (error) {
    throw new Error(
      'Image upload failed, post was not created. Please try again later.'
    );
  }

  await createNightImage({
    imageUrl: imageUrl,
  });
  revalidatePath('/gallery', 'layout');
  revalidatePath('/admin/dashboard/night', 'layout');
  redirect('/admin/dashboard/night');
}


