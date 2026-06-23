export default function YoutubeSection() {

  return (

    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold mb-10 text-center">

        YouTube Channel

      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div>

          <h3 className="text-3xl font-semibold mb-4">

            Pratham Panchal

          </h3>

          <p className="mb-6 text-lg">

            Watch our latest videos and family content.

          </p>

          <a

            href="https://youtube.com/@prathampanchal2009"

            target="_blank"

            className="bg-red-600 text-white px-6 py-3 rounded-lg"

          >

            Visit Channel

          </a>

        </div>

        <div className="aspect-video">

          <iframe

            className="w-full h-full rounded-xl"

            src="https://www.youtube.com/embed/aqz-KE-bpKQ"

            allowFullScreen

          />

        </div>

      </div>

    </section>

  );

}