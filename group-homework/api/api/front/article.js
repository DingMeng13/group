var dbquery = require('../../config/db_connect')
var express = require("express")
var router = express.Router()
var generateUUID = require("../common/Unique")
var creatTime = require("../common/creatTime")
const moment = require('moment'); //数据库时间转js时间格式
const {sqlHandle, readHandle, searchHandle, query} = dbquery;

router.get("/getNav", function (req, res, next) {
    var sqlone = "select * from one_class"
    var sqltwo = "select * from two_class"
    const asyncGetClass = async function () {
        let oneClass = await readHandle(sqlone)
        let twoClass = await readHandle(sqltwo)

        return {oneClass, twoClass}
    }

    asyncGetClass().then((data) => {
        let resdata = []
        const {oneClass, twoClass} = data
        oneClass.forEach(function (i) {
            let everydata = {
                onedata: i,
                twodata: []
            }
            twoClass.forEach(function (j) {
                if (i.id == j.parent_id) {
                    everydata
                        .twodata
                        .push(j)
                }
            })

            resdata.push(everydata)
        })
        console.log(resdata)
        res.send({code: "6010", data: resdata, msg: "查询成功"})
    }).catch((err) => {
        res.send({code: "6011", data: null, msg: "查询失败"})
    })
})


module.exports = router;

