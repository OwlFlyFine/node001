const async = require("async");
const request = require("request");
const fs = require('fs')
const item = []

const queue = async.queue((task,callback) => {
     console.log(task.number)
    // request('http://apptitude.co.th',(error,response,body) => {
            // if(error){
                // console.log(error)
                // callback()
            // }
        fs.writeFile('ml'+task.number+'.txt','this is file from process'+task.number, () => {
            // if(err){
                // console.log('error naja')
            // }
            console.log('write success'+task.number)
            // console.log('process'+task.number)
            callback()
        })
        // console.log("status code",response.statusCode)
        // callback()
    // })
    // callback()
},1)

queue.drain = () =>{
    console.log('all item have been processed')
}

for(i = 0; i<100; i++ ){
    item.push({number:i})
    // console.log('')
    // item.push({process:i})
}

queue.push(item, (err) => {
    console.log('finish process ')
})

// queue.push({ name: "bar" }, (err) => {
//   console.log("finish process bar")
// })

