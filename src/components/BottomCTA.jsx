export default function BottomCTA({ city }) {
    return (
      <>
        {/* Desktop CTA */}
        <section className="hidden md:block bg-brand-primary py-10">
          <div className="max-w-6xl mx-auto text-center text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Book a Doctor at Home in {city.name} Now
            </h2>
            <div className="flex justify-center gap-4">
              <a
                href="tel:+917303771900"
                className="bg-white text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/917303771900"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
  
        {/* Mobile Sticky CTA */}
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow-lg p-3 flex gap-3">
          <a
            href="tel:+917303771900"
            className="w-1/2 text-center bg-teal-600 text-white py-3 rounded-lg font-medium"
          >
            Call Now
          </a>
  
          <a
            href="https://wa.me/917303771900"
            className="w-1/2 text-center bg-green-500 text-white py-3 rounded-lg font-medium"
          >
            WhatsApp
          </a>
        </div>
      </>
    );
  }