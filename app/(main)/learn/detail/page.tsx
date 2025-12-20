import { Suspense } from "react";
import DetailLearnClient from "./DetailLearnClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-300">Loading...</div>}>
      <DetailLearnClient />
    </Suspense>
  );
}
