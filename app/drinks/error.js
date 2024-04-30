"use client";

const Error = ({ error }) => {
  return <div className="text-red-400 font-bold">OOPS! {error.message}</div>;
};

export default Error;
