import React from "react";
import Image from "next/image";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

import drinkImg from "./drink.jpg";

const fetchSingleDrinkInfo = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${url}${id}`);
  if (!response.ok) {
    throw new Error("OOPS! Could not fetch the Drink Info");
  }
  const data = await response.json();
  return data;
};

const SingleDrinkDetails = async ({ params }) => {
  const data = await fetchSingleDrinkInfo(params.drinkid);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  const instructions = data?.drinks[0]?.strInstructions;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="2/5">
        <Image
          src={imgSrc}
          alt={title}
          width={300}
          height={300}
          className="full h-96"
          priority
        />
      </figure>
      <div className="card-body w-3/5">
        <h2 className="card-title">{title}</h2>
        <p>{instructions}</p>
      </div>
    </div>
  );
};
export default SingleDrinkDetails;
