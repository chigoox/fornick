import Image from "next/image";
import Home from "./Pages/Home";
import About1 from "./Pages/About1";
import About2 from "./Pages/About2";
import Hero from "./Pages/Hero";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <div className="flex snap-x snap-mandatory snap overflow-x-auto overflow-y-hidden w-screen h-screen  ">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex-none snap-start w-screen mr-2 h-screen last:mr-0  text-white flex items-center justify-center rounded-lg shadow-lg">
            {index == 0 && <Home />}
            {index == 1 && <About1 />}
            {index == 2 && <About2 />}
            {index == 3 && <Hero />}
          </div>
        ))}
      </div>
    </main>
  );
}
