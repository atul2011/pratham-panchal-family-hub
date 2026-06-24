import AdminCard from "@/components/AdminCard";

export default function Dashboard() {

  const cards = [

    {
      title: "Gallery",
      value: 0,
    },

    {
      title: "Videos",
      value: 0,
    },

    {
      title: "Memories",
      value: 0,
    },

    {
      title: "Messages",
      value: 0,
    },

  ];

  return (

    <>

      <h1 className="text-4xl font-bold mb-10">

        Dashboard

      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        {cards.map((card) => (

          <AdminCard

            key={card.title}

            title={card.title}

            value={card.value}

          />

        ))}

      </div>

    </>

  );

}