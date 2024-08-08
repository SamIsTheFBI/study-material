"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RxCaretSort, RxCheck } from "react-icons/rx"
import courses from "@/data/courses-dock"
import { usePathname, useRouter } from "next/navigation"

export default function Dock() {
  const router = useRouter()
  const pathname = usePathname()

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(pathname.slice(1) || "")

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div className="fixed bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2
      bg-background border border-border h-[42px] max-w-xs lg:max-w-md w-full shadow-xl rounded-full
      ">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between rounded-full"
          >
            {value
              ? courses.find((course) => course.value === pathname.slice(1))?.label || "Choose your year/branch..."
              : "Choose your year/branch..."}
            <div className="flex">
              <kbd className="pointer-events-none max-lg:hidden inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
              <RxCaretSort className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full max-w-xs lg:max-w-md p-0">
          <Command>
            <CommandInput placeholder="Choose your year/branch..." className="h-9" />
            <CommandList>
              <CommandEmpty>No courses found.</CommandEmpty>
              <CommandGroup heading="1st Year">
                {courses.filter((item) => item.year === 1).map((course) => (
                  <CommandItem
                    key={course.value}
                    value={course.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      if (pathname.includes(course.value)) {
                        router.push('/')
                      } else {
                        router.push(`/${course.value}`)
                      }
                      setOpen(false)
                    }}
                  >
                    {course.label}
                    <RxCheck
                      className={cn(
                        "ml-auto h-4 w-4",
                        pathname.includes(course.value) ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="2nd Year">
                {courses.filter((item) => item.year === 2).map((course) => (
                  <CommandItem
                    key={course.value}
                    value={course.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      if (pathname.includes(course.value)) {
                        router.push('/')
                      } else {
                        router.push(`/${course.value}`)
                      }
                      setOpen(false)
                    }}
                  >
                    {course.label}
                    <RxCheck
                      className={cn(
                        "ml-auto h-4 w-4",
                        pathname.includes(course.value) ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="3rd Year">
                {courses.filter((item) => item.year === 3).map((course) => (
                  <CommandItem
                    key={course.value}
                    value={course.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      if (pathname.includes(course.value)) {
                        router.push('/')
                      } else {
                        router.push(`/${course.value}`)
                      }
                      setOpen(false)
                    }}
                  >
                    {course.label}
                    <RxCheck
                      className={cn(
                        "ml-auto h-4 w-4",
                        pathname.includes(course.value) ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="4th Year">
                {courses.filter((item) => item.year === 4).map((course) => (
                  <CommandItem
                    key={course.value}
                    value={course.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      if (pathname.includes(course.value)) {
                        router.push('/')
                      } else {
                        router.push(`/${course.value}`)
                      }
                      setOpen(false)
                    }}
                  >
                    {course.label}
                    <RxCheck
                      className={cn(
                        "ml-auto h-4 w-4",
                        pathname.includes(course.value) ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
