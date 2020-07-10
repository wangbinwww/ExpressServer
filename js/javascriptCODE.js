//结构赋值
const b = {
    type: "String"
}

const a = {
    people: {
        ...b,
        age: "int",
        name: "张三"
    }
}

console.log(a)