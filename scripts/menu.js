(function(){

    document.addEventListener('DOMContentLoaded', function(){
        var menu = document.querySelector('.headerLogo');
        var navigation = document.querySelector('.navigation');
        var wrapper = document.querySelectorAll('.wrapper');

        function showNavigation() {
            navigation.classList.toggle('navigation--seen');
        }

        function hideNavigation() {
            navigation.classList.remove('navigation--seen');
        }

        menu.addEventListener('click', showNavigation);
        navigation.addEventListener('click', hideNavigation);



    });
    
    
}());


