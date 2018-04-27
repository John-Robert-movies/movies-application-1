/**
 * es6 modules and imports
 */

import $ from "jquery";

// import sayHello from './hello';
// sayHello('World');

/**
 * require style imports
 */
const {getMovies,addMovies,removeMovie, editMovie} = require('./api.js');


    refresh();


    //create the paremeters for  api's functions
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


    //function to create a div with a movie
    function createReport(movie) {
        var htmlMovie=`<tr><td>+${movie.name}+</td><<td> movie.rating </td></tr>`;
        return htmlMovie;
    }


     function refresh() {

         getMovies().then((movies) => {
             console.log('Here are all the movies:');
             movies.forEach(({title, rating, id}) => {
                 $("#cartelera").append(`<tr class="movie"><td class="id">${id}</td><td>${title}</td><td>rating: ${rating}</td><td><input class="checkDel" type="checkbox"></td></tr><hr>`);
             });
         }).catch((error) => {
             alert('Oh no! Something went wrong.\nCheck the console for details.')
             console.log(error);
         });
     }




    $("#adthamovie").click(function () {
            // e.preventDefault();
            addMovies(create_movie($("#tittle").val(),
            $("#rating").val())
            );
        });


    //event listener for a checked check button: get the id from the <tr>, this function add movie's id to the empty array to be removed

  let toDelete=[];

    $("#cartelera").on('click', '.movie', function () {
            let miId= this.getElementsByClassName("id")[0].textContent;
            if(toDelete.indexOf(miId)<=-1){
                toDelete.push(miId);
            }
            else {
                let index=toDelete.indexOf(miId);
                toDelete.splice(index,1);
            }

           console.log(toDelete)
       return toDelete;

    });

    //event listener for delete button


    $("#deletemovie").click(function () {
        console.log("this is the final array");
        toDelete.forEach(function (element) {
            console.log(element);
            let url=`/api/movies/${element}`;
            const options = {
                method: 'DELETE'
            };
            removeMovie(url,options);
        })
        toDelete=[];
        $("#cartelera").html("");
        refresh();

    });

//this function pass parameters tho the API's function "editMovie" to edit a o
    function changeMovie () {

        const peli = {title: 'life on Mars', rating: 5};
        const url = '/api/movies/11';
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(peli),
        };
        editMovie(url, options);
        $("#cartelera").html("");

    }




































