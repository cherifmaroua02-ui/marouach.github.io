document.addEventListener('DOMContentLoaded', function() {
    
    // Récupérer le bouton et la sidebar
    var menuToggle = document.getElementById('menu-toggle');
    var sidebar = document.getElementById('sidebar');

    // Quand on clique sur le bouton "3 barres"
    menuToggle.addEventListener('click', function() {
        // Ajouter ou enlever la classe "open" à la sidebar
        sidebar.classList.toggle('open');
        
        // Changer l'icône (bars -> xmark pour fermer)
        var icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });
});
