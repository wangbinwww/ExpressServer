/*
最简单的一个伺服器
node server.js 启动伺服器
可访问端口

get方式:
url:  http://127.0.0.1:3000

post方式
url:  http://127.0.0.1:3000
带json格式参数
{
    "name": "张三",
    "age": "18"
}
*/

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

var app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('收到GET请求:');
    console.log(moment().format('YYYY-MM-DD HH:mm:ss SSS Z A'));
    res.status(200).json({
        message: "欢迎访问 GET API !"
    })
})

app.post('/', function (req, res) {
    const person = {
        name: req.body.name,
        age: req.body.age
    }
    console.log('收到post请求:');
    console.log(req.body);
    console.log(moment().format('YYYY-MM-DD HH:mm:ss SSS Z A'));
    //res.send('Got a POST request')
    res.status(200).json({
        message: "欢迎访问 POST API !"
    })
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
    console.log(moment().format('YYYY-MM-DD HH:mm:ss SSS Z A'));
    console.log(`程序启动成功,监听在: http://localhost:${port} `)
})