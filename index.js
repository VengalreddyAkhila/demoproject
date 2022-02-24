
const express = require("express");
const bodyParser = require("body-parser");
let app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

let port = process.env.PORT || 9000;

app.get("/", (req, res) => {

  res.send(`<!DOCTYPE html>
  <html>
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            .main {
                margin: 30px;
            }
    
        </style>
      </head>
  <body>
      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      <script src="https://unpkg.com/bipp"></script>
  
  <div class="main">
  <h1>Bipp Platform</h1>
  <h2>Dashboard</h2>

    <div class="dashboard">
        <div id='container'></div>
    </div>
  </div>
  <script>

      const width = window.innerWidth;
      const height = window.innerHeight;

       let url = "https://ketaki-desale.app.bipp.io/embed/434560d5-d81e-4ac1-8953-879609d17217?id=6e0f6e85-c259-4634-abce-ca109bfc60ff&cid=aa6a7b1ddeb44c0b83de98c33c65e1ea.ketaki-desale.app.bipp.io&secret=x1kYW1MRpp0c9YfHzAEctxhtgGpxJhAFAof9i5LJesvsK@bc"
      let config = { id : 'container', width: "100%", height: height, style: 'border:none;' }
      
      let bipp = new Bipp();
      bipp.load(url, config);
  </script>
  
  </body>
  </html>`)
 
});

app.listen(port, function() {
  console.log("Running node server", "on port " + port);
});
