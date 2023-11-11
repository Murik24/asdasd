var genres = document.querySelector("genres")
var popularmovies = document.querySelector(".popularmovie")

// genres.addEventListener("click", ()=> {
//     row.innerHTML =''
//     fetch("https://api.tvmaze.com/shows")
//         .then(response => response.json())
//         .then((data) =>{
//             const comedy = data.filter((data) => )
//             popularity.forEach((data) => {
//                 row.innerHTML += `<div class="card col-3" style="width: 18rem;">
//                 <img src="${data.image.medium}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${data.name}</h5>
//                     <p class="card-text">Runtime: ${data.runtime}</p>
//                     <p class="rating">Rating: ${data.rating.average}</p>
//                     <p class="Genres">Genres: ${data.genres}</p>
//                     <a id="${data.id}" href="./details.html?id=${data.id}" class="btn btn-primary">Check</a>
//                 </div>
//                 </div>`
//                 });
//         })
// } )

popularmovies.addEventListener("click", () => {
    row.innerHTML = ''
    fetch("https://api.tvmaze.com/shows")
        .then(response => response.json())
        .then((data) =>{
            const popularity = data.sort((a,b) => b.rating.average - a.rating.average)
            popularity.forEach((data) => {
                row.innerHTML += `<div class="card col-3" style="width: 18rem;">
                <img src="${data.image.medium}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">Runtime: ${data.runtime}</p>
                    <p class="rating">Rating: ${data.rating.average}</p>
                    <p class="Genres">Genres: ${data.genres}</p>
                    <a id="${data.id}" href="./details.html?id=${data.id}" class="btn btn-primary">Check</a>
                </div>
                </div>`
                });
        })

})