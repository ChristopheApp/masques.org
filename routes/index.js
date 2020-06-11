var express = require('express');
var router = express.Router();

let articleModel = require('../models/articles');
let userModel = require('../models/user')



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


// route qui ajoute un nouvel article créé par le fabricant

router.post('/add-article/:token', async function (req, res, next) {
  let user = await userModel.findOne({token: req.params.token})

  console.log(req.params.token);
  console.log(req.body);
  let article;
  let result = false;
  let date = new Date();

  let newArticle = new articleModel({
    description: req.body.description,
    priceUnit: req.body.priceUnit,
    stock: req.body.stock,
    colors: req.body.colors,
    material: req.body.matiere,
    model: req.body.model,
    img: req.body.image,
    quality: req.body.quality,
    date_insert: date,
    sellout: false,
    sellerId: user._id

  });
  article = await newArticle.save();

  user.articles.push(article);
  await user.save();

  if(article.stock) {
    result = true;
  }

  res.json({ article, result });
});



router.get('/article-list', async function(req, res, next) {

  var articles = await articleModel.find()
  let sellers = [];
  for(let i=0; i<articles.length; i++){
    let user = await userModel.findById(articles[i].sellerId);
    console.log(articles[i].sellerId)
    sellers.push(user);
  }
  console.log(sellers)
 

  res.json({articles, sellers});
});

router.get('/articleId/:id', async function(req, res){
  let article = await articleModel.findById(req.params.id);
  let seller = await userModel.findById(article.sellerId)
  console.log(article);
  console.log(seller);
  res.json({article, seller});
});

module.exports = router;