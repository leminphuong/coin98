import { detectLocaleByIP } from "@/lib/server/detectLocale";
import { getCoursesData } from "@/api/getHomeData";
import CoursesClient from "@/components/CoursesClient";



export default async function CoursesPage() {

  const ipLocale = await detectLocaleByIP();

  const data = await getCoursesData(ipLocale);
  const courses= data.courses || [];

  return <CoursesClient courses={data.courses || []} />;
}
