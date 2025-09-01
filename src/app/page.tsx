import { Highlighter } from "@/components/magicui/highlighter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] h-[30vh] sm:h-[35vh] md:h-[40vh] max-w-2xl">
            <Image
              src="/truck.png"
              alt="FixiTruck"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
          FixiTruck
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-600 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto px-4">
          <Highlighter 
            action="highlight" 
            color="#ffd700" 
            isView={true}
            animationDuration={600}
            animationDelay={0}
          >
            AI-powered diagnostics
          </Highlighter>{" "}
          for commercial trucks.
          <br className="hidden sm:block" />
          <span className="block sm:inline">
            <Highlighter 
              action="underline" 
              color="#ff6b6b" 
              isView={true}
              animationDuration={600}
              animationDelay={800}
            >
              30-second analysis
            </Highlighter>
            . Instant repair connections.
          </span>
        </p>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500">
          Platform launching soon.
        </p>
      </div>
    </main>
  );
}