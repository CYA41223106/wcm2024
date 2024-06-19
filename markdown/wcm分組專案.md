---
Title: WCM2024 wcm分組專案
Date: 2024-06-19 19:27
Category: wcm分組專案
Tags: 網誌編寫
Slug: 2024-Spring-wcm分組專案.-blog-tutorial
Author: kmol
---

網際內容管理課程分組專案 - 網頁與 Brython 程式應用

<!-- PELICAN_END_SUMMARY -->

# 分組專案
三子棋小遊戲程式:

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tic Tac Toe</title>
<style>
.board {
display: grid;
grid-template-columns: repeat(3, 100px);
grid-gap: 5px;
margin-bottom: 20px;
}
.cell {
width: 100px;
height: 100px;
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
cursor: pointer;
}
</style>
</head>
<body>
<div class="board">
{% for cell in board %}
<div class="cell" onclick="makeMove({{ loop.index0 }})">{{ cell }}</div>
{% endfor %}
</div>
<div id="message"></div>
 
<script>
document.addEventListener('keydown', function(event) {
if (event.key === 'r') {
restartGame();
}
});
 
function makeMove(position) {
fetch('/make_move', {
method: 'POST',
body: new URLSearchParams({
position: position
}),
headers: {
'Content-Type': 'application/x-www-form-urlencoded'
}
})
.then(response => response.json())
.then(data => {
if (data.valid_move) {
document.querySelectorAll('.cell')[position].innerText = data.board[position];
if (data.winner) {
document.getElementById('message').innerText = data.winner === 'Tie' ? 'It\'s a tie!' : `Player ${data.winner} wins!`;
document.querySelectorAll('.cell').forEach(cell => cell.onclick = null);
}
}
});
}
 
function restartGame() {
fetch('/restart_game', {
method: 'POST',
headers: {
'Content-Type': 'application/x-www-form-urlencoded'
}
})
.then(response => response.json())
.then(data => {
if (data.success) {
window.location.reload();
}
});
}
</script>

小遊戲示範影片:
https://yan41223101.github.io/wcm2024/downloads/Tic%20Tac%20Toe%20-%20Google%20Chrome%202024-06-06%2011-42-12.mp4 