function login(){
    localStorage.setItem("player1_name", document.getElementById("player").value);
    localStorage.setItem("player2_name", document.getElementById("player2").value);
    window.location="game_page.html";
}