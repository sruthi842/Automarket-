
import { Link, useParams } from "react-router-dom";

function ContactSeller() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <h1 className="text-2xl font-black text-slate-900">
            Auto<span className="text-blue-600">Market</span>
          </h1>

          <Link
            to={`/vehicle/${id}`}
            className="rounded-xl border border-slate-200 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50"
          >
            ← Vehicle Details
          </Link>
        </div>
      </nav>

      {/* Contact Section */}
      <main className="mx-auto max-w-2xl px-5 py-12">
        <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-10">

          <div className="mb-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
              📞
            </div>

            <h2 className="mt-5 text-3xl font-black text-slate-900">
              Contact Seller
            </h2>

            <p className="mt-2 text-slate-500">
              Interested in this vehicle? Send a message to the seller.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Your message has been sent to the seller!");
            }}
            className="space-y-5"
          >

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="I'm interested in this vehicle. Please contact me."
                required
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
            >
              📩 Send Message
            </button>

          </form>

          {/* Direct Call */}
          <div className="mt-6 border-t border-slate-100 pt-6 text-center">
            <p className="text-sm text-slate-500">
              Or contact the seller directly
            </p>

            <a
              href="tel:+919000000000"
              className="mt-3 inline-block font-bold text-blue-600 hover:text-blue-700"
            >
              📞 +91 90000 00000
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}

export default ContactSeller;