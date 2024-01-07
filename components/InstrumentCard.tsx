import Image from "next/image";

interface InstrumentCardProps {
  image: string;
  heading: string;
  content: string;
}

const InstrumentCard = ({ image, heading, content }: InstrumentCardProps) => {
  return (
    <div className="grid sm:grid-cols-4 gap-5 p-5 bg-light300 rounded">
      <div className="rounded-md overflow-hidden w-[10rem] h-fit sm:col-span-1 row-span-1 bg-light100 mx-auto">
        <Image
          src={image}
          alt="spark logo"
          className="w-full"
          width={200}
          height={200}
        />
      </div>
      <section className="sm:col-span-3 row-span-1 text-center text-light400 space-y-5">
        <h2 className="text-light400 font-bold">{heading}</h2>
        <p>{content}</p>
      </section>
    </div>
  );
};

export default InstrumentCard;
