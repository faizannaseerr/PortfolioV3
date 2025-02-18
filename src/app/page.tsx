import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Links from "@/components/Links";
import WobblyLine from "@/components/WobblyLine";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Intro />
      <Projects />
      <WobblyLine />
      <Links />
    </div>
  );
}
