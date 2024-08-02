
import { DiningImageSubmission } from "@/actions/action"
import DiningImage from "@/components/ui/imageUpload/diningForm"
export default function DashboardManagement() {
    
    
  return <DiningImage action={DiningImageSubmission}/>
}
