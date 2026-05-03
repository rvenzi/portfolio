import About from "@/components/About";
import Contact from "@/components/contact";
import Experience from "@/components/Experience";
import Hero from "@/components/hero";
import MyProjects from "@/components/myProjects";
import MyStack from "@/components/myStack";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <MyStack />
      <MyProjects />
      <Contact />
    </main>
  );
}
