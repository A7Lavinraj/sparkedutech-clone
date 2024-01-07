import Image from "next/image";

interface CardProps {
  name: string;
  position: string;
}

const Card = ({ name, position }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-light300 p-5 rounded text-center">
      <div className="relative rounded-full overflow-hidden">
        <Image
          src="/profile.jpg"
          width={160}
          height={90}
          alt="Hero Cover"
          className="w-full h-full"
        />
      </div>
      <section className="space-y-2">
        <h2 className="font-bold lg:text-lg">{name}</h2>
        <p>{position}</p>
      </section>
    </div>
  );
};

export default Card;
