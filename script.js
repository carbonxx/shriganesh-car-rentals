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
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Suzuki_Baleno_front_20071004.jpg/960px-Suzuki_Baleno_front_20071004.jpg"
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
      name: "Maruti SCross",
      price: 2200,
      fuel: "Diesel",
      transmission: "Manual",
      image: "assets/seven_seater.png"
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
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Suzuki_Baleno_front_20071004.jpg/960px-Suzuki_Baleno_front_20071004.jpg"
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
      image: "assets/five_seater.png"
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
  renderDestinations();
  setupPills();
  setupFormSubmission();
});

// Render Car Cards
function renderCars() {
  const grid5 = document.getElementById("grid-5-seater");
  const grid7 = document.getElementById("grid-7-seater");
  const gridAuto = document.getElementById("grid-automatic");

  if(grid5) grid5.innerHTML = fleet.fiveSeater.map(car => createCarCard(car)).join("");
  if(grid7) grid7.innerHTML = fleet.sevenSeater.map(car => createCarCard(car)).join("");
  if(gridAuto) gridAuto.innerHTML = fleet.automatic.map(car => createCarCard(car)).join("");

  // Attach event listeners to Book Now buttons
  document.querySelectorAll(".book-car-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const carName = e.target.getAttribute("data-car");
      
      // Auto-fill form
      const select = document.getElementById("selectedCar");
      
      // Find the option that matches or contains the carName
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text.includes(carName) || select.options[i].value === carName) {
          select.selectedIndex = i;
          break;
        }
      }

      // Smooth scroll to form
      document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function createCarCard(car) {
  // We'll use id to scroll from pills. E.g., "WagonR" => "card-wagonr"
  let sanitizedName = car.name.replace("Maruti ", "").replace("Renault ", "").replace("Toyota ", "").toLowerCase().replace(/\s+/g, '-');
  return `
    <div class="car-card" id="card-${sanitizedName}">
      <img src="${car.image}" alt="${car.name}" class="car-image" loading="lazy">
      <h4 class="car-name">${car.name}</h4>
      <div class="car-price">₹${car.price}<span> /day</span></div>
      <div class="car-badges">
        <span class="badge-tag">⛽ ${car.fuel}</span>
        <span class="badge-tag">⚙️ ${car.transmission}</span>
      </div>
      <button class="btn-primary w-full book-car-btn mt-auto" data-car="${car.name.replace("Maruti ", "").replace("Renault ", "").replace("Toyota ", "")}">Book Now</button>
    </div>
  `;
}

// Render Destinations
function renderDestinations() {
  const destGrid = document.getElementById("destGrid");
  destGrid.innerHTML = destinations.map(dest => `
    <div class="dest-card" onclick="document.getElementById('booking').scrollIntoView({behavior: 'smooth'})">
      <img src="${dest.image}" alt="${dest.name}" loading="lazy">
      <div class="dest-content">
        <h4>${dest.name}</h4>
        <p>${dest.subtitle}</p>
        <button class="btn-primary-small">Book a Car to Visit</button>
      </div>
    </div>
  `).join("");
}

// Setup Pills
function setupPills() {
  const pills = document.querySelectorAll(".pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      const targetName = pill.getAttribute("data-target").toLowerCase().replace(/\s+/g, '-');
      const card = document.getElementById(`card-${targetName}`);
      if (card) {
        // Offset scroll slightly to account for fixed header
        const headerOffset = 80;
        const elementPosition = card.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Slight highlight animation
        card.style.transform = "scale(1.03)";
        card.style.borderColor = "var(--primary)";
        setTimeout(() => {
          card.style.transform = "";
          card.style.borderColor = "";
        }, 1000);
      }
    });
  });
}

// Form Submission
function setupFormSubmission() {
  const form = document.getElementById("bookingForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

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
