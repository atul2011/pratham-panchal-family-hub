const sketches = [

  "Family Portrait",

  "India Memories",

  "Zambia Memories",

  "Creative Moments",

];

export default function SketchGallery() {

  return (

    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold mb-10 text-center">

        Sketch Gallery

      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {sketches.map((item) => (

          <div

            key={item}

            className="h-56 bg-gray-200 rounded-xl flex items-center justify-center text-xl font-semibold"

          >

            {item}

          </div>

        ))}

      </div>

    </section>

  );

}