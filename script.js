function parameter(side){
    this.side = side 
    this.calculatep = function(){
    return 4 * this.side}
}

let P = new parameter(5)
let result = P.calculatep()
console.log(result)



function AreaOfCircle(radius){
    this.radius = radius
    this.calculateArea = function(){
    return Math.PI * Math.pow(this.radius, 2)

    }
}

let A = new AreaOfCircle(7)
let Area = A.calculateArea()
console.log(Area)