const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mysql2 = require('mysql2')
const myConnection = require('express-myconnection')

const app = express()

const rutaAlumno = require('./rutas/alumno')
const { urlencoded } = require('express')


app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'plantillas'))

app.use(morgan('dev'))
app.use(myConnection(mysql2, {
	host: 'localhost',
	user: 'root',
	password: 'n0m3l0',
	port: '3306',
	database: 'crude_js'
}, 'single'))
app.use(express.urlencoded({extended: false}))

app.use('/', rutaAlumno)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
	console.log('Server on port ' + app.get('port'))
})