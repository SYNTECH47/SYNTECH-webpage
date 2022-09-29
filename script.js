function GitHub(){
    location.replace("https://github.com/SYNTECH47")
  }
  function Instagram(){
    location.replace("https://www.instagram.com/utpsyntech/?igshid=YmMyMTA2M2Y%3D")
  }
  function YouTube(){
    location.replace("https://www.youtube.com/channel/UCnUf8FFgdqXmzAcZezHA1Ag")
  }
  
  window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
}
