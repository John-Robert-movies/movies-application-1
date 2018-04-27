import $ from "jquery";

module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },

addMovies:(configuration)=>{
    fetch('/api/movies',configuration)

},

removeMovie:(url,configuration)=>
{
    fetch(url, configuration)

}


};


