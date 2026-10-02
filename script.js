const menuData = [

  // MOMOS
  { category: "Momos", name: "Veg Steam Momo", price: "₹70 / ₹90" },
  { category: "Momos", name: "Veg Steam Cheese Momo", price: "₹80 / ₹100" },
  { category: "Momos", name: "Paneer Steam Momo", price: "₹80 / ₹100" },
  { category: "Momos", name: "Paneer Steam Cheese Momo", price: "₹90 / ₹110" },
  { category: "Momos", name: "Cheese Corn Steam Momo", price: "₹110 / ₹130" },
  { category: "Momos", name: "Cheese Corn Steam Cheese Momo", price: "₹130 / ₹150" },

  { category: "Momos", name: "Veg Fried Momo", price: "₹90 / ₹110" },
  { category: "Momos", name: "Veg Fried Cheese Momo", price: "₹100 / ₹120" },
  { category: "Momos", name: "Paneer Fried Momo", price: "₹110 / ₹130" },
  { category: "Momos", name: "Paneer Fried Cheese Momo", price: "₹120 / ₹140" },
  { category: "Momos", name: "Cheese Corn Fried Momo", price: "₹130 / ₹150" },
  { category: "Momos", name: "Cheese Corn Fried Cheese Momo", price: "₹140 / ₹160" },

  { category: "Momos", name: "Veg Kurkure Momo", price: "₹100 / ₹120" },
  { category: "Momos", name: "Veg Kurkure Cheese Momo", price: "₹110 / ₹130" },
  { category: "Momos", name: "Paneer Kurkure Momo", price: "₹120 / ₹140" },
  { category: "Momos", name: "Paneer Kurkure Cheese Momo", price: "₹130 / ₹150" },
  { category: "Momos", name: "Cheese Corn Kurkure Momo", price: "₹140 / ₹160" },
  { category: "Momos", name: "Cheese Corn Kurkure Cheese Momo", price: "₹150 / ₹170" },

  { category: "Momos", name: "Jhol Momo", price: "₹109" },
  { category: "Momos", name: "Manchow Momo", price: "₹109" },
  { category: "Momos", name: "Pizza Momo", price: "₹99" },
  { category: "Momos", name: "Saucy Veg Momo", price: "₹99" },
  { category: "Momos", name: "Saucy Paneer Momo", price: "₹99" },

  // PIZZA
  { category: "Pizza", name: "Veggie Pizza", price: "₹99" },
  { category: "Pizza", name: "Margherita Pizza", price: "₹99" },
  { category: "Pizza", name: "Cheese Pizza", price: "₹109" },
  { category: "Pizza", name: "Cheese Corn Pizza", price: "₹109" },
  { category: "Pizza", name: "Paneer Tikka Pizza", price: "₹109" },
  { category: "Pizza", name: "Pasta Pizza", price: "₹129" },
  { category: "Pizza", name: "Veg Loaded Pizza", price: "₹129" },

  // BURGERS
  { category: "Burgers", name: "Classic Veg Burger", price: "₹69" },
  { category: "Burgers", name: "Veg Cheese Burger", price: "₹79" },
  { category: "Burgers", name: "Peri Peri Burger", price: "₹69" },
  { category: "Burgers", name: "Peri Peri Cheese Burger", price: "₹79" },

  // SANDWICH
  { category: "Sandwich", name: "Veg Grill Sandwich", price: "₹59" },
  { category: "Sandwich", name: "Veg Cheese Grill Sandwich", price: "₹69" },
  { category: "Sandwich", name: "Mexican Grill Sandwich", price: "₹69" },
  { category: "Sandwich", name: "Cheese Corn Sandwich", price: "₹69" },
  { category: "Sandwich", name: "Cheese Chilly Sandwich", price: "₹79" },
  { category: "Sandwich", name: "Paneer Tikka Sandwich", price: "₹79" },

  // FRIES
  { category: "Fries", name: "Salted Fries", price: "₹59" },
  { category: "Fries", name: "Peri Peri Fries", price: "₹69" },
  { category: "Fries", name: "Peri Peri Cheese Fries", price: "₹79" },
  { category: "Fries", name: "Cheese Fries", price: "₹79" },
  { category: "Fries", name: "Loaded Fries", price: "₹99" },

  // MAGGIE
  { category: "Maggie", name: "Plain Maggie", price: "₹49" },
  { category: "Maggie", name: "Yippee", price: "₹49" },
  { category: "Maggie", name: "Cheese Maggie", price: "₹59" },
  { category: "Maggie", name: "Vegetable Maggie", price: "₹59" },
  { category: "Maggie", name: "Vegetable Cheese Maggie", price: "₹69" },

  // PASTA
  { category: "Pasta", name: "Red Sauce Pasta", price: "₹109" },
  { category: "Pasta", name: "White Sauce Pasta", price: "₹109" },
  { category: "Pasta", name: "Masala Penne Pasta", price: "₹109" },

  // WAFFLES
  { category: "Desserts", name: "White Choco Delight Waffle", price: "₹89" },
  { category: "Desserts", name: "Dark Choco Bliss Waffle", price: "₹89" },
  { category: "Desserts", name: "Milk Choco Waffle", price: "₹99" },
  { category: "Desserts", name: "Crunch Waffle", price: "₹99" },
  { category: "Desserts", name: "Triple Chocolate Waffle", price: "₹99" },
  { category: "Desserts", name: "Kitkat Crunch Waffle", price: "₹99" },
  { category: "Desserts", name: "Oreo Crumble Waffle", price: "₹99" },

  // BROWNIES
  { category: "Desserts", name: "Triple Chocolate Brownie", price: "₹89" },
  { category: "Desserts", name: "Kitkat Crunch Brownie", price: "₹89" },
  { category: "Desserts", name: "Oreo Crumble Brownie", price: "₹89" },

  // SPIRAL POTATO
  { category: "Quick Bites", name: "Salted Spiral Potato", price: "₹59" },
  { category: "Quick Bites", name: "Peri Peri Spiral Potato", price: "₹69" },
  { category: "Quick Bites", name: "Peri Peri Cheese Spiral Potato", price: "₹69" },
  { category: "Quick Bites", name: "Cheese Spiral Potato", price: "₹69" },
  { category: "Quick Bites", name: "Mayonnaise Spiral Potato", price: "₹69" },

  // QUICK BITES
  { category: "Quick Bites", name: "Potato Garlic Shots", price: "₹89" },
  { category: "Quick Bites", name: "Cheese Garlic Bread", price: "₹89" },
  { category: "Quick Bites", name: "Paneer Garlic Bread", price: "₹89" },
  { category: "Quick Bites", name: "Corn & Cheese Nachos", price: "₹89" },
  { category: "Quick Bites", name: "Corn & Cheese", price: "₹89" },

  // COFFEE & TEA
  { category: "Beverages", name: "Hot Coffee", price: "₹25" },
  { category: "Beverages", name: "Cold Coffee", price: "₹60" },
  { category: "Beverages", name: "Masala Chai", price: "₹20" },
  { category: "Beverages", name: "Bread Butter Jam", price: "₹35" },

  // MOJITOS
  { category: "Mojitos", name: "Strawberry Mojito", price: "₹79" },
  { category: "Mojitos", name: "Watermelon Mojito", price: "₹79" },
  { category: "Mojitos", name: "Green Mint Mojito", price: "₹79" },
  { category: "Mojitos", name: "Kaichi Kairi Mojito", price: "₹79" },
  { category: "Mojitos", name: "Chilli Guava Mojito", price: "₹79" },
  { category: "Mojitos", name: "Kala Khatta Mojito", price: "₹79" },
  { category: "Mojitos", name: "Green Apple Mojito", price: "₹79" },
  { category: "Mojitos", name: "Jamun Mojito", price: "₹79" },
  { category: "Mojitos", name: "Blue Lagoon Mojito", price: "₹79" },
  { category: "Mojitos", name: "Orange Mojito", price: "₹79" },

  // MILKSHAKES
  { category: "Shakes", name: "Strawberry Milkshake", price: "₹79" },
  { category: "Shakes", name: "Mango Milkshake", price: "₹79" },
  { category: "Shakes", name: "Chocolate Milkshake", price: "₹79" },
  { category: "Shakes", name: "Black Current Milkshake", price: "₹79" },
  { category: "Shakes", name: "Variyali Milkshake", price: "₹79" },
  { category: "Shakes", name: "Oreo Milkshake", price: "₹79" },
  { category: "Shakes", name: "Brownie Shake", price: "₹79" },
  { category: "Shakes", name: "Cold Coffee With Ice Cream", price: "₹79" },

  // BINGSU
  { category: "Desserts", name: "Butterscotch Korean Snow Flakes", price: "₹79" },
  { category: "Desserts", name: "Chocolate Korean Snow Flakes", price: "₹79" },
  { category: "Desserts", name: "Mango Korean Snow Flakes", price: "₹79" },
  { category: "Desserts", name: "Strawberry Korean Snow Flakes", price: "₹79" },
  { category: "Desserts", name: "Chilli Guava Korean Snow Flakes", price: "₹79" },
  { category: "Desserts", name: "Coffee Korean Snow Flakes", price: "₹79" },
  { category: "Desserts", name: "Black Current Korean Snow Flakes", price: "₹79" },

  // SPECIAL
  { category: "Desserts", name: "Hot Sizzling Brownie With Ice Cream", price: "₹100" }

];


