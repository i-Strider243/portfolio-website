import { createServer } from 'http'; // Import the built-in http module
import fs from 'fs'; // Import the built-in fs module
import os from "node:os";

// import "./utils.js";

console.log(os.platform(), os.release(), os.type()); // Log OS information

fs.writeFileSync('message.txt', 'Hello, World! This is a message from Node.js, Good Evening Infidel'); // Write a message to a file

const hostname = '127.0.0.1'; // Localhost IP
const port = 3000; // Port to listen on

// Create a server instance
const server = createServer((req, res) => {
  res.statusCode = 200; // Set HTTP status code to OK
  res.setHeader('Content-Type', 'text/plain'); // Set content type
  res.end('Hello, World!, feels good to be back Baby\n'); // Send response
});

// Start the server and listen for requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});