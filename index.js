import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Necessary for ES Modules to get directory path

app.use(cors());

// Since 'dist' is also in the root, you simply refer to it directly
app.use(express.static(path.join(__dirname, "src")));

// Handle all GET requests by serving 'index.html' from the 'dist' directory
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