const menuGrid = document.getElementById("menuGrid");
const filters = document.getElementById("filters");


/* ================= FILTERS ================= */

const categories = [
  "All",
  ...new Set(menuData.map(item => item.category))
];


categories.forEach(category => {

  const button = document.createElement("button");

  button.className = "filter-btn";

  if (category === "All") {
    button.classList.add("active");
  }

  button.textContent = category;

  button.addEventListener("click", () => {

    document
      .querySelectorAll(".filter-btn")
      .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    renderMenu(category);

  });

  filters.appendChild(button);

});


/* ================= MENU RENDER ================= */

function renderMenu(category = "All") {

  menuGrid.innerHTML = "";

  const items =
    category === "All"
      ? menuData
      : menuData.filter(item => item.category === category);


  items.forEach((item, index) => {

    const card = document.createElement("article");

    card.className = "menu-card";

    card.innerHTML = `

      <div class="menu-card-top">

        <span class="menu-number">
          ${String(index + 1).padStart(2, "0")}
        </span>

        <span class="menu-category">
          ${item.category}
        </span>

      </div>

      <div class="menu-card-content">

        <h3>
          ${item.name}
        </h3>

        <div class="menu-line"></div>

        <strong>
          ${item.price}
        </strong>

      </div>

    `;

    menuGrid.appendChild(card);

  });

}


/* ================= INITIAL MENU ================= */

renderMenu();


/* ================= YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
