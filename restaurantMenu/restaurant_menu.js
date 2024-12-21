const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $16.99', 'Oatmeal - $5.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $35', 'Pasta - $15', 'Burger - $14', 'Salmon - $18'];
const dessertMenu = ['Cake - $6', 'Ice Cream - $5', 'Pudding - $5', 'Fruit Salad - $6'];

// add items to HTML: example using map for breakfast menu
const breakfastMenuItemsHTML = breakfastMenu.map((item,index)=>`<p>Item ${index+1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// add items to HTML: example using forEach for main course menu
let mainCourseMenuItemsHTML = '';
mainCourseMenu.forEach((item,index) => {
	mainCourseMenuItemsHTML += `<p>Item ${index+1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenuItemsHTML;


// add items to HTML: example using forEach for main course menu
let dessertMenuItemsHTML = '';
for ( let ii=0; ii<dessertMenu.length; ii++ ){
	dessertMenuItemsHTML += `<p>Item ${ii+1}: ${dessertMenu[ii]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertMenuItemsHTML;