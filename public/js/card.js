$("document").ready(()=>{
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
        updateCart()

      }, 1000)
    }
  });

});
const updateCart =()=>{
  console.log("st:")

  $.get("updatecart",function (data, status) {
    console.log(data)
    document.getElementById("cartnum").innerHTML=data
  })
}










})



