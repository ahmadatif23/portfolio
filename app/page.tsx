"use client";

import Image from "next/image";
import Link from "next/link";
import hero from "@/public/assets/hero.svg";

export default function Home() {
  return (
    <section className="bg-stripe flex w-full max-w-6xl flex-col-reverse items-center px-6 py-7 lg:flex-row xl:px-0">
      <div className="z-10 mt-10 text-center lg:mt-0 lg:w-[49%] lg:text-start">
        <p className="mb-8 text-xl font-medium md:text-2xl">
          Hi, I&apos;m <strong>Ahmad</strong>!
        </p>

        <h1 className="lead whitespace-pre-wrap text-[6.8vw] font-extrabold !leading-[1.25] sm:text-[5vw] md:text-[4vw] lg:whitespace-normal lg:text-[3.2vw]">
          I love creating things for webs. {"\n"}Here&apos;s where i share my{" "}
          <Link href={"/"} className="text-outline">
            projects
          </Link>{" "}
          &{" "}
          <Link href={"/"} className="text-outline">
            thoughts
          </Link>
          .
        </h1>
      </div>

      <div className="justify-center-center z-10 flex flex-1 pl-2">
        <Image
          src={hero}
          alt={"Brand Logo"}
          priority
          className="w-full animate-[bounces_3s_ease-in-out_infinite]"
        />
      </div>
    </section>
  );
}
