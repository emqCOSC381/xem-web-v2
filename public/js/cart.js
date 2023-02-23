
$("document").ready(() => {
  $(".removed").click(function (e) {


    var href = jQuery(this).attr('href').split('?');


    e.preventDefault();
    $.get(`${href[0]}?id=${href[1]}`, function (data, status) {
      if (data) {
        updateCart()
        // sendreq()
      }
    });





  });
  const updateCart = () => {
    $.get("updatecart", function (data, status) {
      document.getElementById("cartnum").innerHTML = data
    })
  }


  const sendreq=()=>{
    $.get("cart", function (data, status) {
      if (data) {
       alert(data)
      }
    });
  }

  })