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
    constructor(colors) {
        this.line = new line_raindrop(colors);
    }
    
    fall() {
        this.line.fall();
    }

    show() {
        this.line.show();
    }
}

