document.querySelector("#dice").addEventListener("click", searchIP);

function searchIP(event) {
  event.preventDefault();
  const apiUrl = `https://api.adviceslip.com/advice`;
  clearData();
  fetchData(apiUrl);
}

function clearData() {
  document.querySelector("#numberId").textContent = "";
  document.querySelector("#quote").textContent = "";
}

function fetchData(apiUrl) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      showData(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function showData(data) {
  const numId = data.slip.id;
  const textAdvice = data.slip.advice;
  document.querySelector("#numberId").textContent = numId;
  document.querySelector("#quote").textContent = textAdvice;
}
