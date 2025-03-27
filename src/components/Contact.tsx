
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert("Thank you for your message! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      message: ""
    });
  };

  return (
    <section className="py-20">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-califblack-light text-lg">
                Ready to plan your next event? Reach out to us for a personalized catering experience.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-califgreen/10 p-3 rounded-full">
                  <Phone size={24} className="text-califgreen" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-califblack-light">+254 722 638445</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-califgreen/10 p-3 rounded-full">
                  <Mail size={24} className="text-califgreen" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-califblack-light">info@califbites.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-califgreen/10 p-3 rounded-full">
                  <MapPin size={24} className="text-califgreen" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Location</h3>
                  <p className="text-califblack-light">Nairobi, Kenya</p>
                  <p className="text-califblack-light">Available for events nationwide</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="font-bold text-lg mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com/califbites" target="_blank" rel="noopener noreferrer" className="bg-califgray p-3 rounded-full hover:bg-califgreen hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://tiktok.com/@califbites" target="_blank" rel="noopener noreferrer" className="bg-califgray p-3 rounded-full hover:bg-califgreen hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="M17.7 8A4 4 0 0 0 16 7a4 4 0 0 0-4-4v8.5l.3-.5"/><path d="M12 7v8a4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4"/></svg>
                </a>
                <a href="https://instagram.com/califbites" target="_blank" rel="noopener noreferrer" className="bg-califgray p-3 rounded-full hover:bg-califgreen hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl card-shadow p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-califblack mb-1">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-califgray-dark focus:outline-none focus:ring-2 focus:ring-califgreen/50"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-califblack mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-califgray-dark focus:outline-none focus:ring-2 focus:ring-califgreen/50"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-califblack mb-1">
                    Phone
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-califgray-dark focus:outline-none focus:ring-2 focus:ring-califgreen/50"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-califblack mb-1">
                  Event Type
                </label>
                <select 
                  id="eventType" 
                  name="eventType" 
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-califgray-dark focus:outline-none focus:ring-2 focus:ring-califgreen/50"
                  required
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-califblack mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-califgray-dark focus:outline-none focus:ring-2 focus:ring-califgreen/50"
                  placeholder="Tell us about your event, date, number of guests, etc."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="button-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
