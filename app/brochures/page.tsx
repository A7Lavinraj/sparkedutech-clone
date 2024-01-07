import Brochure from "@/components/Brochure";

const brochures = [
  {
    id: 1,
    src: "/brochures/brochure-3.png",
    href: "/brochures/brochure-3.pdf",
    heading: "Sparkedutech Main Brochure",
    description: "A brochure for our Organization",
  },
  {
    id: 2,
    src: "/brochures/brochure-2.png",
    href: "/brochures/brochure-2.pdf",
    heading: "Consultancy Services",
    description: "A brochure for our services",
  },
  {
    id: 3,
    src: "/brochures/brochure-1.png",
    href: "/brochures/brochure-1.pdf",
    heading: "Scientific Equipments",
    description: "A brochure for our equipments",
  },
];

const BrochurePage = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full mt-20 gap-5">
      {brochures.map((brochure) => {
        return (
          <Brochure
            key={brochure.id}
            src={brochure.src}
            href={brochure.href}
            heading={brochure.heading}
            description={brochure.description}
          />
        );
      })}
    </section>
  );
};

export default BrochurePage;
