$(function () { // shorthand for $(document).ready(...)
  var postNrCtrl   = $("#postnr"),
      postStedCtrl = $("#poststed");

  postNrCtrl.on("change", function () {
    var postnr = jQuery.trim(this.value);

    // if the field is empty, clear the postStedCtrl and stop
    if( !postnr ) {
      postStedCtrl.val("");
      return;
    }

    // Return if the value isn't 4 digits (i.e.
    // if it isn't a valid Norwegian postal code)
    if( !/^\d{4}$/.test(postnr) ) {
      // perhaps you want to alert the user here before returning
      return;
    }

    // Make an explicit JSONP request to get around same-origin policy
    // jQuery takes care of encoding the params and adding the callback param
    $.ajax({
      type:     "GET",
      dataType: "jsonp",
      url:      "https://fraktguide.bring.no/fraktguide/api/postalCode.json",
      data: {
        country: "no",
        pnr:     postnr
      }
    }).done(function (data) {
      if( data && data.valid ) {       // check the response a little
        postStedCtrl.val(data.result); // postStedCtrl is available via closure
      }
    });
  });
});




// //Sjekke postnummeret /
// $('.postcode').focusout(function () {
//     var ref = $(this);
//     if ($(this).val().length == 4) {
//         //Vi bruker Postens postnummersjekk
//         $.getJSON('https://fraktguide.bring.no/fraktguide/api/postalCode.json?pnr=' + $(this).val() + '&callback=?',
//         function (data) {
//             if (data.valid) {
//                 ref.next('.post-location').val(data.result);
//             } else {
//                 ref.next('.post-location').val('Ugyldig postnummer');
//             }
//         });
//     } else {
//         $(this).next('.post-location').val('');
//     }
// });
