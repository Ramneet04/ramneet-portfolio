"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';

export default function Form() {
  const { register, handleSubmit,setValue, formState: { errors } } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("sending your message, please wait...");
    emailjs
      .send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID,params,
      {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate:{
            throttle:5000, // cant send more than 1 email per 5 seconds
        }
      })
      .then(
        () => {
          toast.success("Message sent, will get back to you soon!", {
            id: toastId,
          });
        },
        (error) => {
          toast.error("Error sending your message, please try again later", {
            id: toastId,
          });
        },
      );
      setValue("name","");
      setValue("email","");
      setValue("message","");

  };

  const onSubmit = (data) => {
    const templateParams = {
        to_name: "Ramneet",
        form_name: data.name,
        reply_to: data.email,
        message: data.message,
    }
    sendEmail(templateParams);
  };
  console.log(errors);
  
  return (
    <>
    <Toaster richColors={true}/>
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-md w-full flex flex-col items-center justify-center space-y-4'>

      <input type="text" placeholder="name" {...register("name", {required: 'This field is required'})} className='w-full p-2 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm'/>
      {
        errors.name && <span className=' inline-block self-start text-yellow-400'>{errors.name?.message}</span>
      }

      <input type="email" placeholder="email" {...register("email", {required: 'This field is required'})} className='w-full p-2 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm' />
      {
        errors.email && <span className=' inline-block self-start text-yellow-400'>{errors.email?.message}</span>
      }

      <textarea placeholder='message' {...register("message", {required: "This field is required", maxLength: {
        value:500,
        message:"Maximum length should be less than 500 characters"
      }, minLength: {
        value:20,
        message:"Minimum length should be more than 20 characters"
      }})} className='w-full p-2 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm' />
      {
        errors.message && <span className=' inline-block self-start text-yellow-400'>{errors.message?.message}</span>
      }

      <input
      type='submit'
      value="Cast your Message"
      className='px-10 py-4 bg-background border border-accent/30 border-solid capitalize text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50  border-accent/30 backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm'
      />
    </form>
    </>
  );
}