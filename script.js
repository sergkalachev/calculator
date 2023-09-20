let slider = document.getElementById("NumberOfPayments");
let output = document.getElementById("selectedNumber");

console.log(slider);
console.log(output);

slider.addEventListener("input", updateOutput);

function updateOutput() {
  const selectedValue = slider.value;
  output.textContent = selectedValue;
  console.log(selectedValue);
}

//Динамическое отображение выбранного количества платежей
function showSelectedNumber() {
  let countFields = document.getElementById("NumberOfPayments").value;
  document.getElementById("selectedNumber").textContent = countFields;
  console.log(countFields);
}
showSelectedNumber();

var varInputFields = document.getElementById("inputFields");

NumberOfPayments.addEventListener("input", function () {
  let count = parseInt(NumberOfPayments.value);
  createFields(count);
});

function createFields(count) {
  varInputFields.innerHTML = ""; // Очищаем предыдущие поля ввода

  for (let i = 1; i <= count; i++) {
    var label = document.createElement("label");
    label.textContent = "Платеж %  " + i + ": ";
    var input = document.createElement("input");
    input.type = "text";
    input.id = "field" + i;

    varInputFields.appendChild(label);
    varInputFields.appendChild(input);
    varInputFields.appendChild(document.createElement("br"));
  }
}

let ResultData = []; // Объект для хранения введенных значений

function createScheduleRecords() {
  // Получаем count полей от пользователя
  let count = parseInt(document.getElementById("NumberOfPayments").value);

  // Создаем новые поля ввода в соответствии с введенным countм
  for (var i = 1; i <= count; i++) {
    var label = document.createElement("label");
    label.textContent = i + " платеж, %" + ": ";
    var input = document.createElement("input");
    input.type = "text";
    input.id = "IminPayment" + i;
    ResultData[i] =
      // Добавляем обработчик события для сохранения введенных данных
      input.addEventListener("input", function (event) {
        var полеId = event.target.id;
        var значение = event.target.value;
        ResultData[полеId] = значение;
      });

    document.getElementById("inputFields").appendChild(label);
    document.getElementById("inputFields").appendChild(input);
    document
      .getElementById("inputFields")
      .appendChild(document.createElement("br"));
  }
}
// Функция для отображения введенных данных
function отобразитьВведенныеДанные() {
  var cost = parseFloat(document.getElementById("cost").value);
  let count = parseInt(document.getElementById("NumberOfPayments").value);
  console.log(cost);
  console.log(count);
  console.log(ResultData);
  let результат = "";
  let agentFee =
    "Комиссия агента: -" +
    parseFloat(document.getElementById("agentCost").value);
  for (var i = 1; i <= count; i++) {
    результат += i + ": " + (parseInt(ResultData[i]) * cost) / 100 + "<br>";
  }
  document.getElementById("filledData").innerHTML = результат;
  document.getElementById("AgentFee").innerHTML = agentFee;
}
