/*********************************************************/
//定义mongoose使用的Schema架构
//
/***********************************************************/

const express = require('express')
const bodyParser = require('body-parser')
const moment = require('moment')
const port = 3000
const mongoose = require('mongoose')
const _ = require('lodash')
const User = require('./js/user.js')


mongoose.connect('admin:Icon2020@mongodb://localhost:19000/admin', {
    useNewUrlParser: true
})

var app = express();
app.use(bodyParser.json());

app.post('/signup', (req, res) => {
    //lodash的_.pick使用
    //从一组{}里获取出想要的信息
    var body = _.pick(req.body, ['email', 'password', 'name', 'phone', 'studentID', 'department', 'lineID', 'roleID'])
})



app.listen(port, () => {
    console.log(moment().format('YYYY-MM-DD HH:mm:ss SSS Z A'));
    console.log("程序启动成功,监听在: http://localhost:${port}")
})