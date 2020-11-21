let express = require('express')
let router = express.Router()
let GenreController = require('../controllers/GenreController')
let AuthMidleware = require('../midleware/Auth')
const jwt = require('jsonwebtoken');

router.get('/', GenreController.GetAllGenre)
router.post('/', GenreController.CreateGenre)
router.put('/:id', GenreController.UpdateGenre)
router.delete('/:id', GenreController.DeleteGenre)

module.exports = router