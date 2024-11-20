"use client";import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Phone, Mail, Globe, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { enquiryFormSchema } from "@/types/schema/customer-form";
import { NewEnquiry } from "@/db/schema/general-enquiry";
import { createEnquiry } from "./actions";
import Link from "next/link";

export default function CustomerEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<NewEnquiry>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      country: "",
      phoneNumber: "",
      purposeOfEnquiry: undefined,
    },
  });

  async function onSubmit(values: NewEnquiry) {
    setIsSubmitting(true);
    try {
      const res = await createEnquiry(values);
      if (res.success) {
        setSubmitSuccess(true);
      }
    } catch (error) {
      console.log(error);
    }

    setIsSubmitting(false);
  }

  return (
    <div className="py-4 flex w-full flex-col items-center">
      <div>
        <Link href="../">
          <Button
            className=" flex items-center justify-center"
            variant={"link"}
          >
            {" "}
            <ArrowLeft /> Back{" "}
          </Button>
        </Link>
        <Card className="w-full max-w-2xl mx-auto  border-none">
          <CardHeader>
            <CardTitle>Apply World Group Customer Enquiry Form</CardTitle>
            <CardDescription>
              If you didn&apos;t get a quick response, please fill up the form
              below and we will get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+61291362399" className="hover:text-foreground">
                  (02) 9136 2399
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@applyworldgroup.com.au"
                  className="hover:text-foreground"
                >
                  info@applyworldgroup.com.au
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <p>
                  <a
                    href="http://www.applyworldgroup.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:underline"
                  >
                    www.applyworldgroup.com.au
                  </a>
                </p>
              </div>
            </div>
            {submitSuccess ? (
              <div className="text-center text-green-600">
                <p>Thank you for your enquiry. We will get back to you soon.</p>
              </div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            {...field}
                          />
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
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your country" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your phone number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="purposeOfEnquiry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purpose of Enquiry</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value ?? ""}
                            className="flex flex-col space-y-1"
                          >
                            {[
                              "482 Visa",
                              "407 Visa",
                              "Skills Assessment",
                              "Student Enquiry",
                              "Migration Enquiry",
                              "186 Visa",
                              "General Consultation",
                              "PR Pathways",
                              "Online Course",
                              "Other",
                            ].map((purpose) => (
                              <FormItem
                                className="flex items-center space-x-3 space-y-0"
                                key={purpose}
                              >
                                <FormControl>
                                  <RadioGroupItem value={purpose} />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {purpose}
                                </FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              We respect your privacy and will handle your information in
              accordance with our privacy policy.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
