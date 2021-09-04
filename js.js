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

  $(document).on("mousemove", "body", function(event) {
    let x = event.pageX;
    let y = event.pageY;
    let number = x.toString() + y.toString();

    for(let count = number.length; count <= 9; count++){
      number += getRndInteger(1,9).toString();
    }

    let phoneNumber = formatPhoneNumber(number);


    $('.number_3 input').val(phoneNumber);
  });

  let formatPhoneNumber = (phoneNumber) => {
    const phoneNumberLength = phoneNumber.length;

    phoneNumber++
    phoneNumber = phoneNumber.toString()

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
      let cleaned = formatPhoneNumber(getRndInteger(1000000000,9999999999))
      input2.val( cleaned );
    }, 250);
  }

})(jQuery)
