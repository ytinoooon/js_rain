let d1 = 12;
let d2 = 200;
class circle {
    constructor() {
        this.x = random(x1,x2); // the starting position 
        this.y = random(y1,y2); //      for the raindrop
        this.s = random(s1,s2); // speed
        this.c = random(color); // color
        this.g = random(g1,g2); // gravitational stuff
        this.d = random(d1,d2);// diameter (circle)
    }
    fall() {
        this.y = this.y + this.s;
        this.s = this.s + this.g;
        if(this.y > height) {
            this.x = random(x1,x2); // the starting position 
            this.y = random(y1,y2); //      for the raindrop
            this.s = random(s1,s2); // speed
            this.c = random(color); // color
            this.g = random(g1,g2); // gravitational stuff
            this.d = random(d1,d2);// diameter (circle) 
        }
    }
    show() {
        noStroke();
        fill(this.c);
        circle(this.x, this.y,this.d);
    }
}