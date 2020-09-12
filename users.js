async function routes(fastify,options){
    fastify.get('/:id',async(req,res)){
        res.send({
            id: req.params.id,
            firstName:"Payal"
            lastName:"Jha"
        });
    };
};
module.exports = routes;