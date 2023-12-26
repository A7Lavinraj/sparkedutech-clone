import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <header className="flex flex-col gap-5 items-center justify-center mt-10">
      <div className="relative rounded-md overflow-hidden">
        <Image
          src="/hero-cover.jpg"
          width={1280}
          height={720}
          alt="Hero Cover"
          className="w-full h-full"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-light100" />
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-light400 font-bold rounded absolute left-0 top-5 text-center w-full">
          Spark Edu Tech
        </h1>
      </div>
      <p className="text-center text-light400 text-lg mx-auto font-bold">
        Spark Edu-Tech is an organization implementing hands-on practical
        training at door steps to generate spark in the science students
        persuing studies inschool education (11th and 12th standard) and higher
        education in colleges and universities
      </p>
    </header>
  );
}
