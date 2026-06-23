const timeline = [

  {
    year: "2023",
    place: "Zambia",
    text: "New chapter began.",
  },

  {
    year: "2024",
    place: "Zambia",
    text: "Family growth and experiences.",
  },

  {
    year: "2025",
    place: "India ↔ Zambia",
    text: "Life between two countries.",
  },

  {
    year: "2026",
    place: "India",
    text: "Future planning.",
  },

];

export default function Timeline() {

  return (

    <section className="bg-gray-100 py-20 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-12 text-center">

          India ↔ Zambia Journey

        </h2>

        <div className="space-y-6">

          {timeline.map((item) => (

            <div

              key={item.year}

              className="bg-white p-6 rounded-xl shadow"

            >

              <h3 className="font-bold text-2xl">

                {item.year}

              </h3>

              <p className="font-semibold">

                {item.place}

              </p>

              <p>

                {item.text}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}