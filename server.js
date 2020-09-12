const fastify = require('fastify')();
fastify.register(require('./routes/users'),{prefix:'/users'});
fastify.listen(3000,function(err,address){
    if(err)
    {
        console.Console.log(err);
        process.exit(1);
    }
    else
    {
        console.log('Server is up running on 3000 ports');
    }

});