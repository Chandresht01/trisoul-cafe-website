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


/* ================= DISH-SPECIFIC MENU IMAGES ================= */
// Each menu item gets a keyword-based image URL derived from its own name.
// A stable lock number keeps the selected image consistent for each dish.
// Images load from LoremFlickr, so an internet connection is required.
const fallbackDishImages = {
  momo: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=220&h=220&q=80",
  pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=220&h=220&q=80",
  burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=220&h=220&q=80",
  sandwich: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=220&h=220&q=80",
  fries: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=220&h=220&q=80",
  noodles: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=220&h=220&q=80",
  pasta: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=220&h=220&q=80",
  waffle: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=220&h=220&q=80",
  brownie: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=220&h=220&q=80",
  potato: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=220&h=220&q=80",
  garlic: "https://images.unsplash.com/photo-1619531040576-f9416740661e?auto=format&fit=crop&w=220&h=220&q=80",
  nachos: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=220&h=220&q=80",
  coffee: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=220&h=220&q=80",
  mojito: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=220&h=220&q=80",
  shake: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=220&h=220&q=80",
  dessert: "https://images.unsplash.com/photo-1551024506-0a72c8c1b7d8?auto=format&fit=crop&w=220&h=220&q=80",
  default: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=220&h=220&q=80"
};

function getFallbackDishImage(item) {
  const name = item.name.toLowerCase();
  if (name.includes("momo")) return fallbackDishImages.momo;
  if (name.includes("pizza")) return fallbackDishImages.pizza;
  if (name.includes("burger")) return fallbackDishImages.burger;
  if (name.includes("sandwich")) return fallbackDishImages.sandwich;
  if (name.includes("fries")) return fallbackDishImages.fries;
  if (name.includes("maggie") || name.includes("yippee")) return fallbackDishImages.noodles;
  if (name.includes("pasta")) return fallbackDishImages.pasta;
  if (name.includes("waffle")) return fallbackDishImages.waffle;
  if (name.includes("brownie") || name.includes("snow flakes")) return fallbackDishImages.brownie;
  if (name.includes("potato")) return fallbackDishImages.potato;
  if (name.includes("garlic bread")) return fallbackDishImages.garlic;
  if (name.includes("nachos")) return fallbackDishImages.nachos;
  if (name.includes("coffee") || name.includes("chai")) return fallbackDishImages.coffee;
  if (name.includes("mojito")) return fallbackDishImages.mojito;
  if (name.includes("milkshake") || name.includes("shake")) return fallbackDishImages.shake;
  return fallbackDishImages.default;
}

