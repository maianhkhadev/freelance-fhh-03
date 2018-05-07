$(document).ready(function() {
  document.querySelector('#backToTop').addEventListener('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: 0 })
  })

  new WOW().init()
})
function myFunction() {
  $('.nav').toggleClass('responsive')
}
