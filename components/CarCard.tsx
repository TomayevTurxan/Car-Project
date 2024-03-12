import { CarProps } from "@/types";
import { CustomButton } from ".";
import React from "react";
import { calculateCarRent } from "@/utils";
import Image from "next/image";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make}
          {model}
        </h2>
        <p className="flex mt-6 text-[32px] font-extrabold">
          <span className="self-start text-[14px] font-semibold">$</span>
          {carRent}
          <span className="self-end text-[14px] font-medium">/day</span>
        </p>
      </div>
      <div className="relative w-full h-40 my-3 object-contain">
            <Image src="/hero.png" fill priority alt="carImg" className="object-contain"/>
      </div>
    </div>
  );
};

export default CarCard;