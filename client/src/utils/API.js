import axios from "axios";

export default {
  saveBar: function (apiResults) {
    return axios({
      method: "POST",
      url: "/bars/newbar",
      data: apiResults,
      headers: { "Content-Type": "application/json" },
    });
  },
  getBars: function () {
    return axios({
      method: "GET",
      url: "/bars/getbars",
      headers: { "Content-Type": "application/json" },
    });
  },
};
