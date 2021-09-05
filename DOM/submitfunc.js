function submit() {
    let thecolor;
    let theshape = shapeselector.ssel.value();
    let color = colorselector.sel.value(); 
    if(color == "blues"){
      thecolor = blues;
    } else if(color == "colorful") {
      thecolor = colorful;
    } else if(color == "blacknwhite") {
      thecolor = blacknwhite;
    } else if(color == "colorful2") {
      thecolor = colorful2;
    } else if(color == "greens") {
      thecolor = greens;
    } else if(color == "reds") {
      thecolor = reds;
    } else if(color == "yellows") {
      thecolor = yellows;
    } else if(color == "oranges") {
      thecolor = oranges;
    } else if(color == "purples") {
      thecolor = purples;
    } else if(color == "pinks") {
      thecolor = pinks;
    } else if(color == "strawberry ice cream") {
      thecolor = strawberry_ice_cream;
    } else if(color == "the mist") {
      thecolor = the_mist;
    } else if(color == "greentea") {
      thecolor = greentea;
    } else if(color == "chocolate carrot") {
      thecolor = chocolate_carrot;
    } else if(color == "the dance") {
      thecolor = the_dance;
    }  else if(color == "advanture time") {
      thecolor = advanture_time;
    } else if(color == "mix") {
      thecolor = mix;
    }
    console.log("changes:\n" + "   color: " + color + "\n" + "   shape: " + theshape);
    for(var i = 0; i <= howmany-1; i++ ) {
      drops[i] = new raindrop(theshape,thecolor); 
    }
}    