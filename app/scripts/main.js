
var container = $('#item'), list_price, list_currency, list_description, list_seller, list_image, images;

api.results.forEach(function (a){


////Build item description

  list_description =  "<a href='#'><p class='truncate'>" + a.title + "</p></a>";

////Build item price

  list_price = "<span class='price'>" + '$' + a.price + "</span>";

////Build item currency code

  list_currency = "<span class='currency'>" + a.currency_code + "</span>";

////Build item seller
      images = $(images);

  list_seller = "<a href='#'><span class='seller'>" + a.Shop.shop_name + "</span></a>"

      a.Images.forEach(function(b){

        list_image = "<a href='#'> <img src='" + b.url_fullxfull + "' /></a>";

      });

$('img').hover(

  function () {
    $(this).toggleClass('showButtons');
  }

);

  items = "<li>" + list_image + images + list_description + list_seller + list_currency + list_price + "</li>";
  $(horses).append(items);
});
