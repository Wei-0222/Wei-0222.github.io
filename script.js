let votes = {
  apple:0,
  banana:0,
  orange:0,
};

function vote(fruit){
  votes[fruit]++;
  updateResults();
}

function updateResults() {
  document.getElementById("apple-count").textContent = votes.apple;
  document.getElementById("banana-count").textContent = votes.banana;
  document.getElementById("orange-count").textContent = votes.orange;

  // 計算最大票數
  const maxVotes = Math.max(votes.apple, votes.banana, votes.orange, 1); // 至少為 1

  // 設定條狀圖寬度（以 % 表示）
  document.getElementById("apple-bar").style.width = (votes.apple / maxVotes * 300) + "px";
  document.getElementById("banana-bar").style.width = (votes.banana / maxVotes * 300) + "px";
  document.getElementById("orange-bar").style.width = (votes.orange / maxVotes * 300) + "px";
}
