import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <header className="flex flex-col gap-5 items-center justify-center mt-10">
        <h1 className="text-5xl text-light400 font-bold rounded">
          Sparkedutech
        </h1>
        <p className="text-center text-light300 text-lg">
          Spark Edu-Tech is an organization implementing hands-on practical
          training at door steps to generate spark in the science students
          persuing studies inschool education (11th and 12th standard) and
          higher education in colleges and universities
        </p>
      </header>
    </React.Fragment>
  );
}
