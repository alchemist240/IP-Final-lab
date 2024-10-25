
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const movies = [
  {
    id: 1,
    title: "Interstellar",
    year: 2010,
    genre: "Science Fiction",
    description: "A thief who steals corporate secrets using dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
  },
  {
    id: 2,
    title: "The Independence Day",
    year: 1994,
    genre: "Science Fiction",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham."
  },
  {
    id: 4,
    title: "Joker",
    year: 2017,
    genre: "Action",
    description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham."
  },
  {
    id: 5,
    title: "Prometheus",
    year: 2006,
    genre: "Sci-Fi",
    description: "A crew of explorer ship explores vasteness of unchartered space."
  },
  {
    id: 6,
    title: "Venom",
    year: 2018,
    genre: "Action",
    description: "A parasite from another planet froms a symbiotic relationship with a human."
  },
  {
    id: 7,
    title: "How I met your mother",
    year: 2013,
    genre: "Rom-com",
    description: "A simple yet complicated story based in NewYork in narrators format about meeeting mother of his children."
  },
  {
    id: 8,
    title: "Mahabharat",
    year: 1992,
    genre: "Historical",
    description: "Based on holy hindu scriptues and real life historical events."
  },
  {
    id: 9,
    title: "Tare Zameen par",
    year: 2008,
    genre: "Physcological Drama",
    description: "A dyslexic boy in search of happiness finds a great teacher who helps him to find his true self. "
  },
];

app.get('/api/movies', (req, res) => {
  res.json(movies);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
