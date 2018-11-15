var express = require('express');
var router = express.Router();
var connection = require('../common/model.js').connection;

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM user',function(error,results,fields){
    if(error){
      console.log('查询数据表失败',error);
    }else{
      console.log('查询成功',results[0]);
      res.json(results[0]);
    }
  })
  // res.render('index', { title: 'Express' });
  
});

router.get('/getarticles', function(req, res, next) {
  connection.query('SELECT * FROM articles',function(error,results,fields){
    if(error){
      console.log('查询数据表失败',error);
    }else{
      console.log('查询成功',results);
      res.json(results);
    }
  })
  // res.render('index', { title: 'Express' });
  
});
router.post('/insertArticle',function(req,res,next){
  console.log(req.body);
  var sqlstr = 'insert into articles values(null,"'+req.body.title+'","'+req.body.imgsrc+'","'+req.body.content+'",'+req.body.time+','+req.body.like+','+req.body.watch+','+req.body.type+')';
  connection.query(sqlstr,function(err,results,field){
    if(err){
      console.log('新增文章失败',err);
    }else{
      console.log('新增文章成功',results);
      res.json(results);
    }
  });
})

//登录接口
router.post('/login',function(req,res,next){
  console.log(req.body);
  var sqlstr = 'select * from user where name="'+req.body.username+'" and password="'+req.body.pwd+'"';
  connection.query(sqlstr,function(err,results,field){
    // console.log(results);
    if(err){
      // console.log('服务器出现错误',err);
      res.json({status:2,text:'服务器内部错误，请稍后重试'});
    }else{
      if(results.length==0){
        // console.log('登录失败,用户名或密码不正确');
        res.json({status:0,text:'登录失败,用户名或密码不正确'});
      }else{
      	// console.log('登录成功',results);
        res.json({status:1,text:'登录成功'});
      }
     
    }
  })
})

module.exports = router;
