


window.addEventListener('storage', function(e) {  
    location.reload();
});



if(!localStorage.getItem("1img")){
    localStorage.setItem("1img", "old1.jpg");
    localStorage.setItem("2img", "old2.jpg");
    localStorage.setItem("3img", "new1.jpg");
    localStorage.setItem("4img", "new2.jpg");
    localStorage.setItem("1name", "old 1980 IBM! Good Collection!");
    localStorage.setItem("2name", "A better, and newer 1988 IBM!");
    localStorage.setItem("3name", "Very new, fits for office enviroment, space saver!");
    localStorage.setItem("4name", "Gaming Computer! with Amazing features!");


}

//this is for the button like

function createButton(id){
    button = document.createElement('button');
    button.id = id;
    if(!localStorage.getItem(id)) {
        //in this case that means there is no item, the current item with id is not liked
        button.innerHTML="Add to your Wishlist!";
    } else{
        button.innerHTML="Remove from Wishlist!";
        
    }
    button.classList = "wishlist";

    document.getElementById("product"+id).appendChild(button);
    button.addEventListener("click", uponClick);

}

function uponClick(event){
    button = event.target;
    id = button.id;
    if(!localStorage.getItem(id)) {
        //in this case that means there is no item, the current item with id is not liked
        localStorage.setItem(id,0);
        button.innerHTML="Remove from Wishlist!";
    } else{
        localStorage.removeItem(id);
        button.innerHTML="Add to your Wishlist!";
    }
}
function createWishlist(id){
    //for here, we already know if the item exists or not, what we need to do is to display them in the wish list
    var xx = document.getElementById("wishlist");
    var dd1 = document.createElement('div');

    dd1.classList.add("gallery");
    dd1.id="div"+id;
    dd2 = document.createElement('h2');
    dd2.innerHTML = localStorage.getItem(id+"name");
    var imgs = document.createElement('img');
    imgs.src = localStorage.getItem(id+"img");
    button = document.createElement('button');
    button.id = "wl"+id;
    button.classList = "wishlist";


    button.innerHTML="Remove from Wishlist!";
    button.addEventListener("click", wishlistClick);
    dd1.appendChild(imgs);
    dd1.appendChild(dd2);
    dd1.appendChild(button);

    xx.appendChild(dd1);
}

function wishlistClick(event){
    button = event.target;
    id = button.id.substring(2);
    document.getElementById("div"+id).remove();
    localStorage.removeItem(id);
}