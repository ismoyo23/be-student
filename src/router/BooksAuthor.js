let express = require('express')
let router = express.Router()
let AuthorController = require('../controllers/AuthorController')
let AuthMidleware = require('../midleware/Auth')

router.get('/', AuthorController.GetAllAuthor)
router.post('/', AuthorController.CreateAuthor)
router.put('/:id', AuthorController.UpdateAuthor)
router.delete('/:id', AuthorController.DeleteAuthor)

module.exports = router