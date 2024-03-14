
"use client"

import * as React from "react"
import Link from "next/link"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// ask obaid why one has to be lowercase and the other has to be uppercase

const frameworks = [
  {
    value: "software engineer",
    label: "Software engineer",
  },
  {
    value: "frontend engineer",
    label: "Frontend engineer",
  },
  {
    value: "cloud engineer",
    label: "Cloud engineer",
  },
  {
    value: "backend engineer",
    label: "Backend engineer",
  },
  {
    value: "devOps engineer",
    label: "DevOps engineer",
  },
]

export default function DropDown() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-24">
            <h1  className="text-3xl font-bold mb-4">
                select which job you like to apply for
            </h1>
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
        </Popover>
         <Link href="/Dashboard"> 
        <button className="mt-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Input Page
        </button>
      </Link>
            </main>
  )
}
