
var container = $('#item'), list_price, list_currency, list_description, list_seller, list_image;

api.results.forEach(function (a){


////Build item description

  list_description =  "<p>" + a.title + "</p>";

////Build item price

  list_price = "<p>" + a.price + "</p>";

////Build item currency code

  list_currency = "<p>" + a.currency_code + "</p>";

////Build item seller

  list_seller = "<p>" + a.Shop.shop_name + "</p>"

      a.Images.forEach(function(b){

        list_image = "<img src='" + b.url_fullxfull + "' />'";

      });

  items = "<li>" + list_image + list_description + list_seller + list_price + list_currency + "</li>";
  $(horses).append(items);
});
