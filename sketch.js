//colors and shapes
let theshapes = ["line","circle","elipse","rectangle","square","random"];//these are the shapes you can chose
let theforbiddencolors = [advanture_time,chocolate_carrot,the_mist,greentea,strawberry_ice_cream,the_dance];
let thecolors = [colorful,colorful2,blacknwhite,blues,greens,reds,yellows,oranges,purples,pinks];//these are the colors you can chose
//===================================================================
let drops = []; // List of all the drops
let howmany = 350; // The amount of the raindrops
//===================================================================
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
