
/*Code for Slide Show of cards */
$('#recipeCarousel').carousel({
  interval: 2000
});

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});
/*Code for Sild Show ends*/
/**Cost Estimator Code */
var costForm=document.getElementById("cost-form");
if(costForm!=null){
  costForm.addEventListener('submit',function(event){
    event.preventDefault();
    var result=document.getElementById("result");
    var cost=document.getElementById("cost");
    var length=document.getElementById("length").value;
    var breadth=document.getElementById("breadth").value;
    var floor=document.getElementById("floor").value;
    var area=length*breadth;
    var lowerValue=1799*area*floor;
    var higherValue=2299*area*floor;
    cost.innerHTML=""+lowerValue+"-"+higherValue;
    result.style.display="block";
  });
}
/**Cost Estimator Code End */
/**Code to pick time */
$('#prefered-time').timepicker({
  minTime: '10',
  maxTime: '6:00pm',
  defaultTime: '10',
  scrollbar: true
});
/*Code to pick time End*/
/**Code for my account dropdown */
var myRequestedServices=document.getElementsByClassName("requested-services-dropdown");
if(myRequestedServices!=null){
  var i;
  for(i=0;i<myRequestedServices.length;i++){
    myRequestedServices[i].addEventListener("click",function(event){
      console.log(event);
      var arrow=event.target.children[0];
      this.classList.toggle("active");
      var content = this.nextElementSibling.nextElementSibling;
      if (content.style.display === "block") {
        arrow.style.transform = "rotate(0deg)"; 
        content.style.display = "none";
      } else {
        arrow.style.transform = "rotate(180deg)"; 
        content.style.display = "block";
      }
    },false);
  }
}
/**Code for my account dropdown End*/