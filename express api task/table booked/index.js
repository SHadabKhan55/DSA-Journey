const express = require("express");
const app = express();

app.use(express.json());

const tables = [
  { id: 1, seats: 2, booked: false },
  { id: 2, seats: 4, booked: false },
  { id: 3, seats: 6, booked: true }
];

// Get All Tables
app.get("/tables", (req, res) => {
  res.json(tables);
});

// Book Table
app.post("/tables/book", (req, res) => {
  const { tableId } = req.body;

  const table = tables.find(t => t.id === tableId);

  if (!table) {
    return res.status(404).json({
      message: "Table not found"
    });
  }

  if (table.booked) {
    return res.status(400).json({
      message: "Table is already booked"
    });
  }

  table.booked = true;

  res.json({
    message: "Table booked successfully",
    table
  });
});

// Cancel Booking
app.put("/tables/cancel", (req, res) => {
  const { tableId } = req.body;

  const table = tables.find(t => t.id === tableId);

  if (!table) {
    return res.status(404).json({
      message: "Table not found"
    });
  }

  if (!table.booked) {
    return res.status(400).json({
      message: "This table is not booked"
    });
  }

  table.booked = false;

  res.json({
    message: "Booking cancelled successfully",
    table
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});