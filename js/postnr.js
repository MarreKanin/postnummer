$(function () {
  var postNrCtrl   = $("#postnr"),
      postStedCtrl = $("#poststed");

  postNrCtrl.on("change", function () {
    var postnr = jQuery.trim(this.value);

    if( !postnr ) {
      postStedCtrl.val("");
      return;
    }


    if( !/^\d{4}$/.test(postnr) ) {
      return;
    }


    $.ajax({
      type:     "GET",
      dataType: "jsonp",
      url:      "https://fraktguide.bring.no/fraktguide/api/postalCode.json",
      // https://fraktguide.bring.no/fraktguide/api/postalCode.json?pnr=7605
      data: {
        country: "no",    // use "en" for english 
        pnr:     postnr
      }
    }).done(function (data) {
      // if( data && data.valid ) {     // if we dont want
        postStedCtrl.val(data.result);
      // }
    });
  });
});
