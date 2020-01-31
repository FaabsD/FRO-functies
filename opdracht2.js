let menu = [
    "Macaroni met ham en kaas",
    "Tagliatelli met ham en kaas",
    "Spaghetti met spinazie en room",
    "Macaroni met spinazie en room",
    "Tagliatelli met spinazie en room",
    "Spaghetti met gehakt-tomatensaus en kaas",
    "Macaroni met gehakt-tomatensaus en kaas",
    "Tagliatelli met gehakt-tomatensaus en kaas",
    "Spaghetti met spekjes, spinazie en room",
    "Macaroni met spekjes, spinazie en room",
    "Tagliatelli met spekjes, spinazie en room",
    "Spaghetti met courgette en tomatensaus",
    "Macaroni met courgette en tomatensaus",
    "Tagliatelli met courgette en tomatensaus",
    "Lasagne met courgette en tomatensaus",
    "Lasagne met room, doperwten en tomatensaus",
    "Lasagne met spinazie en tomatensaus en kaas"
];

orderedList();

function orderedList(){
    // Maak een Ordered list element aan
    let ol = document.createElement('ol');
    // pas de ol toe op de container
    document.getElementById('container').appendChild(ol);
    
    for (item in menu){
        let li = document.createElement('li');
        ol.appendChild(li);
        li.innerHTML = menu[item];
        
    }
}