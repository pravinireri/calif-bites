
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Cuisine = "african" | "italian" | "indian";
type Course = "starters" | "mains" | "sides" | "desserts";

interface MenuItem {
  name: string;
  description: string;
  image?: string;
}

const Menu = () => {
  const [activeCuisine, setActiveCuisine] = useState<Cuisine>("african");
  const [activeCourse, setActiveCourse] = useState<Course>("starters");

  const menuItems: Record<Cuisine, Record<Course, MenuItem[]>> = {
    african: {
      starters: [
        { name: "Samosas", description: "Triangular pastries filled with spiced meat or vegetables", image: "/lovable-uploads/bd325c31-4197-4ad0-84bc-3c9da73f063c.png" },
        { name: "Mandazi", description: "Sweet, fluffy East African fried bread", image: "/lovable-uploads/96419fc8-f344-43b3-855c-956e323d547b.png" },
        { name: "Kachumbari", description: "Fresh tomato and onion salad with cilantro and lime", image: "/lovable-uploads/bd7be58d-afeb-479c-9f74-db1bfac78fe8.png" },
        { name: "Plantain Chips", description: "Crispy fried plantain slices with spicy seasoning", image: "/lovable-uploads/abe17fff-a68b-41d2-81b9-ccb39e722eda.png" }
      ],
      mains: [
        { name: "Nyama Choma", description: "Traditional roasted meat, often goat or beef", image: "/lovable-uploads/ca690616-e2a2-416c-9ef2-f725cc802bbe.png" },
        { name: "Pilau", description: "Spiced rice with meat and aromatic spices", image: "/lovable-uploads/bd7be58d-afeb-479c-9f74-db1bfac78fe8.png" },
        { name: "Jollof Rice", description: "One-pot rice dish with tomatoes and peppers", image: "/lovable-uploads/bd7be58d-afeb-479c-9f74-db1bfac78fe8.png" },
        { name: "Ugali and Sukuma Wiki", description: "Cornmeal porridge served with sautéed greens", image: "/lovable-uploads/b259bcda-f820-4d0c-93a8-ef74c1d47600.png" }
      ],
      sides: [
        { name: "Chapati", description: "Unleavened flatbread, perfect for dipping", image: "/lovable-uploads/96419fc8-f344-43b3-855c-956e323d547b.png" },
        { name: "Matoke", description: "Mashed plantains often cooked with spices", image: "/lovable-uploads/abe17fff-a68b-41d2-81b9-ccb39e722eda.png" },
        { name: "Irio", description: "Mashed potatoes with peas, corn, and greens", image: "/lovable-uploads/b259bcda-f820-4d0c-93a8-ef74c1d47600.png" },
        { name: "Githeri", description: "Traditional Kenyan mix of beans and corn", image: "/lovable-uploads/bd7be58d-afeb-479c-9f74-db1bfac78fe8.png" }
      ],
      desserts: [
        { name: "Maandazi", description: "Sweet fried dough, similar to doughnuts", image: "/lovable-uploads/96419fc8-f344-43b3-855c-956e323d547b.png" },
        { name: "Tropical Fruit Platter", description: "Selection of fresh seasonal fruits", image: "/lovable-uploads/bd7be58d-afeb-479c-9f74-db1bfac78fe8.png" },
        { name: "Coconut Mandazi", description: "Coconut-flavored sweet fried bread", image: "/lovable-uploads/96419fc8-f344-43b3-855c-956e323d547b.png" },
        { name: "Kashata", description: "Traditional coconut and peanut sweet", image: "/lovable-uploads/0674e830-8834-4435-9adb-f6773c0f604c.png" }
      ]
    },
    italian: {
      starters: [
        { name: "Bruschetta", description: "Grilled bread topped with tomatoes, garlic, and basil", image: "/lovable-uploads/96419fc8-f344-43b3-855c-956e323d547b.png" },
        { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze", image: "/lovable-uploads/bd7be58d-afeb-479c-9f74-db1bfac78fe8.png" },
        { name: "Arancini", description: "Fried rice balls stuffed with cheese and meat", image: "/lovable-uploads/abe17fff-a68b-41d2-81b9-ccb39e722eda.png" },
        { name: "Antipasto Platter", description: "Selection of cured meats, cheeses, and olives", image: "/lovable-uploads/b259bcda-f820-4d0c-93a8-ef74c1d47600.png" }
      ],
      mains: [
        { name: "Lasagna", description: "Layered pasta dish with meat sauce and cheese", image: "/lovable-uploads/61010589-58b3-465b-bb94-c9cd20797002.png" },
        { name: "Risotto", description: "Creamy arborio rice dish with seasonal ingredients", image: "/lovable-uploads/abe17fff-a68b-41d2-81b9-ccb39e722eda.png" },
        { name: "Chicken Parmesan", description: "Breaded chicken with tomato sauce and melted cheese", image: "/lovable-uploads/b259bcda-f820-4d0c-93a8-ef74c1d47600.png" },
        { name: "Spaghetti Carbonara", description: "Pasta with egg, cheese, pancetta, and black pepper", image: "/lovable-uploads/61010589-58b3-465b-bb94-c9cd20797002.png" }
      ],
      sides: [
        { name: "Garlic Bread", description: "Toasted bread with garlic butter and herbs", image: "/lovable-uploads/96419fc8-f344-43b3-855c-956e323d547b.png" },
        { name: "Roasted Vegetables", description: "Seasonal vegetables roasted with Italian herbs", image: "/lovable-uploads/bd7be58d-afeb-479c-9f74-db1bfac78fe8.png" },
        { name: "Focaccia", description: "Flat oven-baked bread with olive oil and herbs", image: "/lovable-uploads/96419fc8-f344-43b3-855c-956e323d547b.png" },
        { name: "Italian Salad", description: "Mixed greens with Italian dressing and toppings", image: "/lovable-uploads/bd7be58d-afeb-479c-9f74-db1bfac78fe8.png" }
      ],
      desserts: [
        { name: "Tiramisu", description: "Coffee-flavored dessert with mascarpone and cocoa", image: "/lovable-uploads/0674e830-8834-4435-9adb-f6773c0f604c.png" },
        { name: "Panna Cotta", description: "Sweetened cream dessert with fruit coulis", image: "/lovable-uploads/0674e830-8834-4435-9adb-f6773c0f604c.png" },
        { name: "Cannoli", description: "Tube-shaped pastry filled with sweetened ricotta", image: "/lovable-uploads/96419fc8-f344-43b3-855c-956e323d547b.png" },
        { name: "Gelato", description: "Italian-style ice cream in various flavors", image: "/lovable-uploads/0674e830-8834-4435-9adb-f6773c0f604c.png" }
      ]
    },
    indian: {
      starters: [
        { name: "Samosas", description: "Triangular pastries with spiced filling", image: "/lovable-uploads/bd325c31-4197-4ad0-84bc-3c9da73f063c.png" },
        { name: "Pakoras", description: "Vegetable fritters in a spiced chickpea batter", image: "/lovable-uploads/bd325c31-4197-4ad0-84bc-3c9da73f063c.png" },
        { name: "Papdi Chaat", description: "Crispy dough wafers with yogurt and chutneys", image: "/lovable-uploads/96419fc8-f344-43b3-855c-956e323d547b.png" },
        { name: "Dahi Puri", description: "Hollow crisp with spiced potatoes and yogurt", image: "/lovable-uploads/bd325c31-4197-4ad0-84bc-3c9da73f063c.png" }
      ],
      mains: [
        { name: "Butter Chicken", description: "Chicken in a creamy tomato sauce", image: "/lovable-uploads/61cf8b2a-eeb7-4e96-8763-186b86c82b4e.png" },
        { name: "Vegetable Biryani", description: "Fragrant rice dish with vegetables and spices", image: "/lovable-uploads/bd7be58d-afeb-479c-9f74-db1bfac78fe8.png" },
        { name: "Palak Paneer", description: "Cottage cheese in a spinach gravy", image: "/lovable-uploads/61cf8b2a-eeb7-4e96-8763-186b86c82b4e.png" },
        { name: "Lamb Rogan Josh", description: "Aromatic lamb curry with Kashmiri spices", image: "/lovable-uploads/ca690616-e2a2-416c-9ef2-f725cc802bbe.png" }
      ],
      sides: [
        { name: "Naan", description: "Leavened flatbread baked in a tandoor", image: "/lovable-uploads/96419fc8-f344-43b3-855c-956e323d547b.png" },
        { name: "Raita", description: "Yogurt with cucumber and mint", image: "/lovable-uploads/bd7be58d-afeb-479c-9f74-db1bfac78fe8.png" },
        { name: "Aloo Gobi", description: "Potatoes and cauliflower cooked with spices", image: "/lovable-uploads/b259bcda-f820-4d0c-93a8-ef74c1d47600.png" },
        { name: "Daal", description: "Lentil stew with various spices", image: "/lovable-uploads/61cf8b2a-eeb7-4e96-8763-186b86c82b4e.png" }
      ],
      desserts: [
        { name: "Gulab Jamun", description: "Milk-solid balls soaked in rose syrup", image: "/lovable-uploads/0674e830-8834-4435-9adb-f6773c0f604c.png" },
        { name: "Kheer", description: "Rice pudding with cardamom and nuts", image: "/lovable-uploads/0674e830-8834-4435-9adb-f6773c0f604c.png" },
        { name: "Jalebi", description: "Pretzel-shaped fried sweets soaked in syrup", image: "/lovable-uploads/96419fc8-f344-43b3-855c-956e323d547b.png" },
        { name: "Kulfi", description: "Traditional frozen dairy dessert", image: "/lovable-uploads/0674e830-8834-4435-9adb-f6773c0f604c.png" }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="py-12 bg-califgray-light">
          <div className="container-padding mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
              <p className="text-lg text-califblack-light">
                Explore our diverse culinary offerings across various cuisines
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-padding mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="inline-flex p-1 rounded-lg bg-califgray mb-8">
                {["african", "italian", "indian"].map((cuisine) => (
                  <button
                    key={cuisine}
                    onClick={() => setActiveCuisine(cuisine as Cuisine)}
                    className={`px-6 py-3 rounded-md text-sm md:text-base font-medium transition-all ${
                      activeCuisine === cuisine 
                        ? "bg-white text-califgreen shadow-sm" 
                        : "text-califblack-light hover:text-califgreen"
                    }`}
                  >
                    {cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}
                  </button>
                ))}
              </div>

              <div className="inline-flex border-b border-califgray-dark">
                {["starters", "mains", "sides", "desserts"].map((course) => (
                  <button
                    key={course}
                    onClick={() => setActiveCourse(course as Course)}
                    className={`px-6 py-3 text-sm md:text-base font-medium transition-all border-b-2 ${
                      activeCourse === course 
                        ? "border-califgreen text-califgreen" 
                        : "border-transparent text-califblack-light hover:text-califgreen"
                    }`}
                  >
                    {course.charAt(0).toUpperCase() + course.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuItems[activeCuisine][activeCourse].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden card-shadow transition-all duration-300 hover-scale"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-califblack-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16 px-4">
              <div className="max-w-3xl mx-auto bg-califgreen/10 p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Custom Menu Options</h2>
                <p className="text-califblack-light mb-6">
                  The menu items shown here are just a sampling of what we offer. We can create custom menus tailored to your specific event needs, dietary requirements, and preferences.
                </p>
                <a href="/contact" className="button-primary inline-block">
                  Request Custom Menu
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-califgray-light">
          <div className="container-padding mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Special Dietary Options</h2>
                <p className="text-califblack-light mb-6">
                  We understand the importance of accommodating various dietary needs and preferences. Our chefs are experienced in preparing delicious options for:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Vegetarian",
                    "Vegan",
                    "Gluten-Free",
                    "Dairy-Free",
                    "Nut-Free",
                    "Low-Carb",
                    "Keto-Friendly",
                    "Halal"
                  ].map((option, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-califgreen"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      <span>{option}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/bd7be58d-afeb-479c-9f74-db1bfac78fe8.png" 
                  alt="Dietary Options" 
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-califgreen/20 -z-10" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
