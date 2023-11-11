var row = document.querySelector(".row")
var search_input = document.querySelector(".input_search_my")


function fillHtml(data){

    row.innerHTML = ``
    data.forEach(element =>{
    row.innerHTML += `<div class="card col-3" style="width: 18rem;">
    <img src="${element.image.medium}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">Runtime: ${element.runtime}</p>
        <p class="rating">Rating: ${element.rating.average}</p>
        <p class="Genres">Genres: ${element.genres}</p>
        <a id="${element.id}" href="./details.html?id=${element.id}" class="btn btn-primary">Check</a>
    </div>
    </div>`
    });
}

fetch("https://api.tvmaze.com/shows")
.then(response => response.json())
.then(data => fillHtml(data))


search_input.addEventListener("keyup", function(){
    if(search_input.value.length > 0){
        row.innerHTML = ``
        const url=`https://api.tvmaze.com/search/shows?q=${search_input.value.toLowerCase().trim()}`
        console.log(url);
        axios.get(url)
        .then((result)=>{
            let movies = result.data
            console.log(movies);
            movies.forEach((movie)=>{
                if(movie.show.image){
                    row.innerHTML += `<div class="card col-3" style="width: 18rem;">
                    <img src="${movie.show.image.medium}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${movie.show.name}</h5>
                        <p class="card-text">Runtime:${movie.show.runtime}</p>
                        <p class="average">Rating:${movie.show.rating.average}</p>
                        <p class="Genres">Genres: ${movie.genres}</p>
                        <a id="${movie.show.id}" href="./details.html?id=${movie.show.id}" class="btn btn-primary">Check</a>
                    </div>
                    </div>
                    `
                }

                }
            )
        })
    }
    
    else{
        fetch("https://api.tvmaze.com/shows")
        .then(response => response.json())
        .then(data =>fillHtml(data))

    }
})


