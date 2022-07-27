let express = require('express');
let router = express.Router();

//初始化一个用于保存人的数组
let personArr = [
	{id:1,name:'kobe',age:18},
	{id:2,name:'wade',age:19},
]

/**
 * @api {get} /person 获取某个人
 * @apiGroup 人员管理
 * @apiName admin
 * @apiVersion 1.0.0
 * @apiParam {string} id 人的唯一标识(query参数)
 * @apiSuccessExample {json} 请求成功示例:
 * {
 *   "status": 1,
 *   "msg": "获取成功！",
 *   "data": {
 *      "id": 2,
 *      "name": "wade",
 *      "age": 19
 *    }
 * 	}
 *
 */
//根据id获取一个人的信息---- 参数：id ------参数类型：query参数
router.get('/person',(req,res)=>{
	const {id} = req.query
	if(!id) {
		res.send({status:0,msg:'id不能为空',data:null})
		return
	}
	npersonArr = personArr.filter((item)=>{
		return item.id === id*1
	})
	if(npersonArr.length == 0){
		res.send({status:1,"msg": "未能查到此人",data:npersonArr[0]})
	}else{
		res.send({status:1,"msg": "获取成功！",data:npersonArr[0]})
	}
})


/**
 * @api {post} /person 添加一个人
 * @apiGroup 人员管理
 * @apiVersion 1.0.0
 * @apiParam {string} name 名字
 * @apiParam {string} age 年龄
 * @apiSuccessExample {json} 请求成功示例:
 * {
 *   "status": 1,
 *   "msg": "添加成功！",
 *   "data": {
 *      "id": 2,
 *      "name": "wade",
 *      "age": 19
 *    }
 * 	}
 *
 */
//添加一个人-----参数：name,age	-----参数类型：请求体参数
router.post('/person',(req,res)=>{
	const {name,age} = req.body
	if(!name || !age){
		res.send({status:0,msg:'添加失败，名字和年龄均不能为空',data:null})
		return
	}
	personArr.push({id:personArr.length+1,name,age:age*1})
	res.send({status:1,msg: "添加成功！",data:personArr.reverse()[0]})
})

/**
 * @api {put} /person 更新某个人
 * @apiGroup 人员管理
 * @apiParam {string} id 人员id
 * @apiParam {string} name 人员名字
 * @apiParam {age} age 人员年龄
 * @apiVersion 1.0.0
 * @apiSuccessExample {json} 请求成功示例:
 * {
 *   "status": 1,
 *   "msg": "更新成功！",
 *   "data": {
 *      "id": 2,
 *      "name": "wade",
 *      "age": 19
 *    }
 * 	}
 *
 */
//更新一个人-----参数：id,name,age-----参数类型：请求体参数
router.put('/person',(req,res)=>{
	const {id,name,age} = req.body
	let person = personArr.find((item)=>{return item.id === id*1})
	if(person){
		person.name = name
		person.age = age
		res.send({status:1,msg: "更新成功！",data:person})
	}else{
		res.send({status:0,msg:'更新出错，未找到对应id',data:null})
	}
})

/**
 * @api {delete} /person 删除某个人
 * @apiGroup 人员管理
 * @apiParam {string} id 人员id(params参数)
 * @apiVersion 1.0.0
 * @apiSuccessExample {json} 请求成功示例:
 * {
 *   "status": 1,
 *   "msg": "删除成功！",
 *   "data": 1,
 * }
 *
 */
//删除一个人-----参数：id-----参数类型：params参数
router.delete('/person/:id',(req,res)=>{
	const {id} = req.params
	nPersonArr = personArr.filter((item)=>{
		return item.id !== id*1
	})
	if(nPersonArr.length !== personArr.length ){
		personArr = nPersonArr
		res.send({status:1,msg:'删除成功',data:id})
	}else{
		res.send({status:0,msg:'删除失败',data:null})
	}
})

/**
 * @api {get} /persons 获取所有人
 * @apiDescription 无需参数
 * @apiName getAllPersons
 * @apiGroup 人员管理
 * @apiVersion 1.0.0
 * @apiSuccessExample {json} 请求成功示例:
 * {
 *   "status": 1,
 *   "msg": "获取成功！",
 *   "data": [
 *     	{
 *        "id": 1,
 *        "name": "kobe",
 *        "age": 18
 *     	},
 *     	{
 *        "id": 2,
 *        "name": "wade",
 *        "age": 19
 *     	}
 * 	 ]
 * }
 *
 */
//获取所有人信息-----无需参数
router.get('/persons',(req,res)=>{
	res.send({status:1,msg: "获取成功",data:personArr.sort()})
})

module.exports = router;