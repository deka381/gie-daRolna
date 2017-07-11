$(function functionName() {

const $serachBtn= $(".serach-hide");
const $inputHide= $(".serach-inputs");
$inputHide.hide();
$serachBtn.on("click",function () {
  if ( $inputHide.is( ":hidden" ) ) {
    $inputHide.slideDown( "fast" );
  } else {
    $inputHide.slideUp();
  }
})





///////////////////////////////////////
// AJAX START
//ad START
const apiUrl="http://localhost:3000/products";
const $table = $(".ad-table");
const $tr = $(".ad-tr");


function renderProducts(product) {
  let $newTrElement = $("<tr>");
  let $newTrElementDesc = $("<tr>");
  let $newTdForImg=$("<td>");
  let $btn=$("<button>");
  $btn.text(">>>");

  let $img = $("<img>");
  $img.attr("src",product.img);
  $newTdForImg.append($img);
  $newTdForImg.attr('rowspan',2);



  let $action = $("<td>");
  $action.addClass(".col-lg-2 .col-sm-2");
  $action.text(product.action);
  $action.css("fontWeight","700");

  let $thing = $("<td>");
  $thing.addClass(".col-lg-2 .col-sm-2");
  $thing.text(product.thing);
  $thing.css("fontWeight","700");

  let $price = $("<td>");
  $price.addClass(".col-lg-2 .col-sm-2");
  $price.text(product.price);

  let $region = $("<td>");
  $region.addClass(".col-lg-2 .col-sm-2");
  $region.text(product.region);

  let $description = $("<td>");
  $description.addClass(".col-lg-10 .col-sm-10");
  $description.text(product.description);
  $description.attr('colspan',4);


  $newTrElement.append($newTdForImg);
  $newTrElement.append($action);
  $newTrElement.append($thing);
  $newTrElement.append($price);
  $newTrElement.append($region);
  $newTrElement.append($btn);
  $newTrElementDesc.append($description);
  $table.append($newTrElement);
  $table.append($newTrElementDesc);


}


/////////////////////////
function loadProducts() {

  $.ajax({
    type:"GET",
    url:apiUrl,
    dataType:"json"
  }).done(function (response) {
    for (var i = 0; i < response.length; i++) {
      renderProducts(response[i]);
    }
  }).fail(function (error) {
    console.log("error from loadProducts()");
  })
}

loadProducts();
/////////////////////////////////



//news START
const apiUrlNews="http://localhost:3000/news";

const $tableNew = $(".news-table");
const $trNew = $(".news-tr");


function renderNews(news) {
  let $newTrElement = $("<tr>");
  let $newTrElementDesc = $("<tr>");
  let $newTdForImg=$("<td>");
  let $btn=$("<button>");
  $btn.text(">>>");

  let $img = $("<img>");
  $img.attr("src",news.img);
  $newTdForImg.append($img);
  $newTdForImg.attr('rowspan',2);



  let $action = $("<td>");
  $action.addClass(".col-lg-2 .col-sm-2");
  $action.text(news.action);
  $action.css("fontWeight","700");

  let $thing = $("<td>");
  $thing.addClass(".col-lg-2 .col-sm-2");
  $thing.text(news.thing);
  $thing.css("fontWeight","700");

  let $price = $("<td>");
  $price.addClass(".col-lg-2 .col-sm-2");
  $price.text(news.price);

  let $region = $("<td>");
  $region.addClass(".col-lg-2 .col-sm-2");
  $region.text(news.region);

  let $description = $("<td>");
  $description.addClass(".col-lg-10 .col-sm-10");
  $description.text(news.description);
  $description.attr('colspan',4);


  $newTrElement.append($newTdForImg);
  $newTrElement.append($action);
  $newTrElement.append($thing);
  $newTrElement.append($price);
  $newTrElement.append($region);
  $newTrElement.append($btn);
  $newTrElementDesc.append($description);
  $tableNew.append($newTrElement);
  $tableNew.append($newTrElementDesc);


}


function loadNews() {

  $.ajax({
    type:"GET",
    url:apiUrlNews,
    dataType:"json"
  }).done(function (response) {
    for (var i = 0; i < response.length; i++) {
      renderNews(response[i]);
    }
  }).fail(function (error) {
    console.log("error from loadNews()");
  })
}

loadNews();

















});
