const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { read_file, write_file } = require("./managing/manage");
const { V4, v4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

//                                                         animal
// get
app.get("/get_all_animal", (req, res) => {
  try {
    const animal = read_file("animal.json");
    res.status(200).json(animal);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// get one
app.get("/get_one_animal/:id", (req, res) => {
  try {
    const { id } = req.params;
    const animal = read_file("animal.json");
    const foundanimal = animal.find((item) => item.id === id);

    if (!foundanimal) {
      return res.status(404).json({
        message: "animal not found",
      });
    }
    res.status(200).json(foundanimal);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


//post
app.post("/add_animal", (req, res) => {
  try {
    const { name, home, meal, type } = req.body;
    const fileData = read_file("animal.json");
    fileData.push({
      id: v4(),
      name,
      home,
      meal,
      type,
    });

    write_file("animal.json", fileData);
    res.status(201).json({
      message: "added new animal",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


//put
app.put("/update_animal/:id", (req, res) => {
  try {
    const { name, home, meal, type } = req.body;
    const { id } = req.params;
    const animal = read_file("animal.json");
    const foundanimal = animal.find((item) => item.id === id);
    if (!foundanimal) {
      return res.status(404).json({
        message: "animal not found",
      });
    }
    animal.forEach((item) => {
      if (item.id === id) {
        item.name = name ? name : item.name;
        item.home = home ? home : item.home;
        item.meal = meal ? meal : item.meal;
        item.type = type ? type : item.type;
      }
    });

    write_file("animal.json", animal);
    res.status(200).json({
      message: "updated",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


//delete
app.delete("/delete_animal/:id", (req, res) => {
  try {
    const { id } = req.params;
    const animal = read_file("animal.json");
    const foundanimal = animal.find((item) => item.id === id);
    if (!foundanimal) {
      return res.status(404).json({
        message: "animal not found",
      });
    }
    animal.forEach((item, idx) => {
      if (item.id === id) {
        animal.splice(idx, 1);
      }
    });

    write_file("animal.json", animal);
    res.status(200).json({
      message: "deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


//                                                         car
// get
app.get("/get_all_car", (req, res) => {
  try {
    const car = read_file("car.json");
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// get one
app.get("/get_one_car/:id", (req, res) => {
  try {
    const { id } = req.params;
    const car = read_file("car.json");
    const foundcar = car.find((item) => item.id === id);

    if (!foundcar) {
      return res.status(404).json({
        message: "car not found",
      });
    }
    res.status(200).json(foundcar);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


//post
app.post("/add_car", (req, res) => {
  try {
    const { name, brand, engine, meal, type, zeroToHundered, hp} = req.body;
    const fileData = read_file("car.json");
    fileData.push({
      id: v4(),
      name,
      brand,
      engine,
      meal,
      type,
      zeroToHundered,
      hp
    });

    write_file("car.json", fileData);
    res.status(201).json({
      message: "added new car",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


//put
app.put("/update_car/:id", (req, res) => {
  try {
    const {name, brand, engine, meal, type, zeroToHundered, hp} = req.body;
    const { id } = req.params;
    const car = read_file("car.json");
    const foundcar = car.find((item) => item.id === id);
    if (!foundcar) {
      return res.status(404).json({
        message: "car not found",
      });
    }
    car.forEach((item) => {
      if (item.id === id) {
        item.name = name ? name : item.name;
        item.brand = brand ? brand : item.brand;
        item.engine = engine ? engine : item.engine;
        item.meal = meal ? meal : item.meal;
        item.type = type ? type : item.type;
        item.zeroToHundered = zeroToHundered ? zeroToHundered : item.zeroToHundered;
        item.hp = hp ? hp : item.hp;
      }
    });

    write_file("car.json", car);
    res.status(200).json({
      message: "updated",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


//delete
app.delete("/delete_car/:id", (req, res) => {
  try {
    const { id } = req.params;
    const car = read_file("car.json");
    const foundcar = car.find((item) => item.id === id);
    if (!foundcar) {
      return res.status(404).json({
        message: "car not found",
      });
    }
    car.forEach((item, idx) => {
      if (item.id === id) {
        car.splice(idx, 1);
      }
    });

    write_file("car.json", car);
    res.status(200).json({
      message: "deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


app.listen(PORT, () => {
  console.log("server is running at:", PORT);
});
