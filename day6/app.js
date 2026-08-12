var products = [];

var stored = localStorage.getItem("products");
if (stored) {
    products = JSON.parse(stored);
}

var inpId = document.getElementById("id");
var inpName = document.getElementById("name");
var inpDesc = document.getElementById("desc");
var inpColor = document.getElementById("color");
var inpStock = document.getElementById("stock");

var btnAdd = document.getElementById("add");
var btnUpdate = document.getElementById("update");
var btnCancel = document.getElementById("cancel");

var inpSearch = document.getElementById("search");
var chkSearchId = document.getElementById("searchId");
var chkSearchName = document.getElementById("searchName");
var selSearchColor = document.getElementById("searchColor");
var selSearchStock = document.getElementById("searchStock");

var tableBody = document.getElementById("tableBody");

var currentEditId = null;

function saveToLocalStorage() {
    localStorage.setItem("products", JSON.stringify(products));
}

function renderProducts(list) {
    var displayList;
    if (list) {
        displayList = list;
    } else {
        displayList = products;
    }
    
    tableBody.innerHTML = "";
    
    for (let i = 0; i < displayList.length; i++) {
        let product = displayList[i];
        var row = document.createElement("tr");
        
        var idCell = document.createElement("td");
        idCell.textContent = product.id;
        row.appendChild(idCell);
        
        var nameCell = document.createElement("td");
        nameCell.textContent = product.name;
        row.appendChild(nameCell);
        
        var descCell = document.createElement("td");
        descCell.textContent = product.desc;
        row.appendChild(descCell);
        
        var colorCell = document.createElement("td");
        colorCell.textContent = product.color;
        row.appendChild(colorCell);
        
        var stockCell = document.createElement("td");
        var stockText;
        if (product.outOfStock === true) {
            stockText = "Yes";
        } else {
            stockText = "No";
        }
        stockCell.textContent = stockText;
        row.appendChild(stockCell);
        
        var actionsCell = document.createElement("td");
        
        var editBtn = document.createElement("button");
        editBtn.textContent = "Update";
        editBtn.addEventListener("click", function () {
            startUpdate(product);
        });
        actionsCell.appendChild(editBtn);
        
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            deleteProduct(product.id);
        });
        actionsCell.appendChild(deleteBtn);
        
        row.appendChild(actionsCell);
        tableBody.appendChild(row);
    }
}

function clearForm() {
    inpId.value = "";
    inpName.value = "";
    inpDesc.value = "";
    inpColor.value = "";
    inpStock.checked = false;
}

function addProduct() {
    var newProduct = {
        id: inpId.value.trim(),
        name: inpName.value.trim(),
        desc: inpDesc.value.trim(),
        color: inpColor.value,
        outOfStock: inpStock.checked
    };
    
    if (newProduct.id === "" || newProduct.name === "") {
        alert("Please enter ID and Name");
        return;
    }
    
    var exists = false;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === newProduct.id) {
            exists = true;
            break;
        }
    }
    
    if (exists) {
        alert("Product with this ID already exists");
        return;
    }
    
    products.push(newProduct);
    saveToLocalStorage();
    clearForm();
    renderProducts();
}

function deleteProduct(productId) {
    var index = -1;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            index = i;
            break;
        }
    }
    
    if (index !== -1) {
        products.splice(index, 1);
        saveToLocalStorage();
        renderProducts();
    }
}

function startUpdate(product) {
    currentEditId = product.id;
    inpId.value = product.id;
    inpId.disabled = true;
    inpName.value = product.name;
    inpDesc.value = product.desc;
    inpColor.value = product.color;
    inpStock.checked = product.outOfStock;
    
    btnAdd.style.display = "none";
    btnUpdate.style.display = "inline-block";
    btnCancel.style.display = "inline-block";
}

function saveUpdate() {
    var newName = inpName.value.trim();
    if (newName === "") {
        alert("Please enter Product Name");
        return;
    }
    
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === currentEditId) {
            products[i].name = newName;
            products[i].desc = inpDesc.value.trim();
            products[i].color = inpColor.value;
            products[i].outOfStock = inpStock.checked;
            break;
        }
    }
    
    saveToLocalStorage();
    resetEditMode();
    renderProducts();
}

function resetEditMode() {
    currentEditId = null;
    inpId.disabled = false;
    clearForm();
    btnAdd.style.display = "inline-block";
    btnUpdate.style.display = "none";
    btnCancel.style.display = "none";
}

function performSearch() {
    var query = inpSearch.value.trim().toLowerCase();
    
    var inId = chkSearchId.checked;
    var inName = chkSearchName.checked;
    
    var selectedColor = selSearchColor.value;
    var selectedStock = selSearchStock.value;
    
    var filtered = [];
    
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        
        var matchesText = true;
        if (query !== "") {
            var idContains = product.id.toLowerCase().indexOf(query) !== -1;
            var nameContains = product.name.toLowerCase().indexOf(query) !== -1;
            
            if (inId === true && inName === false) {
                matchesText = idContains;
            } else if (inName === true && inId === false) {
                matchesText = nameContains;
            } else {
                matchesText = idContains || nameContains;
            }
        }
        
        var matchesColor = true;
        if (selectedColor !== "") {
            if (product.color !== selectedColor) {
                matchesColor = false;
            }
        }
        
        var matchesStock = true;
        if (selectedStock !== "") {
            if (selectedStock === "in" && product.outOfStock === true) {
                matchesStock = false;
            }
            if (selectedStock === "out" && product.outOfStock === false) {
                matchesStock = false;
            }
        }
        
        if (matchesText === true && matchesColor === true && matchesStock === true) {
            filtered.push(product);
        }
    }
    
    renderProducts(filtered);
}

btnAdd.addEventListener("click", addProduct);
btnUpdate.addEventListener("click", saveUpdate);
btnCancel.addEventListener("click", resetEditMode);
inpSearch.addEventListener("input", performSearch);
chkSearchId.addEventListener("change", performSearch);
chkSearchName.addEventListener("change", performSearch);
selSearchColor.addEventListener("change", performSearch);
selSearchStock.addEventListener("change", performSearch);

renderProducts();
