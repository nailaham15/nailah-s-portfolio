'use server'

import { z } from 'zod'

const FormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
})

export async function submitContactForm(formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors }
  }

  // Here you would typically send an email or save to a database
  // For now, we'll just log the data
  console.log('Form submission:', validatedFields.data)

  // Simulate a delay to mimic server processing time
  await new Promise(resolve => setTimeout(resolve, 1000))

  return { success: true, message: 'Thank you for your message! I\'ll get back to you soon.' }
}

