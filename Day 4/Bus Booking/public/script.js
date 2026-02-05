const seatGrid = document.getElementById("seatGrid");

// Load already booked seats
let bookedSeats = JSON.parse(localStorage.getItem("bookedSeats")) || [];

// Load all tickets
let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

/* ---------- CREATE SEATS ---------- */
for (let i = 1; i <= 20; i++) {
  let seat = document.createElement("div");
  seat.innerText = i;
  seat.className = "seat";

  if (bookedSeats.includes(i)) {
    seat.classList.add("booked");
  }

  seat.onclick = () => {
    if (seat.classList.contains("booked")) return;

    document.querySelectorAll(".seat").forEach(s =>
      s.classList.remove("selected")
    );

    seat.classList.add("selected");
    document.getElementById("seat").value = i;
  };

  seatGrid.appendChild(seat);
}

/* ---------- BOOK TICKET ---------- */
async function bookTicket() {
  let ticket = {
    from: document.getElementById("from").value,
    to: document.getElementById("to").value,
    date: document.getElementById("date").value,
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    gender: document.getElementById("gender").value,
    phone: document.getElementById("phone").value,
    seat: document.getElementById("seat").value
  };

  const response = await fetch("/book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(ticket)
  });

  const result = await response.json();
  alert(result.message);

  location.reload();
}

/* ---------- VIEW ALL ---------- */
function viewBookings() {
  window.location.href = "details.html";
}
