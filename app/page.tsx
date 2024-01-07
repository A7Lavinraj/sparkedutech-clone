import Card from "@/components/Card";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <header className="flex flex-col gap-5 items-center justify-center mt-10">
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-light400 font-bold rounded text-center w-full">
          Spark Edu Tech
        </h1>
        <p className="text-center text-light400 text-lg mx-auto font-bold">
          Spark Edu-Tech is an organization implementing hands-on practical
          training at door steps to generate spark in the science students
          persuing studies inschool education (11th and 12th standard) and
          higher education in colleges and universities
        </p>
      </header>
      <main className="flex flex-col space-x-5 mt-10 justify-center items-center">
        <h2 className="text-lg">Company officials</h2>
        <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
          <Card name="Official Name" position="Official Position" />
          <Card name="Official Name" position="Official Position" />
        </div>
      </main>
      <footer className="text-center my-10">
        <p>&copy; sparkedutech 2023. All rights are reserved</p>
      </footer>
    </React.Fragment>
  );
}
