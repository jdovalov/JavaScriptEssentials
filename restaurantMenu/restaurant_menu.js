const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

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