let elw1 = 21;
let elw2 = 50;
let elh1 = 30;
let elh2 = 100;
class elipse_raindrop {
    constructor(color) {
        this.x = random(x1,x2); // the starting position 
        this.y = random(y1,y2); //      for the raindrop
        this.s = random(s1,s2); // speed
        this.c = random(color);
        this.tempcolor = color; // color
        this.g = random(g1,g2);
        this.elw = random(elw1,elw2); // witdth (elipse)
        this.elh = random(elh1,elh2); // height (elipse)
    }
    fall() {
        this.y = this.y + this.s;
        this.s = this.s + this.g;
        if(this.y > height) {
            this.x = random(x1,x2); // the starting position 
            this.y = random(y1,y2); //      for the raindrop
            this.s = random(s1,s2); // speed
            this.c = random(this.tempcolor);// color
            this.g = random(g1,g2);
            this.elw = random(elw1,elw2); // witdth (elipse)
            this.elh = random(elh1,elh2); // height (elipse)
        }
    }
    show(){
        noStroke();
        fill(this.c);
        circle(this.x,this.y,this.elw,this.elh);
    }
}