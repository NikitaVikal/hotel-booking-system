let rooms = [];

// Generate rooms
function generateRooms() {
  rooms = [];

  // Floors 1–9 (10 rooms each)
  for (let f = 1; f <= 9; f++) {
    for (let i = 1; i <= 10; i++) {
      rooms.push({
        number: f * 100 + i,
        floor: f,
        position: i,
        booked: false
      });
    }
  }

  // Floor 10 (7 rooms)
  for (let i = 1; i <= 7; i++) {
    rooms.push({
      number: 1000 + i,
      floor: 10,
      position: i,
      booked: false
    });
  }
}

// Render UI
function render() {
  const hotel = document.getElementById("hotel");
  hotel.innerHTML = "";

  for (let f = 1; f <= 10; f++) {
    let floorDiv = document.createElement("div");
    floorDiv.className = "floor";

    let floorRooms = rooms.filter(r => r.floor === f);

    floorRooms.forEach(room => {
      let div = document.createElement("div");
      div.className = "room";

      if (room.booked) div.classList.add("booked");
      else div.classList.add("available");

      if (room.selected) div.classList.add("selected");

      div.innerText = room.number;
      floorDiv.appendChild(div);
    });

    hotel.appendChild(floorDiv);
  }
}

// Random occupancy
function randomOccupancy() {
  rooms.forEach(r => {
    r.booked = Math.random() < 0.4;
    r.selected = false;
  });
  render();
}

// Reset
function reset() {
  rooms.forEach(r => {
    r.booked = false;
    r.selected = false;
  });
  document.getElementById("output").innerText = "";
  render();
}

// Travel time
function calculateTime(selected) {
  let min = selected[0];
  let max = selected[selected.length - 1];

  let horizontal = Math.abs(max.position - min.position);
  let vertical = Math.abs(max.floor - min.floor) * 2;

  return horizontal + vertical;
}

// Booking logic (simplified but correct)
function bookRooms() {
  let count = parseInt(document.getElementById("roomCount").value);
  if (!count || count < 1 || count > 5) {
    alert("Enter between 1–5 rooms");
    return;
  }

  rooms.forEach(r => r.selected = false);

  let bestSet = null;
  let minTime = Infinity;

  // Try each floor first
  for (let f = 1; f <= 10; f++) {
    let available = rooms.filter(r => r.floor === f && !r.booked);

    for (let i = 0; i <= available.length - count; i++) {
      let subset = available.slice(i, i + count);
      let time = calculateTime(subset);

      if (time < minTime) {
        minTime = time;
        bestSet = subset;
      }
    }
  }

  // If not found on single floor → try all rooms
  if (!bestSet) {
    let available = rooms.filter(r => !r.booked);

    for (let i = 0; i <= available.length - count; i++) {
      let subset = available.slice(i, i + count);
      let time = calculateTime(subset);

      if (time < minTime) {
        minTime = time;
        bestSet = subset;
      }
    }
  }

  if (!bestSet) {
    alert("Not enough rooms available");
    return;
  }

  bestSet.forEach(r => {
    r.booked = true;
    r.selected = true;
  });

  document.getElementById("output").innerText =
    "Booked Rooms: " +
    bestSet.map(r => r.number).join(", ") +
    " | Travel Time: " + minTime + " min";

  render();
}

// Init
generateRooms();
render();