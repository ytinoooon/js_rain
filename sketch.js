let drops = []; // List of all the drops
let howmany = 350; // The amount of the raindrops
let theshapes;
let thecolors = [colorful,colorful2,blacknwhite,blues,greens,reds,yellows,oranges,purples,pinks,strawberry_ice_cream,the_mist,greentea,chocolate_carrot,the_dance,advanture_time ];
let rbtn;
function setup() {
    createCanvas(1900,1060);
    // creating the drops
    colorselector = new colorselect();   
    shapeselector = new shapeselect();
    submitbtn = new submitbtn(submit);
    let thecolor = random(thecolors);
    for(var i = 0; i <= howmany-1; i++ ) {
      drops[i] = new raindrop("line",thecolor); 
    }
}     
function draw() {
  background(61); 
  //makeing them do stuff
  for(var i = 0; i <= howmany-1; i++ ) {
      drops[i].show();
      drops[i].fall();
  }
}
