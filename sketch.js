// colors
let colorful = ["#1e68d6","#8c41db","#f274ec","#cf364d","#49c9c5","#4ac742","#dbc029","#de972c"];
let colorful2 = ["#7CB9E8","#FC8EAC","#FC6C85","#FF9999","#FFD1DC","#FFB7C5","#E75480","F2DBE7"," #C32148","#00308F","#D8BFD8","#DDA0DD","#DDA0DD","#9932CC","#4B0082","#E0B0FF","#9A4EAE","#9400D3","#8A2BE2","#FF8C00","#E26310","#F5761A","#ED9121","#FBCEB1","#F0F8FF","#FFD700","#F0E68C","#FFC72C","#FEBE10","#fff9d7","#0066b2","#C60C30","#A52A2A","#660000","#FBCEB1","#fd5c63","#97233F","#A91101","#5072A7","#6699CC","#002244","#7B68EE","#367588","#018749","#006A4E","#ACE1AF","#008B8B","#A9BA9D","#568203","#1B4D3E","#1F305E"];
let blacknwhite = 255;
let blues = ["#7CB9E8","#00308F","#F0F8FF","#0066b2","#5072A7","#6699CC","#002244","#7B68EE","#367588","#1F305E"];
let greens = ["#018749","#006A4E","#ACE1AF","#008B8B","#A9BA9D","#568203","#1B4D3E",];
let reds = ["#C60C30","#A52A2A","#660000","#FBCEB1","#fd5c63","#97233F","#A91101"];
let yellows = ["#FFD700","#F0E68C","#FFC72C","#FEBE10","#fff9d7"];//"#FFFF00"]; 
let oranges = ["#FF8C00","#E26310","#F5761A","#ED9121","#FBCEB1"];
let purples = ["#D8BFD8","#DDA0DD","#DDA0DD","#9932CC","#4B0082","#E0B0FF","#9A4EAE","#9400D3","#8A2BE2"];
let pinks = ["#FC8EAC","#FC6C85","#FF9999","#FFD1DC","#FFB7C5","#E75480","F2DBE7"," #C32148"];
let strawberry_ice_cream  = ["#5997ac","#a1cbdd","#eeede7","#f7aec2","#af5166"];
let the_mist = ["#c4d0d9","#d1d9dc","#dde2e3","#9d9c9a","#72747a"];
let greentea = ["#766e3f","#a69e70","#b6b9a3","#dbdfd9","#eeefea"];
let chocolate_carrot = ["#e6e8ea","#e7dcc8","#a5694b","#582719","#1b0d13"];
let the_dance = ["#d73d6c","#d57276","#d6c2bc","#c0cccc","#65b2c6"];
let advanture_time = ["#727072","#e6cfbf","#ae7862", "#b18e2c","#2b3120"];
//------------------------------------------------------------------------------------------------
let drops = []; // List of all the drops
let howmany = 350; // The amount of the raindrops
let theshapes = ["line","circle","elipse","rectangle","square","random"];//these are the shapes you can chose
let theforbiddencolors = [advanture_time,chocolate_carrot,the_mist,greentea,strawberry_ice_cream,the_dance];
let thecolors = [colorful,colorful2,blacknwhite,blues,greens,reds,yellows,oranges,purples,pinks];//these are the colors you can chose
function setup() {
    createCanvas(1900,1060);
    // creating the drops
    for(var i = 0; i <= howmany-1; i++ ) {
      drops[i] = new raindrop(shape = theshapes[0],color = thecolors[3]); 
    }    //here you can change the shape^ and here it is  where you ^ can change the colors 
  }   

  function draw() {
    background(61); 
    //makeing them do stuff 
    for(var i = 0; i <= howmany-1; i++ ) {
      drops[i].show();
      drops[i].fall();
    }
    

}
