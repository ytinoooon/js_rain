class shapeselect {
    constructor(a) {
        this.ssel = createSelect();
        this.ssel.position(0,910);
        this.ssel.option("line");
        this.ssel.option("circle");
        this.ssel.option("rectangle");
        this.ssel.style("opacity","70%");
        this.ssel.style("outline", "none");
        this.ssel.style("box-shadow","none");
        this.ssel.style('background-color',"#bbbdbc");
        this.ssel.style('border-radius',"50px");
        this.ssel.style("border","none");
        this.ssel.style("padding","10px 30px");
        this.ssel.style("color", "#fff");
        this.ssel.style("text-decoration", "none");       
        this.ssel.style("font-size", "1.45em")
        this.ssel.style("margin", "0 15px");
        this.ssel.changed(a);
    }
} 