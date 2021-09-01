let l1 = 20;
let l2 = 250;
let w1 = 10;
let w2 = 100;
class line_raindrop {
    constructor(color) {
        this.x = random(x1,x2); // the starting position 
        this.y = random(y1,y2); //      for the raindrop
        this.s = random(s1,s2); // speed
        this.c = random(color); // color
        this.tempcolor = color; // tempcolor
        this.g = random(g1,g2);
        this.l = random(l1,l2);
        this.w = random(w1,w2);
    }
    fall() {
        this.y = this.y + this.s;
        this.s = this.s + this.g;
        if(this.y > height) {
            this.x = random(x1,x2); // the starting position 
            this.y = random(y1,y2); //      for the raindrop
            this.s = random(s1,s2); // speed
            this.c = random(this.tempcolor); // tempcolor
            this.g = random(g1,g2);
            this.l = random(l1,l2);
            this.w = random(w1,w2);
        }
    }
    show(){
        strokeWeight(this.w);
        stroke(this.c)
        line(this.x,this.y,this.x,this.y + this.l);
    }
}