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
    const { name, brand, engine, meal, type, zeroToHundered, hp } = req.body;
    const fileData = read_file("car.json");
    fileData.push({
      id: v4(),
      name,
      brand,
      engine,
      meal,
      type,
      zeroToHundered,
      hp,
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
    const { name, brand, engine, meal, type, zeroToHundered, hp } = req.body;
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
        item.zeroToHundered = zeroToHundered
          ? zeroToHundered
          : item.zeroToHundered;
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

//                                                         drinks
// get
app.get("/get_all_drinks", (req, res) => {
  try {
    const drinks = read_file("drinks.json");
    res.status(200).json(drinks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// get one
app.get("/get_one_drinks/:id", (req, res) => {
  try {
    const { id } = req.params;
    const drinks = read_file("drinks.json");
    const founddrinks = drinks.find((item) => item.id === id);

    if (!founddrinks) {
      return res.status(404).json({
        message: "drinks not found",
      });
    }
    res.status(200).json(founddrinks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//post
app.post("/add_drinks", (req, res) => {
  try {
    const { name, sugar, benifits, popularity, company } = req.body;
    const fileData = read_file("drinks.json");
    fileData.push({
      id: v4(),
      name,
      sugar,
      benifits,
      popularity,
      company,
    });

    write_file("drinks.json", fileData);
    res.status(201).json({
      message: "added new drinks",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//put
app.put("/update_drinks/:id", (req, res) => {
  try {
    const { name, sugar, benifits, popularity, company } = req.body;
    const { id } = req.params;
    const drinks = read_file("drinks.json");
    const founddrinks = drinks.find((item) => item.id === id);
    if (!founddrinks) {
      return res.status(404).json({
        message: "drinks not found",
      });
    }
    drinks.forEach((item) => {
      if (item.id === id) {
        item.name = name ? name : item.name;
        item.sugar = sugar ? sugar : item.sugar;
        item.benifits = benifits ? benifits : item.benifits;
        item.popularity = popularity ? popularity : item.popularity;
        item.company = company ? company : item.company;
      }
    });

    write_file("drinks.json", drinks);
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
app.delete("/delete_drinks/:id", (req, res) => {
  try {
    const { id } = req.params;
    const drinks = read_file("drinks.json");
    const founddrinks = drinks.find((item) => item.id === id);
    if (!founddrinks) {
      return res.status(404).json({
        message: "drinks not found",
      });
    }
    drinks.forEach((item, idx) => {
      if (item.id === id) {
        drinks.splice(idx, 1);
      }
    });

    write_file("drinks.json", drinks);
    res.status(200).json({
      message: "deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//                                                         fruit
// get
app.get("/get_all_fruit", (req, res) => {
  try {
    const fruit = read_file("fruit.json");
    res.status(200).json(fruit);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// get one
app.get("/get_one_fruit/:id", (req, res) => {
  try {
    const { id } = req.params;
    const fruit = read_file("fruit.json");
    const foundfruit = fruit.find((item) => item.id === id);

    if (!foundfruit) {
      return res.status(404).json({
        message: "fruit not found",
      });
    }
    res.status(200).json(foundfruit);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//post
app.post("/add_fruit", (req, res) => {
  try {
    const { name, colour, vitamin } = req.body;
    const fileData = read_file("fruit.json");
    fileData.push({
      id: v4(),
      name,
      colour,
      vitamin,
    });

    write_file("fruit.json", fileData);
    res.status(201).json({
      message: "added new fruit",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//put
app.put("/update_fruit/:id", (req, res) => {
  try {
    const { name, colour, vitamin } = req.body;
    const { id } = req.params;
    const fruit = read_file("fruit.json");
    const foundfruit = fruit.find((item) => item.id === id);
    if (!foundfruit) {
      return res.status(404).json({
        message: "fruit not found",
      });
    }
    fruit.forEach((item) => {
      if (item.id === id) {
        item.name = name ? name : item.name;
        item.colour = colour ? colour : item.colour;
        item.vitamin = vitamin ? vitamin : item.vitamin;
      }
    });

    write_file("fruit.json", fruit);
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
app.delete("/delete_fruit/:id", (req, res) => {
  try {
    const { id } = req.params;
    const fruit = read_file("fruit.json");
    const foundfruit = fruit.find((item) => item.id === id);
    if (!foundfruit) {
      return res.status(404).json({
        message: "fruit not found",
      });
    }
    fruit.forEach((item, idx) => {
      if (item.id === id) {
        fruit.splice(idx, 1);
      }
    });

    write_file("fruit.json", fruit);
    res.status(200).json({
      message: "deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//                                                         laptop
// get
app.get("/get_all_laptop", (req, res) => {
  try {
    const laptop = read_file("laptop.json");
    res.status(200).json(laptop);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// get one
app.get("/get_one_laptop/:id", (req, res) => {
  try {
    const { id } = req.params;
    const laptop = read_file("laptop.json");
    const foundlaptop = laptop.find((item) => item.id === id);

    if (!foundlaptop) {
      return res.status(404).json({
        message: "laptop not found",
      });
    }
    res.status(200).json(foundlaptop);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//post
app.post("/add_laptop", (req, res) => {
  try {
    const { name, brand, CPU, GPU, ROM, RAM } = req.body;
    const fileData = read_file("laptop.json");
    fileData.push({
      id: v4(),
      name,
      brand,
      CPU,
      GPU,
      ROM,
      RAM,
    });

    write_file("laptop.json", fileData);
    res.status(201).json({
      message: "added new laptop",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//put
app.put("/update_laptop/:id", (req, res) => {
  try {
    const { name, brand, CPU, GPU, ROM, RAM } = req.body;
    const { id } = req.params;
    const laptop = read_file("laptop.json");
    const foundlaptop = laptop.find((item) => item.id === id);
    if (!foundlaptop) {
      return res.status(404).json({
        message: "laptop not found",
      });
    }
    laptop.forEach((item) => {
      if (item.id === id) {
        item.name = name ? name : item.name;
        item.brand = brand ? brand : item.brand;
        item.CPU = CPU ? CPU : item.CPU;
        item.GPU = GPU ? GPU : item.GPU;
        item.ROM = ROM ? ROM : item.ROM;
        item.RAM = RAM ? RAM : item.RAM;
      }
    });

    write_file("laptop.json", laptop);
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
app.delete("/delete_laptop/:id", (req, res) => {
  try {
    const { id } = req.params;
    const laptop = read_file("laptop.json");
    const foundlaptop = laptop.find((item) => item.id === id);
    if (!foundlaptop) {
      return res.status(404).json({
        message: "laptop not found",
      });
    }
    laptop.forEach((item, idx) => {
      if (item.id === id) {
        laptop.splice(idx, 1);
      }
    });

    write_file("laptop.json", laptop);
    res.status(200).json({
      message: "deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//                                                         military
// get
app.get("/get_all_military", (req, res) => {
  try {
    const military = read_file("military.json");
    res.status(200).json(military);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// get one
app.get("/get_one_military/:id", (req, res) => {
  try {
    const { id } = req.params;
    const military = read_file("military.json");
    const foundmilitary = military.find((item) => item.id === id);

    if (!foundmilitary) {
      return res.status(404).json({
        message: "military not found",
      });
    }
    res.status(200).json(foundmilitary);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//post
app.post("/add_military", (req, res) => {
  try {
    const {
      country,
      population,
      defenseBudget,
      totalAircraft,
      tankStrength,
      amoredVehicles,
      fleetStrength,
      worldRank,
    } = req.body;
    const fileData = read_file("military.json");
    fileData.push({
      id: v4(),
      country,
      population,
      defenseBudget,
      totalAircraft,
      tankStrength,
      amoredVehicles,
      fleetStrength,
      worldRank,
    });

    write_file("military.json", fileData);
    res.status(201).json({
      message: "added new military",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//put
app.put("/update_military/:id", (req, res) => {
  try {
    const {
      country,
      population,
      defenseBudget,
      totalAircraft,
      tankStrength,
      amoredVehicles,
      fleetStrength,
      worldRank,
    } = req.body;
    const { id } = req.params;
    const military = read_file("military.json");
    const foundmilitary = military.find((item) => item.id === id);
    if (!foundmilitary) {
      return res.status(404).json({
        message: "military not found",
      });
    }
    military.forEach((item) => {
      if (item.id === id) {
        item.country = country ? country : item.country;
        item.population = population ? population : item.population;
        item.defenseBudget = defenseBudget ? defenseBudget : item.defenseBudget;
        item.totalAircraft = totalAircraft ? totalAircraft : item.totalAircraft;
        item.tankStrength = tankStrength ? tankStrength : item.tankStrength;
        item.amoredVehicles = amoredVehicles
          ? amoredVehicles
          : item.amoredVehicles;
        item.fleetStrength = fleetStrength ? fleetStrength : item.fleetStrength;
        item.worldRank = worldRank ? worldRank : item.worldRank;
      }
    });

    write_file("military.json", military);
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
app.delete("/delete_military/:id", (req, res) => {
  try {
    const { id } = req.params;
    const military = read_file("military.json");
    const foundmilitary = military.find((item) => item.id === id);
    if (!foundmilitary) {
      return res.status(404).json({
        message: "military not found",
      });
    }
    military.forEach((item, idx) => {
      if (item.id === id) {
        military.splice(idx, 1);
      }
    });

    write_file("military.json", military);
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
