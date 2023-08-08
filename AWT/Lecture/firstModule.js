const add = function(a,b){
    return (a+b)
}

const sub = function(a,b){
    return (a-b)
}

const secretkey=123456789

// module.exports=add
module.exports=sub
// module.exports.add=add
// module.exports.sub=sub
// module.exports.secretkey=secretkey
module.exports={
    add,
    sub,
    secretkey,
}