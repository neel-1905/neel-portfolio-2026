import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { ArrowUpRight, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-14 flex flex-col lg:flex-row gap-10 px-4">
      <div className="w-full lg:w-1/2 flex flex-col gap-7">
        <div className="bg-card rounded-full py-1.5 px-3 w-max flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-2xs text-foreground-muted uppercase tracking-wider font-mono">
            Full-Stack Developer · Building for the Web
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl leading-[1.15] font-heading font-bold">
          I build digital <br />
          experiences that <br />
          <span className="text-primary underline underline-offset-7">
            work beautifully
          </span>
          .
        </h1>

        <p className="text-foreground-muted font-medium text-base md:text-lg">
          I turn complex ideas into fast, scalable, and thoughtfully designed
          digital products — from polished frontend experiences to resilient,
          high-throughput backend architecture.
        </p>

        <div className="flex gap-4">
          <button className="btn-primary">
            Explore my work
            <ArrowUpRight size={18} />
          </button>

          <button className="btn-tertiary">
            Let's talk
            <Mail size={18} />
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <Image
          loading="eager"
          src={IMAGES.hero}
          alt="Hero"
          width={500}
          height={500}
          className="aspect-4/3 h-full w-full rounded-xl"
        />
      </div>
    </section>
  );
}
