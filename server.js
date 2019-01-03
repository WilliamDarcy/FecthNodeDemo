var http = require('http');
var server = http.createServer(function(request, reponse){
 
     let msg = {
         nom : "durant"
     }
    //On prépare la réponse
    //On accepte les requêtes venant de n'importe quel serveur (non recommandé seulement pour test)
    reponse.setHeader('Access-Control-Allow-Origin', '*');
    reponse.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    reponse.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    reponse.setHeader('Access-Control-Allow-Credentials', true);
    reponse.setHeader("Content-Type", "application/json");
    reponse.status = 200;
    //On renvoie du JSON
	reponse.end(JSON.stringify(msg));
})
//Le serveur écoute sur le port 2000
server.listen(2000);
