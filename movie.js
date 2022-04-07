let inpt = document.getElementById("movies");

async function popcornMovie() {
  let res = await fetch(
    `http://www.omdbapi.com/?s=${inpt.value}&apikey=4fa0f3b3`
  );
  let data = await res.json();
  console.log(data);
  let output = data.Search;
  console.log(output);
  let div = document.getElementById("StoreMovies");
  div.innerHTML = "";
  output.map(x => {
    div.innerHTML += `<div>
      <img src=${x.Poster} alt=${x.Title}>
            <h2>${x.Title}</h2>
            <h3>${x.Year}</h3>
        </div>`;
  });
}
