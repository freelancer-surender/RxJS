const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const fruits = ["Apple", "Banana", "Cherry", "Fig", "Grape"];
const animals = ["Cat", "Dog", "Elephant", "Lion", "Tiger"];
const countries1 = ["Australia", "Canada", "India", "Pakistan", "USA"];

const users = {
  1: {
    id: 1,
    name: "Harry Potter",
    actor: "Daniel Radcliffe",
    house: "Gryffindor",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.9HhkInA2r2TAQNzEE2SOZwAAAA?w=354&h=438&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  2: {
    id: 2,
    name: "Ron Weasley",
    actor: "Rupert Grint",
    house: "Gryffindor",
    image:
      "https://tse1.explicit.bing.net/th/id/OIP.xLeMUQkJrimk3FuH2EhKigHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  3: {
    id: 3,
    name: "Hermione Granger",
    actor: "Emma Watson",
    house: "Gryffindor",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/08/2-Hermione-Emma-Watson-books.jpg",
  },
  4: {
    id: 4,
    name: "Albus Dumbledore",
    actor: "Richard Harris",
    house: "Gryffindor",
    image:
      "https://i.pinimg.com/736x/cc/a5/dd/cca5dd7ff1875c11ce032c1fda6942d7--first-harry-potter-movie-stone-quotes.jpg",
  },
  5: {
    id: 5,
    name: "Severus Snape",
    actor: "Alan Rickman",
    house: "Slytherin",
    image:
      "https://i.pinimg.com/originals/0e/04/a4/0e04a4636b83403b183bd9a3900da278.jpg",
  },
};

let balance = 0;
let nextOrderId = 1001;

app.use(express.json());

app.post("/api/order", (req, res) => {
  const orderId = nextOrderId++;
  setTimeout(() => {
    res.json({ orderId, status: "Processed" });
  }, 2000);
});

app.get("/api/balance", (req, res) => {
  res.json({ balance });
});

app.post("/api/deposit", (req, res) => {
  const amount = parseFloat(req.body.amount);
  if (isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: "Invalid deposit amount" });
  }

  setTimeout(() => {
    balance += amount;
    res.json({
      success: true,
      balance,
      message: `Successfully deposited ${amount}`,
    });
  }, 4000);
});

app.post("/api/withdraw", (req, res) => {
  const amount = parseFloat(req.body.amount);
  if (isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: "Invalid withdrawal amount" });
  }

  setTimeout(() => {
    if (amount > balance) {
      return res.status(400).json({ error: "Insufficient funds" });
    }
    balance -= amount;
    res.json({
      success: true,
      balance,
      message: `Successfully withdrew ${amount}`,
    });
  }, 2000);
});

app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.get("/api/users", (req, res) => {
  res.json(Object.keys(users).map(Number));
});

app.get("/api/items", (req, res) => {
  const category = req.query.category;
  let data = [];
  let delay = 0;

  switch (category) {
    case "Fruits":
      data = fruits;
      delay = 12000;
      break;
    case "Animals":
      data = animals;
      delay = 8000;
      break;
    case "Countries":
      data = countries1;
      delay = 4000;
      break;
    default:
      return res.status(400).json({
        error: "Invalid category. Choose fruits, animals, or countries.",
      });
  }

  setTimeout(() => {
    res.json(data.slice(0, 5));
  }, delay);
});

app.get("/api/search", (req, res) => {
  const query = req.query.q || "";

  // LOGIC FOR RACE CONDITION:
  // Short strings get a LONG delay.
  // Long strings get a SHORT delay.
  let delay = 200;
  if (query.length === 1) delay = 3500;
  else if (query.length === 2) delay = 2500;
  else if (query.length === 3) delay = 1500;
  else if (query.length === 4) delay = 800;

  console.log(`Received search for: "${query}", Delaying for ${delay}ms`);

  setTimeout(() => {
    const results = query
      ? countries.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase()),
        )
      : [];

    res.json({
      query,
      results,
      delay,
    });
    console.log(`Responded for: "${query}"`);
  }, delay);
});

app.get("/api/countries", (req, res) => {
  res.json(countries);
});

app.get("/api/characters", async (req, res) => {
  const getCharacters = () => {
    return Promise.resolve(["Harry", "Ron", "Hermione"]);
  };

  try {
    const characters = await getCharacters();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch characters" });
  }
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
