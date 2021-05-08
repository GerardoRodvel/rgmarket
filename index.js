const express = require('express');
const app = express();
require('dotenv').config()
//require('dotenv').config()

app.use(express.static(__dirname + '/public/'));

app.listen(process.env.PORT || 3000, ()=> {
	console.log(`Servidor web escuchando en http://${process.env.HOST}:${process.env.PORT}`);
});


