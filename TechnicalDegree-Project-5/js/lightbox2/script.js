// variables
var input = document.querySelector('input[type="search"]');
var imageLinks = document.querySelectorAll('a');

// event listener on 'keyup' so real-time search
input.addEventListener('keyup', function(){

  // change value to all lowercase
  var str = input.value.toLowerCase();

  // Loop through the captions
  for (var i = 0; i < imageLinks.length; i++){
    // Get value of the data-title attribute from each element
    var caption = imageLinks[i].getAttribute('data-title').toLowerCase();

    // Check if the str value is included in the caption.
    if ( caption.includes( str ) ){

      // Add data-lightbox attribute and show image container
      imageLinks[i].setAttribute('data-lightbox', 'gallery');
      imageLinks[i].style.display = 'block';
    } else {

      // Hide the image container and remove data-lightbox attribute
      imageLinks[i].setAttribute('data-lightbox', '');
      imageLinks[i].style.display = 'none';
    }
  }
});

// Reset the gallery when the WHAT IS CLICKED IN THE SEARCH BOX?

// input.addEventListener('search', function(){

//     // Check to make sure the search field is blank
//     if ( '' === input.value){

//       //  loop through and reset the gallery
//       for (var i = 0; i < imageLinks.length; i++){
//         imageLinks[i].setAttribute('data-lightbox', 'gallery');
//         imageLinks[i].style.display = 'block';
//       }
//     }
// });

const searchbtn = document.querySelector('.searchbtn');
searchbtn.addEventListener('click', function(){
    if (input.value !== ''){
      input.value = '';
      for (var i = 0; i < imageLinks.length; i++){
        imageLinks[i].setAttribute('data-lightbox', 'gallery');
        imageLinks[i].style.display = 'block';
      }
    }
});


Lightbox
lightbox.option({
  wrapAround: true
});
