export default function AdminCard({

  title,

  value,

}) {

  return (

    <div className="bg-white rounded-xl shadow p-6">

      <h3 className="text-lg font-semibold">

        {title}

      </h3>

      <p className="text-4xl mt-4 font-bold">

        {value}

      </p>

    </div>

  );

}