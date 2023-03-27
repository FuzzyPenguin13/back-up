// this is a code comment//;
/* this is a comment */;
let q="fork";
q='knife';
q="spoon";
console.log(q);
var life=42;
life=42;
life="pain and suffering";
var life = "panic";
console.log(life);
const cd = "code";
console.log(cd);

//how to do math
let a=8;
let b=25;
let x=a+b;
console.log(x);
console.log(a+b);
let y= b-a;

console.log(b-a);
let ko= a*b;
console.log(ko)

let r= a/b;
console.log(r);
//modulus
let l=3;
let g=2;
let p= l%g;
console.log(p)
let v=g%l;
console.log(v);

//shortcuts
let was= a+=1
was=a++
let what = a-=17;
what = a--

//conditional statements
let pet="penguin"
if(pet=="penguin"){
    console.log("I have a cool pet");
    a=42;
    console.log(a)
}
else if(pet=="bearded dragon"){
    console.log("I have a drogon in my house")
    a=113;
    console.log(a)
}
else{
    console.log("I don't have a coolio pet")
}

let example=pet+a;
console.log(example)
let age = 17;
let condition=age>=5 && age<=19
if(age>=17){
    console.log("you can drive")
}
else if(age>=5 && age<=19){
    console.log("you could be in school")
}
else{
    console.log("nothing special is happening")
}
let house=true;
if(house){
    console.log("you live in a house")
}
else if(house==true){
    console.log("you most likely don't live in a house")
}
else if(house || condition){
    console.log("you are either a child or a dinosoar")
}

//assignment starts here
//A penguin is being sent to space he must learn to fly.... for the third time
let pengu_weight = 5
//all rocket information
let rocket = 6
let rocket_weight = rocket*1.5
//launcher information
let launcher = 13
//calculating the power at which the rocket flies also determining the distance it goes
let power = rocket+launcher
// calculating the weight also determines if the penguin flew or not
let weight = rocket_weight+pengu_weight
let distance = power/2
//deciding if the penguin lifted off
if(power>weight){
    console.log("penguin has lift off")
}
//deciding if the penguin did not lift off
else if (power<weight-10){
    console.log("penguin didn't leave the ground")
}
//deciding if the penguin flew then crashed
else if(power<=weight && distance>5){
    console.log("penguin has crashed")
}
if(distance>80){
    console.log("your penguin has made it to space")
}
