var sortByNameAscendingBtn = document.getElementById('sortByNameAscending');
sortByNameAscendingBtn.addEventListener('click', sortingByNameAscending);
function sortingByNameAscending() {
  let arrayOfUsers = document.querySelectorAll('.dataNameUser');
  Array.from(arrayOfUsers).sort(function(a, b) {
    a = a.querySelector('.nameUserFirst').innerText.toLowerCase()
    b = b.querySelector('.nameUserFirst').innerText.toLowerCase()
    return (a > b) - (a < b)
  }).forEach(function(item,n,arrayOfUsers) {
    demo.appendChild(item);
  })
}

var sortByNameDescendingBtn = document.getElementById('sortByNameDescending');
sortByNameDescendingBtn.addEventListener('click', sortingByNameDescending);
function sortingByNameDescending() {
  let arrayOfUsers = document.querySelectorAll('.dataNameUser');
  Array.from(arrayOfUsers).sort(function(a, b) {
    a = a.querySelector('.nameUserFirst').innerText.toLowerCase()
    b = b.querySelector('.nameUserFirst').innerText.toLowerCase()
    return (a < b) - (a > b)
  }).forEach(function(item,n,arrayOfUsers) {
    demo.appendChild(item);
  })
}