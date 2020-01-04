import axios from "axios";

const BASEURL = "https://randomuser.me/api/";


// Export an object with a "search" method that searches the Person API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
