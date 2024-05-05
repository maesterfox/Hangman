import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000; // Use the port assigned by Render or default to 3000

// Correct way to get __dirname in ES module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
// Serve static files from 'dist'
app.use(express.static(path.join(__dirname, "dist")));

// Handle all GET requests by serving index.html, important for a SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`); // Bind to all network interfaces
});
