"use client";

import React, { useRef } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_ID || "";
const EMAIL_TEMPLATE = process.env.NEXT_PUBLIC_TEMPLATE || "";
const EMAIL_PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY || "";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Please add your name.",
  }),
  email: z
    .string()
    .min(1, {
      message: "Please include your email address.",
    })
    .email("Not a valid email"),
  message: z.string().min(1, {
    message: "Message required.",
  }),
});

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (formRef.current) {
      emailjs
        .sendForm(
          EMAIL_SERVICE_ID,
          EMAIL_TEMPLATE,
          formRef.current,
          EMAIL_PUBLIC_KEY
        )
        .then(
          (result) => {
            toast({
              description: "Your message has been sent.",
            });
            form.reset();
          },
          (error) => {
            toast({
              variant: "destructive",
              title: "Something went wrong!",
              description: "Please contact me directly via email.",
            });
          }
        );
    }
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                Include your email so I can respond to you.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="" {...field} />
              </FormControl>
              <FormDescription>Ask me anything!</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ContactForm;
