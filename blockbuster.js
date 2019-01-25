let list =[];


function searchAllFilms() {
let requestURL = 'http://localhost:8080/api/film'
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.setRequestHeader("Content-type", "application/json");
request.setRequestHeader("Access-Control-Allow-Origin", "*");
request.reponseType = 'json'
request.send();

request.onload = function() {
    console.log("load");
    film = request.response
    
    let film = JSON.parse(request.response); 
    let doc = document.getElementId("searchfilm").value;

}         
        for(i = 0; i< film.length; i++){
                if(film[i].title.includes(doc.uppercase()))  {
                    console.log("hi");
                    document.getElementById("sfilm").innerHTML += flist[i].title + "<br>" + list[i].description+ "<br>";
                    console.log( film[i].title + film[i].decription)
            }

           // function searchtitle(film){
              //  document.getElementById("stitle").innerHTML = "";
                   // for(i = 0; i<flist.length; i++){
                      //      if(list[i].title.includes(film.value.uppercase())){
                       //         document.getElementById("stitle").innerHTML += flist[i].title + "<br>";
            
                        }
                    }