function getDishImage(item) {
  const name = item.name.toLowerCase();
  const category = item.category.toLowerCase();
  let tags = [];

  // Use the actual dish name as image-search keywords, with food/drink context.
  if (name.includes("momo")) {
    tags = ["momo", "dumpling", "food"];
    if (name.includes("paneer")) tags.push("paneer");
    if (name.includes("cheese")) tags.push("cheese");
    if (name.includes("corn")) tags.push("corn");
    if (name.includes("fried")) tags.push("fried");
    if (name.includes("kurkure")) tags.push("crispy");
    if (name.includes("jhol")) tags.push("soup");
    if (name.includes("manchow")) tags.push("manchurian");
    if (name.includes("pizza")) tags.push("pizza");
  } else if (name.includes("pizza")) {
    tags = ["pizza", "cheese", "oven", "food"];
    if (name.includes("paneer")) tags.push("paneer", "tikka");
    if (name.includes("corn")) tags.push("corn");
    if (name.includes("veggie") || name.includes("loaded")) tags.push("vegetables");
    if (name.includes("margherita")) tags.push("margherita", "basil");
    if (name.includes("pasta")) tags.push("pasta");
  } else if (name.includes("burger")) {
    tags = ["vegetarian", "burger", "food"];
    if (name.includes("cheese")) tags.push("cheese");
    if (name.includes("peri peri")) tags.push("spicy");
  } else if (name.includes("sandwich")) {
    tags = ["sandwich", "toasted", "food"];
    if (name.includes("paneer")) tags.push("paneer", "tikka");
    if (name.includes("corn")) tags.push("corn");
    if (name.includes("cheese")) tags.push("cheese");
    if (name.includes("mexican")) tags.push("mexican");
  } else if (name.includes("fries")) {
    tags = ["french", "fries", "food"];
    if (name.includes("cheese")) tags.push("cheese");
    if (name.includes("peri peri")) tags.push("spicy");
    if (name.includes("loaded")) tags.push("loaded");
  } else if (name.includes("maggie") || name.includes("yippee")) {
    tags = ["instant", "noodles", "bowl", "food"];
    if (name.includes("cheese")) tags.push("cheese");
    if (name.includes("vegetable")) tags.push("vegetables");
  } else if (name.includes("pasta")) {
    tags = ["pasta", "penne", "food"];
    if (name.includes("red sauce")) tags.push("tomato", "red sauce");
    if (name.includes("white sauce")) tags.push("creamy", "white sauce");
    if (name.includes("masala")) tags.push("spicy", "masala");
  } else if (name.includes("waffle")) {
    tags = ["waffle", "dessert"];
    if (name.includes("white choco")) tags.push("white chocolate");
    if (name.includes("dark choco")) tags.push("dark chocolate");
    if (name.includes("triple chocolate")) tags.push("chocolate sauce");
    if (name.includes("kitkat")) tags.push("chocolate wafer");
    if (name.includes("oreo")) tags.push("chocolate cookie");
    if (name.includes("crunch")) tags.push("crunchy topping");
  } else if (name.includes("brownie") || name.includes("sizzling")) {
    tags = ["chocolate", "brownie", "dessert"];
    if (name.includes("kitkat")) tags.push("chocolate wafer");
    if (name.includes("oreo")) tags.push("chocolate cookie");
    if (name.includes("ice cream")) tags.push("ice cream");
  } else if (name.includes("spiral potato")) {
    tags = ["spiral", "potato", "fried snack"];
    if (name.includes("cheese")) tags.push("cheese");
    if (name.includes("peri peri")) tags.push("spicy seasoning");
    if (name.includes("mayonnaise")) tags.push("mayonnaise");
  } else if (name.includes("potato garlic shots")) {
    tags = ["potato", "garlic", "fried snack"];
  } else if (name.includes("garlic bread")) {
    tags = ["garlic bread", "cheese", "food"];
    if (name.includes("paneer")) tags.push("paneer");
  } else if (name.includes("nachos") || name.includes("corn & cheese")) {
    tags = ["nachos", "corn", "cheese", "snack"];
  } else if (name.includes("mojito")) {
    tags = ["mojito", "mocktail", "drink"];
    if (name.includes("strawberry")) tags.push("strawberry", "red");
    if (name.includes("watermelon")) tags.push("watermelon");
    if (name.includes("mint")) tags.push("mint", "lime");
    if (name.includes("kairi")) tags.push("raw mango", "green mango");
    if (name.includes("guava")) tags.push("guava", "chilli");
    if (name.includes("kala khatta")) tags.push("purple", "berry");
    if (name.includes("apple")) tags.push("green apple");
    if (name.includes("jamun")) tags.push("jamun", "purple fruit");
    if (name.includes("blue lagoon")) tags.push("blue", "lemon");
    if (name.includes("orange")) tags.push("orange", "citrus");
  } else if (name.includes("milkshake") || name.includes("shake") || name.includes("cold coffee")) {
    tags = ["milkshake", "glass", "drink"];
    if (name.includes("strawberry")) tags.push("strawberry", "pink");
    if (name.includes("mango")) tags.push("mango", "yellow");
    if (name.includes("chocolate") || name.includes("brownie")) tags.push("chocolate");
    if (name.includes("black current")) tags.push("blackcurrant", "purple berry");
    if (name.includes("variyali")) tags.push("fennel", "milk");
    if (name.includes("oreo")) tags.push("oreo cookie");
    if (name.includes("ice cream")) tags.push("ice cream", "coffee");
  } else if (name.includes("hot coffee")) {
    tags = ["hot coffee", "coffee cup"];
  } else if (name.includes("chai")) {
    tags = ["masala chai", "indian tea", "cup"];
  } else if (name.includes("bread butter jam")) {
    tags = ["bread", "butter", "jam", "breakfast"];
  } else if (name.includes("snow flakes")) {
    tags = ["korean bingsu", "shaved ice", "dessert"];
    if (name.includes("butterscotch")) tags.push("butterscotch");
    if (name.includes("chocolate")) tags.push("chocolate");
    if (name.includes("mango")) tags.push("mango");
    if (name.includes("strawberry")) tags.push("strawberry");
    if (name.includes("guava")) tags.push("guava", "chilli");
    if (name.includes("coffee")) tags.push("coffee");
    if (name.includes("black current")) tags.push("blackcurrant", "purple berry");
  } else {
    tags = [category, name, "food"];
  }

  // Keep only URL-safe words; different names produce different stable image locks.
  const tagPath = [...new Set(tags.join(" ").toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean))].join(",");
  const lock = [...item.name].reduce((hash, char) => ((hash * 31) + char.charCodeAt(0)) % 100000, 7);
  return `https://loremflickr.com/220/220/${tagPath}?lock=${lock}`;
}

