import links from "@/constants/links";
import Image from "next/image";

interface Props {
  component: string;
  setComponent: (component: string) => void;
}

export default function Navbar(props: Props) {
  const { component, setComponent } = props;

  return (
    <div className="top-0 z-20 flex w-full items-center justify-center bg-transparent px-6 py-7 xl:px-0">
      <div className="flex w-full max-w-6xl items-center justify-between">
        <button onClick={() => setComponent("home")}>
          <Image
            src={"/assets/logo.svg"}
            alt={"Brand Logo"}
            width={50}
            height={50}
          />
        </button>

        <div className="flex gap-8">
          {links?.map((link) => (
            <button
              key={link.key}
              className={`font-bold ${
                component === link.key ? "text-sky-300" : "text-white"
              }`}
              onClick={() => setComponent(link.key)}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
