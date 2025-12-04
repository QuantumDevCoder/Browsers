document.title = "testweb";

var link = document.querySelector("link[rel='shortcut icon']");
if (!link) {
    link = document.createElement("link");
    link.rel = "shortcut icon";
    document.head.appendChild(link);
}
link.href = "images/favicon.png";
