import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-8 py-24">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
          FixiTruck
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl mx-auto">
          AI-powered diagnostics for commercial trucks.
          <br />
          30-second analysis. Instant repair connections.
        </p>
        <p className="mt-4 text-base text-gray-500">
          Platform launching soon.
        </p>
      </div>
    </main>
  );
}