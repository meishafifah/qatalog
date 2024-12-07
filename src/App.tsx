import { ChevronRight, SearchCheck, Combine } from "lucide-react";
import Navbar from "./components/Navbar";
import { Button } from "./components/ui/button";
import Grid from "./components/Grid";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="relative -z-10">
        {/* <div className="absolute -z-10 -top-8 -left-2 border-dashed border-2 border-black/50 w-32 h-32 rounded-full"></div>
        <div className="absolute -z-10 top-12 left-16 border-dashed border-2 border-black/50 w-20 h-20 rounded-full"></div>
        <div className="absolute -z-10 top-16 left-96 border-dashed border-2 border-black/50 w-32 h-32 rounded-full"></div> */}
      </div>
      <div className="flex justify-center">
        <div className="w-full p-4 lg:p-0 lg:w-1/2 flex flex-col items-center relative z-10">
          <Navbar />
          <section
            id="hero"
            className="pt-32 my-18 lg:my-20 flex flex-col items-center gap-4"
          >
            <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Qatalog: Katalog Pilihanmu, Semua dalam Satu Tempat!
            </h1>
            <h3 className="scroll-m-20 text-2xl font-light tracking-tight">
              Semua Ada, Semua Mudah
            </h3>
            <div className="mt-4 flex flex-col w-full p-4 bg-white border shadow-md rounded-xl">
              <textarea
                placeholder="tanyakan pertanyaan"
                className="w-full h-16 focus:outline-none text-black/50"
                name=""
                id=""
              ></textarea>
              <div className="flex justify-end">
                <Button className="mt-4 rounded-full bg-black/80 text-white hover:text-black">
                  Get Started <ChevronRight />
                </Button>
              </div>
            </div>
          </section>

          <section id="features" className="flex justify-between mt-10 lg:mt-0">
            <div className="p-4 text-balance flex flex-col gap-2 items-center">
              <SearchCheck />
              <h4 className="scroll-m-20 text-center text-base md:text-xl font-light tracking-tight">
                Pencarian Pintar (Smart Search)
              </h4>
            </div>
            <div className="p-4 text-balance flex flex-col gap-2 items-center">
              <Combine />
              <h4 className="scroll-m-20 text-center text-base md:text-xl font-light tracking-tight">
                Katalog Dinamis Berbasis Preferensi
              </h4>
            </div>
          </section>

          <section id="description" className="mt-20">
            <Grid>
              <h1 className="text-center text-base md:text-xl lg:text-4xl font-extrabold tracking-tight">
                Qatalog: Katalog Pilihanmu, Semua dalam Satu Tempat!
              </h1>
              <h3 className="text-sm md:text-lg lg:text-2xl font-light tracking-tight">
                Semua Ada, Semua Mudah
              </h3>
            </Grid>
          </section>

          <section
            id="started"
            className="mt-10 md:mt-20 flex flex-col items-center gap-6"
          >
            <h1 className="text-center scroll-m-20 text-base md:text-xl font-bold tracking-tight lg:text-5xl">
              Get Started
            </h1>
            <h3 className="scroll-m-20 text-sm md:text-lg lg:text-2xl font-light tracking-tight">
              Awal menuju langkah mudah
            </h3>
            <div className="flex justify-between gap-8">
              <Button className="rounded-full bg-black/5">Demo</Button>
              <Button className="rounded-full bg-black/80 text-white hover:text-black">
                Get Started <ChevronRight />
              </Button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
