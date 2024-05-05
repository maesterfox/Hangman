import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Correct way to get __dirname in ES module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
// Since 'dist' is at the root, adjust path accordingly
app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.get("*", (req, res) => {
  // Ensure the path to 'index.html' also reflects 'dist' being at the root
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
