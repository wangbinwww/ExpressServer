/*********************************************************/
// 最简单的一个伺服器
// node server.js 启动伺服器
// 可访问端口

// get方式:
// url:  http://127.0.0.1:3000

// post方式
// url:  http://127.0.0.1:3000
// 带json格式参数
// {
//     "name":"张三",
//     "age":"18"
// }
/***********************************************************/

const express = require('express')
const bodyParser = require('body-parser')
const moment = require('moment')
const moment_timezone = require('moment-timezone')
const port = 3000
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const _ = require('lodash')
const jwt = require('jsonwebtoken')
const {
    ObjectID
} = require('mongodb')

//建立一个 Schema(架构 模式) 类结构体的东西

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        //是否需要
        required: true,
        //去掉空格
        trim: true,
        //最小单位
        minlength: 1,
        //是否可以重复
        unique: true,
        //验证器  是否是email
        validate: {
            validator: (value) => {
                validator.isEmil(value)
            },
            message: `${value}不是邮件格式`
        }

    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    phone: {
        type: String,
        required: true,
        minlength: 11
    },
    time: {
        type: String,
        required: true,
        minlength: 11
    }

})

var app = express();
app.use(bodyParser.json());




app.listen(port, () => {
    console.log(moment().format('YYYY-MM-DD HH:mm:ss SSS Z A'));
    console.log(`程序启动成功,监听在: http://localhost:${port} `)
})