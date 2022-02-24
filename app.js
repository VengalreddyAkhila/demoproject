const app = require("express")();

const PORT = process.env.PORT || 3000;



app.get("/dev/exp2", (req, res) => {

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

  <div id="main">Call Response</div>

  <script>

  let element = document.getElementById('main');
  axios.get('https://harisha.herokuapp.com/test')
  .then(response => {
      console.log(response.data);
      element.innerHTML = response.data;
  })
            
  </script>
  <iframe src="https://harisha.herokuapp.com">
  </iframe>
  
  </body>
  </html>`)
 
});
app.get("/dev/exp", (req, res) => {

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
    <h2>Bipp dashboard</h2>
    <div class="dashboard">
        <div id='container'></div>
    </div>
  </div>
  <script>

  const width = window.innerWidth;
  const height = window.innerHeight;

      //let url = "https://hdpqvz.app.bippanalytics.com/embed/63dd8226-6c15-4002-8453-5e341c74d433?id=5220cbd6-95d8-47ed-9b1e-23e6d399e6b2&cid=c72f100203dc452b932af466efdaa342.hdpqvz.app.bippanalytics.com&secret=D01YojC4wB4wHxO2CNEMA4Yy2y6OWGEz63kRy36rVJE3dBQi";
      // let url = "https://hdpqvz.app.bippanalytics.com/embed/b4ad3659-7d2f-4b99-b9f4-d66324c6f9dd?id=5220cbd6-95d8-47ed-9b1e-23e6d399e6b2&cid=c72f100203dc452b932af466efdaa342.hdpqvz.app.bippanalytics.com&secret=D01YojC4wB4wHxO2CNEMA4Yy2y6OWGEz63kRy36rVJE3dBQi"
      let url = "https://gumhpe.bipp-dev.bippanalytics.com/embed/9969417f-1359-47b3-84c3-b3f25f815ee4?id=caa6888e-5b89-497e-979c-cc00397e79cd&cid=ca3c81fb583a490cafdae78770dd9d18.gumhpe.bipp-dev.bippanalytics.com&secret=x@dbyDcBYirRd28ntppyMQM3AU4wJc!3DGxR3A7DZHDmXvPU"
      let config = { id : 'container', width: "100%", height: height, style: 'border:none;' }
      
      let bipp = new Bipp({debug: 1});
      bipp.load(url, config);
  </script>
  
  </body>
  </html>`)
 
});

app.listen(port, function() {
  console.log("Running node server", "on port " + port);
});