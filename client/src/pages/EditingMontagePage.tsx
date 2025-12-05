import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getServiceById } from "@/../../shared/services";

export default function EditingMontagePage() {
  const service = getServiceById("editing-montage");

  if (!service) {
    return <div>Service not found.</div>;
  }

  return <ServicePageTemplate service={service} />;
}
