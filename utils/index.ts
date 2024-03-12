
export async function FetchCars() {
  const headers = {
    "X-RapidAPI-Key": "dcb034963emsh4efab73a7d5f2d8p1904bajsn7c1cfe11b0b5",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const res = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
    headers: headers,
  });

  const result = await res.json();
  return result;
}
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; 
  const mileageFactor = 0.1; 
  const ageFactor = 0.05; 

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};