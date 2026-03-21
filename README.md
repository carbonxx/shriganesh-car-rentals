# ShriGanesh Self Drive Car Rentals

![Hero Banner](assets/hero_bg.png)

A modern, mobile-first single-page web application for a car rental business based in Mangalore, India. The platform allows users to browse available 5-seater and 7-seater vehicles and complete bookings seamlessly via WhatsApp.

## 🚀 Features

- **Mobile-First Design**: Fully responsive layout optimized for mobile devices with a sticky quick-action bar.
- **Dynamic Car Listing**: Filtered view for 5-seater and 7-seater fleets with pricing, fuel, and transmission badges.
- **WhatsApp Integration**: The booking flow intercepts form submissions and automatically redirects users to WhatsApp, passing a pre-filled and formatted text message to the business owner.
- **Smooth Navigation**: Interlinked car pills and "Book Now" buttons that dynamically scroll through the page and pre-fill form data.
- **Rich UI/UX**: Built with custom Vanilla CSS featuring glassmorphism effects, modern typography (Outfit font), and micro-animations.

## 📂 Project Structure

```bash
📦 shriganesh-car-rentals
 ┣ 📂 assets/              # Car illustrations, hero banners, and destination photos
 ┣ 📜 index.html           # Main semantic HTML entry point
 ┣ 📜 style.css            # Custom CSS variables, reset, and styling
 ┣ 📜 script.js            # Frontend logic for interactions and WhatsApp redirect
 ┗ 📜 README.md            # Project documentation
```

## 🛠️ Built With

- **HTML5** (Semantic structure)
- **Vanilla CSS3** (Custom properties, Flexbox, CSS Grid)
- **Vanilla JavaScript** (DOM manipulation, Event handling)

## 💻 Running Locally

Since this is a static website, no complex build tools or dependencies are required. 

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/shriganesh-car-rentals.git
   ```
2. Navigate to the project directory:
   ```bash
   cd shriganesh-car-rentals
   ```
3. Open `index.html` directly in your web browser, or serve it via a local development server like Python's built-in HTTP server:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

## ⚙️ Configuration

To update the WhatsApp receiving number:
1. Open `script.js`.
2. Update the `ADMIN_WHATSAPP` constant to the target phone number (include country code, omit spaces and the `+` sign).
   ```javascript
   const ADMIN_WHATSAPP = "917204380284"; // e.g., +91 7204380284
   ```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
