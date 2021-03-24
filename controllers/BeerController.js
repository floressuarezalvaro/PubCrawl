const axios = require("axios");

module.exports = {
  localBars: async (req, res) => {
    try {
      const { data } = await axios.get(
        `http://beermapping.com/webservice/loccity/${process.env.beerkey}/${req.body.search}&s=json`
      );
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
};
