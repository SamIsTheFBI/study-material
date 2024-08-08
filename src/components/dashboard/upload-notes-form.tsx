"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

const courseObjs = [
  {
    value: "all_1",
    label: "1st Year",
  },
  {
    value: "civil",
    label: "Civil",
  },
  {
    value: "computercience",
    label: "Computer Science",
  },
  {
    value: "electrical",
    label: "Electrical",
  },
  {
    value: "ece",
    label: "Electronics & Communication",
  },
  {
    value: "ei",
    label: "Electronics & Instrumentation",
  },
  {
    value: "mechanical",
    label: "Mechanical",
  },
  {
    value: "production",
    label: "Production",
  },
]

const courseNames = courseObjs.map((course) => course.label)

const formSchema = z.object({
  title: z.string().min(2).max(90),
  link: z.string().min(2),
  year: z.enum(['1', '2', '3', '4']),
  branch: z.enum(['1st Year', 'Civil', 'Computer Science', 'Electrical', 'Electronics & Communication', 'Electronics & Instrumentation', 'Mechanical', 'Production'])
})

export default function UploadNotesForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      link: "",
      year: "1",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Card className="border border-border max-sm:shadow-none">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Share your notes</CardTitle>
        <CardDescription>
          Help your batchmates/juniors through these hard times!
        </CardDescription>
      </CardHeader>
      <div className="px-6 pb-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>
                    Give a descriptive title for your notes.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Public Link</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>
                    Upload your notes to a cloud service (Google Drive, MEGA, OneDrive, etc.) & provide a public URL of it.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-x-6">
              <FormField
                control={form.control}
                name="branch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Branch</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {courseObjs.map((course) => (
                          <SelectItem value={course.value} key={course.value}>{course.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Choose the proper branch your notes will provide benefit for.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Choose the year for which the notes apply.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </Card>
  )
}
