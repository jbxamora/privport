"use client"
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Book, Users, CheckSquare, Sparkles, Split, User, Link  } from "lucide-react";

const values = [
  {
    icon: <Book size={10} />,
    label: "Peer - Peer ",
    body: "lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    icon: <Users size={10} />,
    label: "Network",
    body: "lorem ipsum dolor sit amet consectetur adipiscing elit a",
  },
  {
    icon: <CheckSquare size={10} />,
    label: "New Solutions",
    body: "lorem ipsum dolor sit amet consectetur adipiscing elit b",
  },
  {
    icon: <Sparkles size={10} />,
    label: "Spotlight",
    body: "lorem ipsum dolor sit amet consectetur adipiscing elit c",
  },
  {
    icon: <Split size={10} />,
    label: "Continuous Growth",
    body: "lorem ipsum dolor sit amet consectetur adipiscing elit d",
  },
  {
    icon: <User size={10} />,
    label: "Community",
    body: "lorem ipsum dolor sit amet consectetur adipiscing elit e",
  },
];
export default function Example() {
  return (
    <div className="relative lg:pt-1 pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
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

      <div className="px-6 pt-16 ml-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 text-right">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Our Values
          </h2>
          <h3 className="mt-4 text-zinc-400">
            We offer a unique blend of services and opportunities that cater to
            the needs of our diverse community. Our value lies in the unique
            confluence of learning, networking, exposure, and growth we provide
            for our community members.{" "}
          </h3>
        </div>
        <div className="w-full h-px bg-zinc-800" />
      </div>

      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {values.map((v) => (
            <Card>
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
