let btn=document.getElementById("btn")
let namee = document.getElementById("name");
let image = document.getElementById("image");


let cont=[{ name:"Tteokbokki", image:"8.jpg"},{name:"Yoonkook", image:"2.jpg"},
    {name:"Dumplings", image:"3.jpg"},{name:"Gimbap", image:"7.jpg"},{name:"Korean Corn Dogs", image:"9.jpg"}

];
btn.onclick =function(){
    var winner =  cont[Math.floor(Math.random() * cont.length)]  
    namee.innerHTML = winner.name;
    image.src = winner.image;
    image.style.display ="block";


                              
};

