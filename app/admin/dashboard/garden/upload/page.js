"use client"

import { GardenImageSubmission } from "@/actions/action"
import GardenImage from "@/components/ui/imageUpload/gardenForm"

export default function DashboardManagement() {
  return <GardenImage action={GardenImageSubmission}/>
}
