const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const doggos = document.getElementById("dog-target");

addNewDoggo = () => {
  const promise = fetch(DOG_URL);
  promise
    .then((response) => {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then((processedResponse) => {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "cute doggo";
      doggos.appendChild(img);
    });
};

document.getElementById("dog-btn").addEventListener("click", addNewDoggo);
