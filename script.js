const accessKey = "qTSNWwY9ikZzJFx7s_-rFUdGQFZ0pE5n-3Z4U5A1T6Q";


const searchInput = document.getElementById("input-search");
const searchBox = document.getElementById("search-box");
const showmoreBtn = document.getElementById("show-more");
const searchOutput = document.getElementById("search-output");




let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchOutput.innerHTML = "";
    }

    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchOutput.appendChild(imageLink);
    })

    showmoreBtn.style.display = "block";

}


searchInput.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})

showmoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
})


