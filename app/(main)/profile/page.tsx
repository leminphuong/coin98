import Link from "next/link";
import AvatarCircle from "@/components/AvatarCircle";
import Image from "next/image";
import BodyClass from "@/components/BodyClass";
import ProfileHeader from "@/components/ProfileHeader";
import { detectLocaleByIP } from "@/lib/server/detectLocale";
import ProfileLayout from "@/components/ProfileLayout";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
export default async function Page({ params }: PageProps) {
  const { slug } = await params;
    const lang = (await detectLocaleByIP()) === "en" ? "en" : "vi";
  
  return (
    <div className="group/profile relative w-full flex flex-col box-border max-w-w1280 mx-auto h-screenBodyFullMobile lg:h-screenBodyFull data-[sidebar=open]:overflow-hidden lg:data-[sidebar=open]:overflow-visible">
      
      <BodyClass className="hide-footer" />
      <ProfileHeader slug={slug} lang={lang}/>

      <ProfileLayout />
    </div>
  );
}
