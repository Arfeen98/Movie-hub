let timerid;
let parent=document.getElementById("container");
let slideshow=document.getElementById("slideshow");

let i=1;
let slidearr=[];
const movi1=('https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8811/1148811-h-d0a9fd6509cd')
const movi2=('https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4469/674469-h')
const movi3=('https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4619/674619-h')
const movi4=('https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4600/674600-h')

slidearr.push(movi1);
slidearr.push(movi2);
slidearr.push(movi3);
slidearr.push(movi4);

let img=document.createElement("img");

img.src=slidearr[0];

slideshow.append(img);

setInterval (()=>{
if(i==slidearr.length){
 i=0;
}
slideshow.innerHTML=null;
let image=slidearr[i];
let img=document.createElement("img");
img.src=image;
slideshow.append(img);
i++;
},3000);

let url=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7a2c71d372bbd659117f5f13841473a9`;
const getdata= async (url)=>{
try{
 let res=await fetch (url);
 let data1= await res.json(); 
 let data=data1.results;
// console.log(data);
 append(data);
}
catch(error){
    console.log(error);
}
}

const append =(data)=>{
parent.innerHTML=null;

data.map((elem)=>{
 let div=document.createElement("div");

 let t=document.createElement("p");
 t.innerText="Title :"+elem.title;

 let date=document.createElement("p");
 date.innerText=("Release Date :")+elem.release_date;

 let img=document.createElement("img");
 img.src="https://image.tmdb.org/t/p/w500"+elem.backdrop_path;
 
 let rating=document.createElement("p");
 rating.innerText=("Rating :")+elem.vote_average;

 div.append(img,t,rating,date);

 parent.append(div);

 div.onclick=()=>{
//console.log("Hello");
 localStorage.setItem("title",JSON.stringify(elem.title));
  window.location.href="about.html";

 }
});
}
getdata(url);
const getdata1= async (input)=>{
let url1=`https://www.omdbapi.com/?s=${input}&apikey=4ffaa686`;
try{
 let res=await fetch (url1);
 let data1= await res.json(); 
// console.log(data1);
 let data2=data1.Search;
return (data2);
}
catch(error){
    console.log(error);
}
}

const append1=(info)=>{
parent.innerHTML=null;
info.map((el)=>{
let div=document.createElement("div");
let name=document.createElement("p");
name.innerText=("Title  :")+el.Title;

let release=document.createElement("p");
release.innerText=("Release  :")+el.Year;
let image=document.createElement("img");
image.src=el.Poster;

div.append(image,name,release);
parent.append(div);

div.onclick=()=>{
//console.log("Hello");
localStorage.setItem("title",JSON.stringify(el.Title));
window.location.href="about.html";
}
});
}


const main= async()=>{
let input=document.getElementById("search").value;
//console.log(input);
let info=await getdata1(input);

if(info==undefined){
return false;
}
append1(info);
}

const debounce= (main,delay)=>{
if (timerid){
 clearTimeout(timerid);
}
timerid=setTimeout(()=>{
    main();
},delay);
}

