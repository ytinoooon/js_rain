//general params
let x1 = 1;
let x2 = 1899;
let y1 = -300;
let y2 = -400;
let s1 = 1;
let s2 = 5;
let g1 = 0.1;
let g2 = 0.3;
///////THE CLASSES//////////
class raindrop {
    constructor(shape,color) {
    this.shape = shape;
    if(this.shape == "line"){
        this.raindrop = new line_raindrop(color);
    } else if(this.shape == "circle") {
        this.raindrop = new circle_raindrop(color);
    } else if(this.shape == "elipse") {
        this.raindrop = new elipse_raindrop(color);
    } else if(this.shape == "rectangle") {
        this.raindrop = new ractangle_raindrop(color);
    } else if(this.shape == "square"){
        this.raindrop = new square_raindrop(color);
    }
    }
    fall() {this.raindrop.fall();}
    show() {this.raindrop.show();}
}

