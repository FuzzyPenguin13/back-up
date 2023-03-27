// //1. select the element you want to modify
// let sign=document.getElementById("sign");
// console.log(sign);
// //2. modify
// //modifying text
// sign.textContent="Chicken Tendies!!!! >:D"

// sign.innerHTML=sign.innerHTML+"<p style=color:blue>Dino Nuggies are pretty good too :P</p>"
// //modify the color
// sign.style.color="rgb(69,42,7)";
// //Function for showing the question
// function showQuestion(q){
//     //1. select the dom element
//     let titleDiv=document.getElementById("title");
//     //modify it
//     titleDiv.textContent=q.title;
//     //select by query
//     let alts=document.querySelectorAll(".alternative");
//     alts.forEach(function(element,index){
//         element.textContent=q.althernatives[index];
//     })
// }
// showQuestion(question)
// //1. select the element you want to modify
// let sign=document.getElementById('tree');
// console.log(tree);
// //2. modify
// //modifying text
// tree.textContent='DINO NUGGGGIIEEEESSSSS!!!!!';

// tree.innerHTML=tree.innerHTML+'<p style=color: blue>Dino nuggies are the best in the entire world!</p>'
// //modify color
// tree.style.color='green';
let mainTitle="Minecraft Quiz"
let questions=[
    {
        title: 'how much health does the ender dragon have?',
        alternatives:['200','1000','500','50'],
        correctAnswer: 0
    },
    {
        title: 'what is your favorite number of the alphabet?',
        alternatives:['Yes','42','blue','J'],
        correctAnswer: 2
    },
    {
        title: 'Which pickaxe mines the fastest?',
        alternatives:['Diamond','stone','leather','gold'],
        correctAnswer: 3
    },
    {
        title: 'How much gold do you need to craft a netherite ingot?',
        alternatives:['2','4','10',"You don't need gold"],
        correctAnswer: 1
    },
    {
        title: 'How much gravel do you need to make coarse dirt?',
        alternatives:['4','All of it','Coarse dirt is ugly no one would ever craft it','2'],
        correctAnswer: 2
    },
    {
        title: 'What is the average velocity of an unladen swallow?',
        alternatives:['African or European?','coconuts','What?','24 miles per hour'],
        correctAnswer: 0
    },
    {
        title: 'When did Penguins learn to fly?',
        alternatives:['65 million years ago','Never','2011','They could always fly'],
        correctAnswer: 2
    },
    {
        title: "Where do you mine Netherite?",
        alternatives:['The aether','The End','the nether',"you don't"],
        correctAnswer: 3
    },
    {
        title: "What's the biggest thing in the world?",
        alternatives:["the mountains","the sky","A windmill","NOOOOO"],
        correctAnswer: 2
    },
    {
        title: "What are creepers scared of?",
        alternatives:['Cats','Chickens','Pigs','Mooshroom Cows'],
        correctAnswer: 0
    },
    {
        title: 'What food breeds parrots?',
        alternatives:['Wheat Seeds','Cookies', "Coco beans", "you can't"],
        correctAnswer: 3
    },
]
let app={
    start:function(){
        let alts=document.querySelectorAll('.alternative');
        this.currPosition=0
        this.score=0
        //show alternatives
        //bind approach
        alts.forEach(function(element,index){
            element.addEventListener('click',function(){
                this.checkAnswer(index);
            }.bind(this))
        }.bind(this))
        this.showQuestion(questions[this.currPosition]);
        this.updateStats();
    },
    showQuestion:function(q){
        this.currQuestion=q
        //1. select the dom element
        let titleDiv=document.getElementById("title");
        //modify it
        titleDiv.textContent=q.title;
        //select query
        let alts=document.querySelectorAll('.alternative');
        //show alternatives
        alts.forEach(function(element,index){
            element.textContent=q.alternatives[index];
        })
    },
    checkAnswer:function(userSelected){
        let currQuestion=questions[this.currPosition]
        if(this.currQuestion.correctAnswer==userSelected){
            console.log("Correct Answer");
            this.score++;
            this.showResults(true)
        }
        else{
            console.log("Wrong Answer")
            this.showResults(false);
        }
        //add next class
        this.increasePosition();
        //show next question
        this.showQuestion(questions[this.currPosition]);
        this.updateStats();
    },
    increasePosition:function(){
        //increase current position
        this.currPosition++;
        //send back to start
        if(this.currPosition==questions.length){
            this.currPosition=0;
        }
    },
    updateStats:function(){
        //select score div
        let scoreDiv=document.getElementById("score");
        //modify the text
        scoreDiv.textContent="Your Score: "+this.score
    },
    showResults:function(isCorrect){
        //select results div
        let resultsDiv=document.getElementById("results");
        let result=""
        if(isCorrect){
            result="Correct Answer";
        }
        else{
            //what is our current question
            let currQuestion=questions[this.currPosition];
            //get the correct answer
            let currAnsIndex=currQuestion.correctAnswer;
            //answer text
            let correctText=currQuestion.alternatives[currAnsIndex];
            result=correctText;
            result="Incorrect, the correct answer is "+correctText;
        }
        resultsDiv.textContent=result;
    }
}
app.start();
//1. select the element
let booton=document.getElementById('booton');
booton.addEventListener('click',function(){
    console.log("Booton has been pressed")
})
