"use client";

import AboutComponent from "@/components/home/AboutComponent";
import ExperienceComponent from "@/components/home/ExperienceComponent";
import HomeComponent from "@/components/home/HomeComponent";
import Background from "@/components/layout/Background";
import Navbar from "@/components/layout/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [component, setComponent] = useState("home");
  const [showComponent, setShowComponent] = useState(true);

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

  useEffect(() => {
    setShowComponent(false);

    setTimeout(() => {
      setShowComponent(true);
    }, 500);
  }, [component]);

  return (
    <main className="flex min-h-[100dvh] w-screen flex-col bg-theme-3 text-theme-5">
      <Navbar component={component} setComponent={setComponent} />

      <div className="flex h-full w-full flex-1 items-center justify-center">
        <HomeComponent />
      </div>
    </main>
  );
}
