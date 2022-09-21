import http,{IncomingMessage,ServerResponse} from 'http'
let company :string ='Dhan AI'
export class page_routes{
    public static routeMapper(req:IncomingMessage, res: http.ServerResponse){
        let url : string| undefined=req.url
        let method:string| undefined=req.method
        if(method==="GET" && url==='/'){
            res.end(`Welcome to ${company}`)
        }
        else if(method==="GET" && url==='/about'){
            res.end(`About ${company}`)
        }
        else if(method==="GET" && url==='/contact'){
            res.end(`contact ${company}`)
        }
        else if(method==="POST" && url==='/admin_login'){ //we don't have any data storage in this project but let's handle the data
            let body:any=''
            req.on('data', (chunk)=>{body+=chunk}).on('end', ()=>{
                body=JSON.parse(body)
                console.log(`${body.name}  ${body.password} `)
                if(body.name==='admin'&&body.password==='1234')
                {
                    res.end(`Welcome to ${company} admin portal!`)
                }
                else{
                    res.end(`wrong credentials,access denied  to ${company} admin portal!`)
                }
            })

        }
        else{
            res.end(`Sorry,${url} Not found`) 
        }
    }
}