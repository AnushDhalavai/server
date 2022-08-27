const http=require('http');
function abc(req,res){
    res.end("LIST OF MARVEL MOVIES & SERIES IN 2022 \n 1.Doctor Strange Multiverse of Madness\n2.MS.MARVEL\n3.SHE HULK\n4.SPIDERMAN NO WAY HOME");
    
}

const server=http.createServer(abc);
server.listen(5000);