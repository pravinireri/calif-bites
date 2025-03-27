
import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Calif Bites catered our wedding and the food was absolutely amazing! Their authentic African dishes were a hit with all our guests.",
    author: "Sarah & James",
    role: "Wedding Clients"
  },
  {
    text: "The team at Calif Bites provided exceptional service for our corporate event. From setup to cleanup, everything was handled professionally.",
    author: "Michael Thompson",
    role: "Corporate Client"
  },
  {
    text: "I've never tasted such authentic Indian cuisine outside of India. Their attention to detail and flavors is remarkable.",
    author: "Priya Patel",
    role: "Birthday Party Host"
  },
  {
    text: "The Italian menu they prepared for our family reunion was outstanding. Everyone is still talking about the risotto!",
    author: "Elena Romano",
    role: "Family Event"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-califgreen/5">
      <div className="container-padding mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-califblack-light text-lg">
            We take pride in exceeding our clients' expectations
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative px-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                current === index 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 absolute top-0 left-0 right-0 translate-x-4"
              }`}
            >
              <blockquote className="text-center">
                <p className="text-xl md:text-2xl font-serif italic mb-6 text-califblack">
                  "{testimonial.text}"
                </p>
                <footer>
                  <div className="font-bold text-califgreen text-lg">
                    {testimonial.author}
                  </div>
                  <div className="text-califblack-light">
                    {testimonial.role}
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index 
                    ? "bg-califgreen scale-110" 
                    : "bg-califgreen/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
