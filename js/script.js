window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let overlay = document.querySelector('.overlay'),
        btn = document.querySelectorAll('.btn'),
		form = document.querySelector('.first_form'),
        input = document.getElementsByTagName('input'),
		div = document.createElement('div'),
		inputButton = document.getElementsByTagName('button')[2],
		pageUp = document.querySelector('.page_up'),
		finishItem = document.querySelectorAll('.finish_item');
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

	input[3].addEventListener('blur', function () {
		if (!this.value.includes('@')) {
			this.classList.add('invalid');
			this.style.marginBottom = '5px';
			div.classList.add('error');
			div.innerHTML = 'Введите правильный e-mail!';
			form.insertBefore(div, inputButton);
		}
	});

	input[3].addEventListener('focus', function() {
		if (this.classList.contains('invalid')) {
		  // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
		  this.classList.remove('invalid');
		  this.style.marginBottom = '20px';
		  div.innerHTML = "";
		}
	});

    $('input[name=phone]').mask("+7 (999) 999-99-99"); // маска ввода номера


	// smooth scroll and pageUp

	window.addEventListener('scroll', function () {
		if (document.documentElement.scrollTop > 800) {
			pageUp.style.display = 'block';
		} else {
			pageUp.style.display = 'none';
		}

		if (document.documentElement.scrollTop > 1500) {
			finishItem.forEach(function(item) {
				item.classList.add('animate__fadeInLeft');
			});
		}
	});

	





	


});

