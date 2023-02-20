
$(".addtocart").click(function(e){
  $(".loader").css('display','block')  
  $("#cartimg").css('display','none')  

  
  
  
  var href = jQuery(this).attr('href').split("?");
    e.preventDefault();
    $.get(`${href[0]}?id=${href[1]}`,function(data, status){
      alert(data)
    });
  });

