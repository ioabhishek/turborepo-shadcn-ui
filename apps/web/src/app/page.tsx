"use client"
import React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/shadcn/card"
import { CustomCard } from "@repo/ui/components/customCard"
import { Button } from "@repo/ui/shadcn/button"

const page = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Button size="sm">Click me</Button>
      <CustomCard
        title="amazing"
        children="johndoe"
        href="https://beebom.com"
      />

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <div className=" flex items-center gap-6 my-4">
        <Moon
          className=" w-5 h-5 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
        <Sun
          className=" w-5 h-5 cursor-pointer"
          onClick={() => setTheme("light")}
        />
      </div>
    </div>
  )
}

export default page
