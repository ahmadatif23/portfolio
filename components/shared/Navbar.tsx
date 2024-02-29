import links from "@/constants/links";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";

export default function Navbar() {
  return (
    <div className="z-10 flex w-full items-center justify-center bg-transparent px-6 py-7 xl:px-0">
      <div className="flex w-full max-w-6xl items-center justify-between">
        <button>
          <Image
            src={logo}
            alt={"Brand Logo"}
            className="h-10 w-auto transition-all hover:scale-105 md:h-14"
          />
        </button>

        <div className="hidden gap-8 md:flex">
          {links?.map((link) => (
            <button
              key={link.key}
              className="text-lg font-semibold lowercase text-theme-5 transition-all hover:text-theme-4"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
