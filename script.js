function calculateCompensation() {
    const trainingCost = parseFloat(document.getElementById('trainingCost').value);
    const trainingEndDate = new Date(document.getElementById('trainingEndDate').value);
    const terminationDate = new Date(document.getElementById('terminationDate').value);

    if (isNaN(trainingCost) || !trainingEndDate || !terminationDate) {
        document.getElementById('result').textContent = 'Пожалуйста, заполните все поля правильно.';
        return;
    }

    const daysWorked = (terminationDate - trainingEndDate) / (1000 * 60 * 60 * 24);
   console.log("daysWorked: ", daysWorked)
   
    const MRP = 3692;

    let requiredDays = 0;
    if (trainingCost <= 150 * MRP) {
        requiredDays = 0;
    } else if (trainingCost <= 170 * MRP) {
        requiredDays = 185;
    } else if (trainingCost <= 230 * MRP) {
        requiredDays = 365;
    } else {
        requiredDays = 730;
    }

    console.log("requiredDays", requiredDays)
    console.log("trainingCost", trainingCost)

    const compensation = ((requiredDays - daysWorked) / requiredDays) * trainingCost;
    const result = compensation > 0 ? compensation.toFixed(2) : 0;


    document.getElementById('result').textContent = `Сумма возмещения: ${result} тенге`;
}
