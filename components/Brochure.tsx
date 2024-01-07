import Image from "next/image";
import Link from "next/link";

interface BrochureProps {
  src: string;
  href: string;
  heading: string;
  description: string;
}

const Brochure = ({ src, href, heading, description }: BrochureProps) => {
  return (
    <div className="grid sm:grid-cols-4 gap-5 p-5 border border-light300 rounded">
      <div className="rounded-md overflow-hidden w-[10rem] h-fit sm:col-span-1 row-span-1 bg-light100 mx-auto">
        <Image
          src={src}
          alt="Brochure"
          className="w-full"
          width={200}
          height={200}
        />
      </div>
      <section className="sm:col-span-3 row-span-1 text-center text-light400 space-y-5 flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-light400 font-bold">{heading}</h2>
          <p>{description}</p>
        </div>
        <Link
          href={href}
          className="bg-light400 p-2 text-center text-light100 rounded"
        >
          <button>Download</button>
        </Link>
      </section>
    </div>
  );
};

export default Brochure;
