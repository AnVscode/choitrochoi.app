import { Suspense } from "react";
import Loading from "../loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="container bg-yellow-700">
        <div className="p-5">home</div>
      </div>
    </Suspense>
  );
}
