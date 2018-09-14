var fixPoorWidows = function( input ) {
  for(i = 0; i < input.length; i++ ){
    var str = $(input[i]).text();
    replacement = '\u00a0';
    str = str.replace(/ ([^ ]*)$/,replacement+'$1'); //a_b!c
    $(input[i]).text(str);
  }
};
