function bigImg(x) {
    x.style.height = "100px";
    x.style.width = "100px";
}
function normalImg(x) {
    x.style.height = "70px";
    x.style.width = "70px";
}
function Show(IdElement) {
    document.getElementById(IdElement).style.display = 'block';
}
function Hide(IdElement) {
    document.getElementById(IdElement).style.display = 'none';
}
function show_bgImg(x, IdElement) {
    bigImg(x);
    Show(IdElement);
}
function Hide_nlImg(x, IdElement) {
    normalImg(x);
    Hide(IdElement);
}