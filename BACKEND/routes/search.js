const express = require("express");
const axios = require("axios");
const imageToBase64 = require("image-to-base64");
const router = express.Router();

router.get("/", async (req, res) => {
  let url = "https://yts.mx/api/v2/list_movies.json?limit=5";

  url = url + `&query_term=${req.query.q}`;

  try {
    const response = await axios.get(url);

    let movies;

    if (response.data.data.movie_count == 0) {
      return res.json({ error_msg: "No movie found." });
    } else {
      movies = response.data.data.movies;
    }

    let check = 0;

    movies.map((movie, index) => {
      imageToBase64(movie.small_cover_image).then((response) => {
        movies[index].small_cover_image = `data:image/jpg;base64, ${response}`;
        check++;
        if (check == movies.length) {
          return res.json({ movies });
        }
      });
    });
  } catch (error) {
    return res.json({ error_msg: "Server Error. Please try again later." });
  }
});

module.exports = router;
