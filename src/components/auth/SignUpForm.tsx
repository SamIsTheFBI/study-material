"use client"

import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import AuthFormError from "./AuthFormError"
import { useFormState, useFormStatus } from "react-dom"
import { signUpAction } from "@/server/actions/authActions"
import OauthOptions from "./oauth-options"

const formSchema = z.object({
  name: z.string(),
  email: z.string().email({
    message: "Email is required!",
  }),
  password: z.string().min(6, {
    message: "Password is required!",
  }).max(15, {
    message: "Maximum password length is 15 characters!",
  }),
})


const SignUpForm = () => {
  const [state, formAction] = useFormState(signUpAction, {
    error: "",
  })

  const { pending } = useFormStatus()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  return (
    <div className="sm:min-w-96 max-w-xl">
      <Card className="border border-border max-sm:border-0 max-sm:shadow-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <div className="px-6 pb-4">
          <OauthOptions />
        </div>
      </Card>
    </div>
  )
}

export default SignUpForm
