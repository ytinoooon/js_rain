class colorselect {
    constructor(a) {
        this.sel = createSelect();
        this.sel.position(0,910);
        this.sel.option("blues");
        this.sel.option("colorful");
        this.sel.option("blacknwhite");
        this.sel.style('background-color',"#76B3FA");
        this.sel.style('background-color',"#76B3FA");
        this.sel.style('border-radius',"50px");
        this.sel.style("border","none");
        this.sel.style("padding","10px 30px");
        this.sel.style("color", "#fff");
        this.sel.style("text-decoration", "none");       
        this.sel.style("font-size", "1.45em")
        this.sel.style("margin", "0 15px");
        this.color = this.sel.value();
        this.sel.changed(a);
    }
} 