
import { diningImageSubmission } from "@/actions/action"
import DiningImage from "@/components/ui/imageUpload/diningForm"
export default function DashboardManagement() {
    
    
  return <DiningImage action={diningImageSubmission}/>
}
