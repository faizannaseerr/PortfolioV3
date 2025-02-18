import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Links from "@/components/Links";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Intro />
      <Projects />
      <Links />
    </div>
  );
}
