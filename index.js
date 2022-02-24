
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
    <h2>Company Website</h2>
    <h2>Retail Sales Dashboard</h2>
    <h3>Bipp</h3>
    <div class="dashboard">
        <div id='container'></div>
    </div>
  </div>
  <script>

      const width = window.innerWidth;
      const height = window.innerHeight;

       let url = "https://demo-bipp.herokuapp.com/"
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
