
import { useState } from "react";

type Cuisine = "african" | "italian" | "indian";

const Menu = () => {
  const [activeCuisine, setActiveCuisine] = useState<Cuisine>("african");

  const menuItems = {
    african: [
      { name: "Nyama Choma", description: "Traditional roasted meat, slow-cooked to perfection", image: "/lovable-uploads/ca690616-e2a2-416c-9ef2-f725cc802bbe.png" },
      { name: "Jollof Rice", description: "Flavorful rice dish with tomatoes, peppers, and spices", image: "/lovable-uploads/bd7be58d-afeb-479c-9f74-db1bfac78fe8.png" },
      { name: "Mandazi", description: "East African fried bread, lightly sweetened", image: "/lovable-uploads/bd325c31-4197-4ad0-84bc-3c9da73f063c.png" },
      { name: "Sukuma Wiki", description: "Sautéed collard greens with onions and spices", image: "/lovable-uploads/b259bcda-f820-4d0c-93a8-ef74c1d47600.png" }
    ],
    italian: [
      { name: "Lasagna", description: "Layered pasta with rich meat sauce and cheese", image: "/lovable-uploads/61010589-58b3-465b-bb94-c9cd20797002.png" },
      { name: "Risotto", description: "Creamy arborio rice with seasonal ingredients", image: "/lovable-uploads/abe17fff-a68b-41d2-81b9-ccb39e722eda.png" },
      { name: "Bruschetta", description: "Grilled bread with fresh tomatoes, basil and garlic", image: "/lovable-uploads/96419fc8-f344-43b3-855c-956e323d547b.png" },
      { name: "Tiramisu", description: "Classic coffee-flavored Italian dessert", image: "/lovable-uploads/0674e830-8834-4435-9adb-f6773c0f604c.png" }
    ],
    indian: [
      { name: "Butter Chicken", description: "Tender chicken in a rich, creamy tomato sauce", image: "/lovable-uploads/61cf8b2a-eeb7-4e96-8763-186b86c82b4e.png" },
      { name: "Vegetable Biryani", description: "Fragrant rice dish with vegetables and aromatic spices", image: "/lovable-uploads/abe17fff-a68b-41d2-81b9-ccb39e722eda.png" },
      { name: "Samosas", description: "Crispy pastries filled with spiced potatoes and peas", image: "/lovable-uploads/bd325c31-4197-4ad0-84bc-3c9da73f063c.png" },
      { name: "Naan Bread", description: "Soft, fluffy flatbread perfect for dipping", image: "/lovable-uploads/96419fc8-f344-43b3-855c-956e323d547b.png" }
    ]
  };

  return (
    <section className="py-20">
      <div className="container-padding mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialty Cuisines</h2>
          <p className="text-muted-foreground text-lg">
            Explore our diverse menu offerings across different culinary traditions
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-lg bg-califgray">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems[activeCuisine].map((item, index) => (
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
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">
            This is just a sample of our extensive menu. Contact us for a complete menu customized to your event.
          </p>
          <a href="/contact" className="button-primary inline-block">
            Request Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
