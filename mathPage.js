player1Name = localStorage.getItem("player1Name")

player1Score = 0 ;

document.getElementById("player1Name").innerHTML = player1Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score;

player2Name = localStorage.getItem("player2Name")

player2Score = 0;

document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player2Score").innerHTML = player2Score;

document.getElementById("playerQuestion").innerHTML = "Question Turn : " + player1Name;

document.getElementById("playerAnswer").innerHTML = "Answer Turn : " + player2Name;

var questionTurn = "player1";
var answerTurn = "player2";
var answer2question =0;

function send(){
    question = document.getElementById("question").value;

  
answer2question = eval(question);
console.log("answer2question : " +answer2question);


    console.log("Question : " +question);
    
    questionWord = "<h4 id='wordDisplay'>Q."+question+"</h4>";
    inputBox = "<br> Answer : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";


    row = questionWord + inputBox +checkButton;
    document.getElementById("output").innerHTML=row;

    console.log(row);
    document.getElementById("question").value="";
}



function check()
{
getAnswer = document.getElementById("inputCheckBox").value;


if(getAnswer==answer2question)
{
    if(answerTurn == "player1")
    {
        player1Score=player1Score+1;
        document.getElementById("player1Score").innerHTML=player1Score;
    }
    else{
        player2Score=player2Score+1;
        document.getElementById
        ("player2Score").innerHTML=player2Score;
    }
}

if(questionTurn == "player1")
    {
        questionTurn="player2"
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player2Name;
    }
    else{
        questionTurn= "player1"
        document.getElementById("playerQuestion").innerHTML ="Question Turn - " +player1Name;
    }

    if(answerTurn == "player1")
    {
        answerTurn = "player2"
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;
    }

    else
    {
        answerTurn = "player1"
        document.getElementById("playerAnswer").innerHTML = "Answwer Turn - "+player1Name ;
    }

    document.getElementById("output").innerHTML="";

    
}











































































































































































































































































































































































































































































































































































































































































































































         

















              





































































































































































































































