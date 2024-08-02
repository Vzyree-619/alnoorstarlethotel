import { nightImageSubmission } from "@/actions/action"
import NightImage from "@/components/ui/imageUpload/nightForm"
export default function DashboardManagement() {
  return <NightImage action={nightImageSubmission}/>
}
