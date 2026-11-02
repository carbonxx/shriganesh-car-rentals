// Data for Cars
const fleet = {
  fiveSeater: [
    {
      name: "Maruti Ignis",
      price: 1750,
      fuel: "Petrol",
      transmission: "Manual",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/2018_Suzuki_Ignis_SZ5_SHVS_Allgrip_1.2_Front.jpg/960px-2018_Suzuki_Ignis_SZ5_SHVS_Allgrip_1.2_Front.jpg"
    },
    {
      name: "Maruti Swift",
      price: 1850,
      fuel: "Petrol",
      transmission: "Manual",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Suzuki_Swift_%282024%29_hybrid_DSC_6076.jpg/960px-Suzuki_Swift_%282024%29_hybrid_DSC_6076.jpg"
    },
    {
      name: "Maruti Baleno",
      price: 1950,
      fuel: "Petrol",
      transmission: "Manual",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/2017_Suzuki_Baleno_SZ3_Dualjet_1.2_Front.jpg/960px-2017_Suzuki_Baleno_SZ3_Dualjet_1.2_Front.jpg"
    },
    {
      name: "Maruti Fronx",
      price: 2100,
      fuel: "Petrol",
      transmission: "Manual",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/2024_Suzuki_Fronx.jpg/960px-2024_Suzuki_Fronx.jpg"
    }
  ],
  sevenSeater: [
    {
      name: "Maruti Ertiga",
      price: 2700,
      fuel: "CNG + Petrol",
      transmission: "Manual",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Suzuki_Ertiga_NC_FL_1.5_GLX_Hybrid_Snow_White_Pearl.jpg/960px-Suzuki_Ertiga_NC_FL_1.5_GLX_Hybrid_Snow_White_Pearl.jpg"
    },
    {
      name: "Toyota Innova",
      price: 3100,
      fuel: "Diesel",
      transmission: "Manual",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/2022_Toyota_Kijang_Innova_2.4_G_GUN142R_%2820220302%29.jpg/960px-2022_Toyota_Kijang_Innova_2.4_G_GUN142R_%2820220302%29.jpg"
    },
    {
      name: "Toyota Innova Crysta",
      price: 4500,
      fuel: "Diesel",
      transmission: "Manual",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/2022_Toyota_Kijang_Innova_2.4_G_GUN142R_%2820220302%29.jpg/960px-2022_Toyota_Kijang_Innova_2.4_G_GUN142R_%2820220302%29.jpg"
    },
    {
      name: "Maruti S-Cross",
      price: 2200,
      fuel: "Diesel",
      transmission: "Manual",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/2017_Suzuki_SX4_S-Cross_%28Indonesia%29_front_view.jpg/960px-2017_Suzuki_SX4_S-Cross_%28Indonesia%29_front_view.jpg"
    },
    {
      name: "Mahindra Marazzo",
      price: 3000,
      fuel: "Diesel",
      transmission: "Manual",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Mahindra_Marazzo_MPV_SEP_18_%281%29.jpg/960px-Mahindra_Marazzo_MPV_SEP_18_%281%29.jpg"
    },
    {
      name: "KIA Carens",
      price: 3200,
      fuel: "Petrol",
      transmission: "Manual",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/2025_Kia_Carens_Clavis_HTX_Plus.png/960px-2025_Kia_Carens_Clavis_HTX_Plus.png"
    },
    {
      name: "KIA Carens Clavis",
      price: 3500,
      fuel: "Diesel",
      transmission: "Manual",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/2025_Kia_Carens_Clavis_HTX_Plus.png/960px-2025_Kia_Carens_Clavis_HTX_Plus.png"
    }
  ],
  automatic: [
    {
      name: "Maruti Ignis",
      price: 1850,
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/2018_Suzuki_Ignis_SZ5_SHVS_Allgrip_1.2_Front.jpg/960px-2018_Suzuki_Ignis_SZ5_SHVS_Allgrip_1.2_Front.jpg"
    },
    {
      name: "Maruti Swift",
      price: 1950,
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Suzuki_Swift_%282024%29_hybrid_DSC_6076.jpg/960px-Suzuki_Swift_%282024%29_hybrid_DSC_6076.jpg"
    },
    {
      name: "Maruti Baleno",
      price: 2100,
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/2017_Suzuki_Baleno_SZ3_Dualjet_1.2_Front.jpg/960px-2017_Suzuki_Baleno_SZ3_Dualjet_1.2_Front.jpg"
    },
    {
      name: "Maruti Fronx",
      price: 2200,
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/2024_Suzuki_Fronx.jpg/960px-2024_Suzuki_Fronx.jpg"
    },
    {
      name: "Maruti Brezza",
      price: 2450,
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/2022_Maruti_Suzuki_Brezza_ZXi%2B_%28India%29_front_view_03.png/960px-2022_Maruti_Suzuki_Brezza_ZXi%2B_%28India%29_front_view_03.png"
    },
    {
      name: "Hyundai Santro",
      price: 1300,
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Hyundai_Atos_1.1_Plus_2022.jpg/960px-Hyundai_Atos_1.1_Plus_2022.jpg"
    },
    {
      name: "Nissan Magnite",
      price: 1950,
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Nissan_Magnite_2025_1.0_Exclusive_at_WTC_Montevideo_-_04.jpg/960px-Nissan_Magnite_2025_1.0_Exclusive_at_WTC_Montevideo_-_04.jpg"
    }
  ]
};

