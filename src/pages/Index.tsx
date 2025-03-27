
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="py-16 bg-white">
          <div className="container-padding mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Specialized in Multiple Cuisines</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  name: "African Cuisine",
                  description: "Authentic African dishes prepared with traditional techniques and spices",
                  image: "/lovable-uploads/bd7be58d-afeb-479c-9f74-db1bfac78fe8.png"
                },
                {
                  name: "Italian Cuisine",
                  description: "Classic Italian favorites made with authentic recipes and fresh ingredients",
                  image: "/lovable-uploads/61010589-58b3-465b-bb94-c9cd20797002.png"
                },
                {
                  name: "Indian Cuisine",
                  description: "Flavorful Indian dishes with perfect balance of spices and aromas",
                  image: "/lovable-uploads/61cf8b2a-eeb7-4e96-8763-186b86c82b4e.png"
                }
              ].map((cuisine, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img 
                      src={cuisine.image} 
                      alt={cuisine.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cuisine.name}</h3>
                  <p className="text-califblack-light">{cuisine.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Services />
        <Menu />
        <div className="py-20 bg-califgray relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-califgreen"></div>
          </div>
          <div className="container-padding mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let Us Cater Your Next Event</h2>
              <p className="text-lg text-califblack-light mb-8">
                From intimate gatherings to large corporate events, we provide exceptional catering services tailored to your needs
              </p>
              <a href="/contact" className="button-primary">
                Book Your Event Now
              </a>
            </div>
          </div>
        </div>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
