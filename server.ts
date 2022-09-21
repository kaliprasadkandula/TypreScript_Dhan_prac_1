import http,{Server,IncomingMessage,ServerResponse} from 'http'
import os from 'os'
import fs from 'fs'
import path from 'path'
import {string_util} from './util/string_util'
import {page_routes} from './routes/page_routes'
const hostname:string ='127.0.0.1';
const port:number = 3000

let os_data ={
    hostname:os.hostname(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
    homedir:os.homedir()
    
}

let notes_path = path.join(__dirname, 'notes','note.txt')
let data_notes_path = path.join(__dirname, 'notes','data.txt')
let user_name = "kali prasad"
let user_name_len = string_util.print_len(user_name)

const server:Server = http.createServer((req:IncomingMessage, res:ServerResponse) => {
    res.statusCode=200
    res.setHeader('Content-Type', 'text/html')
    page_routes.routeMapper(req, res)
    //res.end(`Lentght of ${user_name} is ${user_name_len}`)
    // fs.readFile(notes_path,'utf8',(err:any,data:any) => {
    //     if (err) {
    //         console.log(err)
    //         return
    //     }
    //     else {
    //         fs.writeFile(data_notes_path,data,(error) => {
    //             if(error) {
    //                 res.end(`error writing notes: ${error}`)
    //             }
    //             else{
    //                 res.end(`notes written : ${data}`)
    //             }
    //         }
    //         )
    //     }
    // })
    


    //res.end(`<pre>${JSON.stringify(os_data)}</pre>`) //for OS specific
    //res.end(`welcome to Dhan AI`) //for general usage
})


server.listen(port, hostname,()=>{
    console.log(`listening on ${hostname}:${port}`)
})