//读JSON文件

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./json/jsonDB.json')
const db = low(adapter, {
    autosave: true, // automatically save database on change (default: true)
    async: true, // asynchronous write (default: true)
    serialize: (data) => JSON.stringify(data),
    deserialize: (data) => JSON.parse(data)
})


var JsonData = {
    "ID": 6,
    "tianjin": {
        "NowURL": "https://api.seniverse.com/v3/weather/now.json?key=m6pg9iohdag408lr&location=tianjin&language=zh-Hans&unit=c",
        "Day3URL": "https://api.seniverse.com/v3/weather/daily.json?key=m6pg9iohdag408lr&location=tianjin&language=zh-Hans&unit=c&start=0&days=3"
    }
}

//writeJsonConfig("posts", JsonData);
findJsonConfig("posts", "1")
//upJsonConfig()


//写数据库
function writeJsonConfig(tagGroupName, JsonData) {
    db.get(tagGroupName)
        .push(JsonData)
        .write()
}

//查字段
function findJsonConfig(tagGroupName, id) {
    const value = db.get(tagGroupName)
        .find({
            "ID": id
        })
        .value();
    console.log(value)
}

//更新字段
function upJsonConfig(tagGroupName, id) {
    db.update('count', n => n + 1).write();
}