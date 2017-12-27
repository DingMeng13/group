var express = require('express');
var router = express.Router();
var dbquery = require("../../config/connect_db")
var generateUUID = require("../common/Unique")
var creatTime = require("../common/creatTime")

const {sqlHandle, readHandle, searchHandle, searchHandleNormal, query} = dbquery

// 获取一级分类列表
router.get("/getOneClass", (req, res, next) => {
  const sql = `select * from one_class`
  readHandle(sql).then((data) => {
    res.send({code: "1121", msg: "获取一级类名成功", data})
  }).catch((err) => {
    res.send({code: "1122", msg: "获取一级类名失败"})
  })
})

// 获取二级分类列表
router.get("/getTwoClass", (req, res, next) => {
  const sql = `select * from two_class`
  readHandle(sql).then((data) => {
    res.send({code: "1131", msg: "获取二级类名成功", data})
  }).catch((err) => {
    res.send({code: "1132", msg: "获取二级类名失败"})
  })
})

// 删除一级类名
router.post("/deleteClassOne", (req, res, next) => {

  const sqlone = `delete from one_class where id='${req.body.id}'`
  const sqltwo = `delete from two_class where parent_id='${req.body.id}'`
  const sqlarticle = `DROP TABLE ${req.body.enname_one}`

  const asyncDeleteOne = async function (params) {
    const deleteOne = await sqlHandle(sqlone)
    const deleteTwo = await sqlHandle(sqltwo)
    const dropTable = await query(sqlarticle)
    return "ok"
  }
  asyncDeleteOne().then((data) => {
    res.send({code: "1141", msg: "一级分类删除成功"})
  }).catch((err) => {
    res.send({code: "1142", msg: "一级分类删除失败", err})
  })

})

// 删除二级类名 
// 修改一级类名 
// 修改二级类名
module.exports = router