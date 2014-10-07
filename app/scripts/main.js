
var container = $('#item'), list_price, list_currency, list_description, list_seller, list_image;

api.results.forEach(function (a){


////Build item description

  list_description =  "<p class='truncate'>" + a.title + "</p>";

////Build item price

  list_price = "<span>" + a.price + "</span>";

////Build item currency code

  list_currency = "<span>" + a.currency_code + "</span>";

////Build item seller

  list_seller = "<span>" + a.Shop.shop_name + "</span>"

      a.Images.forEach(function(b){

        list_image = "<img src='" + b.url_fullxfull + "' />";

      });

  items = "<li>" + list_image + list_description + list_seller + list_price + list_currency + "</li>";
  $(horses).append(items);
});
