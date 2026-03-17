# 🏨 Hotel Room Reservation System

## 📌 Overview
This project is a web-based hotel room reservation system that intelligently assigns rooms based on proximity and minimum travel time.

It follows specific booking rules such as prioritizing same-floor allocation and minimizing combined horizontal and vertical travel time.

---

## 🚀 Features
- Book up to 5 rooms at a time
- Smart room allocation algorithm
- Same-floor priority booking
- Minimum travel time calculation
- Visual representation of all 97 rooms
- Random occupancy generator
- Reset booking functionality

---

## 🧠 Booking Logic
1. Priority is given to rooms on the same floor.
2. If sufficient rooms are not available:
   - Rooms are selected across floors
   - Selection minimizes total travel time
3. Travel time includes:
   - Horizontal movement (1 min per room)
   - Vertical movement (2 min per floor)

---

## 🏗️ Hotel Structure
- Floors 1–9: 10 rooms each (101–110, 201–210, etc.)
- Floor 10: 7 rooms (1001–1007)
- Rooms are arranged left to right
- Staircase/lift located on the left side

---

## 🛠️ Tech Stack
- HTML
- CSS
- JavaScript

---

## 📷 UI Legend
- 🟩 Available Rooms
- 🟥 Booked Rooms
- 🟦 Selected Rooms

---

## ▶️ How to Run
1. Download or clone the repository
2. Open `index.html` in your browser

---

## 🌐 Live Demo
[(Add your GitHub Pages link here)](https://nikitavikal.github.io/hotel-booking-system/)

---

## 📂 Repository
[(Add your GitHub repo link here)
](https://github.com/nikitavikal/hotel-booking-system)
---

## ✍️ Author
Nikita