// Data for Destinations
const destinations = [
  {
    name: "Mangalore",
    subtitle: "City & Coastal drives",
    image: "assets/dest_mangalore.png"
  },
  {
    name: "Udupi",
    subtitle: "Temples & beaches",
    image: "assets/dest_udupi.png"
  },
  {
    name: "Madikeri",
    subtitle: "Coffee estates & mist",
    image: "assets/dest_madikeri.png"
  },
  {
    name: "Kerala",
    subtitle: "Backwaters & hills",
    image: "assets/dest_kerala.png"
  }
];

// Admin WhatsApp Number
const ADMIN_WHATSAPP = "919113217773";

// Document Load
document.addEventListener("DOMContentLoaded", () => {
  renderCars();
  renderCarOptions();
  renderDestinations();
  renderPageFacts();
  setupFleetFilter();
  setupSearchBar();
  setupFormSubmission();
  setupScrollAnimations();
  setupHeaderScroll();
  setupMobileNav();
});

// Labels shown on each card for its fleet group
const categoryLabels = {
  fiveSeater: "5-seater",
  sevenSeater: "7-seater",
  automatic: "Automatic"
};

// Same car can exist as Manual and Automatic, so include transmission in the label
function carLabel(car) {
  return `${car.name} (${car.transmission})`;
}

// Render Car Cards
function renderCars() {
  const grid = document.getElementById("carGrid");
  grid.innerHTML = Object.keys(fleet)
    .map(category => fleet[category].map(car => createCarCard(car, category)).join(""))
    .join("");

  // Clicking a card pre-selects that car in the booking form
  document.querySelectorAll(".car-card").forEach(card => {
    const selectCar = () => {
      document.getElementById("selectedCar").value = card.dataset.car;
      document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
    };
    card.addEventListener("click", selectCar);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectCar();
      }
    });
  });
}

function createCarCard(car, category) {
  // Extract brand and model
  let parts = car.name.split(" ");
  let brand = parts[0];
  let model = parts.slice(1).join(" ");
  const gearIcon = car.transmission === "Automatic" ? "ti-automatic-gearbox" : "ti-manual-gearbox";

  return `
    <article class="car-card" data-car="${carLabel(car)}" data-category="${category}" role="button" tabindex="0" aria-label="Book ${carLabel(car)}">
      <div class="car-media">
        <span class="car-tag">${categoryLabels[category]}</span>
        <img src="${car.image}" alt="${car.name}" loading="lazy">
      </div>
      <div class="car-body">
        <p class="car-brand">${brand}</p>
        <h3 class="car-model">${model}</h3>
        <ul class="car-specs">
          <li><i class="ti ti-gas-station" aria-hidden="true"></i>${car.fuel}</li>
          <li><i class="ti ${gearIcon}" aria-hidden="true"></i>${car.transmission}</li>
        </ul>
        <div class="car-footer">
          <span class="car-price">₹${car.price.toLocaleString("en-IN")}<small>/day</small></span>
          <span class="btn btn-primary btn-sm">Book <i class="ti ti-arrow-right" aria-hidden="true"></i></span>
        </div>
      </div>
    </article>
  `;
}

// Fleet filter tabs (All / 5-seater / 7-seater / Automatic)
function applyFleetFilter(filter) {
  document.querySelectorAll(".filter-tab").forEach(t => {
    const active = t.dataset.filter === filter;
    t.classList.toggle("is-active", active);
    t.setAttribute("aria-pressed", active);
  });
  document.querySelectorAll(".car-card").forEach(card => {
    card.hidden = filter !== "all" && card.dataset.category !== filter;
  });
}

function setupFleetFilter() {
  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.addEventListener("click", () => applyFleetFilter(tab.dataset.filter));
  });
}

// Keep the "starting from" prices and footer year in sync with the data
function renderPageFacts() {
  const allCars = Object.values(fleet).flat();
  const lowest = `₹${Math.min(...allCars.map(car => car.price)).toLocaleString("en-IN")}`;
  document.getElementById("priceFrom").textContent = lowest;
  document.querySelectorAll(".price-from").forEach(el => el.textContent = lowest);
  document.getElementById("year").textContent = new Date().getFullYear();
}

// datetime-local expects "YYYY-MM-DDTHH:MM" in local time
function toLocalInputValue(date) {
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

// No bookings in the past, and drop must be after pickup. Returns a re-check function.
function setupDateRange(pickupInput, dropInput) {
  pickupInput.min = toLocalInputValue(new Date());
  const validateDates = () => {
    dropInput.min = pickupInput.value || pickupInput.min;
    if (pickupInput.value && dropInput.value && dropInput.value <= pickupInput.value) {
      dropInput.setCustomValidity("Drop date & time must be after pickup.");
    } else {
      dropInput.setCustomValidity("");
    }
  };
  pickupInput.addEventListener("change", validateDates);
  dropInput.addEventListener("change", validateDates);
  return validateDates;
}

// Hero search bar: filter the fleet and carry the dates into the booking form
function setupSearchBar() {
  const form = document.getElementById("searchForm");
  const pickup = document.getElementById("searchPickup");
  const drop = document.getElementById("searchDrop");
  const validateDates = setupDateRange(pickup, drop);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateDates();
    if (!form.reportValidity()) return;

    document.getElementById("pickupDate").value = pickup.value;
    document.getElementById("dropDate").value = drop.value;
    applyFleetFilter(document.getElementById("searchType").value);
    document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
  });
}

// Build the car dropdown from the fleet so it always matches the cards
function renderCarOptions() {
  const select = document.getElementById("selectedCar");
  const allCars = [...fleet.fiveSeater, ...fleet.sevenSeater, ...fleet.automatic];
  select.insertAdjacentHTML("beforeend", allCars.map(car =>
    `<option value="${carLabel(car)}">${carLabel(car)} – ₹${car.price.toLocaleString("en-IN")}/day</option>`
  ).join(""));
}

// Render Destinations
function renderDestinations() {
  const destGrid = document.getElementById("destGrid");
  destGrid.innerHTML = destinations.map(dest => `
    <a href="#booking" class="dest-card">
      <img src="${dest.image}" alt="${dest.name}" loading="lazy">
      <div class="dest-content">
        <h3>${dest.name}</h3>
        <p>${dest.subtitle}</p>
        <span class="dest-link">Book a car to visit <i class="ti ti-arrow-right" aria-hidden="true"></i></span>
      </div>
    </a>
  `).join("");
}

// Form Submission
function setupFormSubmission() {
  const form = document.getElementById("bookingForm");
  const pickupInput = document.getElementById("pickupDate");
  const dropInput = document.getElementById("dropDate");
  const validateDates = setupDateRange(pickupInput, dropInput);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateDates();
    if (!form.reportValidity()) return;

    const name = document.getElementById("fullName").value;
    const phone = document.getElementById("phone").value;
    const pickupDateRaw = document.getElementById("pickupDate").value;
    const dropDateRaw = document.getElementById("dropDate").value;
    const car = document.getElementById("selectedCar").value;
    const location = document.getElementById("pickupLocation").value;
    const message = document.getElementById("message").value;

    // Formatting dates
    const formatDateTime = (datetimeLocal) => {
      if (!datetimeLocal) return "";
      const d = new Date(datetimeLocal);
      return d.toLocaleString("en-IN", {
        day: "2-digit", month: "short", year: "numeric",
        hour: "2-digit", minute: "2-digit", hour12: true
      });
    };

    const pickupFormatted = formatDateTime(pickupDateRaw);
    const dropFormatted = formatDateTime(dropDateRaw);

    // WhatsApp Message
    const text = `Hi, I want to book ${car}.
Name: ${name}
Phone: ${phone}
Pickup: ${pickupFormatted} from ${location}
Drop: ${dropFormatted}
Message: ${message || 'No special requirements'}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodedText}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
  });
}

// Scroll Animations (Intersection Observer)
function setupScrollAnimations() {
  const reveals = document.querySelectorAll(".reveal");
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  reveals.forEach(reveal => {
    observer.observe(reveal);
  });
}

// Mobile / Tablet Menu Toggle
function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("siteNav");

  const setOpen = (open) => {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.innerHTML = `<i class="ti ${open ? "ti-x" : "ti-menu-2"}" aria-hidden="true"></i>`;
  };

  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setOpen(false)));
}

// Header Scroll Effect
function setupHeaderScroll() {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}
