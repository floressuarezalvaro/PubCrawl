const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// this is where I would put them
// app.use("/users", require("./routes/userRoutes"));
app.use("/bars", require("./routes/apiRoutes"));

app.use("/users", require("./routes/userRoutes"));

// app.use("/register", require("./routes/confirmRoute"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost/PubCrawl", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`connected to http://localhost:${PORT}`));
