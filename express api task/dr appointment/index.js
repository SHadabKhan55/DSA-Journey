const express = require("express");
const app = express();

app.use(express.json());

// Doctors Data
const doctors = [
  {
    id: 1,
    name: "Dr. Ahmed",
    specialization: "Cardiologist",
  },
  {
    id: 2,
    name: "Dr. Sara",
    specialization: "Dentist",
  },
];

// Appointments Data
const appointments = [
  {
    pName: "Ali",
    dId: 1,
    date: "2026-06-30",
    time: "10:00",
  },
];

// Book Appointment API
app.post("/appointments", (req, res) => {
  const { pName, dId, date, time } = req.body;

  // Check required fields
  if (!pName || !dId || !date || !time) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  // Check doctor exists
  const doctor = doctors.find((d) => d.id === dId);

  if (!doctor) {
    return res.status(404).json({
      message: "Doctor not found",
    });
  }

  // Check doctor availability
  const alreadyBooked = appointments.find(
    (appointment) =>
      appointment.dId === dId &&
      appointment.date === date &&
      appointment.time === time
  );

  if (alreadyBooked) {
    return res.status(400).json({
      message: "Doctor is not available at this date and time",
    });
  }

  // Create appointment
  const newAppointment = {
    pName,
    dId,
    date,
    time,
  };

  appointments.push(newAppointment);

  res.status(201).json({
    message: "Appointment booked successfully",
    appointment: newAppointment,
  });
});

// Get all appointments
app.get("/appointments", (req, res) => {
  res.json(appointments);
});

app.listen(100, () => {
  console.log("Server running on port 3000");
});