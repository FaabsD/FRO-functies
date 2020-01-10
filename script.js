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
showMenu();
function showMenu(){
    for (item in menu){
        console.log(menu[item]);
    }
}