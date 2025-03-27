
// Menu page additional functionality
document.addEventListener('DOMContentLoaded', function() {
  // Extended menu data with refined descriptions
  const menuItems = {
    african: [
      { 
        name: "Nyama Choma", 
        description: "Slow-roasted meat marinated in African spices and herbs, served with a side of traditional accompaniments", 
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80" 
      },
      { 
        name: "Jollof Rice", 
        description: "Fragrant rice dish cooked with tomatoes, peppers, and a blend of aromatic spices, garnished with fresh herbs", 
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80" 
      },
      { 
        name: "Mandazi", 
        description: "East African lightly sweetened fried bread with a hint of cardamom and coconut, perfect with tea", 
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80" 
      },
      { 
        name: "Sukuma Wiki", 
        description: "Fresh collard greens sautéed with onions, tomatoes and aromatic spices, a nutritious side dish", 
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80" 
      },
      { 
        name: "Egusi Soup", 
        description: "Rich West African soup made with ground melon seeds, vegetables, and choice protein, served with fufu", 
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80" 
      },
      { 
        name: "Chapati", 
        description: "Layered flatbread made with whole wheat flour, perfect for scooping up stews and curries", 
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80" 
      }
    ],
    italian: [
      { 
        name: "Lasagna Classica", 
        description: "Layers of fresh pasta sheets, rich meat ragù, béchamel sauce and aged Parmesan, baked to perfection", 
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80" 
      },
      { 
        name: "Risotto ai Funghi", 
        description: "Creamy Arborio rice cooked with wild mushrooms, white wine, and finished with Parmesan and truffle oil", 
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80" 
      },
      { 
        name: "Bruschetta Pomodoro", 
        description: "Grilled artisanal bread topped with ripe tomatoes, fresh basil, garlic, and extra virgin olive oil", 
        image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80" 
      },
      { 
        name: "Tiramisu", 
        description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa", 
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80" 
      },
      { 
        name: "Fettuccine Alfredo", 
        description: "Ribbons of fresh pasta tossed in a silky sauce of butter and Parmesan, topped with grilled chicken", 
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80" 
      },
      { 
        name: "Pizza Margherita", 
        description: "Hand-stretched pizza topped with San Marzano tomato sauce, fresh mozzarella, basil and olive oil", 
        image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80" 
      }
    ],
    indian: [
      { 
        name: "Butter Chicken", 
        description: "Tender pieces of chicken in a velvety tomato-based sauce enriched with cream, aromatic spices and butter", 
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80" 
      },
      { 
        name: "Vegetable Biryani", 
        description: "Fragrant basmati rice layered with seasonal vegetables and aromatic spices, garnished with fried onions", 
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80" 
      },
      { 
        name: "Samosas", 
        description: "Crispy pastry triangles filled with spiced potatoes, peas, and cumin, served with tamarind chutney", 
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80" 
      },
      { 
        name: "Garlic Naan", 
        description: "Soft, buttery flatbread with garlic and herbs, baked in a tandoor oven until puffed and golden", 
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80" 
      },
      { 
        name: "Palak Paneer", 
        description: "Cubes of fresh cottage cheese in a silky spinach sauce flavored with ginger, garlic and spices", 
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80" 
      },
      { 
        name: "Chicken Tikka Masala", 
        description: "Chargrilled chicken pieces in a rich, aromatic tomato-based curry sauce with a blend of spices", 
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80" 
      }
    ]
  };
  
  const menuItemsContainer = document.getElementById('menu-items-container');
  const cuisineButtons = document.querySelectorAll('.filter-btn');
  
  // Function to render menu items with refined animation
  function renderMenuItems(cuisine) {
    if (!menuItemsContainer) return;
    
    // Start with container opacity 0
    menuItemsContainer.style.opacity = '0';
    
    setTimeout(() => {
      menuItemsContainer.innerHTML = '';
      
      // Get the items for the selected cuisine
      const itemsToShow = menuItems[cuisine].slice(0, 6);
      
      itemsToShow.forEach((item, index) => {
        const menuItemElement = document.createElement('div');
        menuItemElement.className = 'menu-item animate-on-scroll';
        menuItemElement.style.animationDelay = `${index * 0.15}s`;
        
        menuItemElement.innerHTML = `
          <div class="menu-image">
            <img 
              src="${item.image}" 
              alt="${item.name}" 
              loading="lazy"
            />
          </div>
          <div class="menu-content">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
        `;
        
        menuItemsContainer.appendChild(menuItemElement);
      });
      
      // Fade container back in
      menuItemsContainer.style.opacity = '1';
      
      // Trigger the animation for each item with a slight delay
      const menuItems = menuItemsContainer.querySelectorAll('.menu-item');
      menuItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animated');
        }, index * 150);
      });
    }, 300);
  }
  
  // Initialize with African cuisine if we're on a page with the menu container
  if (menuItemsContainer) {
    renderMenuItems('african');
    
    // Mark the African button as active by default
    const africanButton = document.querySelector('[data-cuisine="african"]');
    if (africanButton) {
      africanButton.classList.add('active');
    }
  }
  
  // Add event listeners to cuisine buttons with refined active state handling
  cuisineButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Don't do anything if already active
      if (this.classList.contains('active')) return;
      
      // Remove active class from all buttons
      cuisineButtons.forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Add active class to clicked button with a slight transition
      this.classList.add('active');
      
      // Render menu items for selected cuisine
      const cuisine = this.getAttribute('data-cuisine');
      renderMenuItems(cuisine);
    });
  });
  
  // Add image error handling
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      console.log('Image failed to load:', this.src);
      this.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTU1OTg5Mw&ixlib=rb-4.0.3&q=80'; // Fallback image
    });
  });
});
