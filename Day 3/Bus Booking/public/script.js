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
function bookTicket() {
  let seatNo = Number(document.getElementById("seat").value);

  if (!seatNo) {
    alert("Please select a seat");
    return;
  }

  let ticket = {
    from: document.getElementById("from").value,
    to: document.getElementById("to").value,
    date: document.getElementById("date").value,
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    gender: document.getElementById("gender").value,
    phone: document.getElementById("phone").value,
    seat: seatNo
  };

  // SAVE SEAT
  bookedSeats.push(seatNo);
  localStorage.setItem("bookedSeats", JSON.stringify(bookedSeats));

  // SAVE TICKET DETAILS (MULTIPLE)
  tickets.push(ticket);
  localStorage.setItem("tickets", JSON.stringify(tickets));

  alert("Ticket Booked Successfully 🎫");

  location.reload();
}

/* ---------- VIEW ALL ---------- */
function viewBookings() {
  window.location.href = "details.html";
}
