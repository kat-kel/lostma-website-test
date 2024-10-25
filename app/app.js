const express = require("express");
const app = express();
const router = express.Router();
const path = require("path")
const helmet = require("helmet");

const viewDir = path.join(__dirname, "views")
  
app.use("/",router);

app.use(
    helmet.contentSecurityPolicy({
      directives: {
        "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
      },
    }),
  );
  
router.get("/",function(req, res){
  res.sendFile(path.join(viewDir, "index.html"));
});

app.use("*",function(req, res){
  res.send("Error 404: Not Found!");
});
  
app.listen(5173,function(){
  console.log("Server running at Port 5173");
});