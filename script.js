const menu = [
  {cat:"Momos", items:[
    ["Veg Steam","70 / 90"],["Veg Steam Cheese","80 / 100"],["Paneer Steam","80 / 100"],["Paneer Steam Cheese","90 / 110"],["Cheese Corn Steam","110 / 130"],["Cheese Corn Steam Cheese","130 / 150"],
    ["Veg Fried","90 / 110"],["Veg Fried Cheese","100 / 120"],["Paneer Fried","110 / 130"],["Paneer Fried Cheese","120 / 140"],["Cheese Corn Fried","130 / 150"],["Cheese Corn Fried Cheese","140 / 160"],
    ["Veg Kurkure","100 / 120"],["Veg Kurkure Cheese","110 / 130"],["Paneer Kurkure","120 / 140"],["Paneer Kurkure Cheese","130 / 150"],["Cheese Corn Kurkure","140 / 160"],["Cheese Corn Kurkure Cheese","150 / 170"],
    ["Jhol Momo","109"],["Manchow Momo","109"],["Pizza Momo","99"],["Saucy Veg Momo","99"],["Saucy Paneer Momo","99"]
  ]},
  {cat:"Pizza",items:[["Veggie","99"],["Margerita","99"],["Cheese Corn","109"],["Paneer Tikka","109"],["Pasta Pizza","129"],["Veg Loaded","129"]]},
  {cat:"Burgers",items:[["Classic Veg","69"],["Veg Cheese","79"],["Peri Peri","69"],["Peri Peri Cheese","79"]]},
  {cat:"Sandwich",items:[["Veg Grill","59"],["Veg Cheese Grill","69"],["Mexican Grill","69"],["Cheese Corn","69"],["Cheese Chilly","79"],["Paneer Tikka","79"]]},
  {cat:"Fries",items:[["Salted","59"],["Peri Peri","69"],["Peri Peri Cheese","79"],["Cheese","79"],["Loaded Fries","99"]]},
  {cat:"Maggie",items:[["Plain","49"],["Yipee","49"],["Cheese","59"],["Vegetable","59"],["Vegetable Cheese","69"]]},
  {cat:"Pasta",items:[["Red Sauce","109"],["White Sauce","109"],["Masala Penne","109"]]},
  {cat:"Waffles",items:[["White Choco Delight","89"],["Dark Choco Bliss","89"],["Milk Choco","99"],["Crunch","99"],["Triple Chocolate","99"],["Kitkat Crunch","99"],["Oreo Crumble","99"]]},
  {cat:"Hot Brownies",items:[["Triple Chocolate","89"],["Kitkat Crunch","89"],["Oreo Crumble","89"]]},
  {cat:"Spiral Potato",items:[["Salted","59"],["Peri Peri","69"],["Peri Peri Cheese","69"],["Cheese","69"],["Mayonise","69"]]},
  {cat:"Quick Bites",items:[["Potato Garlic Shots","89"],["Cheese Garlic Bread","89"],["Paneer Garlic Bread","89"],["Corn & Cheese Nachos","89"],["Corn & Cheese","89"]]},
  {cat:"Coffee & Tea",items:[["Hot Coffee","25"],["Cold Coffee","60"],["Masala Chai","20"],["Bread Butter Jam","35"]]},
  {cat:"Mojitos",items:[["Strawberry","79"],["Watermelon","79"],["Green Mint","79"],["Kaichi Kairi","79"],["Chilli Guava","79"],["Kala Khatta","79"],["Green Apple","79"],["Jamun","79"],["Blue Lagoon","79"],["Orange","79"]]},
  {cat:"Milkshake",items:[["Strawberry","79"],["Mango","79"],["Chocolate","79"],["Black Current","79"],["Variyali","79"],["Oreo","79"],["Brownie Shake","79"],["Cold Coffee with Icecream","79"]]},
  {cat:"Korean Snow Flakes",items:[["Butterscotch","79"],["Chocolate","79"],["Mango","79"],["Strawberry","79"],["Chilli Guava","79"],["Coffee","79"],["Black Current","79"]]},
  {cat:"Desserts",items:[["Hot Sizzling Brownie with Ice Cream","100"]]}
];

const filters = document.getElementById("filters");
const grid = document.getElementById("menuGrid");

function renderFilters() {
  filters.innerHTML = `<button class="filter active" data-cat="all">All</button>` +
    menu.map(m => `<button class="filter" data-cat="${m.cat}">${m.cat}</button>`).join("");
  filters.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click", () => {
    filters.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderMenu(btn.dataset.cat);
  }));
}

function renderMenu(category="all") {
  const data = category === "all" ? menu : menu.filter(m => m.cat === category);
  grid.innerHTML = data.map(section => `
    <article class="menu-card">
      <h3>${section.cat}</h3>
      <ul>${section.items.map(([name, price]) => `
        <li><span>${name}</span><span class="price">₹${price}</span></li>
      `).join("")}</ul>
    </article>
  `).join("");
}

renderFilters();
renderMenu();
document.getElementById("year").textContent = new Date().getFullYear();
