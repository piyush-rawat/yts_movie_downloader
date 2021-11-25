const express = require("express");
const axios = require("axios");
const imageToBase64 = require("image-to-base64");
const router = express.Router();

router.get("/", async (req, res) => {
  let url = "https://yts.mx/api/v2/list_movies.json?limit=20";

  if (req.query.page) {
    url = url + `&page=${req.query.page}`;
  }

  if (req.query.genre) {
    url = url + `&genre=${req.query.genre}`;
  }

  url = url + "&sort_by=download_count";

  try {
    const response = await axios.get(url);
    let movie_count = response.data.data.movie_count;
    let movies = response.data.data.movies;
    let page_number = response.data.data.page_number;

    let check = 0;

    movies.map((movie, index) => {
      imageToBase64(movie.medium_cover_image).then((response) => {
        movies[index].medium_cover_image = `data:image/jpg;base64, ${response}`;
        check++;
        if (check == movies.length) {
          return res.json({ movie_count, page_number, movies });
        }
      });
    });
  } catch (error) {
    return res.json({ error_msg: "Server Error. Please try again later." });
  }
});

module.exports = router;
