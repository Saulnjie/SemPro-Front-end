
function liveSearch() {
  let cards = document.querySelectorAll('.album_card');
  let search_query = document.getElementById('searchbox').value;
  for (var i = 0; i < cards.length; i++) {
      if (cards[i].innerText.toLowerCase().includes(search_query.toLowerCase())) {
          cards[i].classList.remove('is-hidden');
      } else {
          cards[i].classList.add('is-hidden');
      }
  }
}

let typingTimer;
let typeInterval = 500;
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(liveSearch, typeInterval);
});