let votes = {
  apple:0,
  banan:0,
  orange:0,
};

function vote(frit){
  votes[furit]++;
  updateResults();
}

function updateResults(){
  document.getElementById("apple-count").textContent = votes.apple;
  document.getElementById("banana-count").textContent = votes.banana;
  document.getElementById("orange-count").textContent = votes.orange;
  
}