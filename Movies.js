var row = document.getElementsByClassName("row")[0]
var row1 = document.querySelector(".row1")

function fillHtml(data){

    data.forEach(element =>{     
    row.innerHTML += `<div class="card col-3" style="width: 18rem;">
    <img src="${element.image.medium}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">${element.runtime}</p>
        <a id="${element.id}" href="./details.html?id=${element.id}" class="btn btn-primary">Check</a>
    </div>
    </div>`
    });
}

fetch("https://api.tvmaze.com/shows")
.then(response => response.json())
.then(data => fillHtml(data))




// axios.get("https://api.tvmaze.com/shows")
// .then((result) => {
//     console.log(result.data);
// })


// window.onload = function() {
//     var backgroundImage = new Image();
//     backgroundImage.src = `C:/Users/Murad/Downloads/International-Union-of-Cinemas-Calls-for-Open-Standards-in-the-Cinema-Industry.jpg`;
//     document.body.style.backgroundImage = `url(` + backgroundImage.src + `)`;
//     document.body.style.backgroundAttachment = `fixed`;
// }