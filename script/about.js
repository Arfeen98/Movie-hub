
let title=JSON.parse(localStorage.getItem("title"));
//console.log(title); 
async function makereq(){  
  let url=`https://www.omdbapi.com/?t=${title}&apikey=4ffaa686`;   
    try{
        let req=await fetch(url);
    let data=await req.json();
    console.log(data);
     appendproducts(data);  
    }
    catch(err){
//         console.log(err);
    }
}

makereq();

let container=document.getElementById("container");

 function appendproducts(data){
   //  console.log("Hi");
         let {Actors,BoxOffice,imdbRating,Plot,Title,Poster}=data;
      //   console.log(Actors);
         let rating=imdbRating;
         if(imdbRating>=8.5){
          rating=`${imdbRating} Recommended`;
        }
      //   console.log("Hi");
         let div=document.createElement("div");
         div.setAttribute("class","d-flex justify-content-center")
         div.innerHTML=
          ` 
          <div>
             <img src=${Poster} class="img-fluid rounded-start size" alt="...">
           </div>
             <div class="card-body">
              <h4><u>Title</u></h4>
              <h4 class="card">${Title}</h4>
              <h4><u>Actors</u></h4>
              <p class="card">${Actors}</p>
              <h4><u>Box Office</u></h4>
              <p class="card">${BoxOffice}</p>
              <h4><u>IMDB Rating</u></h4>
              <p class="card">${rating}</p>
              <h4><u>About</u></h4>
               <p class="card">${Plot}</p>              
       </div>`
    container.append(div);
    }