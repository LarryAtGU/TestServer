let Users=[{id:1, name:"Blue Fish", age: 18, 
url :"https://cdn.mos.cms.futurecdn.net/BgZFhT7piMqXpyzfWrdKyP-320-80.jpg",
weight:60,note:"A small fish in ocean"},
{
  id:2,
  name: "Little Bee",
  age: 15,
  weight:70,
  url: "https://www.seekpng.com/png/detail/860-8602621_its-me-little-bee-honeybee.png",
  note: "A beautiful little honey bee."
}

];


const removeUser = (uid) => {
  userid=parseInt(uid)
  const prenum=Users.length;
  Results=Users.filter((u)=>u.id!==userid);
  Users=Results
  return prenum-Users.length
}

const addUser = (u) => {
  id=Users.reduce((pre, cur)=>
      (cur.id>pre)?cur.id:pre,0)+1;
  u.id=id;
  Users.push(u);

  
  return id;
}

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
/*
  if (!req.body.title) {
    console.log("No title")

    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
*/

  // Create a User
  const user = {

    name:req.body.name,
    age:req.body.age,
    url:req.body.url,
    weight:req.body.weight,
    note:req.body.note

  };

  newid=addUser(user);
  res.send({id:newid,message:"New User is Added"}); 
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {

    res.send({users:Users});

};


// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  const num=removeUser(id);
      if (num == 1) {
        res.send({
          message: "One user is removed!"
        });
      } else {
        res.send({
          message: `Something wrong`
        });
      }
};


/*
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};


// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
*/
