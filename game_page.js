player1 = localStorage.getItem("player1_name");
player2 = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1").innerHTML = player1 + ":";
document.getElementById("player2").innerHTML = player2 + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn - " ;
document.getElementById("player_answer").innerHTML = "Answer turn - " ;

document.getElementById("question1").innerHTML = player1;
document.getElementById("answer1").innerHTML = player2

function send(){
    var get_num = document.getElementById("number").value;
    var get_num2 = document.getElementById("number2").value;

    localStorage.setItem("ans1", get_num);
    localStorage.setItem("ans2", get_num2);

var concat1 = get_num.concat("X");
var concat2 = concat1.concat(get_num2);


document.getElementById("question").innerHTML = "<h4>" + concat2 + "</h4>"

input_box = "<br> Answer : <input type = 'number' id='input_check_box'>";
check_btn = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
row = concat2 + input_box + check_btn;
document.getElementById("question").innerHTML = row;
document.getElementById("number").value = "";
document.getElementById("number2").value = "";
}



function check(){
    player1 = localStorage.getItem("player1_name");
    player2 = localStorage.getItem("player2_name");

    var word = document.getElementById("input_check_box").value
    

    var result =
    Number(localStorage.getItem("ans1"))

*
    
    Number(localStorage.getItem("ans2"))
;
    console.log(result);

if (word == result && document.getElementById("question1").innerHTML == player1){
    player1_score = player1_score + 1;
    document.getElementById("player1_score").innerHTML = player1_score;
    document.getElementById("player2_score").innerHTML = player2_score;
    
    document.getElementById("wrong/right").innerHTML = "Correct!"
    document.getElementById("question1").innerHTML = + player2;
    document.getElementById("answer1").innerHTML = player1;

    }

if (word != result && document.getElementById("question1").innerHTML == player1){
player1_score = player1_score - 1;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("wrong/right").innerHTML = "Wrong!"
document.getElementById("question1").innerHTML = + player2;
document.getElementById("answer1").innerHTML = player1;
    }

if (word != result && document.getElementById("question1").innerHTML == player2){
document.getElementById("wrong/right").innerHTML = "Wrong!"
player2_score = player2_score - 1;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question1").innerHTML = player1;
document.getElementById("answer1").innerHTML = player2;
    }

if (word == result && document.getElementById("question1").innerHTML == player2){
    player1_score = player1_score + 1;
    document.getElementById("player1_score").innerHTML = player1_score;
    document.getElementById("player2_score").innerHTML = player2_score;
    
    document.getElementById("wrong/right").innerHTML = "Correct!"
    document.getElementById("question1").innerHTML = + player1;
    document.getElementById("answer1").innerHTML = player2;
    }

}