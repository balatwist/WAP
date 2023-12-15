 const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
    let url = request.url;

    if (url === '/' || url.toLowerCase() === '/home') {
        response.end("Welcome to my website");
    } else if (url.toLowerCase() === '/image') {
       
         const imagePath = path.join(__dirname, 'dog.jpeg');
         const imageStream = fs.createReadStream(imagePath);
 
         
         response.setHeader('Content-Type', 'image/jpeg');

         imageStream.pipe(response);
       
        
        
    } else if (url.toLowerCase() === '/pdf') {
       

        const imagePath = path.join(__dirname, 'file.jpeg');
        const imageStream = fs.createReadStream(imagePath);

        
        response.setHeader('Content-Type', 'application/pdf');

        imageStream.pipe(response);
      
        
    } else {
        response.writeHead(404);
        response.end("Error 404: Page not found");
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server has started...');
});
