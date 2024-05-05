import express from "express";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000; // Render sets the PORT environment variable

app.use(cors());

// Serve static files from the Vite build output directory
app.use(express.static("dist"));

// Handle SPA routing by returning index.html for all GET requests
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
