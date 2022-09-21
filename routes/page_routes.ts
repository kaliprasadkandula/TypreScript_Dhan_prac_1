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
        else{
            res.end(`Sorry,${url} Not found`)
        }
    }
}