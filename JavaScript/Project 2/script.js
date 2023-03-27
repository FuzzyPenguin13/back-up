//global variables
let scores=10
//functions
let score=17; //global variable
function hoursToMin(hours){
    let result = hours*60;//local only used by function
    console.log(result);
    return result;
}
let a = hoursToMin(38);
console.log(a);
let result=16;
function daysToHours(days){
    return days*24;
}
let day = daysToHours(16);
console.log(day);
day=daysToHours(1645);
console.log(day);
//checking an item
let balance=100;
let stock=50;
let price= 5;
function sellItem(quantity){
    //function decleration
    if(stock>=quantity){
    stock-=quantity

    //stock = stock - quantity
    balance+=price*quantity
    //balance = balance + price * quantity
    //you used the wrong variable, used stock instead of price
    console.log("purchase completed " + balance +"$" + 'stock items')
    }
    else{
        console.log("no sale, try again")
    }
}
//calling a function
// sellItem(10)
// //objects
// // let player={
// //     age: 3,
// //     hp: 0.5,
// //     stamina: 'lots',
// //     size: 'chubby boi',
// //     outfit:{
// //         color:"white",
// //         fabric:'chain',
// //         type:'diaper'
// //     }

// // };
// // console.log(player)
// // //access parts of an object
// // console.log(player.age,player.size)
// // console.log(player["age"]);
// // //modify peices of our object
// // player.age=27;
// // console.log(player.age);
// // player.outfit.color="brown";
// // console.log(player);
// // //add stuff to our object
// // player.name="fred mc flickster"
// // console.log(player);
// // //delete parts of our object
// // delete player.outfit;
// // console.log(player);
// // //methods
 let human={
     health:100,
     fun:0,
     play: function(food){
        if(food=="apple"){
            this.health+=10
         }
         else if(food=="candy"){
             this.health+=5;
             this.fun+=5;
         }
     }
 }
// //call method
human.play("apple");
console.log(human);
human.play("candy");
console.log(human);
//hippo object
let hippo={
    hippoMurder:true,
    hippoAttack:function(human){
        if(this.hippoMurder==true){
            delete human
            console.log("you died")
            console.log("hippos kill 500 people yearly, you were one of them :>")
        }
    }
}
hippo.hippoAttack(human);
//while looops
function sendHelp(){
    console.log("Send Help!")
}
let i=10;
while(i>0){
    sendHelp();
    i--;
    //i=i-1
    //i-=1
}
for(let a=10;a>0;a--){
    sendHelp();
}
//practice, socks, baseball bats, toilet paper
let toiletPaper={
    color:"white",
    health:20,
}
let socks={
    color:"red",
    size:"3 inch",
    teeth:{
        color:"red",
        pointy:"sharp"
    },
    socksSmack:true,
    socksAttack:function (toiletPaper){
        if(this.socksSmack==true){
            
            console.log("the TP has been hurt")

        }
    }

    }

let baseballBat={
    color:"black",
    spikey:"spiked"
}
//arrays (lists)
let list=["immortal groundhog",138,"gobblers knob","he is right 42% of the time"]
console.log(list);
//change the information
list[3]="he is right 50%"
console.log(list);
//access information
let groundhog=list[1];
console.log(groundhog);
list[1]=175;
console.log(groundhog);
//access the last piece of our list
let log=list[list.length-1];
let last=list.length;
console.log(log)
console.log(last);
//add items
list.push("lives in the library");
console.log(list);
//delete the last item
list.pop();
console.log(list);
//iterating over arrays
let highScores=[78,97,105];
//increase all scores by 1
let j=0;
while(j<highScores.length){
    highScores[j]++;
    j++;
}
console.log(highScores);
let bestDay=[
    {
        title: "Groundhog Day",
        worth: "nothing",
        person: "only Mr. Black"
    },
    {
        title: "Feb. 18th",
        worth: "very much good",
        person: "Kaden"
    },
    {
        title: "Feb. 26th",
        worth: "quite a lot",
        person: "Mr. Black"
    }
]
bestDay.forEach(function(entry){
    if(entry.title=="Groundhog Day"){
        entry.title="GroundHog Day"
    }
       else if(entry.title!="Groundhog Day"){
        entry.title="groundHog Day";
       }
})
console.log(bestDay);
//multidimensional arrays
let array=[[1,2,3],[4,5,6,],[7,8,9]];
console.log(array);
console.log(array[0][0]);
let terrain=[
    ["desert","desert","forest","beach"],
    ["desert","forest","beach","island"],
    ["mine","forest","burned out forest","lake"],
]
console.log(terrain);
terrain[0][3]="forest";
terrain[1][2]="forest";
console.log(terrain);
//project 2
