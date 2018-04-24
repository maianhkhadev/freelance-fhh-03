$(document).ready(function() {
  document.querySelector('#backToTop').addEventListener('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: 0 })
  })
})
function myFunction() {
  $('.nav').toggleClass('responsive')
}
