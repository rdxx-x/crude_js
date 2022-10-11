const express = require('express')
const router = express.Router()

const controladorAlumno = require('../controladores/controladorAlumnos')

router.get('/', controladorAlumno.listar)
router.post('/add', controladorAlumno.agregar)
router.post('/save', controladorAlumno.guardar)
router.get('/delete/:boleta', controladorAlumno.eliminar)
router.get('/update/:boleta', controladorAlumno.editar)
router.post('/save/:boleta', controladorAlumno.actualizar)

module.exports = router