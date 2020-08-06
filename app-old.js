/**
 * 
 * 
 * 
 */

const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'luis',
            edad: 30,
            Request_url: req.url,
            Request_headers: req.headers,
            http_codigos: http.STATUS_CODES,
            Response_statusCode: res.statusCode
        }

        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto : 8080');