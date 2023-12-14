const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
    let url = request.url;

    if (url === '/' || url.toLowerCase() === '/home') {
        response.end("Welcome to my website");
    } else if (url.toLowerCase() === '/image') {
       
        const imagePath = path.join(__dirname, 'dog.jpeg');
        
       
        if (fs.existsSync(imagePath)) {
            const imageStream = fs.createReadStream(imagePath);

            
            response.setHeader('Content-Type', 'image/jpeg');

          
            imageStream.on('error', (error) => {
                console.error(error);
                response.writeHead(500);
                response.end("Internal Server Error");
            });

           
            imageStream.pipe(response);
        } else {
            response.writeHead(404);
            response.end("Error 404: Image not found");
        }
    } else if (url.toLowerCase() === '/pdf') {
       
        const pdfPath = path.join(__dirname, 'file.pdf');

     
        if (fs.existsSync(pdfPath)) {
            const pdfStream = fs.createReadStream(pdfPath);

            response.setHeader('Content-Type', 'application/pdf');

           
            pdfStream.on('error', (error) => {
                console.error(error);
                response.writeHead(500);
                response.end("Internal Server Error");
            });

            
            pdfStream.pipe(response);
        } else {
            response.writeHead(404);
            response.end("Error 404: PDF file not found");
        }
    } else {
        response.writeHead(404);
        response.end("Error 404: Page not found");
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server has started...');
});
