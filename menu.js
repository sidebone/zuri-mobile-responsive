const bars = document.querySelector( '.bars' );
const navLink = document.querySelector( '.nav-links' );

bars.addEventListener( 'click', () => {
  navLink.classList.toggle( 'open' );
} )