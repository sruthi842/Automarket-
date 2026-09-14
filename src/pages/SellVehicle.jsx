import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SellVehicle() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    brand: "",
    type: "SUV",
    year: "",
    fuel: "Petrol",
    km: "",
    price: "",
    location: "",
    phone: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Vehicle listed successfully!");

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* NAVBAR */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          <h1 className="text-2xl font-black text-slate-900">
            Auto<span className="text-blue-600">Market</span>
          </h1>

          <Link
            to="/"
            className="rounded-xl border border-slate-200 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50"
          >
            ← Home
          </Link>

        </div>
      </nav>

      {/* FORM */}
      <main className="mx-auto max-w-4xl px-5 py-10">

        <div className="mb-8 text-center">
          <p className="font-bold uppercase tracking-widest text-blue-600">
            Sell your vehicle
          </p>

          <h2 className="mt-2 text-4xl font-black text-slate-900">
            Create Your Listing
          </h2>

          <p className="mt-3 text-slate-500">
            Enter your vehicle details and reach interested buyers.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-6 shadow-xl sm:p-10"
        >

          <div className="grid gap-5 md:grid-cols-2">

            {/* VEHICLE NAME */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Vehicle Name
              </label>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Example: Hyundai Creta SX"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* BRAND */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Brand
              </label>

              <input
                name="brand"
                value={form.brand}
                onChange={handleChange}
                placeholder="Example: Hyundai"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* TYPE */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Vehicle Type
              </label>

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
              >
                <option>SUV</option>
                <option>Sedan</option>
                <option>Hatchback</option>
                <option>Bike</option>
              </select>
            </div>

            {/* YEAR */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Manufacturing Year
              </label>

              <input
                type="number"
                name="year"
                value={form.year}
                onChange={handleChange}
                placeholder="Example: 2022"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* FUEL */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Fuel Type
              </label>

              <select
                name="fuel"
                value={form.fuel}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
              >
                <option>Petrol</option>
                <option>Diesel</option>
                <option>Electric</option>
                <option>Hybrid</option>
              </select>
            </div>

            {/* KM */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Kilometers Driven
              </label>

              <input
                type="text"
                name="km"
                value={form.km}
                onChange={handleChange}
                placeholder="Example: 28,500 km"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* PRICE */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Asking Price (₹ Lakhs)
              </label>

              <input
                type="number"
                step="0.01"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Example: 12.75"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            {/* LOCATION */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Location
              </label>

              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Example: Hyderabad"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

          </div>

          {/* PHONE */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Contact Number
            </label>

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Example: +91 90000 00000"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          {message && (
            <div className="mt-6 rounded-xl bg-emerald-50 p-4 text-center font-bold text-emerald-600">
              ✓ {message}
            </div>
          )}

          <button
            type="submit"
            className="mt-7 w-full rounded-xl bg-blue-600 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
          >
            🚗 List My Vehicle
          </button>

        </form>

      </main>

    </div>
  );
}

export default SellVehicle;
