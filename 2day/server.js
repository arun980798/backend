const express = require('express'); //yaha se server inport karta h 


const app = express(); //ye  servver ko banata h 


app.get('/', (req, res) => {
    res.send('Hello, o batao  World!');
})// this is the api which work  on the "/" 

app.get('/appo', (req, res) => {
    res.send('hii , o batao  World!');
})// this is the api which work  on the "/" 
let aoo  = 0;
app.listen(3000, () => {
aoo++;
    console.log('Server is running on port 3000'); // ye code terminal  pe print hoga
});// ye  app ko port dets h or run karta h 
