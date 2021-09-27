$(document).ready(function(){
    $("#chooseFarm").mouseover(function(){
        $(".image1").animate({margin:'20px'},800,()=>
            $(".image1").animate({margin:'10px'},800));

        $(".image2").animate({margin:'10px'},800,()=>
            $(".image1").animate({margin:'20px'},800));
        
        $(".image3").animate({margin:'20px'},800,()=>
            $(".image1").animate({margin:'10px'},800));

        $(".image4").animate({margin:'10px'},800,()=>
            $(".image1").animate({margin:'20px'},800));
        
    });
  });