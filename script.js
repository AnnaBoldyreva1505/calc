function calculateCompensation() {
  const trainingCost = parseFloat(
    document.getElementById("trainingCost").value
  );
  const trainingEndDateValue = document.getElementById("trainingEndDate").value;
  const terminationDateValue = document.getElementById("terminationDate").value;
  const isNew = document.getElementById("isNew").checked;
  const isOld = document.getElementById("isOld").checked;

  if (
    isNaN(trainingCost) ||
    !trainingEndDateValue ||
    !terminationDateValue ||
    (!isNew && !isOld)
  ) {
    document.getElementById("result").textContent =
      "Пожалуйста, заполните все поля и выберите тип расчета.";
    return;
  }

  const trainingEndDate = new Date(trainingEndDateValue);
  const terminationDate = new Date(terminationDateValue);

  let requiredDays = 0;
  if (isOld) {
    if (trainingCost <= 300000) {
      requiredDays = 0;
    } else if (trainingCost <= 500000) {
      requiredDays = 365;
    } else if (trainingCost <= 1000000) {
      requiredDays = 730;
    } else {
      requiredDays = 1095;
    }
  } else if (isNew) {
    const MRP = 3692;
    if (trainingCost <= 151 * MRP) {
      requiredDays = 0;
    } else if (trainingCost <= 170.99 * MRP) {
      requiredDays = 185;
    } else if (trainingCost <= 231 * MRP) {
      requiredDays = 365;
    } else {
      requiredDays = 730;
    }
  }

  console.log("requiredDays", requiredDays);

  const daysWorked =
    (terminationDate - trainingEndDate) / (1000 * 60 * 60 * 24);
  const compensation =
    ((requiredDays - daysWorked) / requiredDays) * trainingCost;
  const result = compensation > 0 ? compensation.toFixed(2) : 0;
  const daysLeft = requiredDays - daysWorked;

  document.getElementById(
    "result2"
  ).textContent = `Срок отработки: ${requiredDays} дней`;

if (daysLeft > 0) {
      document.getElementById("result3").textContent = `Остаток: ${daysLeft.toFixed(0)} дней`;
}


  document.getElementById(
    "result"
  ).textContent = `Сумма возмещения: ${result} тенге`;
}
