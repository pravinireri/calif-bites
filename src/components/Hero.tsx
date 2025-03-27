
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920" 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-padding mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in text-white">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
              Premium Catering Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Exquisite Flavors for <span className="text-califgreen">Every Occasion</span>
            </h1>
            <p className="text-lg text-white/90 max-w-lg">
              Calif Bites delivers authentic culinary experiences with our specialized African, Italian, and Indian cuisine. From preparation to service, we handle every detail of your event.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact" className="button-primary">
                Book Now
              </Link>
              <Link to="/menu" className="bg-transparent border border-white text-white rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:bg-white/10">
                Explore Menu
              </Link>
            </div>
          </div>
          
          <div className="relative aspect-square max-w-lg mx-auto lg:ml-auto animate-zoom-in">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                alt="Delicious food plated and ready to serve"
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full bg-califgreen/20 -z-10" />
            <div className="absolute -top-5 -right-5 w-32 h-32 rounded-full bg-califgreen/10 -z-10" />
          </div>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: "Premium Cuisine",
              description: "Authentic recipes prepared by expert chefs using the finest ingredients."
            },
            {
              title: "Full-Service Catering",
              description: "From shopping to cooking, serving and cleaning - we handle it all."
            },
            {
              title: "Customized Experiences",
              description: "Tailored menus and service plans to match your specific event needs."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-xl glass-effect hover-scale"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-12 h-12 rounded-full bg-califgreen/20 flex items-center justify-center mb-4">
                <span className="text-califgreen font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
