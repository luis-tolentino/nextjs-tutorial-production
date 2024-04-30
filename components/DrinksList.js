import Link from "next/link";
import Image from "next/image";

const DrinksList = ({ drinks }) => {
  console.log(drinks);
  return (
    <ul className="grid sm:grid-cols-3 md:grid-cols3 gap-6 mt-6 ">
      {drinks.map((drink) => {
        return (
          <>
            {!drink ? (
              <div className="flex flex-col gap-4 w-96 my-20" key={Date.now()}>
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ) : (
              <li key={drink?.idDrink} className="w-80 ">
                <Link href={`/drinks/${drink?.idDrink}`}>
                  <div className="card h-96 bg-base-100 shadow-xl ">
                    <figure className="h-3/5 relative">
                      <Image
                        src={drink?.strDrinkThumb}
                        alt="Shoes"
                        className="rounded object-cover"
                        fill
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw"
                      />
                    </figure>
                    <div className="card-body h-2/5 p-r-0">
                      <h2 className="card-title">{drink?.strDrink}</h2>
                      <p className="line-clamp-2">{drink?.strInstructions}</p>
                    </div>
                  </div>
                </Link>
              </li>
            )}
          </>
        );
      })}
    </ul>
  );
};

export default DrinksList;
