import { useMemo, useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import VehicleDetails from "./pages/VehicleDetails";
import Login from "./pages/Login";
import SellVehicle from "./pages/SellVehicle";
import ContactSeller from "./pages/contactseller";


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

function Home() {
  const [search, setSearch] = useState("");
  const [sellerVehicles, setSellerVehicles] = useState([]);

useEffect(() => {
  const savedVehicles =
    JSON.parse(localStorage.getItem("automarketVehicles")) || [];

  setSellerVehicles(savedVehicles);
}, []);
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(30);
  const [favorites, setFavorites] = useState([]);

  const categories = ["All", "Cars", "SUV", "Sedan", "Hatchback", "Bike"];

  const allVehicles = [...vehicles, ...sellerVehicles];

const filteredVehicles = useMemo(() => {
  return allVehicles.filter((vehicle) => {
      const searchMatch =
        vehicle.name.toLowerCase().includes(search.toLowerCase()) ||
        vehicle.brand.toLowerCase().includes(search.toLowerCase()) ||
        vehicle.location.toLowerCase().includes(search.toLowerCase());

      const categoryMatch =
        category === "All" ||
        (category === "Cars"
          ? vehicle.type !== "Bike"
          : vehicle.type === category);

      const priceMatch = vehicle.price <= maxPrice;

      return searchMatch && categoryMatch && priceMatch;
    });
  }, [search, category, maxPrice, sellerVehicles ]);

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl shadow-lg shadow-blue-200">
              🚗
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
                Auto<span className="text-blue-600">Market</span>
              </h1>
              <p className="hidden text-[10px] font-medium uppercase tracking-widest text-slate-400 sm:block">
                Trusted Vehicle Marketplace
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#" className="font-semibold text-blue-600">
              Home
            </a>
            <a href="#vehicles" className="text-slate-600 hover:text-blue-600">
              Vehicles
            </a>
            <a href="#how" className="text-slate-600 hover:text-blue-600">
              How It Works
            </a>
            <a href="#about" className="text-slate-600 hover:text-blue-600">
              About
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
  to="/login"
  className="hidden rounded-xl border border-slate-200 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50 sm:block"
>
  Sign In
</Link>

           <Link
  to="/sell"
  className="rounded-xl bg-blue-600 px-4 py-2.5 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
>
  + Sell Vehicle
</Link> 
          </div>

        </div>
      </nav>


      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-slate-950 to-slate-900" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

          <div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              ✦ India's smarter way to buy used vehicles
            </div>

            <h2 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Find a vehicle
              <span className="block text-blue-400">
                you'll love to drive.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Discover verified second-hand cars and bikes from trusted
              sellers. Compare prices, explore details and find your next
              vehicle with confidence.
            </p>

            {/* SEARCH */}
            <div className="mt-8 rounded-2xl bg-white p-2 shadow-2xl shadow-black/30">

              <div className="flex flex-col gap-2 sm:flex-row">

                <div className="flex flex-1 items-center rounded-xl bg-slate-50 px-4">
                  <span className="mr-3 text-xl">🔍</span>

                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search brand, model or location..."
                    className="w-full bg-transparent py-4 outline-none"
                  />
                </div>

                <button
                  onClick={() =>
                    document
                      .getElementById("vehicles")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
                >
                  Search Vehicles
                </button>

              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-300">
              <span>✓ Verified listings</span>
              <span>✓ Transparent pricing</span>
              <span>✓ Trusted sellers</span>
            </div>

          </div>


          {/* HERO IMAGE */}
          <div className="relative hidden lg:block">

            <div className="absolute -inset-5 rounded-[3rem] bg-blue-500/20 blur-3xl" />

            <img
              src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=85"
              alt="Premium vehicle"
              className="relative h-[470px] w-full rounded-[2rem] object-cover shadow-2xl"
            />

            <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-xs font-semibold text-slate-400">
                HAPPY BUYERS
              </p>
              <p className="mt-1 text-2xl font-black">
                10,000+
              </p>
            </div>

            <div className="absolute right-6 top-6 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-xs text-slate-400">
                TRUST SCORE
              </p>
              <p className="mt-1 font-bold text-green-600">
                ★ 4.9 / 5
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Explore
            </p>
            <h2 className="mt-2 text-3xl font-black">
              Browse by category
            </h2>
          </div>

          <span className="hidden text-sm text-slate-500 sm:block">
            Find what fits your lifestyle
          </span>
        </div>


        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-2xl border p-6 text-left transition ${
                category === item
                  ? "border-blue-600 bg-blue-600 text-white shadow-xl shadow-blue-200"
                  : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              }`}
            >
              <div className="mb-4 text-3xl">
                {item === "All"
                  ? "✨"
                  : item === "Cars"
                  ? "🚗"
                  : item === "SUV"
                  ? "🚙"
                  : item === "Sedan"
                  ? "🚘"
                  : item === "Hatchback"
                  ? "🚕"
                  : "🏍️"}
              </div>

              <p className="font-bold">{item}</p>
              <p
                className={`mt-1 text-xs ${
                  category === item ? "text-blue-100" : "text-slate-400"
                }`}
              >
                Explore vehicles
              </p>
            </button>
          ))}

        </div>
      </section>


      {/* VEHICLES */}
      <section id="vehicles" className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="font-bold uppercase tracking-widest text-blue-600">
                Handpicked for you
              </p>

              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                Featured vehicles
              </h2>

              <p className="mt-2 text-slate-500">
                Quality vehicles from verified sellers.
              </p>
            </div>


            {/* PRICE FILTER */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">

              <label className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Maximum price
              </label>

              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="2"
                  max="30"
                  step="1"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="accent-blue-600"
                />

                <span className="min-w-20 font-bold text-blue-600">
                  ₹{maxPrice} L
                </span>
              </div>

            </div>

          </div>


          {/* RESULTS */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredVehicles.map((vehicle) => (

              <div
                key={vehicle.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >

                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">

                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold shadow">
                    {vehicle.year}
                  </div>

                  <button
                    onClick={() => toggleFavorite(vehicle.id)}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow transition hover:scale-110"
                  >
                    {favorites.includes(vehicle.id) ? "❤️" : "♡"}
                  </button>

                  {vehicle.verified && (
                    <div className="absolute bottom-4 left-4 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-bold text-white shadow">
                      ✓ Verified Seller
                    </div>
                  )}

                </div>


                {/* CONTENT */}
                <div className="p-5">

                  <div className="flex items-start justify-between gap-3">

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                        {vehicle.brand}
                      </p>

                      <h3 className="mt-1 text-xl font-extrabold">
                        {vehicle.name}
                      </h3>
                    </div>

                    <span className="rounded-lg bg-slate-100 px-2 py-1 text-xs font-bold">
                      {vehicle.type}
                    </span>

                  </div>


                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500">
                    <span>📅 {vehicle.year}</span>
                    <span>⛽ {vehicle.fuel}</span>
                    <span>🛣️ {vehicle.km}</span>
                  </div>


                  <div className="my-5 border-t border-slate-100" />


                  <div className="flex items-end justify-between">

                    <div>
                      <p className="text-xs text-slate-400">
                        Asking price
                      </p>

                      <p className="text-2xl font-black text-slate-900">
                        ₹{vehicle.price} L
                      </p>
                    </div>

                    <span className="text-sm text-slate-500">
                      📍 {vehicle.location}
                    </span>

                  </div>


                  <Link
                     to={`/vehicle/${vehicle.id}`}
                     className="mt-5 block w-full rounded-xl bg-slate-900 py-3.5 text-center font-bold text-white transition hover:bg-blue-600"
                  >
                     View Details →
                  </Link>

                </div>

              </div>

            ))}

          </div>


          {filteredVehicles.length === 0 && (
            <div className="py-20 text-center">
              <div className="text-6xl">🔎</div>
              <h3 className="mt-5 text-2xl font-black">
                No vehicles found
              </h3>
              <p className="mt-2 text-slate-500">
                Try changing your search or filters.
              </p>
            </div>
          )}

        </div>
      </section>


      {/* HOW IT WORKS */}
      <section id="how" className="bg-slate-50 py-16">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="font-bold uppercase tracking-widest text-blue-600">
              Simple process
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Buy your next vehicle in 3 steps
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              ["01", "Search", "Find vehicles using our smart search and filters."],
              ["02", "Compare", "Check prices, specifications and seller details."],
              ["03", "Connect", "Contact the seller and take the next step."],
            ].map(([number, title, text]) => (

              <div
                key={number}
                className="rounded-2xl border border-slate-200 bg-white p-8"
              >

                <span className="text-sm font-black text-blue-600">
                  {number}
                </span>

                <h3 className="mt-5 text-xl font-black">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-blue-600 py-16">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 text-center md:flex-row md:text-left lg:px-8">

          <div>
            <h2 className="text-3xl font-black text-white">
              Have a vehicle to sell?
            </h2>

            <p className="mt-2 text-blue-100">
              Reach thousands of interested buyers today.
            </p>
          </div>

          <button
             className="rounded-xl bg-white px-8 py-4 font-bold text-blue-600 shadow-lg transition hover:-translate-y-1 hover:bg-slate-100"
          >
             + Sell Your Vehicle
          </button>

        </div>

      </section>


      {/* FOOTER */}
      <footer id="about" className="bg-slate-950 py-12 text-white">

        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

          <div>
            <h2 className="text-2xl font-black">
              Auto<span className="text-blue-500">Market</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              A smarter and safer way to buy and sell quality pre-owned
              vehicles.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Marketplace</h3>
            <p className="mt-4 text-slate-400">Browse Vehicles</p>
            <p className="mt-2 text-slate-400">Sell Vehicle</p>
            <p className="mt-2 text-slate-400">Compare Vehicles</p>
          </div>

          <div>
            <h3 className="font-bold">Company</h3>
            <p className="mt-4 text-slate-400">About Us</p>
            <p className="mt-2 text-slate-400">Contact</p>
            <p className="mt-2 text-slate-400">Privacy Policy</p>
          </div>

          <div>
            <h3 className="font-bold">Need Help?</h3>
            <p className="mt-4 text-slate-400">
              📧 support@automarket.com
            </p>
            <p className="mt-2 text-slate-400">
              📞 +91 90000 00000
            </p>
          </div>

        </div>


        <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 px-5 pt-6 text-center text-sm text-slate-500 lg:px-8">
          © 2026 AutoMarket. Built with React + Tailwind CSS.
        </div>

      </footer>

    </div>
  );
}

function App() {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehicle/:id" element={<VehicleDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sell" element={<SellVehicle />} /> 
      <Route path="/contact/:id" element={<ContactSeller />} />
    </Routes>
  );
}
export default App;