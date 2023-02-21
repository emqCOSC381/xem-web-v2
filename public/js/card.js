
$(".addtocart").click(function (e) {
  var href = jQuery(this).attr('href').split("?");
  var css_id = `css${href[1]}`
  $(`#${href[1]}`).css('display', 'block')
  $(`#${css_id}`).css('display', 'none')
  e.preventDefault();
  $.get(`${href[0]}?id=${href[1]}`, function (data, status) {
    if (data) {
      setTimeout(() => {
        $(`#${href[1]}`).css('display', 'none')
        $(`#${css_id}`).css('display', 'block')
        var st = document.getElementsByClassName(href[1])
        alert(`${st[0].innerHTML} added to cart`)
        updateCart()

      }, 2000)
    }
  });

});



const updateCart =()=>{
  $.get("updatecart",function (data, status) {
    alert("stuff")
  })
}
