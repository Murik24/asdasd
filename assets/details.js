let detail_page = document.querySelector(".details");
let id = new URLSearchParams(location.search).get("id")
axios.get(`https://api.tvmaze.com/shows/${id}`)
.then((result) => {
    let movie = result.data
    let description = movie.summary
    description = description.slice(description.indexOf("</b>")+4, description.length-4)
    console.log(description);
    detail_page.innerHTML = `
    <div class="card col-3" style="width: 18rem;">
        <img src="${movie.image.medium}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${movie.name}</h5>
            <p class="card-text">Runtime: ${movie.runtime}</p>
            <p class="average">Rating: ${movie.rating.average}</p>
            <p class="Genres">Genres: ${movie.genres}</p>
            <a href="./main.html" class="btn btn-primary">Back</a>
        </div>
    </div>
    <div class="descr">
        <p><b>${movie.name}</b>${description}</p>
    </div>`
})

// style="grid-area:1/1/4/2; border:2px solid white;margin-top: 5px; padding:5px;"