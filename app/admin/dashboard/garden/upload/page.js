<<<<<<< HEAD
import { gardenImageSubmission } from "@/actions/action"
import GardenImage from "@/components/ui/imageUpload/gardenForm"
export default function DashboardManagement() {
  return <GardenImage action={gardenImageSubmission}/>
=======
"use client"

import { GardenImageSubmission } from "@/actions/action"
import GardenImage from "@/components/ui/imageUpload/gardenForm"

export default function DashboardManagement() {
  return <GardenImage action={GardenImageSubmission}/>
>>>>>>> efc30f0731400b2545a06a6a60480a0c855c7609
}
