//square params
let ss1 =10;
let ss2 =150;
class square_raindrop {
    constructor(color) {
        this.x = random(x1,x2); // the starting position 
        this.y = random(y1,y2); //      for the raindrop
        this.s = random(s1,s2); // speed
        this.c = random(color);
        this.tempcolor = color; // color
        this.g = random(g1,g2);
        this.ss = random(ss1,ss2);// side (square)
        
    }
    fall() {
        this.y = this.y + this.s;
        this.s = this.s + this.g;
        if(this.y > height) {
            this.x = random(x1,x2); // the starting position 
            this.y = random(y1,y2); //      for the raindrop
            this.s = random(s1,s2); // speed
            this.c = random(this.tempcolor); // color
            this.g = random(g1,g2);
            this.ss = random(ss1,ss2);// side (square) 
        }
    }
    show(){
        //SQUARE
        noStroke();
        fill(this.c);
        square(this.x,this.y,this.ss);
    }
}       