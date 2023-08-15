//server create

//1. HTTP module 

const http=require ('http');

const server=http.createServer((req,req)=>{
    console.log('requet has been made from server');
});

//port number, host, callback function

server.listen(3000,'localhost',()=>{
    console.log('server is listening on port 3000');
});
