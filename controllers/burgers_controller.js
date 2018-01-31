var express = require("express");
var router = express.Router();
var burger = require('../models/index.js');



router.get('/', function(req, res) {
	burger.burgers.findAll({}).then(function(burgerList){
		// console.log(burgerList);
        return res.render('index', {burgerList})
    })
});

router.post('/newburger', function(req, res) {
	var newBurger = {
		burger_name: req.body.burger_name
	}

	burger.burgers.create(newBurger).then(burger => {
            res.redirect('/');
        })
});


router.post('/devoured', function(req, res) {
    burger.burgers.findOne({where: {item_id: req.body.devoured}}).then(function(test) {
        test.update({
            devoured: 1
        }).then(task => {
            res.redirect('/');
        })
    })
})







// router.post('/devoured', function(req, res) {
// 	var devouredState = {
// 		item_id: req.body.devoured,
// 	}
// 	burger.burgers.update({where: {item_id: req.body.devoured}})
// 	console.log(devouredState);
// 	res.redirect('/');
// })

module.exports = router;



