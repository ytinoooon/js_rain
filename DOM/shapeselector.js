class shapeselect {
    constructor() {
        this.ssel = createSelect();
        this.ssel.position(0,855);
        this.ssel.option("line");
        this.ssel.option("circle");
        this.ssel.option("ractangle");
        this.ssel.style('background-color',"#76B3FA");
        this.ssel.style('background-color',"#76B3FA");
        this.ssel.style('border-radius',"50px");
        this.ssel.style("border","none");
        this.ssel.style("padding","10px 30px");
        this.ssel.style("color", "#fff");
        this.ssel.style("text-decoration", "none");       
        this.ssel.style("font-size", "1.45em")
        this.ssel.style("margin", "0 15px");
        this.shape = this.ssel.value();
    }
} 