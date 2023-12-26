import Image from "next/image";

interface InstrumentCardProps {
  image: string;
  heading: string;
  content: string;
}

const InstrumentCard = ({ image, heading, content }: InstrumentCardProps) => {
  return (
    <div className="grid grid-cols-4 bg-light200 p-5">
      <div className="rounded-md overflow-hidden max-w-[10rem] col-span-1">
        <Image
          src={image}
          alt="spark logo"
          className="w-full"
          width={200}
          height={200}
        />
      </div>
      <section className="space-y-5 col-span-3">
        <h2 className="text-light400 font-bold">{heading}</h2>
        <p>{content}</p>
      </section>
    </div>
  );
};

export default InstrumentCard;
