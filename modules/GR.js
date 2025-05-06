const qr = require('qrcode');

let data = {
    "name": "UNKNOWN",
    "lastname":"UNKNOWN",
    "year": "-- -- --",
    "country": "nowhere",
    "disctyption": {
        "goal": "world",
        "plan": "being smart"
    }
    
}


let stJson = JSON.stringify(data);
qr.toString(stJson, {type: "utf8"}, function(err, code) {
     if (err) {
        return console.log("Error");
     } 
     console.log(code);
   
})    

