let express = require('express');
let router = express.Router();

//初始化一个用于保存人的数组
let personArr = [
	{id:1,name:'kobe',age:18},
	{id:2,name:'wade',age:19},
]

/**
 * @api {get} /test1 获取test1数据
 * @apiGroup 测试批量请求
 * @apiParam {number} delay 延迟时间(query参数)
 * @apiName test1
 * @apiVersion 1.0.0
 */
router.get('/test1',(req,res)=>{
	const delay = req.query.delay || 0
	setTimeout(()=>{
		res.send('我是test1数据')
	},delay)
})
/**
 * @api {get} /test2 获取test2数据
 * @apiGroup 测试批量请求
 * @apiName test2
 * @apiParam {number} delay 延迟时间(query参数)
 * @apiVersion 1.0.0
 */
router.get('/test2',(req,res)=>{
	const delay = req.query.delay || 0
	setTimeout(()=>{
		res.send('我是test2数据')
	},delay)
})
/**
 * @api {get} /test3 获取test3数据
 * @apiParam {number} delay 延迟时间(query参数)
 * @apiName test3
 * @apiGroup 测试批量请求
 * @apiVersion 1.0.0
 */
router.get('/test3',(req,res)=>{
	const delay = req.query.delay || 0
	setTimeout(()=>{
		res.send('我是test3数据')
	},delay)
})

module.exports = router;