function login(){
    localStorage.setItem("player1_name", document.getElementById("player1"));
    localStorage.setItem("player2_name", document.getElementById("player2"));
    window.location="game_page.html";
}