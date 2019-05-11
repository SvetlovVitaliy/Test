bodyTest();
function bodyTest(){

  let newDivNull = document.createElement('div');
    newDivNull.className = 'sortButton';
    newDivNull.innerHTML = '<button id="sortByNameAscending">Сортировать по имени от А до Я</button><button id="sortByNameDescending">Сортировать по имени от Я до А</button>';
    document.body.appendChild(newDivNull);

  let newDivFirst = document.createElement('div');
    newDivFirst.id = 'demo';
    document.body.appendChild(newDivFirst);

  let newDivToo = document.createElement('div');
    newDivToo.className = 'filtr';
    newDivToo.id = 'fon';
    document.body.appendChild(newDivToo);

  let newImg = document.createElement('img');
    newImg.className = 'backfon';
    newImg.src = 'bodyBackgroundImage.jpg';
    document.body.appendChild(newImg);
}