# ShriGanesh Self Drive Car Rentals

![Hero Banner](assets/hero_bg.png)

Welcome to the official web application for **ShriGanesh Self Drive Car Rentals**, a premier car rental service based in Mangalore, India. This project provides a flawless, mobile-first experience for customers looking to book reliable 5-seater and 7-seater vehicles with complete transparency and ease.

## 🚀 Key Features

- **Mobile-First UX/UI**: Designed extensively for mobile devices featuring a bottom sticky action bar for immediate booking inquiries.
- **Dynamic Fleet Navigation**: Browse through an organized fleet categorized by 5-seaters and 7-seaters. Quick navigation chips at the hero section elegantly scroll the user to their car of choice.
- **Frictionless WhatsApp Integration**: The booking architecture intercepts form submissions and constructs a formatted, URL-encoded string directly into the WhatsApp API, allowing the business owner to receive exact booking requirements instantly.
- **Modern Aesthetics**: Built exclusively with Vanilla CSS leveraging bespoke custom variables, CSS Grid, Flexbox, glassmorphism, and subtle micro-animations to deliver a modern, premium feel.

## 📂 Architecture & File Structure

```bash
📦 shriganesh-car-rentals
 ┣ 📂 assets/              # Premium car models, hero illustrations, and destination visuals
 ┣ 📜 index.html           # Main semantic HTML5 structural entry point
 ┣ 📜 style.css            # Responsive design system, tokens, and animations
 ┣ 📜 script.js            # Client-side JavaScript handling interactions and WhatsApp routing
 ┗ 📜 README.md            # Comprehensive project documentation
```

## 💻 Running the Project Locally

Because this application relies on standard web technologies (HTML/CSS/JS) without the overhead of heavy frameworks or build steps, deploying or modifying it is incredibly straightforward.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/carbonxx/shriganesh-car-rentals.git
   ```
2. **Navigate to the directory:**
   ```bash
   cd shriganesh-car-rentals
   ```
3. **Launch the site:**
   Simply double-click `index.html` to open it in your default web browser, or spin up a local development server for a closer production feel:
   ```bash
   python3 -m http.server 8000
   ```
   *Dashboard available at: `http://localhost:8000`*

## ⚙️ Configuration & Deployment

### Updating the WhatsApp Number
To modify the receiving WhatsApp number for booking requests, adjust the `ADMIN_WHATSAPP` constant found at the top of the `script.js` file. Format the number with the country code, omitting the `+` prefix and any spaces.

```javascript
// Example: +91 9113217773
const ADMIN_WHATSAPP = "919113217773";
```
*Note: The HTML file (`index.html`) also contains direct `tel:` and `wa.me` fallback links in the desktop footer and mobile sticky bar that align with this number.*

### Deployment
This project is inherently static and can be hosted seamlessly on any static cloud provider such as:
- **GitHub Pages** (Recommended)
- **Vercel**
- **Netlify**

## 📝 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for complete details.
