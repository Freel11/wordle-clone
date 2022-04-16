const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
	res.render('index');
})

app.use('/static', express.static('static'))

app.listen(app.get('port'), () => console.log(`Node server listening on port ${app.get('port')}!`))