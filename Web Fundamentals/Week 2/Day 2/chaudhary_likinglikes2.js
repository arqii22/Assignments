function add1(element) {
    var target = element.parentElement.querySelector("#count");
    var num = parseFloat(target.innerText);
    target.innerText = num + 1;
}