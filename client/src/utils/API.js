import axios from "axios";

export default {
  saveBar: function () {
    return axios.post("/bars/newbar");
  },
  getBars: function () {
    return axios.get("/bars/getbars");
  },
};
