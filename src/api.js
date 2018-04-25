import $ from "jquery";

module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },

addMovies:(configuration)=>{
    fetch('/api/movies',configuration)
        .then(alert("movie vas created"));
},

removeMovie:(url,configuration)=>{
    fetch(url,configuration)
        .then(alert("movie was deleted"));
}





};


