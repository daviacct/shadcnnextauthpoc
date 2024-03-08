'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FormProvider, useForm, SubmitHandler, Control } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"

type FormData = {
    email: string;
    password: string;
};

const formSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export function LoginForm() {
    const router = useRouter();
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        await signIn('credentials', {
            ...data,
            redirect: false
        });
        router.push("/")
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md w-full p-8">
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control as Control<FormData>}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
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
                            Login
                        </Button>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
}
