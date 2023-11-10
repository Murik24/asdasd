let detail_page = document.querySelector(".details");
let id = new URLSearchParams(location.search).get("id")

axios.get(`https://api.tvmaze.com/shows/${id}`)
.then((result) => {
    let movie = result.data
    detail_page.innerHTML = `<div class="card col-3" style="width: 18rem;">
    <img src="${movie.image.medium}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${movie.name}</h5>
        <p class="card-text">${movie.runtime}</p>
        <a href="./main.html" class="btn btn-primary">Back</a>
    </div>
    </div>
    <p class="description">${movie.summary}</p>`
})