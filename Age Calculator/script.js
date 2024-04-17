let dateInput = document.getElementById("date");
let result = document.querySelector(".showAge");

dateInput.addEventListener("click", () => {
  dateInput.showPicker(); // Trigger the date picker dialog
});

dateInput.max = new Date().toISOString().split("T")[0];

const calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", calculateAge);

function calculateAge() {
  const inputDateObj = new Date(dateInput.value);

  let birthDate = inputDateObj.getDate();
  let birthMonth = inputDateObj.getMonth() + 1;
  let birthYear = inputDateObj.getFullYear();

  const currentDateObj = new Date();

  let currentDate = currentDateObj.getDate();
  let currentMonth = currentDateObj.getMonth() + 1;
  let currentYear = currentDateObj.getFullYear();

  let ageDate, ageMonth, ageYear;

  ageYear = currentYear - birthYear;

  if (currentMonth >= birthMonth) {
    ageMonth = currentMonth - birthMonth;
  } else {
    ageYear--;
    ageMonth = 12 + currentMonth - birthMonth;
  }

  if (currentDate >= birthDate) {
    ageDate = currentDate - birthDate;
  } else {
    ageMonth--;
    ageDate = getDaysInYear(ageYear, ageMonth) + currentDate - birthDate;
  }

  if (ageMonth < 0) {
    ageMonth = 11;
    ageYear--;
  }

  result.innerHTML = `You are <span>${ageYear}</span> years <span>${ageMonth}</span> months <span>${ageDate}</span> days old.`;
}

function getDaysInYear(year, month) {
  const numberOFDays = new Date(year, month, 0).getDate();
  return numberOFDays;
}
