//Penguin characteristics
let fish={
    name:"fish"
}
let penguin={
    name:"Penguin",
    phealth:30,
    //penguin inventory
    list:[fish,"water bottle","blue scarf"],
    eat: function(food){
        if(food="fish"){
            this.phealth+=7
            //shows that you have used the fish
            penguin.list[0]="used"
        }
    },
    //penguins attacking functions
    pAttack:true,
    attack:function(polarbear){
        if(this.pAttack==true){
            let i=5;
            while(i>0){
                polarbear.pbhealth--
                i--;
            }
        }
    }

}
console.log(penguin)
penguin.eat("fish");
console.log(penguin)
//polarbear characteristics
let polarbear={
    name:"Polar Bear",
    pbhealth:50,
    //polarbear inventory
    list:["red socks","iron claws","striped beanie"],
    pbattack:true,
    attack:function(penguin){
        if(this.pbattack==true){
            let i=10;
            while(i>0){
                penguin.phealth--
                i--;
            }
        }
    }
}
console.log(polarbear)
let j=2
while(j>0){
    penguin.attack(polarbear)
    j--
}
let a=3
while(a>0){
    polarbear.attack(penguin)
    a--
}
console.log(polarbear)
console.log(penguin)