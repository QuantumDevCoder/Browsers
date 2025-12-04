// /images/custom.js
// Force custom page title
document.title = "testweb";

// Force custom favicon
var link = document.querySelector('link[rel="shortcut icon"]');
if (!link) {
    link = document.createElement('link');
    link.rel = 'shortcut icon';
    document.head.appendChild(link);
}
link.href = "images/favicon.png"; // Make sure this matches the path in the container
