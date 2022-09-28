function GitHub(){
    location.replace("https://github.com/SYNTECH47")
  }
  function Twitter(){
    location.replace("https://twitter.com/SyntechUTP")
  }
  function YouTube(){
    location.replace("https://www.youtube.com/channel/UCnrQt6Snk7a3CM5UmlYqsdQ")
  }
  
  window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
}