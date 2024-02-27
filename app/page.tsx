"use client";

import AboutComponent from "@/components/home/AboutComponent";
import ExperienceComponent from "@/components/home/ExperienceComponent";
import HomeComponent from "@/components/home/HomeComponent";
import Background from "@/components/layout/Background";
import Navbar from "@/components/layout/Navbar";
import { useState } from "react";

export default function Home() {
  const [component, setComponent] = useState("home");

  const CurrentComponent = () => {
    switch (component) {
      case "home":
        return <HomeComponent />;
      case "about":
        return <AboutComponent />;
      case "experience":
        return <ExperienceComponent />;
      default:
        return null;
    }
  };

  return (
    <main className="relative min-h-[100dvh] w-[100dvw] bg-sky-950">
      <Background />

      <div className="relative z-10 flex h-[100dvh] w-full flex-col">
        <Navbar component={component} setComponent={setComponent} />

        <div className="flex h-full w-full items-center justify-center">
          <CurrentComponent />
        </div>
      </div>
    </main>
  );
}
