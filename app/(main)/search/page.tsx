import { Suspense } from "react";
import SearchClient from "./SearchClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-300">Loading...</div>}>
      <SearchClient />
    </Suspense>
  );
}
