const express = require("express");
const path = require("path");
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.static(path.join(__dirname, "public"))); // Serve CSS, JS, images

// HTML routes
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "pages", "index.html")));
app.get("/catalog", (req, res) => res.sendFile(path.join(__dirname, "pages", "catalog.html")));
app.get("/signup", (req, res) => res.sendFile(path.join(__dirname, "pages", "signup.html")));
app.get("/signin", (req, res) => res.sendFile(path.join(__dirname, "pages", "signin.html")));

// API routes
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");

app.use("/api/users", usersRouter);
app.use("/api/books", booksRouter);

// 404 Page
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "pages", "404.html"));
});

// Start server
const port = 3000;
app.listen(port, () => console.log(`Server running on ${port}...`));