import { Hero } from "@/components/Hero";
import { Banner } from "@/components/Banner";
import { LandingPage } from "../components/LandingPage";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="mt-20">
        <Banner />
      </div>
      <div className="flex justify-center w-full min-h-screen">
        <LandingPage />
      </div>
    </main>
  );
}
