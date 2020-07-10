const moment = require('moment')
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
        type: Data,
        default: moment().format('YYYY-MM-DD HH:mm:ss SSS Z A')
    },
    studentID: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    lineID: {
        type: String,
    },
    roleID: {
        type: String,
        required: true
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]

})

UserSchema.methods.generateToken = function () {
    const user = this;
    const access = user.roleID;
    const token = jwt.sign({
        _id: user._id.toHexstring(),
        access
    }, 'abc123').toString();
    user.tokens.push(access, token)
    return user.save().then(() => {
        return token
    })
}

UserSchema.pre('save', function (next) {
    const user = this;
    if (user.isModified('password')) {
        bcrypt.hash(user.password, 5).then(hash => {
            user.password = hash;
            next();
        })

    } else {
        next();
    }
})

var User = mongoose.model('User', UserSchema);

module.exports = {
    User
}