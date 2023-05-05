import express from "express";

const PORT = 3000

const app = express();
app.get('/', (req, res, next) => {
  res.send(`
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>example-sourcemap</title>
    </head>
    <body>
      <h1>example-sourcemap</h1>
      <script src="./index.js"></script>
    </body>
    </html>
  `)
  next()
})
app.use(express.static('./dist/', {}))

app.listen(PORT, () => console.log(`=== http://localhost:${PORT}/ ===`));
