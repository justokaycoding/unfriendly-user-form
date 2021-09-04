(function($) {

  $( document ).ready(function() {
      console.log( "ready!" );
  });

  $(document).on("click",".number_1 .increase",function() {
    let input = $('.number_1 input');
    let value = input.val();
    let cleaned = ('' + value).replace(/\D/g, '');

    if(!value.length || cleaned == '9999999999'){
      value = 1;
    }
    else{
      value = formatPhoneNumber(cleaned);
    }

    input.val(value);

});

let formatPhoneNumber = (phoneNumber) => {
    const phoneNumberLength = phoneNumber.length;

    phoneNumber++
    phoneNumber = phoneNumber.toString()

    console.log(phoneNumber);

    if (phoneNumberLength < 4) return phoneNumber;

    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6, 10)}`;

};

})(jQuery)
