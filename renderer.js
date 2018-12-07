const express = require('express');
const app = express();


// ========== Main ========== //
console.log("Main event starts here.");
helloWorld("ShadowWolf");
// ========== End ========== //


// ========== Functions definition ========== //
function helloWorld(name)
{
    console.log("Hello,", name);
}
// ========== End ========== //


// ========== Express server ========== //
app.get('/', function(req, res) {
    res.send("Your server is running.");
});
app.listen(3000, function() {
    console.log('Server is running on port 3000.');
});
// ========== End ========== //

