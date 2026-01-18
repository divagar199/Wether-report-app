# 🌦️ React Weather Dashboard

A modern, responsive weather application built with **React** and **Vite**. This dashboard features a "Glassmorphism" UI design, real-time weather data, a 5-day forecast, and a responsive layout that works seamlessly on desktops, tablets, and mobile devices.

## ✨ Features

* **Real-Time Weather:** Fetches current temperature, humidity, wind speed, and "feels like" temperature.
* **5-Day Forecast:** Displays the weather outlook for the upcoming week.
* **Glassmorphism UI:** A modern, frosted-glass aesthetic with dynamic background gradients.
* **Responsive Design:**
    * **Desktop:** Split-screen dashboard view.
    * **Tablet:** Vertical stack with optimized touch targets.
    * **Mobile:** Compact view with readable typography.
* **Smart Search:** Auto-clears input field upon successful data fetch for a smoother user experience.
* **Error Handling:** Gracefully handles invalid city names and API errors.

## 🛠️ Tech Stack

* **Frontend Library:** React (via Vite)
* **Styling:** CSS3 (Flexbox, Grid, Glassmorphism, Media Queries)
* **HTTP Client:** Axios
* **Icons:** React Icons (`react-icons/wi`, `react-icons/io5`)
* **Date Formatting:** date-fns
* **API:** OpenWeatherMap

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

* Node.js (v14 or higher)
* npm (comes with Node.js)

### Installation

1.  **Clone the repository** (or download the files):
    ```bash
    git clone [https://github.com/divagar199/weather-dashboard.git](https://github.com/divagar199/weather-dashboard.git)
    cd weather-dashboard
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **API Key Setup:**
    Open `src/Weather.jsx` and locate the `API_KEY` variable.
    * You can use your existing OpenWeatherMap key, or sign up for a free one at [openweathermap.org](https://openweathermap.org/).
    
    *Note: In a production environment, it is recommended to store keys in a `.env` file.*

4.  **Run the Application:**
    ```bash
    npm run dev
    ```

5.  **Open in Browser:**
    Click the link shown in the terminal (usually `http://localhost:5173`).

## 📁 Project Structure

```bash
weather-dashboard/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and fonts
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Entry point
│   ├── Weather.jsx      # Main application logic
│   └── Weather.css      # Component styling & responsiveness
├── index.html           # HTML template
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation