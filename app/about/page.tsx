"use client"
import { Navigation } from "../components/nav";
import { Card } from "../components/ui/card";
import { Book, Users, CheckSquare, Sparkles, Split, User  } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: <Book size={20} />,
    label: "Peer - Peer ",
    body: "lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    icon: <Users size={20} />,
    label: "Network",
    body: "lorem ipsum dolor sit amet consectetur adipiscing elit a",
  },
  {
    icon: <CheckSquare size={20} />,
    label: "New Solutions",
    body: "lorem ipsum dolor sit amet consectetur adipiscing elit b",
  },
  {
    icon: <Sparkles size={20} />,
    label: "Spotlight",
    body: "lorem ipsum dolor sit amet consectetur adipiscing elit c",
  },
  {
    icon: <Split size={20} />,
    label: "Continuous Growth",
    body: "lorem ipsum dolor sit amet consectetur adipiscing elit d",
  },
  {
    icon: <User size={20} />,
    label: "Community",
    body: "lorem ipsum dolor sit amet consectetur adipiscing elit e",
  },
];
export default function Example() {
  return (
    <div className="lg:pt-1 pb-16 items-center text-center bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="pt-10 mx-auto space-y-8 max-w-7xl lg:px-8">
        <div className=" mx-auto lg:mx-0 mt-10 pt-10">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Our Initiative
          </h2>
          <h3 className="mt-4 text-zinc-400">
            Kronos is committed to fostering an inclusive community centered on
            learning, mentorship, and professional growth. We showcase talent
            and encourage development through our unique ranking system. At
            Kronos, we are redefining creative collaboration.{" "}
          </h3>
        </div>
        <div className="w-full h-px bg-zinc-800" />
      </div>
<br />
      <div className="container flex items-center text-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-2 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {values.map((v) => (
            <Card key={v.label}>
              <Link
                href={""}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
              >
                <div
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {v.icon}
                </div>
                <div className="z-10 flex flex-col items-center">
                  <div className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {v.label}
                  </div>
                  <div className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {v.body}
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
