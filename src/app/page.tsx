import Link from "next/link";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Link href="/projects">
        <Button className="block mx-auto mt-10  bg-blue-700 text-white font-semibold rounded-4xl hover:scale-120 hover:text-blue-700 hover:bg-black dark:hover:bg-white">
          All Projects
        </Button>
      </Link>
    </div>
  );
}
