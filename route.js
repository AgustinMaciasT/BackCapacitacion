var express = require ('express')
var router = express.Router()
const {getBarra, getAgus} = require ('./controllers')

router.get('/',
    getBarra
  )
  
router.get('/agus', 
    getAgus
    )

module.exports = router