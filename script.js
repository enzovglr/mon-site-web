// Interaction du menu
document.querySelector('.menu-btn').addEventListener('click', () => {
    const submenu = document.querySelector('.submenu');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
});
