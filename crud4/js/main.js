let containerProduct = [];
if (localStorage.getItem("product") == null) {
    containerProduct = [];
} else {
    containerProduct = JSON.parse(localStorage.getItem("product"))
    showData();
}
function addProduct() {
    let nameProduct = document.getElementById("nameInp").value;
    let priceProduct = document.getElementById("priceInp").value;
    let modelProduct = document.getElementById("modeInp").value;
    let descriptionProduct = document.getElementById("descriptionInp").value;
    if (validForm(nameProduct, priceProduct) == true) {
        let product = {
            name: nameProduct,
            price: priceProduct,
            model: modelProduct,
            description: descriptionProduct
        }

        containerProduct.push(product);

        localStorage.setItem("product", JSON.stringify(containerProduct));

        clearInputs();
        showData();
    }
    else {
        alert("icant");
    }
}
function clearInputs() {
    let inputs = document.getElementsByClassName("w-75");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}
function validForm(name, price) {
    let nameRegex = /^[A-z]{3,}$/;
    let priceRegex = /^[1-9][0-9]{1,5}$/;
    if (nameRegex.test(name) && priceRegex.test(price)) {
        return true;
    } else {
        return false;
    }
}

/**************************** */
function showData() {
    let temp = "";
    for (let i = 0; i < containerProduct.length; i++) {
        temp += "<div class='col-md-4'><div class='item card mb-3'><h5>"
            + containerProduct[i].name + "</h5><span>" +
            containerProduct[i].price + "</span><button onclick='deleteProduct(" + i
            + ")'>deleteProduct</button><button onclick='updateProduct(" + i
            + ")'>updateProduct</button><button onclick='seeMore(" + i
            + ")'>More</button></div></div>"
    }

    document.getElementById("showData").innerHTML = temp;
}
/***************************************************** */

function updateProduct(index) {
    document.getElementById("nameInp").value = containerProduct[index].name;
    document.getElementById("priceInp").value = containerProduct[index].price;
    containerProduct.splice(index, 1);
    localStorage.setItem("product", JSON.stringify(containerProduct));
    showData();
}
function deleteProduct(index2) {
    containerProduct.splice(index2, 1);
    localStorage.setItem("product", JSON.stringify(containerProduct));
    showData();
}
function search(term) {
    let temp = "";
    for (let i = 0; i < containerProduct.length; i++) {
        if (containerProduct[i].name.toLowerCase().includes(term.toLowerCase())) {
            temp += "<div class='col-md-4'><div class='item card mb-3'><h5>"
                + containerProduct[i].name + "</h5><span>" +
                containerProduct[i].price + "</span><button onclick='deleteProduct(" + i
                + ")'>deleteProduct</button><button onclick='updateProduct(" + i
                + ")'>updateProduct</button></div></div>"
        }
    }
    document.getElementById("showData").innerHTML = temp;

}
function seeMore(index3) {
    window.open("seemore.html");
    let temp = "<div class='col-md-12'><div class='item card m-3'><h5>"
        + containerProduct[index3].name + "</h5><span>" +
        containerProduct[index3].price + "</span></div></div>";
    document.getElementById("seeMore").innerHTML = temp;
}

