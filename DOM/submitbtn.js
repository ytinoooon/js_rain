class submitbtn {
    constructor(a) {
        this.button = createButton("submit",);
        this.button.position(210,910);
        this.button.style("opacity","70%");
        this.button.style("outline", "none");
        this.button.style("box-shadow","none");
        this.button.style('background-color',"#bbbdbc");
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