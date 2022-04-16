const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('index');
})

app.use('/static', express.static('static'))

app.listen(3000)