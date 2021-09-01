let rw1 = 13;
let rw2 = 174;
let rh1 = 14;
let rh2 = 200;
class ractangle_raindrop {
    constructor(color) {
        this.x = random(x1,x2); // the starting position 
        this.y = random(y1,y2); //      for the raindrop
        this.s = random(s1,s2); // speed
        this.c = random(color);
        this.tempcolor = color; // color
        this.g = random(g1,g2);
        this.rw = random(rw1,rw2); // width (rect)
        this.rh = random(rh1,rh2);// height (rect)
        
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
            this.rw = random(rw1,rw2); // width (rect)
            this.rh = random(rh1,rh2);// height (rect)    
        }
    }
    show(){
        noStroke();
        fill(this.c);
        rect(this.x, this.y, this.rw,this.rh);
    }
}