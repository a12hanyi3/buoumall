var express = require('express');
var router = express.Router();
var User = require('../model/user');

/* GET users listing. */
router.post('/login', function(req, res) {
  // console.log(req.body)
	  User.find({
	  	username:req.body.username,
      password:req.body.password
	  },function(error,info){
	  	if(!error){
        console.log(req.body.username)
        console.log(req.body.password)
	  		if(info.length==0){
	  			res.send({result:false,message:"用户名密码错误"});
	  		}else{
	  			req.session.buoumall=info[0];
	  			res.send({result:true,message:"登陆成功"});
	  		}
	  	}else{
        console.log(error)
      }
	})
})

router.post('/register', function(req, res) {
  User.find({
  	username:req.body.username,
  },function(error,info){
  	if(!error){
  		if(info.length==0){
  			  User.create({
  			  	username:req.body.username,
  			  	password:req.body.password,
  			  },function(error,info){
  			  	if(!error){
  			  		res.send({result:true,message:"注册成功"});
  			  }
  			})
  		}else{
  			res.send({result:true,message:"用户名已存在"});
  		}
  	}
  })
})
module.exports = router;
