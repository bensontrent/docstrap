
// Setup code example jotted plugin
let document;
(function(document) {
    "use strict";
var elems = document.getElementsByTagName('code');
var elem;
if (elems) {
for (elem in elems) {
elems[elem].setAttribute('id',[elem])
new Jotted(document.querySelector([elem]), {
  files: [{
    type: 'js',
    url: elems[elem].textContent
  }, {
    type: 'html',
    content: elems[elem].textContent
  }],
  showBlank: true,
  plugins: [
    'stylus',
    {
      name: 'codemirror',
      options: {
        lineNumbers: false
      }
    }
  ]

  });
}
}
})(document);