/* ================= MENU ICONS + RENDER ================= */

function getDishIcon(item) {
  const name = item.name.toLowerCase();
  const category = item.category.toLowerCase();

  if (name.includes("mojito") || name.includes("lagoon")) return "🥤";
  if (name.includes("milkshake") || name.includes("shake") || name.includes("cold coffee")) return "🥛";
  if (name.includes("coffee") || name.includes("chai")) return "☕";
  if (name.includes("pizza")) return "🍕";
  if (name.includes("burger")) return "🍔";
  if (name.includes("sandwich")) return "🥪";
  if (name.includes("momo")) return "🥟";
  if (name.includes("fries") || name.includes("potato") || name.includes("shots")) return "🍟";
  if (name.includes("pasta")) return "🍝";
  if (name.includes("waffle")) return "🧇";
  if (name.includes("brownie") || name.includes("chocolate") || name.includes("oreo") || name.includes("snow flakes")) return "🍫";
  if (name.includes("nachos") || name.includes("garlic bread") || name.includes("corn")) return "🧀";
  if (name.includes("maggie") || name.includes("yippee")) return "🍜";

  const categoryIcons = {
    "momos": "🥟", "pizza": "🍕", "burgers": "🍔", "sandwich": "🥪",
    "fries": "🍟", "maggie": "🍜", "pasta": "🍝", "desserts": "🍰",
    "quick bites": "✨", "beverages": "☕", "mojitos": "🥤", "shakes": "🥛"
  };
  return categoryIcons[category] || "🍴";
}

