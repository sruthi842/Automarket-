import React, { useState } from "react";

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
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80",
    verified: true,
  },
  {
    id: 4,
    name: "Maruti Suzuki Swift",
    brand: "Maruti Suzuki",
    type: "Hatchback",
    year: 2022,
    fuel: "Petrol",
    km: "22,300 km",
    price: 7.15,
    location: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
    verified: false,
  },
];

function Vehicles() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch =
      vehicle.name.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.brand.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.location.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      selectedType === "All" || vehicle.type === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-3xl font-bold text-blue-600">
            AutoMarket
          </h1>

          <button className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700">
            Sell Your Vehicle
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-blue-600 px-6 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold">
            Find Your Perfect Vehicle
          </h2>

          <p className="mt-3 text-lg text-blue-100">
            Browse verified second-hand cars from trusted sellers.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-3xl">
            <input
              type="text"
              placeholder="Search by car name, brand or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border-none px-5 py-4 text-gray-800 shadow-lg outline-none"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-3">
          {["All", "SUV", "Sedan", "Hatchback"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`rounded-full px-5 py-2 font-medium transition ${
                selectedType === type
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 shadow-sm hover:bg-blue-50"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Result Count */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800">
            Available Vehicles
          </h3>

          <p className="mt-1 text-gray-500">
            {filteredVehicles.length} vehicles found
          </p>
        </div>

        {/* Vehicle Cards */}
        {filteredVehicles.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />

                  {vehicle.verified && (
                    <span className="absolute left-3 top-3 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
                      ✓ Verified
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-5">
                  <h4 className="text-xl font-bold text-gray-800">
                    {vehicle.name}
                  </h4>

                  <p className="mt-1 text-sm text-gray-500">
                    {vehicle.year} • {vehicle.fuel} • {vehicle.km}
                  </p>

                  <div className="mt-4">
                    <span className="text-2xl font-bold text-blue-600">
                      ₹{vehicle.price} L
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-gray-500">
                    📍 {vehicle.location}
                  </p>

                  <button className="mt-5 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl bg-white py-16 text-center shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700">
              No vehicles found
            </h3>

            <p className="mt-2 text-gray-500">
              Try another search or filter.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Vehicles;