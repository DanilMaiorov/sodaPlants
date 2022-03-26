export function burger () {
    const burgerOpen = document.querySelector('.nomain-burger'); //открытие бургера
    const burgerMainOpen = document.querySelector('.burger');

    const bugrerMainLinks = document.querySelectorAll('.burger-content__menu-link'); //ссылки бургера
    const bugrerMainSubLinks = document.querySelectorAll('.burger-content__submenu-link');
    const mainBurgerLinks = [...bugrerMainLinks, ...bugrerMainSubLinks];

    const bugrerLinks = document.querySelectorAll('.nomain-burger-content__menu-link'); //ссылки бургера
    const bugrerSubLinks = document.querySelectorAll('.nomain-burger-content__submenu-link');
    const burgerLinksArr = [...bugrerLinks, ...bugrerSubLinks];
    mainBurgerLinks.splice(1, 1);
    burgerLinksArr.splice(1, 1);

    const burgerContent = document.querySelector('.nomain-burger-content');//сами обертки бургера
    const burgerMainContent = document.querySelector('.burger-content');
    
    const burgerClose = document.querySelector('.close-burger');//кнопка закрытия бургера

    const companyBtn = document.querySelector('.sub'); //кнопка открытия списка компаний
    const comapnyNomainBtn = document.querySelector('.sub-nomain');
    
    const burgerBody = document.querySelector('.burger-content__menu-list');
    const burgerNoMainBody = document.querySelector('.nomain-burger-content__menu-list');

    const subMenuBody = document.querySelector('.burger-content__submenu');
    const subMenuNoMainBody = document.querySelector('.nomain-burger-content__submenu');

    if(companyBtn) {
        companyBtn.addEventListener('click', () => {
            subMenuBody.classList.toggle('active');
            burgerBody.classList.toggle('active-list');
        });
    }
    if(comapnyNomainBtn) {
        comapnyNomainBtn.addEventListener('click', () => {
            subMenuNoMainBody.classList.toggle('active');
            burgerNoMainBody.classList.toggle('active-list');
        });
    }
    if(burgerOpen) {
        burgerOpen.addEventListener('click', () => {
            burgerContent.style.display = 'block';
        });
        burgerLinksArr.forEach(item => {
            item.addEventListener('click', () => {
                burgerContent.style.display = 'none';
            });
        });
    }
    if(burgerMainOpen) {
        burgerMainOpen.addEventListener('click', () => {
            burgerMainContent.style.display = 'block';
        });
        mainBurgerLinks.forEach(item => {
            item.addEventListener('click', () => {
                burgerMainContent.style.display = 'none';
            });
        });
    }
    burgerClose.addEventListener('click', () => {
        if(burgerContent) {
           burgerContent.style.display = 'none'; 
        } 
        if(burgerMainContent) {
            burgerMainContent.style.display = 'none';
        }     
    }); 
}
