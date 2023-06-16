//CORS Server API Example

const http = require('http');

const hostname = '127.0.0.1';
const port = '1337';

class calculatorModel
{
	constructor()
	{

	}

	calculateExpression( mathExpression )
	{
		return eval(mathExpression);
	}

}

//TO-DO List
// Encapsular métodos de transporte (GET/POST/PUT/OPTIONS/DELETE) (1)
// Encapsular procesamiento de request y response (1)
// Manejar errores (2)
// Encapsular Parsers (3)
// Manejar correctamente la ruta para poder obtener el nombre de la clase y del método a ejecutar (1)

//API Web (SDK)
// Path: /calculator/calculateExpression
// Parameter in: STRING (expression)
// Return/Response out: STRING
// Format: JSON/XML
// Metodo: *

//¿Objeto? ¿JSON?

function processRequest( request, response )
{
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

	if (request.method === 'OPTIONS') 
	{
		response.writeHead(204).end();
	}
	else if ( request.method == 'GET' )
	{
		const data = { message: '[GET] Hello World NodeJS with CORS!' };
		response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
		response.end(JSON.stringify(data));
		console.log('GET Response');
	}
	else if ( request.method == 'POST' )
	{
		let body = [];
		request.on('data', (chunk) =>
		{
			body.push(chunk);
		}).on('end', () => 
		{
			body = Buffer.concat(body).toString().replace(/"/g, '');
			
			let mdl = new calculatorModel();
			const data = { message: mdl.calculateExpression(body) };

			response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
			response.end(JSON.stringify(data));
			console.log('POST Response');
		});

		
	}
	else
	{
		response.writeHead(404).end();
	}
	
}
// 'Access-Control-Allow-Origin': '*'
http.createServer( processRequest ).listen( port, hostname );
