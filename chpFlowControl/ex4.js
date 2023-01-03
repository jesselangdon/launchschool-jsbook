function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/* the function was invoked with the '113' argument, which matches case '113', which returns
the string literal 'Product2'. However, a break! statement was not included, so control fell 
through the rest of the case statements in the function. */