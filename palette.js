class Color {

    constructor(r,g,b){
        this.r = r;
        this.g = g;
        this.b = b;
    }

    generateColor(){
        this.r = Math.floor(Math.random() * 256);
        this.g = Math.floor(Math.random() * 256);
        this.b = Math.floor(Math.random() * 256);
    }
}