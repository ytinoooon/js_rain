//general params
let x1 = 1;
let x2 = 1899;
let y1 = -300;
let y2 = -400;
let s1 = 1;
let s2 = 5;
let g1 = 0.1;
let g2 = 0.3;
// line params
let l1 = 20;
let l2 = 250;
let w1 = 10;
let w2 = 100;
//circle params
let d1 = 12;
let d2 = 200;
//elipse params
let elw1 = 21;
let elw2 = 50;
let elh1 = 30;
let elh2 = 100;
//rectangle params
let rw1 = 13;
let rw2 = 174;
let rh1 = 14;
let rh2 = 200;
//square params
let ss1 =10;
let ss2 =150;
///////THE CLASS//////////
class raindrop {
    constructor(shape,color) {
        if(this.shape == "random"){
            this.shape = random(theshapes); // every single shape that is defined can apear
        }else {
            this.shape = shape; 
            this.ape = this.shape;
        }
        //---------------general---------------------------
        this.x = random(x1,x2); // the starting position 
        this.y = random(y1,y2); //      for the raindrop
        this.s = random(s1,s2); // speed
        this.c = random(color); // color
        this.coolor = color;
        this.g = random(g1,g2); // gravitational stuff
        //----------------line----------------------------- 
        this.l = random(l1,l2); // lenght (line)
        this.w = random(w1,w2); // width (line)
        //----------------circle---------------------------
        this.d = random(d1,d2);// diameter (circle)
        //----------------elipse---------------------------
        this.elw = random(elw1,elw2); // witdth (elipse)
        this.elh = random(elh1,elh2); // height (elipse)
        //---------------rectangle-------------------------
        this.rw = random(rw1,rw2); // width (rect)
        this.rh = random(rh1,rh2);// height (rect)
        //---------------square----------------------------
        this.ss = random(ss1,ss2);// side (square)
     }
    
    fall() {
        this.y = this.y + this.s;
        this.s = this.s + this.g;
            if(this.y > height) {
                // I included every single variable from the constructer,
                //       because with each "generation" I wanted the atributes to never be the same. 
                if(this.shape == "random"){
                    this.shape = random(theshapes);// every single shape that is defined can apear
                }else {
                    this.shape = this.ape;
                }
                this.x = random(x1,x2); // the starting position 
                this.y = random(y1,y2); //      for the raindrop
                this.s = random(s1,s2); // speed
                this.c = random(this.coolor); // color
                this.g = random(g1,g2); // gravitational stuff
                //----------------line----------------------------- 
                this.l = random(l1,l2); // lenght (line)
                this.w = random(w1,w2); // width (line)
                //----------------circle---------------------------
                this.d = random(d1,d2);// diameter (circle)
                //----------------elipse---------------------------
                this.elw = random(elw1,elw2); // witdth (elipse)
                this.elh = random(elh1,elh2); // height (elipse)
                //---------------rectangle-------------------------
                this.rw = random(rw1,rw2); // width (rect)
                this.rh = random(rh1,rh2);// height (rect)
                //---------------square----------------------------
                this.ss = random(ss1,ss2);// side (square)
        }
    }

    show() {
        if(this.shape == "line") {
            //LINE
            strokeWeight(this.w);
            stroke(this.c)
            line(this.x,this.y,this.x,this.y + this.l); 
        } else if(this.shape == "circle") {
            //CIRCLE
            noStroke();
            fill(this.c);
            circle(this.x, this.y,this.d);
        } else if(this.shape == "elipse") {
            //ELIPSE
            noStroke();
            fill(this.c);
            circle(this.x,this.y,this.elw,this.elh);
        } else if(this.shape == "rectangle") {
            //RACTANGLE
            noStroke();
            fill(this.c);
            rect(this.x, this.y, this.rw,this.rh);
        } else if(this.shape == "square") {
            //SQUARE
            noStroke();
            fill(this.c);
            square(this.x,this.y,this.ss);
        }
      
    }
}
