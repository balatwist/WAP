const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
    let url = request.url;

    if (url === '/' || url.toLowerCase() === '/home') {
        response.end("Welcome to my website");
    } else if (url.toLowerCase() === '/image') {
        // Read the image file
        const imagePath = path.join(__dirname, 'dog.jpeg');
        
        // Check if the file exists
        if (fs.existsSync(imagePath)) {
            const imageStream = fs.createReadStream(imagePath);

            // Set the appropriate content type for a JPEG image
            response.setHeader('Content-Type', 'image/jpeg');

            // Handle errors during streaming
            imageStream.on('error', (error) => {
                console.error(error);
                response.writeHead(500);
                response.end("Internal Server Error");
            });

            // Pipe the image stream to the response
            imageStream.pipe(response);
        } else {
            response.writeHead(404);
            response.end("Error 404: Image not found");
        }
    } else if (url.toLowerCase() === '/pdf') {
        // Read the PDF file
        const pdfPath = path.join(__dirname, 'file.pdf');

        // Check if the file exists
        if (fs.existsSync(pdfPath)) {
            const pdfStream = fs.createReadStream(pdfPath);

            // Set the appropriate content type for a PDF
            response.setHeader('Content-Type', 'application/pdf');

            // Handle errors during streaming
            pdfStream.on('error', (error) => {
                console.error(error);
                response.writeHead(500);
                response.end("Internal Server Error");
            });

            // Pipe the PDF stream to the response
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
