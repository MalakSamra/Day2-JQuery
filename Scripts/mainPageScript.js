import { apiUrl, imgPath, main } from "./Vars.js";
$(document).ready(function(){
  //get Movies Function
  function getMoviesByJQ(url){
    $.get(url).done((data)=>{
      showMovieByJQ(data.results);
    })
  }
  getMoviesByJQ(apiUrl);
  //show Movies Function
  function showMovieByJQ(data){
    data.forEach((movie) => {
      const { title, poster_path, id } = movie;
      const movieElement = $("<div></div>");
      movieElement.addClass("movie");
      movieElement.html(
        `
          <a href="./DetailsPage.html?id=${id}">
          <img src="${imgPath + poster_path}" alt="Move" />
          <h4 id="moveName">${title}</h4>
          </a>
        `
      );
      $(main).append(movieElement);
    });
  }
});

