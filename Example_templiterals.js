//ex-1
/* var li = '<li>' +
  '<div class="row">' +
  '<div class="col-md-4">' +
  '<img src="' + moviePoster + '" height="250" alt="" />' +
  '</div>' +
  '<div class="col-md-8">' +
  '<h2>' + movieTitle + '</h2>' +
  '</div>' +
  '</div>' +
  '</li>';
 */

//template literal
var myself = "satendra kumar";
var li = `<li>
 <div class="">
  <h1>${myself}</h1>
 </div>
 </li>
`
console.log(li);