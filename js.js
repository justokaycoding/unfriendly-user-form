(function($) {

  var inter;

  $(document).ready(function() {

    randomNumber();

  });

  $(document).on("click", ".number_1 .increase", function() {
    let input = $('.number_1 input');
    let value = input.val();
    let cleaned = ('' + value).replace(/\D/g, '');

    if (!value.length || cleaned == '9999999999') {
      value = 1;
    } else {
      value = formatPhoneNumber(cleaned);
    }

    input.val(value);

  });

  $(document).on("click", ".number_2 .pause", function() {
    clearInterval(inter);
    $(this).removeClass('pause');
    $(this).addClass('play');
  });

  $(document).on("click", ".number_2 .play", function() {
    randomNumber();
    $(this).removeClass('play');
    $(this).addClass('pause');
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

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function randomNumber(){
    let input2 = $('.number_2 input');

    inter = setInterval(function(){
      input2.val(getRndInteger(1000000000,9999999999));
    }, 500);
  }

})(jQuery)
