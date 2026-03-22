// Data for Cars
const fleet = {
  fiveSeater: [
    { name: "Maruti Alto", price: 999, fuel: "Petrol", transmission: "Manual", image: "assets/five_seater.png" },
    { name: "Maruti WagonR", price: 1099, fuel: "Petrol", transmission: "Manual", image: "assets/five_seater.png" },
    { name: "Renault Kwid", price: 999, fuel: "Petrol", transmission: "Manual", image: "assets/five_seater.png" },
    { name: "Maruti Baleno", price: 1299, fuel: "Petrol", transmission: "Automatic", image: "assets/five_seater.png" },
    { name: "Maruti Fronx", price: 1399, fuel: "Petrol", transmission: "Automatic", image: "assets/five_seater.png" },
    { name: "Maruti Brezza", price: 1499, fuel: "Petrol", transmission: "Automatic", image: "assets/five_seater.png" }
  ],
  sevenSeater: [
    { name: "Kia Carens Clavis", price: 1799, fuel: "Diesel", transmission: "Automatic", image: "assets/seven_seater.png" },
    { name: "Maruti Ertiga", price: 1599, fuel: "Petrol", transmission: "Manual", image: "assets/seven_seater.png" },
    { name: "Toyota Innova", price: 1999, fuel: "Diesel", transmission: "Manual", image: "assets/seven_seater.png" },
    { name: "Toyota Innova Crysta", price: 2299, fuel: "Diesel", transmission: "Automatic", image: "assets/seven_seater.png" }
  ]
};

// V4 Updated Destinations Content
const destinations = [
  { name: "Coorg (The Scotland of India)", subtitle: "Navigate the misty coffee estates of Madikeri in comfort. Perfect for family stays and estate trails.", image: "assets/dest_madikeri.png" },
  { name: "Udupi & Malpe", subtitle: "A smooth coastal cruise to the Krishna Temple and St. Mary’s Island. Perfect for a quick spiritual getaway.", image: "assets/dest_udupi.png" },
  { name: "Chikmagalur", subtitle: "Conquer the winding roads of Mullayanagiri. Extra torque and space for your trekking gear.", image: "assets/dest_mangalore.png" },
  { name: "Bekal Fort", subtitle: "Drive south to the historic keyhole fort. A scenic, cinematic route perfect for couples.", image: "assets/dest_kerala.png" }
];

const ADMIN_WHATSAPP = "919113217773";

document.addEventListener("DOMContentLoaded", () => {
  setupToggle();
  renderDestinations();
  setupFormSubmission();
  
  // Initial Render
  renderFleet("5");
});

function setupToggle() {
  const segments = document.querySelectorAll(".segment");
  segments.forEach(segment => {
    segment.addEventListener("click", () => {
      // Remove active from all
      segments.forEach(s => s.classList.remove("active"));
      // Add active to clicked
      segment.classList.add("active");
      
      const type = segment.getAttribute("data-type");
      renderFleet(type);
    });
  });
}

function renderFleet(type) {
  const fleetGrid = document.getElementById("fleet-grid");
  const badge = document.getElementById("fleet-badge");
  
  // Clear current HTML to restart animations
  fleetGrid.innerHTML = "";
  
  let currentFleet = type === "5" ? fleet.fiveSeater : fleet.sevenSeater;
  
  if(type === "5") {
    badge.textContent = "Best for City & Solo Trips.";
  } else {
    badge.textContent = "Best for Family & Temple Visits.";
  }

  // Create HTML with staggered fade-in
  const html = currentFleet.map((car, index) => {
    const delay = index * 0.1;
    const ctaText = type === "5" ? `Check Availability for ${car.name.split(' ').slice(1).join(' ')}` : `Inquire for Family Trip`;
    
    return `
      <div class="car-card glass-card snap-item stagger-item" style="animation-delay: ${delay}s">
        <img src="${car.image}" alt="${car.name}" class="car-image" loading="lazy">
        <h4 class="car-name">${car.name}</h4>
        
        <div class="car-price-box">
          <div class="car-subtext">Starting from</div>
          <div class="car-price">₹${car.price}<span> /day</span></div>
          <div class="car-subtext">No Hidden Charges | Fuel Extra</div>
        </div>

        <div class="car-badges">
          <span class="badge-tag">⛽ ${car.fuel}</span>
          <span class="badge-tag">⚙️ ${car.transmission}</span>
        </div>

        <button class="btn-primary w-full book-car-btn mt-auto" data-car="${car.name}">${ctaText}</button>
      </div>
    `;
  }).join("");

  fleetGrid.innerHTML = html;

  // Bind Form Link
  document.querySelectorAll(".book-car-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const carName = e.target.getAttribute("data-car");
      autoFillForm(carName);
    });
  });
}

function autoFillForm(carName) {
  const select = document.getElementById("selectedCar");
  for (let i = 0; i < select.options.length; i++) {
    if (select.options[i].text.includes(carName) || select.options[i].value === carName) {
      select.selectedIndex = i;
      break;
    }
  }
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}

function renderDestinations() {
  const destGrid = document.getElementById("destGrid");
  destGrid.innerHTML = destinations.map((dest, i) => `
    <div class="dest-card glass-card snap-item stagger-item" style="animation-delay: ${i*0.1}s">
      <img src="${dest.image}" alt="${dest.name}" loading="lazy">
      <div class="dest-content">
        <h4>${dest.name}</h4>
        <p>${dest.subtitle}</p>
      </div>
    </div>
  `).join("");
}

function setupFormSubmission() {
  const form = document.getElementById("bookingForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("fullName").value;
    const phone = document.getElementById("phone").value;
    const pickupDateRaw = document.getElementById("pickupDate").value;
    const dropDateRaw = document.getElementById("dropDate").value;
    const car = document.getElementById("selectedCar").value;
    
    const d1 = new Date(pickupDateRaw).toLocaleString("en-IN", {day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit'});
    const d2 = new Date(dropDateRaw).toLocaleString("en-IN", {day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit'});

    const text = `Hi, I want to book ${car}.\nName: ${name}\nPhone: ${phone}\nPickup: ${d1}\nDrop: ${d2}`;
    window.open(`https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  });
}
