

document.getElementById("bet-input").addEventListener("click", roll);
document.getElementById("purchase-btn").addEventListener("click", buyRiches);

function roll() {
  let randNum = document.getElementById("input-name").value;
  let randHouse = document.getElementById("input-name").value;
  document.getElementById("house-die").innerHTML = randHouse;
  document.getElementById("house-die").innerHTML = r

  if (randNum > randHouse) document.getElementById();
}
function buyRiches() {
  let funds = Math.random() * 5000;

  if (funds <= 1000) {
    document.getElementById("loot").innerHTML +=
      '<img src = "images/socks.png" height= 40px>';
  } else if (funds >= 1001) {
    document.getElementById("loot").innerHTML +=
      '<img src = "images/ring.png" height= 40px>';
  } else if (funds >= 1333) {
    document.getElementById("loot").innerHTML +=
      '<img src = "images/bike.jpg" height= 40px>';
  } else if (funds >= 1666) {
    document.getElementById("loot").innerHTML +=
      '<img src = "images/trip.jpg" height= 40px>';
  }
}
