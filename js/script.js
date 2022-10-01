const images = document.querySelectorAll('.demo img');

for (let i = 0; i < 4; i++) {
    images[i].addEventListener('mouseover', function() {
        this.classList.replace('op-1' , 'op-2')
    });
    images[i].addEventListener('mouseleave', function() {
        this.classList.replace('op-2' , 'op-1')
    });
};

const buttons = document.querySelectorAll('.btn button');

for (let i = 0; i < 3; i++) {
    buttons[i].addEventListener('click' ,function() {
        if(this.classList.contains('clicked')){
            this.classList.remove('clicked')
        }else
            this.classList.add('clicked');
});
};