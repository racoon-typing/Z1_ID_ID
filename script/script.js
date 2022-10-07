$(document).ready(function(){
    var count = 0;
    var count2 = 7;
    var count3 = 3;
    var sliders = $('.sliders ul li');
    console.log(sliders)
    $('.header-yellow-block').on('click', function(){
        $('html, body').animate({
            scrollTop: $(".doc-info").offset().top
        }, 1000);
    });
    
    
  
    
     
    $('.right-arrow').on('click', function(){
           console.log(sliders)
        console.log(count, count2)  
         var elem = $(sliders[count2])
     
         $(elem).hide(200, function(){
             $(elem).show()
         });
        $(sliders).splice(count2,1)
        $(sliders[count]).before(elem)

        if(count == 0){
            count = 7
        }
        else{
            count--
        }
        if(count2 == 0){
            count2 = 7
        }
        else{
            count2--
        }
        if(count3 == 0){
            count3 = 7;
        }
        else{
            count3--
        }
             
    });
    $('.left-arrow').on('click', function(){
        var elem = $(sliders[count])
        $(sliders[count3]).hide(200, function(){
             $(sliders[count3]).show()
         });
        $(sliders).splice(count,1)
        $(sliders[count2]).after(elem)
        console.log(sliders)
        console.log(count, count2)
        if(count == 7){
            count = 0
        }
        else{
            count++
        }
        if(count2 >= 7){
            count2 = 0
        }
        else{
            count2++
        }
        if(count3 >=7){
            count3 = 0;
        }
        else{
            count3++
        }

    });
    
    
    
    
})
    


