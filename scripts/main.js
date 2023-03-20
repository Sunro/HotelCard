var cards = document.querySelectorAll('.card');
var buttons = document.querySelectorAll('.button');
for(var i = 0; i < cards.length; i++){
  var card = cards[i];
  card.addEventListener("click", function(){
    this.classList.remove("card__reserved--bg-gradient");
  });
};
for(var i = 0; i < buttons.length; i++){
  var button = buttons[i];
  button.addEventListener("click", function(){
    var buttonClick = true;
    this.closest('.card').addEventListener("mouseleave", function(){
      if(buttonClick){
        this.closest('.card').classList.add("card__reserved--bg-gradient");
        buttonClick = false;
      }
    });
  });
};