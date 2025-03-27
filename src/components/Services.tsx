
import { CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Preparation",
      description: "We handle all the prep work, from menu planning to shopping for ingredients.",
      image: "/lovable-uploads/a0c888b4-acdf-413b-a0a4-c4c7de2f552f.png",
      details: [
        "Menu planning & customization",
        "Ingredient sourcing & shopping",
        "Equipment preparation",
        "Venue setup assistance"
      ]
    },
    {
      title: "Cooking",
      description: "Our expert chefs prepare delicious meals using traditional and modern techniques.",
      image: "/lovable-uploads/ca690616-e2a2-416c-9ef2-f725cc802bbe.png",
      details: [
        "On-site or off-site cooking",
        "Traditional cooking methods",
        "Special dietary accommodations",
        "Custom dish preparation"
      ]
    },
    {
      title: "Service",
      description: "Professional servers ensure your guests enjoy a seamless dining experience.",
      image: "/lovable-uploads/bd325c31-4197-4ad0-84bc-3c9da73f063c.png",
      details: [
        "Professional serving staff",
        "Buffet or plated service options",
        "Equipment rental available",
        "Clean-up and post-event services"
      ]
    }
  ];

  return (
    <section className="py-20 bg-califgray">
      <div className="container-padding mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Services</h2>
          <p className="text-muted-foreground text-lg">
            From planning to execution, we provide end-to-end catering solutions for your events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden card-shadow hover-scale"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-califgreen mt-0.5 flex-shrink-0" />
                      <span className="text-califblack-light">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
