class refreshbtn {
    constructor(a) {
        this.button = createButton("change the color",);
        this.button.position(0,920);
        this.button.style('background-color',"#76B3FA");
        this.button.style('background-color',"#76B3FA");
        this.button.style('border-radius',"50px");
        this.button.style("border","none");
        this.button.style("padding","10px 30px");
        this.button.style("color", "#fff");
        this.button.style("text-decoration", "none");       
        this.button.style("font-size", "1.45em")
        this.button.style("margin", "0 15px");
        this.button.mousePressed(a);
    }
}