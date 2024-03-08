"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FormProvider, useForm, SubmitHandler, Control } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";

type FormData = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  surname: z
    .string()
    .min(2, { message: "Surname must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export function RegisterForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("data: ", data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-8">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control as Control<FormData>}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control as Control<FormData>}
              name="surname"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>Surname</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control as Control<FormData>}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@mail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control as Control<FormData>}
              name="password"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-4 w-full">
              Register
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
