
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="py-12 bg-califgray-light">
          <div className="container-padding mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-califblack-light">
                Get in touch to plan your next catered event
              </p>
            </div>
          </div>
        </section>

        <Contact />
        
        <section className="py-16 bg-califgray-light">
          <div className="container-padding mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-califblack-light mb-10">
                Find answers to common questions about our catering services
              </p>
              
              <div className="space-y-6 text-left">
                {[
                  {
                    question: "How far in advance should I book your catering services?",
                    answer: "For most events, we recommend booking at least 2-4 weeks in advance. For larger events or during peak season, 1-3 months advance booking is advisable."
                  },
                  {
                    question: "Do you provide services for both small and large events?",
                    answer: "Yes, we cater to events of all sizes, from intimate gatherings of 10 people to large corporate events or weddings with hundreds of guests."
                  },
                  {
                    question: "Can you accommodate dietary restrictions?",
                    answer: "Absolutely! We can accommodate various dietary needs including vegetarian, vegan, gluten-free, dairy-free, and specific allergies. Please let us know your requirements when planning your menu."
                  },
                  {
                    question: "What areas do you serve?",
                    answer: "We primarily serve the greater Nairobi area, but we're available for events throughout Kenya. For locations outside our primary service area, additional travel fees may apply."
                  },
                  {
                    question: "Do you provide tastings before the event?",
                    answer: "Yes, we offer tastings for clients who have confirmed bookings for larger events. This allows you to sample and finalize your menu choices before your event."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl card-shadow">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-califblack-light">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
