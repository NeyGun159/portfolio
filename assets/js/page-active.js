const activePage = window.location.pathname;
if (activePage == "/index.html" || activePage=="/") {
    $(function() {
        $('.nav-list__link-home').toggleClass("active")
        $('.nav-list__link-home').removeAttr("href")
    })
}   else if (activePage == "/portfolio.html") {
    $(function() {
        $('.nav-list__link-portfolio').toggleClass("active")
        $('.nav-list__link-portfolio').removeAttr("href")
    })
}   else if (activePage == "/about.html") {
    $(function() {
        $('.nav-list__link-about').toggleClass("active")
        $('.nav-list__link-about').removeAttr("href")
    })
}   else if (activePage == "/contact.html") {
    $(function() {
        $('.nav-list__link-contact').toggleClass("active")
        $('.nav-list__link-contact').removeAttr("href")
    })
}