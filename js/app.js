$(function functionName() {

//////nav start
const $nav=$("nav");
const $body=$("body");
var clickedId;
$( window ).scroll(function() {
  let $topNav = $body.offset().top - $(window).scrollTop();;
  if ($topNav < -300) {
    $nav.removeClass("hidden");
  }else if($topNav>-301) {
    $nav.addClass("hidden");
  }

})





//////nav stop

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
  let $a =$("<a>");
  let $newTdForImg=$("<td>");
  let $btn=$("<button>");
  $btn.addClass("btnNext");
  $btn.text(">>>");
  let $img = $("<img>");
  $img.attr("src",product.img);
  $newTdForImg.append($img);
  $newTdForImg.attr('rowspan',2);

  $btn.data('id', product.id);

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
  $a.attr('href',"./page2.html");

  $a.append($btn);
  $newTrElement.append($newTdForImg);
  $newTrElement.append($action);
  $newTrElement.append($thing);
  $newTrElement.append($price);
  $newTrElement.append($region);
  $newTrElement.append($a);
  $newTrElementDesc.append($description);
  $table.append($newTrElement);
  $table.append($newTrElementDesc);

  $btn.attr('data-id', product.id);
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
  let $a =$("<a>");
  let $btn=$("<button>");
  $btn.addClass("btnNext");
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
  $a.attr('href',"./page2.html");





  $a.append($btn);
  $newTrElement.append($newTdForImg);
  $newTrElement.append($action);
  $newTrElement.append($thing);
  $newTrElement.append($price);
  $newTrElement.append($region);
  $newTrElement.append($a);
  $newTrElementDesc.append($description);
  $tableNew.append($newTrElement);
  $tableNew.append($newTrElementDesc);

  $btn.attr('data-id', news.id);


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

/////////////////////////////page2
const $page2Id = $("#page2-about");
const $h3Page2 = $page2Id.find(".page2-title");
const $pricePage2 = $page2Id.find(".page2-price");
const $imgPage2 =  $page2Id.find(".imgPage2");
const $pPage2 =  $page2Id.find(".pPage2");
const $descPage2 =  $page2Id.find(".desc");





function renderAdvic(advic) {
  $h3Page2.text(advic.thing);
  $pricePage2.text("cena "+advic.price);

  let $imgPg2=$("<img>");
  $imgPg2.attr("src",advic.img);



  $p1Page2=$("<p>");
  $p2Page2=$("<p>");
  $p3Page2=$("<p>");
  $descriptionPage2=$("<p>");

  $p1Page2.text(advic.action +" "+ advic.thing ).css("font-weight","700");
  $p2Page2.text("Region " +advic.region ).css("font-weight","700");
  $p3Page2.text("Cena " +advic.price+ " " + advic.thing ).css("font-weight","700");
  $descriptionPage2.text("Opis: " + advic.description);

  $imgPage2.append($imgPg2);
  $pPage2.append($p1Page2);
  $pPage2.append($p2Page2);
  $pPage2.append($p3Page2);
  $descPage2.append($descriptionPage2);



}



function loadAdvic() {

  var a;

  $("body").on('click',".btnNext",function (event) {
      event.preventDefault();
    a=0;

    let findBtn=$('.news-table').find("a").find("button")

    let thisBtn= $(this).findBtn;
    clickedId = $(this).data("id");
    console.log(clickedId);
  });





  $.ajax({
    type:"GET",
    url:apiUrlNews+"/"+clickedId,
    dataType:"json"
  }).done(function (response) {
    renderAdvic(response);
  }).fail(function (error) {
    console.log("error from fail renderAdiv");
  })
}


loadAdvic();









});
