//The class Movie is stated below. An instance of class Movie represents a film.
// This class has the following three properties:

//title, which is a String representing the title of the movie
//studio, which is a String representing the studio that made the movie
//rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
//a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
 //  a String representing the studio, and a String representing the rating as its arguments,
  // and sets the respective class properties to these values.

  class movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  //respective class properties to these values.
    getrating() {
      return this.rating;
    }
  }
  
  var m1 = new movie("Casino Royale","Eon Productions","PG13");
  console.log(`the rating is ${m1.getrating()}`);

 // b) The constructor for the class Movie will set the class property rating to "PG"
 // as default when no rating is provided.

 class movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating || "PG";
  }
 }

var m1 = new movie("Casino Royale","Eon Productions","PG13");
var m2 = new movie("Don","Red Gaint");
console.log(m1);
console.log(m2);

  
 //c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array
  //  of only those movies in the input array with a rating of "PG". You may assume the input array is full of
   // Movie instances. The returned array need not be full.

   class Movie {

    static all = [];

    constructor(title,studio,rating) {
        this.title = title;
         this.studio = studio;
         this.rating = rating;
        Movie.all.push(this);
    }
}

 var m1 = new Movie("Casino Royale","Eon Productions","PG13");
  var m2 = new Movie("Don","Red Gaint");

console.log(Movie.all);

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
// the studio “Eon Productions”, and the rating “PG­13”

var m1 = new Movie("Casino Royale","Eon Productions","PG13");

//2.Convert the UML diagram to Typescript class. - use number for double

class circle{
    constructor(radius,circle){
        this.radius=radius;
        this.circle=circle;
    }
    getRadius(){
        console.log(`Radius of circle is: ${this.radius}`)

    }
    getRadius(){

    }
    getColor(){
        console.log(`colorof ciecle is: ${this.color}`)
    }
    getArea(){
        const p1 = 3.14;
        console.log(`Area of circle is: ${p1*(this.radius*this.radius)}`)
}
getCircumference(){
    const p1 = 3.14;
    console.log(`Circumference of circle is: ${2*p1*this.radius}`)
}
}

let c1 = new circle(2.0,"black");

circle.getRadius();
circle.getColor();
circle.getArea();
circle.getCircumference();

//3.Write a “person” class to hold all the details.

class person {
    constructor(firstname, lastname, age, phone, mail ) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age ;
      this.phone = phone;
      this.mail = mail;
    }
    
    }


  var p1 = new person("Vichu","Vishwa","22","1234567890","vishwavichu004@gmail.com");
  console.log(p1);
  
 //4. write a class to calculate the uber price.

 
class Uber
{
    
    constructor(distance,pricePerKm)
    {
        this.defaultDistance = distance;
        this.defaultPricePerKm = pricePerKm;
        this.defaultBillAmount = this.defaultDistance*this.defaultPricePerKm;
    }
    calculation(distance,pricePerKm)
    {
        
        this.distance=distance;
        this.pricePerKm=pricePerKm;
        if(this.distance<1)
        this.billAmount=this.defaulBillAmount;
        else
        this.billAmount=this.distance*this.pricePerKm;
        
    }
    displayResult()
    {
        console.log(`Travelled Distance = ${this.distance} km \nBill Amount : ${this.billAmount}`);
    }

}
const uberobject=new Uber();

uberobject.calculation(3,30);
uberobject.displayResult();
uberobject.calculation(17,30);
uberobject.displayResult();
uberobject.calculation(27,30);
uberobject.displayResult();
