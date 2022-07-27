define({ "api": [
  {
    "type": "delete",
    "url": "/person",
    "title": "删除某个人",
    "group": "人员管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>人员id(params参数)</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "请求成功示例:",
          "content": "{\n  \"status\": 1,\n  \"msg\": \"删除成功！\",\n  \"data\": 1,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/api/users.js",
    "groupTitle": "人员管理",
    "name": "DeletePerson"
  },
  {
    "type": "post",
    "url": "/person",
    "title": "添加一个人",
    "group": "人员管理",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名字</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "请求成功示例:",
          "content": "{\n  \"status\": 1,\n  \"msg\": \"添加成功！\",\n  \"data\": {\n     \"id\": 2,\n     \"name\": \"wade\",\n     \"age\": 19\n   }\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/api/users.js",
    "groupTitle": "人员管理",
    "name": "PostPerson"
  },
  {
    "type": "put",
    "url": "/person",
    "title": "更新某个人",
    "group": "人员管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>人员id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>人员名字</p>"
          },
          {
            "group": "Parameter",
            "type": "age",
            "optional": false,
            "field": "age",
            "description": "<p>人员年龄</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "请求成功示例:",
          "content": "{\n  \"status\": 1,\n  \"msg\": \"更新成功！\",\n  \"data\": {\n     \"id\": 2,\n     \"name\": \"wade\",\n     \"age\": 19\n   }\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/api/users.js",
    "groupTitle": "人员管理",
    "name": "PutPerson"
  },
  {
    "type": "get",
    "url": "/person",
    "title": "获取某个人",
    "group": "人员管理",
    "name": "admin",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>人的唯一标识(query参数)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "请求成功示例:",
          "content": "{\n  \"status\": 1,\n  \"msg\": \"获取成功！\",\n  \"data\": {\n     \"id\": 2,\n     \"name\": \"wade\",\n     \"age\": 19\n   }\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/api/users.js",
    "groupTitle": "人员管理"
  },
  {
    "type": "get",
    "url": "/persons",
    "title": "获取所有人",
    "description": "<p>无需参数</p>",
    "name": "getAllPersons",
    "group": "人员管理",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "请求成功示例:",
          "content": "{\n  \"status\": 1,\n  \"msg\": \"获取成功！\",\n  \"data\": [\n    \t{\n       \"id\": 1,\n       \"name\": \"kobe\",\n       \"age\": 18\n    \t},\n    \t{\n       \"id\": 2,\n       \"name\": \"wade\",\n       \"age\": 19\n    \t}\n\t ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/api/users.js",
    "groupTitle": "人员管理"
  },
  {
    "type": "get",
    "url": "/test1",
    "title": "获取test1数据",
    "group": "测试批量请求",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "delay",
            "description": "<p>延迟时间(query参数)</p>"
          }
        ]
      }
    },
    "name": "test1",
    "version": "1.0.0",
    "filename": "routers/api/test.js",
    "groupTitle": "测试批量请求"
  },
  {
    "type": "get",
    "url": "/test2",
    "title": "获取test2数据",
    "group": "测试批量请求",
    "name": "test2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "delay",
            "description": "<p>延迟时间(query参数)</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routers/api/test.js",
    "groupTitle": "测试批量请求"
  },
  {
    "type": "get",
    "url": "/test3",
    "title": "获取test3数据",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "delay",
            "description": "<p>延迟时间(query参数)</p>"
          }
        ]
      }
    },
    "name": "test3",
    "group": "测试批量请求",
    "version": "1.0.0",
    "filename": "routers/api/test.js",
    "groupTitle": "测试批量请求"
  }
] });
