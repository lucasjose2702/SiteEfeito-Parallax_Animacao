const iconeMenu = document.querySelectorAll('.icone-menu');

iconeMenu[0].addEventListener('click', ()=>{
    // Efeito opacity
    // Efeito toggle
    
    const menu = document.getElementById('menu');
    if(menu.classList.contains('hidden')){
        menu.classList.add('show');
        menu.classList.remove('hidden');
    }
    else{
        menu.classList.add('hidden');
        menu.classList.remove('show');
    }

});
