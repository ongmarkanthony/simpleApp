const mainHeading = document.getElementById("main-heading");
mainHeading.style.textAlign = "center";

const containers = document.querySelectorAll('.mb-3');
containers.forEach(container => {
  container.style.padding = '10px';
});

const formControls = document.querySelectorAll('.form-control');
formControls.forEach(control => {
  control.style.margin = '5px';
});

let maleCount = 0;
let femaleCount = 0;
let infantCount = 0;
let childCount = 0;
let teenCount = 0;
let adultCount = 0;
let seniorCount = 0;

document.getElementById("addBtn").addEventListener("click", addRecord);

function addRecord(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);


  if (gender === "M") {
    maleCount++;
  } else if (gender === "F") {
    femaleCount++;
  }

  if (age >= 0 && age <= 11) {
    infantCount++;
  } else if (age >= 12 && age <= 17) {
    childCount++;
  } else if (age >= 18 && age <= 24) {
    teenCount++;
  } else if (age >= 25 && age <= 64) {
    adultCount++;
  } else if (age >= 65) {
    seniorCount++;
  }

  const tableBody = document.getElementById("tableBody");
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${gender}</td>
    <td>${age}</td>
  `;
  tableBody.appendChild(row);

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("age").value = "";

  updateCounters();
}

function updateCounters() {
  document.getElementById("maleCount").textContent = maleCount;
  document.getElementById("femaleCount").textContent = femaleCount;
  document.getElementById("infantCount").textContent = infantCount;
  document.getElementById("childCount").textContent = childCount;
  document.getElementById("teenCount").textContent = teenCount;
  document.getElementById("adultCount").textContent = adultCount;
  document.getElementById("seniorCount").textContent = seniorCount;
}


  




