function pdpSearch()
    {
      $('.pdp-search').css('height', 'auto'),
      $('html, body').animate({
        scrollTop: $("#pdp-search").offset().top
    }, 500);
    }

// Nav Menu & Sub Nav
function navMenu() {
        $( ".menu-collapse" ).slideToggle( "slow" );
        var subMenu = $( this ).children('.nav-link').value();
        console.print("sub-menu selection: " + subMenu );
};
function navMobileMenu()  {
  $(".navbar-nav").slideToggle( "slow" );
};




// Cheeky Brackets
// $('.nav-link').hover(function() {
//   $(this).children(".brk").css("display", "inline");
// }, function() {
//   $(this).children(".brk").css( "display", "none" );
//   }
// );
