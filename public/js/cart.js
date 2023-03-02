
$("document").ready(() => {
  $(".removeOne").click(function (e) {
    var href = jQuery(this).attr('href').split('?');
    var path = href[0]
    var id = href[1]
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
      location.reload()
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