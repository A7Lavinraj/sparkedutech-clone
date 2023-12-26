import InstrumentCard from "@/components/InstrumentCard";
import { instrumentsList } from "@/data/instrumentlist.ts";

const InstrumentPage = () => {
  return (
    <div className="mt-10">
      <section className="space-y-5">
        {instrumentsList.map((instrument) => {
          return (
            <InstrumentCard
              key={instrument.id}
              image={instrument.image}
              heading={instrument.heading}
              content={instrument.content}
            />
          );
        })}
      </section>
    </div>
  );
};

export default InstrumentPage;
