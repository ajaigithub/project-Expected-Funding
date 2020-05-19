
//create a othercontrib 
const models = require('../models');


//save to database using create method 
exports.create = (req,res) => {
    console.log(req.body.name)
    console.log('entr createlooop');
    models.Othercontrib.create({
    
        name:req.body.name,
        description:req.body.description,
        amount:req.body.amount
    }).then(results => {
        console.log(results);
        res.send(results);
    }).catch(err => {
        res.status(500).send('Error'+err);
    })
}
//fetch all data using findall function
exports.getall = (req,res) => {
    console.log('entering find all');
    models.Othercontrib.findAll({}).then(results => {
 console.log('find all worked');
       console.log(results) 
    //send all table data to client
    res.send(results)

}).catch(err => {
    res.status(500).send('error ->'+err);
})
};

//deleting using delete method
exports.delete = (req,res) => {
    console.log('deleting')
    console.log(req.params.name)
   const name= req.params.name;
    models.Othercontrib.destroy({
        where:{name:name}
    }).then(() => {
        console.log('delete')
        res.status(200).send('customer has been deleted')
    })
}

//update using put method to done
exports.update = (req, res) => {
    console.log('entering update')
    var data = req.body;
    const nme = req.params.nme;
    models.Othercontrib.update( { name: req.body.name, description: req.body.description, amount: req.body.amount}, 
              { where: {name: nme} }
             ).then(() => {
              res.status(200).send(data);
             }).catch(err => {
              res.status(500).send('Error -> ' + err);
             })
  };  













