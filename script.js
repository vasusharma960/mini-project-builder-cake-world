/*Fill your code */
var ingredients = {
  Chocolate: 300,
  Strawberry: 100,
  Butterscotch: 200,
  Vanilla: 250,
  Redvelvet: 350
};

var state = {
  Chocolate: true,
  Strawberry: true,
  Butterscotch: true,
  Vanilla: true,
  Redvelvet: true
};

var color = {
  Chocolate: "brown",
  Strawberry: "pink",
  Butterscotch: "yellow",
  Vanilla: "white",
  Redvelvet: "red"
}

var layers = {

};

let c = 1;

for(var i=0;i<5;i++){
  document.querySelectorAll(".btn")[i].addEventListener("click", function() {

    var getButton = this.innerHTML;
    modifyItem(getButton);
  });
}

document.getElementById("buy").addEventListener("click", function() {

  let total = 0;
  var states = Object.keys(state);

  for(let i = 0; i < 5; i++){
    if(!state["" + states[i]]){
      total = total + ingredients["" + states[i]];
    }
  }

  console.log(total);
  document.getElementById("total").innerHTML = "Total........." + total;
  document.getElementById("total").style.visibility = "visible";
  const img = document.createElement('img');
  img.src = "assets/candle.png";
  img.style.height = "20%";
  img.style.width = "20%";
  img.style.marginLeft = "24%";
  document.getElementsByClassName("middle")[0].prepend(img);
});

function modifyItem(getButton){
  if(state["" + getButton]){
    document.getElementsByClassName(getButton)[0].style.visibility = "visible";
    state["" + getButton] = false;

    createLayer(getButton);
  }
  else{
    document.getElementsByClassName(getButton)[0].style.visibility = "hidden";
    state["" + getButton] = true;
    removeLayer(getButton);
  }
}

function createLayer(getButton){
  var division = document.createElement('div');
  division.id = "layer" + c;
  division.style.backgroundColor = color["" + getButton];
  division.style.visibility = "visible";
  document.body.getElementsByClassName("middle")[0].prepend(division);
  layers["" + getButton] = "layer" + c;
  c++;
}

function removeLayer(getButton){
  var layer = layers["" + getButton];
  var division = document.getElementById("" + layer);
  document.getElementsByClassName("middle")[0].removeChild(division);
  c--;
}
