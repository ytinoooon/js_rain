let drops = []; // List of all the drops
let howmany = 350; // The amount of the raindrops
let theshapes, thecolors;
function setup() {
    createCanvas(1900,1060);
    // creating the drops
    for(var i = 0; i <= howmany-1; i++ ) {
      drops[i] = new raindrop(color = blues); 
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
