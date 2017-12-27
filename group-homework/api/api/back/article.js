var express = require('express');
var router = express.Router();
var dbquery = require("../../config/connect_db")
var generateUUID = require("../common/Unique")
var creatTime = require("../common/creatTime")

const {sqlHandle, readHandle, searchHandle, query} = dbquery
// 获取一级二级分类

router.get("/class", (req, res, next) => {
    const sqlOneClass = `select * from one_class`
    const sqlTwoClass = `select * from two_class`

    const asyncGetClass = async function () {
        const oneData = await readHandle(sqlOneClass)
        const twoData = await readHandle(sqlTwoClass)
        return {oneData, twoData}
    }
    asyncGetClass().then((data) => {
        console.log(data)
        res.send({code: "1211", msg: "获取类名成功", data})
    }).catch((err) => {
        res.send({code: "1212", msg: "获取类名失败"})
    })

})

//获取文章列表 删除文章
router.post("/deleteArticle", (req, res, next) => {
    let deleteSql = `delete from ${req.body.enname_one} where id='${req.body.id}'`
    var updateArticalNum = `update two_class set article_num=article_num-1 where id='${req.body.twoId}'`
    console.log(deleteSql, updateArticalNum)
    const asyncDeleteArticle = async function () {
        await sqlHandle(deleteSql)
        await sqlHandle(updateArticalNum)
        return
    }
    asyncDeleteArticle().then((data) => {
        res.send({code: "1225", msg: "删除文章成功"})
    }).catch((err) => {
        res.send({code: "1226", msg: "删除文章失败"})
    })

})

module.exports = router