fetch("https://unsplash.it/1280/840")
  .then((res) => res.blob())
  .then((blob) => {
    let img = document.createElement("img");
    img.src = URL.createObjectURL(blob);
    document.querySelector("body").appendChild(img);
  });
