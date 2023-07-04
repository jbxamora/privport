import { Navigation } from "../components/nav";
import { Card } from "../components/ui/card";

export default function TestimoniesPage() {
  return (
    <div className=" min-h-screen">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Testimonies
          </h2>
          <p className="mt-4 text-zinc-400">
            Read what others are saying about their experiences.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <h3 className="text-2xl font-bold text-zinc-100">
                Testimony Title 1
              </h3>
              <p className="mt-4 leading-8 duration-150 text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus vel erat quis mi ullamcorper ultrices. In euismod
                massa sit amet orci euismod, ac varius urna lacinia. Curabitur a
                nisi id felis ullamcorper rutrum.
              </p>
              <p className="mt-4 text-zinc-500">- Testimonial Author 1</p>
            </article>
          </Card>

          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <h3 className="text-2xl font-bold text-zinc-100">
                Testimony Title 2
              </h3>
              <p className="mt-4 leading-8 duration-150 text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus vel erat quis mi ullamcorper ultrices. In euismod
                massa sit amet orci euismod, ac varius urna lacinia. Curabitur a
                nisi id felis ullamcorper rutrum.
              </p>
              <p className="mt-4 text-zinc-500">- Testimonial Author 2</p>
            </article>
          </Card>
          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <h3 className="text-2xl font-bold text-zinc-100">
                Testimony Title 3
              </h3>
              <p className="mt-4 leading-8 duration-150 text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus vel erat quis mi ullamcorper ultrices. In euismod
                massa sit amet orci euismod, ac varius urna lacinia. Curabitur a
                nisi id felis ullamcorper rutrum.
              </p>
              <p className="mt-4 text-zinc-500">- Testimonial Author 3</p>
            </article>
          </Card>
          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <h3 className="text-2xl font-bold text-zinc-100">
                Testimony Title 4
              </h3>
              <p className="mt-4 leading-8 duration-150 text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus vel erat quis mi ullamcorper ultrices. In euismod
                massa sit amet orci euismod, ac varius urna lacinia. Curabitur a
                nisi id felis ullamcorper rutrum.
              </p>
              <p className="mt-4 text-zinc-500">- Testimonial Author 4</p>
            </article>
          </Card>
        </div>
      </div>
    </div>
  );
}
