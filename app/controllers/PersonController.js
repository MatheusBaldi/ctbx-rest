const Person = require('../models/Person');

class PersonController{
    // Get all
    index(req, res){
        let persons = Person.find();
        res.send(posts.find({}).toArray()); 
    }
    
    // Store one
    store(req, res){
        Person.create({
            name:{
                first: req.body.name.first,
                last: req.body.name.last
            },
            participation: req.body.participation
        });
        res.status(201).send();
    }
    
    // // Show one
    // show(){}
    
    // // Edit one
    // edit(){}
    
    // // Update one
    // update(){}
    
    // Delete one
    destroy(req, res){
        Person.findByIdAndDelete(req.params.id);
        res.status(200).send();
    }

}