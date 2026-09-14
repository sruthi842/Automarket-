import React from "react";
import { Link, useParams } from "react-router-dom";

const vehicles = [
  {
    id: 1,
    name: "Hyundai Creta SX",
    brand: "Hyundai",
    type: "SUV",
    year: 2022,
    fuel: "Petrol",
    km: "28,500 km",
    price: 12.75,
    location: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80",
    verified: true,
  },
  {
    id: 2,
    name: "Tata Nexon XZ+",
    brand: "Tata",
    type: "SUV",
    year: 2021,
    fuel: "Diesel",
    km: "34,200 km",
    price: 8.45,
    location: "Warangal",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
    verified: true,
  },
  {
    id: 3,
    name: "Honda City VX",
    brand: "Honda",
    type: "Sedan",
    year: 2023,
    fuel: "Petrol",
    km: "18,600 km",
    price: 11.25,
    location: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
    verified: true,
  },
  {
    id: 4,
    name: "Royal Enfield Classic 350",
    brand: "Royal Enfield",
    type: "Bike",
    year: 2023,
    fuel: "Petrol",
    km: "11,800 km",
    price: 1.72,
    location: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
    verified: false,
  },
  {
    id: 5,
    name: "Maruti Suzuki Swift",
    brand: "Maruti",
    type: "Hatchback",
    year: 2022,
    fuel: "Petrol",
    km: "22,400 km",
    price: 6.25,
    location: "Karimnagar",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    verified: true,
  },
  {
    id: 6,
    name: "Toyota Fortuner",
    brand: "Toyota",
    type: "SUV",
    year: 2020,
    fuel: "Diesel",
    km: "48,700 km",
    price: 28.5,
    location: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=80",
    verified: true,
  },
];

function VehicleDetails() {
  const { id } = useParams();
  const vehicle = vehicles.find((item) => item.id === Number(id));
  return (
    <div className="min-h-screen bg-slate-50">

      {/* NAVBAR */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl">
              🚗
            </div>

            <div>
              <h1 className="text-xl font-extrabold">
                Auto<span className="text-blue-600">Market</span>
              </h1>

              <p className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
                Trusted Vehicle Marketplace
              </p>
            </div>
          </div>

          <button
            onClick={() => window.history.back()}
            className="rounded-xl border border-slate-200 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50"
          >
            ← Back
          </button>

        </div>
      </nav>


      {/* VEHICLE DETAILS */}
      <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
              
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="h-[420px] w-full object-cover"
              />
              
          </div>


          {/* INFORMATION */}
          <div>

            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
              ✓ Verified Seller
            </span>

            <p className="mt-6 text-sm font-bold uppercase tracking-widest text-blue-600">
              {vehicle.brand}
            </p>

            <h2 className="mt-2 text-4xl font-black text-slate-900">
              {vehicle.name}
            </h2>
               
            <p className="mt-3 text-3xl font-black text-blue-600">
              ₹{vehicle.price}L
            </p>

            <p className="mt-2 text-slate-500">
              📍  {vehicle.location}
            </p>


            {/* SPECIFICATIONS */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">

              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="text-xs text-slate-400">Year</p>
                <p className="mt-1 font-bold">{vehicle.year}</p>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="text-xs text-slate-400">Fuel</p>
                <p className="mt-1 font-bold">{vehicle.fuel}</p>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="text-xs text-slate-400">Kilometers</p>
                <p className="mt-1 font-bold">{vehicle.km}</p>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="text-xs text-slate-400">Type</p>
                <p className="mt-1 font-bold">{vehicle.type}</p>
              </div>

            </div>


            {/* DESCRIPTION */}
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

              <h3 className="text-xl font-black">
                Vehicle Description
              </h3>

              <p className="mt-3 leading-7 text-slate-500">
                Well-maintained Toyota Fortuner available from a verified
                seller in Hyderabad. This vehicle offers excellent comfort,
                performance and reliability for both city and long-distance
                driving.
              </p>

            </div>


            {/* ACTIONS */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

             <button
  onClick={() => alert("Seller Contact: +91 90000 00000")}
  className="flex-1 rounded-xl bg-blue-600 py-4 text-center font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
>
  📞 Contact Seller
</button> 

             <button
  onClick={() => alert("Vehicle added to favorites! ❤️")}
  className="flex-1 rounded-xl border-2 border-slate-200 bg-white py-4 font-bold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
>
  ♡ Add to Favorites
</button> 

            </div>

          </div>

        </div>

      </main>


      {/* FOOTER */}
      <footer className="mt-10 bg-slate-950 py-8 text-center text-slate-400">
        <p>© 2026 AutoMarket. Built with React + Tailwind CSS.</p>
      </footer>

    </div>
  );
}

export default VehicleDetails;