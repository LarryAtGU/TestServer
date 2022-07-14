module.exports = app => {
    const users = require("./test.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", users.create);
  
    // Retrieve all Users
    router.get("/", users.findAll);

    // Delete a Tutorial with id
    router.delete("/:id", users.delete);

  
/*    
    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
  
    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);
  */
    app.use('/api', router);
  };
  