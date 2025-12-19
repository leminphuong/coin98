import ProfileTabs from "@/components/ProfileTabs";
import ProfileTabContent from "./ProfileTabContent";

export default function ProfileLayout() {
  return (
    <div className="flex-1 relative">
      {/* SIDEBAR */}
      <div className="hidden lg:block lg:pb-400 h-full bg-background border-0125 lg:border-none transition-all duration-200 ease-linear absolute top-900 lg:top-0 bottom-0 w-w320 lg:w-w224 lg:left-0 z-10">
        <div className="bg-divider-subtle w-0125 h-full absolute right-0 top-0 bottom-0"></div>

        <div className="sticky top-1600 md:top-sp160 lg:top-sp160">
          <div className="px-200">
            <ProfileTabs />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="lg:pl-sp224 lg:pt-100">
        <div className="lg:pl-1000 mx-auto h-full">
            <ProfileTabContent />
    
        </div>
      </div>
    </div>
  );
}
