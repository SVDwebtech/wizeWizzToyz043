import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname,'public')));

// Home Route
app.get('/', (req, res) => {
      const welcome = "Hello World";
      res.render('home', {data: welcome});
});

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});