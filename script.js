let div = document.createElement("div");
let img = document.createElement("img");

div.style.border = "2px solid yellow";
div.style.width = "200px";
div.style.height = "280px";
div.style.margin = "auto";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.justifyContent = "center";
div.style.borderRadius = "10px";
div.style.background = "#000";

img.style.width = "100%";
img.style.height = "100%";
img.style.objectFit = "cover";

img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3rwECA27Tep6SOPOgD6aB1TskTuiC-xDTA&s";

div.append(img);
document.body.append(div);

