"use client";
import { useState } from "react";

const Client = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 className="text-7xl pl-2 font-bold mb-4">{count}</h2>
      <button
        className="btn btn-neutral uppercase"
        onClick={(prev) => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
};

export default Client;
