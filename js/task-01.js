const listEl = document.querySelectorAll('li.item');
console.log('Number of categories:', listEl.length);

const ulEl = document.querySelectorAll('#categories>li');
ulEl.forEach(element => {

  console.log(
    `Category: ${element.firstElementChild.textContent}, 
    Elements: ${element.lastElementChild.children.length}`,);
});