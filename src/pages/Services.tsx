
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="py-12 bg-califgray-light">
          <div className="container-padding mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-lg text-califblack-light">
                Comprehensive catering solutions tailored to your specific event needs
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-padding mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-6">Full-Service Catering</h2>
                <p className="text-califblack-light mb-6">
                  Our comprehensive catering services cover every aspect of your event's culinary needs, from initial planning to final cleanup.
                </p>
                <ul className="space-y-3">
                  {[
                    "Customized menu planning",
                    "Ingredient sourcing and shopping",
                    "Professional cooking and presentation",
                    "Service staff and equipment rental",
                    "Setup and cleanup"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-califgreen mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2 relative">
                <img 
                  src="/lovable-uploads/bd325c31-4197-4ad0-84bc-3c9da73f063c.png" 
                  alt="Full-Service Catering" 
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-califgreen/20 -z-10" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-califgray-light">
          <div className="container-padding mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/ca690616-e2a2-416c-9ef2-f725cc802bbe.png" 
                  alt="Event Types" 
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-califgreen/20 -z-10" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Event Types We Serve</h2>
                <p className="text-califblack-light mb-6">
                  We cater to a wide range of events, adjusting our services and menu offerings to suit the specific occasion and your preferences.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Weddings & Receptions",
                    "Corporate Events",
                    "Birthday Parties",
                    "Anniversaries",
                    "Family Gatherings",
                    "Holiday Celebrations",
                    "Business Meetings",
                    "Special Occasions"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle size={20} className="text-califgreen flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-padding mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
              <p className="text-califblack-light">
                A seamless experience from initial consultation to event execution
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "Consultation",
                  description: "We start with an in-depth consultation to understand your event, preferences, and requirements."
                },
                {
                  step: "Menu Planning",
                  description: "Our team works with you to create a customized menu that fits your taste, dietary needs, and budget."
                },
                {
                  step: "Logistics & Planning",
                  description: "We handle all logistics, from determining quantities to arranging for necessary equipment and staff."
                },
                {
                  step: "Preparation & Cooking",
                  description: "Our chefs prepare your menu using fresh ingredients and authentic cooking techniques."
                },
                {
                  step: "Service & Execution",
                  description: "On the day of your event, our professional team handles setup, service, and presentation."
                },
                {
                  step: "Cleanup",
                  description: "After your event, we take care of all cleanup, leaving your venue spotless."
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 flex-shrink-0 rounded-full bg-califgreen flex items-center justify-center text-white text-xl font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                    <p className="text-califblack-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-califgreen/10">
          <div className="container-padding mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Additional Services</h2>
                <p className="text-califblack-light mb-6">
                  Beyond our core catering services, we offer several additional options to enhance your event experience:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Equipment Rental",
                      description: "Chafing dishes, utensils, plates, glasses, and other serving equipment"
                    },
                    {
                      title: "Specialty Menu Items",
                      description: "Custom dishes created specifically for your event or dietary needs"
                    },
                    {
                      title: "Beverage Service",
                      description: "Non-alcoholic beverage service and setup"
                    },
                    {
                      title: "Menu Tasting",
                      description: "Pre-event tasting sessions to finalize your menu selections"
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg card-shadow">
                      <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                      <p className="text-califblack-light">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl card-shadow">
                <h3 className="text-2xl font-bold mb-6">Ready to Book?</h3>
                <p className="text-califblack-light mb-6">
                  Contact us today to discuss your event needs and get a customized quote for our catering services.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-califgreen"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span>+254 722 638445</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-califgreen"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <span>info@califbites.com</span>
                  </li>
                </ul>
                <a href="/contact" className="button-primary w-full block text-center">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
