function addProduct() {
	const table = document.getElementById("show").getElementsByTagName('tbody')[0];
	const row = table.insertRow();

	const productName = document.getElementById("productName").value;
	const productId = document.getElementById("productId").value;
	const category = document.getElementById("category").value;
	const brand = document.getElementById("brand").value;
	const price = document.getElementById("price").value;
	const quantity = document.getElementById("quantity").value;
	const description = document.getElementById("description").value;
	const imageUrl = document.getElementById("imageUrl").value;

	row.insertCell(0).innerText = productName;
	row.insertCell(1).innerText = productId;
	row.insertCell(2).innerText = category;
	row.insertCell(3).innerText = brand;
	row.insertCell(4).innerText = price;
	row.insertCell(5).innerText = quantity;
	row.insertCell(6).innerText = description;
    // row.insertCell(7).innerText = imageUrl;

	const imgCell = row.insertCell(7);
	const img = document.createElement("img");
	img.src = imageUrl;
	img.alt = productName;
	imgCell.appendChild(img);
}

function addProduct()
{
    const table = document.getElementsByID("show").document.getElementsByTagName('tbody')[0];
    const row = table.insertRow();

    const productName=document.getElementById("productName").value;
    const productId=document.getElementById("productId").value;

    row.insertCell
}
