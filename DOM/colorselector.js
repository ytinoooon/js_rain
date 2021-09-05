class colorselect {
    constructor(a) {
        this.sel = createSelect();
        this.sel.position(190,910);
        this.sel.option("blues");
        this.sel.option("colorful");
        this.sel.option("colorful2");
        this.sel.option("blacknwhite");
        this.sel.option("greens");
        this.sel.option("reds");
        this.sel.option("yellows");
        this.sel.option("oranges");
        this.sel.option("purples");
        this.sel.option("pinks");
        this.sel.style("opacity","70%");
        this.sel.style("outline", "none");
        this.sel.style("box-shadow","none");
        this.sel.style('background-color',"#bbbdbc");
        this.sel.style('border-radius',"50px");
        this.sel.style("border","none");
        this.sel.style("padding","10px 30px");
        this.sel.style("color", "#fff");
        this.sel.style("text-decoration", "none");       
        this.sel.style("font-size", "1.45em")
        this.sel.style("margin", "0 15px");
        this.sel.changed(a);
    }
} 