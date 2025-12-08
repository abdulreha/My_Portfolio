document.addEventListener('DOMContentLoaded', function() {
    const profilePhoto = document.getElementById('profilePhoto');
    if (profilePhoto) {
        profilePhoto.addEventListener('error', function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect width="300" height="300" fill="%230a0a0a"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="%23888"%3EPhoto Not Available%3C/text%3E%3C/svg%3E';
        });
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
