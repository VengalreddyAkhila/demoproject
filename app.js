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

app.listen(PORT, () =>{
    console.log(`App up at port ${PORT}`);
});