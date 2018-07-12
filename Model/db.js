var mongoose = require('mongoose'); 

//Lets connect to our database using the DB server URL.
//mongoose.connect('mongodb://localhost/panarquia');


//mongoose.connect('mongodb+srv://mongodb-stitch-panarkiaapi-rrppt:KvL-7sc-LGw-sWd@panarkia-detqs.gcp.mongodb.net/test?retryWrites=true');

mongoose.connect('mongodb://panarkia:p4n4rk14@panarkia-shard-00-00-detqs.gcp.mongodb.net:27017,panarkia-shard-00-01-detqs.gcp.mongodb.net:27017,panarkia-shard-00-02-detqs.gcp.mongodb.net:27017/test?ssl=true&replicaSet=panarkia-shard-0&authSource=admin&retryWrites=true');