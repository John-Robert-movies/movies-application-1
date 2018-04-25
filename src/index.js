/**
 * es6 modules and imports
 */

import $ from "jquery";

import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies,addMovies,removeMovie} = require('./api.js');



// getMovies().then((movies) => {
//   // console.log("viendo que tiene movies");
//   // console.log(movies);
//   // console.log(typeof movies);
//   console.log('Here are all the movies:');
//   movies.forEach(({title, rating, id}) => {
//     console.log(`id#${id} - ${title} - rating: ${rating}`);
//   });
// }).catch((error) => {
//   alert('Oh no! Something went wrong.\nCheck the console for details.')
//   console.log(error);
// });



//create the paremeters for addMovies function from api
function create_movie(title,rating){
const movie = {title, rating};
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie)
    };
return options;
}

//create the paremeters for removeMovies function from api
function  remove_movie(id) {
    let url=`/api/movies/+${id}`;
    const options = {
        method: 'DELETE'
    };
}

//function to create a div with a movie
function createReport(movie) {
    var htmlMovie=`<tr><td>+${movie.name}+</td><<td>movie.rating</td></tr>`;
    return htmlMovie;

}




getMovies().then((movies) => {
    // console.log("viendo que tiene movies");
    // console.log(movies);
    // console.log(typeof movies);
    console.log('Here are all the movies:');
    movies.forEach(({title, rating, id}) => {
        $("#cartelera").append(`<tr><td>id#${id}</td><td>${title}</td><td>rating: ${rating}</td></tr><hr>`);
    });
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.')
    console.log(error);
});

// let peli=create_movie("casa tomada",4);
// console.log(peli);
// addMovies(peli);
//event listener for the button "Add Movie" that create a movie taking the user inputs
    $("#adthamovie").click(function () {
        // e.preventDefault();
        addMovies(create_movie($("#tittle").val(),
        $("#rating").val())
        );
    });





