function renderMenu(category = "All") {
  menuGrid.innerHTML = "";

  const items = category === "All"
    ? menuData
    : menuData.filter(item => item.category === category);

  items.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "menu-card";
    card.style.setProperty("--card-index", index % 12);

    card.innerHTML = `
      <div class="menu-card-top">
        <span class="menu-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="menu-category">${item.category}</span>
      </div>
      <div class="menu-card-main">
        <div class="menu-icon-tile" aria-hidden="true"><span>${getDishIcon(item)}</span></div>
        <div class="menu-card-content">
          <h3>${item.name}</h3>
          <div class="menu-line"></div>
          <strong>${item.price}</strong>
        </div>
        <span class="menu-card-spark" aria-hidden="true">✦</span>
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


/* ================= CUSTOMER REVIEW FORM ================= */

const reviewForm = document.getElementById("reviewForm");
const ratingStars = [...document.querySelectorAll(".rating-star")];
const ratingLabel = document.getElementById("ratingLabel");
const reviewStatus = document.getElementById("reviewStatus");
let selectedRating = 5;

function setReviewRating(rating) {
  selectedRating = Number(rating);
  ratingStars.forEach((star) => {
    const value = Number(star.dataset.rating);
    const selected = value <= selectedRating;
    star.classList.toggle("active", selected);
    star.setAttribute("aria-checked", String(value === selectedRating));
    star.tabIndex = value === selectedRating ? 0 : -1;
  });
  if (ratingLabel) ratingLabel.textContent = `${selectedRating} out of 5`;
}

ratingStars.forEach((star) => {
  star.addEventListener("click", () => setReviewRating(star.dataset.rating));
  star.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
      event.preventDefault();
      const next = Math.min(5, selectedRating + 1);
      setReviewRating(next);
      ratingStars[next - 1].focus();
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      event.preventDefault();
      const next = Math.max(1, selectedRating - 1);
      setReviewRating(next);
      ratingStars[next - 1].focus();
    }
  });
});

if (reviewForm) {
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("reviewName").value.trim();
    const message = document.getElementById("reviewMessage").value.trim();

    if (!name || !message) {
      if (reviewStatus) reviewStatus.textContent = "Please enter your name and review before continuing.";
      return;
    }

    const whatsappMessage = [
      "Hi Trisoul Cafe! I'd like to share my feedback.",
      `Name: ${name}`,
      `Rating: ${selectedRating}/5 ${"★".repeat(selectedRating)}`,
      `Review: ${message}`
    ].join("\n");
    const whatsappUrl = `https://wa.me/919503349111?text=${encodeURIComponent(whatsappMessage)}`;
    const openedWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (reviewStatus) {
      reviewStatus.textContent = openedWindow
        ? "WhatsApp opened. Press Send there to share your review with the cafe."
        : "Your browser blocked the new tab. Allow pop-ups or open WhatsApp and send your review to 95033 49111.";
    }
  });
}

setReviewRating(5);


/* ================= ONLINE TABLE BOOKING ================= */
const bookingForm = document.getElementById("bookingForm");
const bookingDate = document.getElementById("bookingDate");
const bookingStatus = document.getElementById("bookingStatus");

// Prevent selecting a date in the past, using the visitor's local date.
if (bookingDate) {
  const now = new Date();
  const localToday = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  bookingDate.min = localToday;
}

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!bookingForm.reportValidity()) return;

    const name = document.getElementById("bookingName").value.trim();
    const phone = document.getElementById("bookingPhone").value.trim();
    const date = document.getElementById("bookingDate").value;
    const time = document.getElementById("bookingTime").value;
    const guests = document.getElementById("bookingGuests").value;
    const occasion = document.getElementById("bookingOccasion").value;
    const notes = document.getElementById("bookingNotes").value.trim();

    if (!name || !phone || !date || !time || !guests) {
      if (bookingStatus) bookingStatus.textContent = "Please complete all required fields.";
      return;
    }

    const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString("en-IN", {
      weekday: "short", day: "2-digit", month: "short", year: "numeric"
    });
    const message = [
      "Hi Trisoul Cafe! I'd like to request a table booking.",
      "",
      `Name: ${name}`,
      `Mobile: ${phone}`,
      `Date: ${formattedDate}`,
      `Preferred time: ${time}`,
      `Guests: ${guests}`,
      `Occasion: ${occasion}`,
      notes ? `Special request: ${notes}` : "",
      "",
      "Please confirm whether a table is available for this time."
    ].filter(Boolean).join("\n");

    const whatsappUrl = `https://wa.me/919503349111?text=${encodeURIComponent(message)}`;
    const openedWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (bookingStatus) {
      bookingStatus.textContent = openedWindow
        ? "WhatsApp opened with your request. Press Send, then wait for the cafe to confirm your booking."
        : "Your browser blocked the new tab. Open WhatsApp and message 95033 49111 with your booking details.";
    }
  });
}


/* ================= SUBTLE SCROLL MOTION ================= */
(function addScrollMotion() {
  const targets = document.querySelectorAll('.section-head, .strip > div, .about-image, .about-copy, .booking-intro, .booking-form, .review-card, .contact-card, .cta');
  targets.forEach(el => el.classList.add('motion-reveal'));

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  targets.forEach(el => observer.observe(el));
})();
