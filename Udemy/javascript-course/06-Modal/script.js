'use strict';

const openModal = function () {
    console.log('Button Click');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// function close Model
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

}

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', openModal);

    //this is normal way write code 
    // btnCloseModal.addEventListener('click', function(){
    //     modal.classList.add('hidden');
    //     overlay.classList.add('hidden');

    // });

    //secode way advanced write code 

        
    btnCloseModal.addEventListener('click', closeModal);

        
    // first way write code 
    // overlay.addEventListener('click', function(){
    //     modal.classList.add('hidden');
    //     overlay.classList.add('hidden');

    // });

    // secode way write code
    overlay.addEventListener('click', closeModal);

    // make colse by press
    document.addEventListener('keydown', function(e) {
        console.log(e.key);

        // if(e.key === 'Escape') console.log("Esc was pressed");

        // if(e.key === 'Escape') {
        //     if(!modal.classList.contains('hidden')){
        //         closeModal();
        //     }
        // }
        if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}