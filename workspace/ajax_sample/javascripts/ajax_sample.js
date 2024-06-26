let number = 0;
let data = []; // Añadir variable para almacenar los datos recuperados de ajax.json
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() { 
  const request= new XMLHttpRequest();
  request.onreadystatechange=()=> {
    if (request.readyState == 4) {
      if (request.status==200){
        data=(request.response)
        titleArea.innerHTML = data[number].title;
        contentArea.innerHTML = data[number].content;
        videoArea.setAttribute("src", data[number].url);
        number++
      }
    }
  } 
  request.open("GET", "ajax.json"); 
  request.responseType = "json"; 
  request.send(null); 
}

function changeVideo() {
  titleArea.innerHTML = data[number].title;
  contentArea.innerHTML = data[number].content;
  videoArea.setAttribute("src", data[number].url);
  if(number==2){
    number=0
  }else{
    number++
  }
}

window.onload = getData();

button.addEventListener('click',() => changeVideo())
