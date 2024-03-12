import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { FetchCars } from "@/utils";
import Image from "next/image";
export default async function Home() {
  const allCars = await FetchCars();
  console.log("cars",allCars)

  const isDataEmpty = allCars.length ===0  || !allCars || !Array.isArray(allCars);
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore the cars you might like</p>
          </div>
          <div className="home__filters ">
            <SearchBar />
          </div>
          <div className="home__filter-container">
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>
          </div>
          {!isDataEmpty ?(
            <section className="home__cars-wrapper">
                {allCars?.map((car)=>(
                  <CarCard car={car}/>
                ))}
            </section>
          ): (
            <section className="home__error-container">
              <span className="text-red-700">Opps,no result</span>
            </section>
          )}

        </div>
      </main>
    </>
  );
}
