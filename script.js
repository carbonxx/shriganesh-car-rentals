// Data for Cars
const fleet = {
  fiveSeater: [
    {
      name: "Maruti Alto",
      price: 999,
      fuel: "Petrol",
      transmission: "Manual",
      image: "assets/five_seater.png"
    },
    {
      name: "Maruti WagonR",
      price: 1099,
      fuel: "Petrol",
      transmission: "Manual",
      image: "assets/five_seater.png"
    },
    {
      name: "Renault Kwid",
      price: 999,
      fuel: "Petrol",
      transmission: "Manual",
      image: "assets/five_seater.png"
    },
    {
      name: "Maruti Baleno",
      price: 1299,
      fuel: "Petrol",
      transmission: "Automatic",
      image: "assets/five_seater.png"
    },
    {
      name: "Maruti Fronx",
      price: 1399,
      fuel: "Petrol",
      transmission: "Automatic",
      image: "assets/five_seater.png"
    },
    {
      name: "Maruti Brezza",
      price: 1499,
      fuel: "Petrol",
      transmission: "Automatic",
      image: "assets/five_seater.png"
    }
  ],
  sevenSeater: [
    {
      name: "Kia Carens Clavis",
      price: 1799,
      fuel: "Diesel",
      transmission: "Automatic",
      image: "assets/seven_seater.png"
    },
    {
      name: "Maruti Ertiga",
      price: 1599,
      fuel: "Petrol",
      transmission: "Manual",
      image: "assets/seven_seater.png"
    },
    {
      name: "Toyota Innova",
      price: 1999,
      fuel: "Diesel",
      transmission: "Manual",
      image: "assets/seven_seater.png"
    },
    {
      name: "Toyota Innova Crysta",
      price: 2299,
      fuel: "Diesel",
      transmission: "Automatic",
      image: "assets/seven_seater.png"
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

  grid5.innerHTML = fleet.fiveSeater.map(car => createCarCard(car)).join("");
  grid7.innerHTML = fleet.sevenSeater.map(car => createCarCard(car)).join("");

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
    <div class="car-card snap-item" id="card-${sanitizedName}">
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
    <div class="dest-card snap-item" onclick="document.getElementById('booking').scrollIntoView({behavior: 'smooth'})">
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
