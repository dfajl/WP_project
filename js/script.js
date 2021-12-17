let overlay = document.querySelector('.overlay'),
    btn = document.querySelectorAll('.btn'),
    close = document.querySelector('.close');


btn.forEach(function(item){
    item.addEventListener('click', function() {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden'; 
    });
});


close.addEventListener('click', function(){
    overlay.style.display = 'none';
    document.body.style.overflow = ''; 
});