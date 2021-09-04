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
    }
    console.log("changes:\n" + "   color: " + color + "\n" + "   shape: " + theshape);
    for(var i = 0; i <= howmany-1; i++ ) {
      drops[i] = new raindrop(theshape,thecolor); 
    }
}    