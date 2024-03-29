import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { FetchCars } from "@/utils";
import Image from "next/image";
export default async function Home({ searchParams }: any) {
  const allCars = await FetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  console.log("cars", allCars);

  const isDataEmpty =
    allCars.length === 0 || !allCars || !Array.isArray(allCars);
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore the cars you might like</p>
          </div>
          <div className="home__filterHead flex mt-10 ">
            <div className="home__filters ">
              <SearchBar />
            </div>
            <div className="home__filter-container">
              <CustomFilter title="fuel" options={fuels} />
              <CustomFilter title="year" options={yearsOfProduction} />
            </div>
          </div>
          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {allCars?.map((car) => (
                  <CarCard car={car} />
                ))}
              </div>
              <ShowMore pageNumber={(searchParams.limit || 10) / 10}  isNext={(searchParams.limit || 10) > allCars.length}/>
            </section>
          ) : (
            <section className="home__error-container">
              <span className="text-red-700">Opps,no result</span>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
