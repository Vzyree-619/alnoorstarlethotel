import { gardenImageSubmission } from '@/actions/action';
import GardenForm from "@/components/ui/imageUpload/gardenForm"


export default function DashboardManagement() {
  return <GardenForm action={gardenImageSubmission} />;
}
