import { roomImageSubmission } from "@/actions/action";
import RoomImage from "@/components/ui/imageUpload/roomForm";
export default function DashboardManagement() {
   return <RoomImage action={roomImageSubmission}/>
}
