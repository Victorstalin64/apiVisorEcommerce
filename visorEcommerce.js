const getData = async () => {
    try {
        const url = "https://fakestoreapi.com/products/16";
        
        const request = await fetch(url);
        if (!request.ok) {
            throw new Error(`Response status: ${request.status}`);
        }

        const response = await request.json();
        console.log(response);

        const item = document.querySelector("#usuario-card"); 

        item.querySelector("img").src = response.image;
        item.querySelector(".nombre-usuario").textContent = response.title;
        item.querySelector(".username").textContent = "$" + response.price;
        item.querySelector(".email").textContent = response.category.toUpperCase();
        item.querySelector(".web").textContent = response.description;
        item.querySelector(".empresa").innerHTML = `<i class="fa-solid fa-star text-warning fs-6"></i> ${response.rating.rate}`;
        item.querySelector(".ciudad").textContent = response.rating.count + " votos";

    } catch (error) {
        console.log("Error: ", error);
    }
}

getData();