import { createServer } from 'node:http';
import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        const filePath = path.join(__dirname, 'index.html');

        fs.readFile(filePath, 'utf8')
        .then(data => {
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }).catch(err => {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('There is an error');
        })
    } else if (req.method === 'GET' && req.url === '/contact-me') {
        res.statusCode = 200;
        const filePath = path.join(__dirname, 'contact-me.html');

        fs.readFile(filePath, 'utf8')
        .then(data => {
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }).catch(err => {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('There is an error');
        })
    } else if (req.method === 'GET' && req.url === '/about') {
        res.statusCode = 200;
        const filePath = path.join(__dirname, 'about.html');

        fs.readFile(filePath, 'utf8')
        .then(data => {
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }).catch(err => {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('There is an error');
        })
    } else {
            res.statusCode = 404;
            const filePath = path.join(__dirname, '404.html');
    
            fs.readFile(filePath, 'utf8')
            .then(data => {
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }).catch(err => {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('There is an error');
            })
    }

})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
