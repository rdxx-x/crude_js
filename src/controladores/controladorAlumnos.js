const { response } = require("express")

const controlador = {}

controlador.listar = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('CREATE DATABASE IF NOT EXISTS crude_js;')
        conn.query('USE crude_js;')
        conn.query('CREATE TABLE IF NOT EXISTS alumno (' +
            'boleta VARCHAR(10) NOT NULL PRIMARY KEY,' +
            'nombre VARCHAR(50) NOT NULL,' +
            'grupo VARCHAR(5) NOT NULL,' +
            'telefono VARCHAR(15),' +
            'correo VARCHAR(30)' +
            ');')
        conn.query('SELECT * FROM alumno', (err, alumnos) => {
            if (err) {
                res.json(err)
            }
            res.render('alumnos', {
                data: alumnos
            })
        })
    })
}

controlador.agregar = (req, res) => {
    res.render('guardar_alumno')
}

controlador.guardar = (req, res) => {
    const data = req.body

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO alumno set ?', [data], (err, alumno) => {
            res.redirect('/')
        })
    })
}

controlador.editar = (req, res) => {
    const boleta = req.params.boleta

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM alumno WHERE boleta = ?', [boleta], (err, alumno) => {
            res.render('editar_alumno', {
                data: alumno[0]
            })
        })
    })
}

controlador.actualizar = (req, res) => {
    const boleta = req.params.boleta
    const nuevoAlumno = req.body
    console.log(nuevoAlumno)

    req.getConnection((err, conn) => {
        conn.query('UPDATE alumno set ? WHERE boleta = ?', [nuevoAlumno, boleta], (err, rows) => {
            res.redirect('/')
        })
    })
}

controlador.eliminar = (req, res) => {
    const boleta = req.params.boleta

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM alumno WHERE boleta =  ?', [boleta], (err, rows) => {
            res.redirect('/')
        })
    })
}

module.exports = controlador