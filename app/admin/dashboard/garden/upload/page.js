import { DiningImageSubmission } from '@/actions/action';
import GardenImage from '@/components/ui/imageUpload/diningForm';

export default function DashboardManagement() {
  return <GardenImage action={DiningImageSubmission} />;
}
