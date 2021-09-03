<?php
  function formBuild(){
    $output .= '<div class="formBuild">';
      $output .= '<form>';
      $output .= input('12', 'First Name');
      $output .= input('12', 'Last Name');
      $output .= input('12', 'Phone Number');
      $output .= textarea('12','Message');
      $output .= recaptcha();
      $output .= submit('12','Message');
      $output .= '</form>';
    $output .= '</div>';
    return $output;
  }

  function input($width = '', $label = ''){
    $cleaned = strtolower(str_replace(' ', '_', $label));
    return '<div class="w-'.$width.'"><label for="'.$cleaned.'">'.$label.'</label><input id="'.$cleaned.'" type="text" value="" name="'.$cleaned.'"></div>';
  }

  function textarea($width = '', $label = ''){
    $cleaned = strtolower(str_replace(' ', '_', $label));
    return '<div class="w-'.$width.'"><label for="'.$cleaned.'">'.$label.'</label><textarea id="'.$cleaned.'" name="'.$cleaned.'" rows="" cols="" maxlength=""></textarea></div>';
  }

  function recaptcha(){
    return '<div class="recaptcha"></div>';
  }

  function submit($width = '', $label = ''){
    return '<div class="w-'.$width.'"><input type="submit" value="SUBMIT"></div>';
  }

?>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Unfriendly UX/UI</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="stylesheet" href="foundation.css">
  <link rel="stylesheet" href="styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&amp;display=swap" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</head>

<body>
  <div class="content-wrapper">

    <main role="main">
      <div id="content">
        <div id="" class="content_wrap">
          <div id="" class="section">
            <div class="constraint halign-left valign-top">
              <div id="" class="column width-12">
                <div class="wrapper text">
                  <?php echo formBuild() ?>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  </div>
  <script src="js.js"></script>
</body>

</html>
