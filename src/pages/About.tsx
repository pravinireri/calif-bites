
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="py-12 bg-califgray-light">
          <div className="container-padding mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Calif Bites</h1>
              <p className="text-lg text-califblack-light">
                Our story, our team, and our commitment to culinary excellence
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-padding mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-califblack-light mb-4">
                  Calif Bites Catering Services began with a passion for authentic, diverse cuisine and a vision to bring exceptional dining experiences to events of all sizes.
                </p>
                <p className="text-califblack-light mb-4">
                  Founded in Kenya, our team combines culinary expertise from various traditions with a commitment to using fresh, high-quality ingredients and traditional cooking methods.
                </p>
                <p className="text-califblack-light">
                  We've grown from a small family operation to a trusted catering company serving weddings, corporate events, family gatherings, and more throughout the region.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/bd325c31-4197-4ad0-84bc-3c9da73f063c.png" 
                  alt="Calif Bites team preparing food" 
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-califgreen/20 -z-10" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-califgray-light">
          <div className="container-padding mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-califblack-light">
                At Calif Bites, we believe in delivering more than just food – we create memorable culinary experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality Ingredients",
                  description: "We source the freshest, highest quality ingredients to ensure exceptional taste in every dish."
                },
                {
                  title: "Authentic Recipes",
                  description: "Our chefs prepare dishes using traditional techniques and authentic recipes passed down through generations."
                },
                {
                  title: "Personalized Service",
                  description: "We work closely with clients to customize menus and service plans that perfectly match their event needs."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl card-shadow">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-califgreen/10 mb-4">
                    <span className="text-califgreen font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-califblack-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-padding mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-califblack-light">
                A dedicated team of culinary professionals committed to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Chef Michael",
                  role: "Head Chef",
                  image: "/lovable-uploads/a0c888b4-acdf-413b-a0a4-c4c7de2f552f.png",
                  description: "With over 15 years of experience in African and international cuisine, Chef Michael leads our culinary team with passion and creativity."
                },
                {
                  name: "Chef Sarah",
                  role: "Specialty Chef",
                  image: "/lovable-uploads/96419fc8-f344-43b3-855c-956e323d547b.png",
                  description: "Specializing in Italian and Mediterranean dishes, Chef Sarah brings authentic flavors and techniques to our diverse menu offerings."
                },
                {
                  name: "John Davis",
                  role: "Event Coordinator",
                  image: "/lovable-uploads/0674e830-8834-4435-9adb-f6773c0f604c.png",
                  description: "John ensures that every event is perfectly planned and executed, coordinating all aspects of our catering services."
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden card-shadow">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-califgreen font-medium mb-3">{member.role}</p>
                    <p className="text-califblack-light">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-califgreen text-white">
          <div className="container-padding mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Experience Calif Bites?</h2>
            <a href="/contact" className="bg-white text-califgreen px-8 py-3 rounded-md font-medium hover:bg-califgray-light transition-colors inline-block">
              Contact Us Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
