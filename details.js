let id = new URLSearchParams(location.search).get("id")
let buttons = document.querySelector(".btn-primary")
        buttons.forEach((button)=>(button.addEventListener("click",function(){
            alert(this.id) 
            fetch(`https://api.tvmaze.com/shows/${this.id}`)
            .then(response => response.json())
            .then((data) => {
                row1.innerHTML = `<div class="card col-3" style="width: 18rem;">
                <img src="${data.image.medium}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">${data.runtime}</p>
                </div>
                </div>`
            })
        }
        )))