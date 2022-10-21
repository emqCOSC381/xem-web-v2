const labels = ['January','February','March','April','May','June',"july","August","Sept"];

var datab = [20, 65, 25, 37, 28, 55, 45,34,23];
var databq = [40, 75, 15, 33, 21, 5, 55,34,83]

  


function drawe(id,data_,label_,type_) {
  const data = {
    labels: labels,
    datasets: [{
      label: label_,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: data_,
    
    }]
  };
  const config = {type: type_,data: data,options: {responsive:true}};
  new Chart(document.getElementById(id),config);
}


drawe("canvas",datab,"sales","bar")
drawe("canvass",databq,"Customers","bar")
drawe("canvasss",databq,"welcome","line")