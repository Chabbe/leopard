
window.onscroll = function() {this.logoOnScroll()};

function logoOnScroll() {
    if (document.documentElement.scrollTop > 0) {
        document.getElementsByClassName('head-logo')[0].id = 'moving-logo';
    } else {
        document.getElementsByClassName('head-logo')[0].id = '';
    }
  }

function toggleClass(){
    
    if (event.target.classList.value.includes('cover-fade')){
        event.target.classList.remove('cover-fade');
    } else {
        event.target.classList.add('cover-fade');
    }

}
