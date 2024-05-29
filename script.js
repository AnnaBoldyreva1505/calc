// function calculateCompensation() {
//     const trainingCost = parseFloat(document.getElementById('trainingCost').value);
//     const trainingEndDate = new Date(document.getElementById('trainingEndDate').value);
//     const terminationDate = new Date(document.getElementById('terminationDate').value);

//     if (isNaN(trainingCost) || !trainingEndDate || !terminationDate) {
//         document.getElementById('result').textContent = 'Пожалуйста, заполните все поля правильно.';
//         return;
//     }

//     const daysWorked = (terminationDate - trainingEndDate) / (1000 * 60 * 60 * 24);
//    console.log("daysWorked: ", daysWorked)
   
//     const MRP = 3692;

//     let requiredDays = 0;
//     if (trainingCost <= 150 * MRP) {
//         requiredDays = 0;
//     } else if (trainingCost <= 170 * MRP) {
//         requiredDays = 185;
//     } else if (trainingCost <= 230 * MRP) {
//         requiredDays = 365;
//     } else {
//         requiredDays = 730;
//     }

//     console.log("requiredDays", requiredDays)
//     console.log("trainingCost", trainingCost)

//     const compensation = ((requiredDays - daysWorked) / requiredDays) * trainingCost;
//     const result = compensation > 0 ? compensation.toFixed(2) : 0;


//     document.getElementById('result').textContent = `Сумма возмещения: ${result} тенге`;
// }


function calculateCompensation() {
    const trainingCost = parseFloat(document.getElementById('trainingCost').value);
    const trainingEndDate = new Date(document.getElementById('trainingEndDate').value);
    const terminationDate = new Date(document.getElementById('terminationDate').value);
    const isNew = document.getElementById('isNew').checked;
    const isOld = document.getElementById('isOld').checked;

    if (isNaN(trainingCost) || !trainingEndDate || !terminationDate || (!isNew && !isOld)) {
        document.getElementById('result').textContent = 'Пожалуйста, заполните все поля и выберите тип расчета.';
        return;
    }

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
        const MRP = 3692; // Вы должны также определить MRP здесь
        if (trainingCost <= 150 * MRP) {
            requiredDays = 0;
        } else if (trainingCost <= 170 * MRP) {
            requiredDays = 185;
        } else if (trainingCost <= 230 * MRP) {
            requiredDays = 365;
        } else {
            requiredDays = 730;
        }
    }

    console.log("requiredDays", requiredDays)

    const daysWorked = (terminationDate - trainingEndDate) / (1000 * 60 * 60 * 24);
    const compensation = ((requiredDays - daysWorked) / requiredDays) * trainingCost;
    const result = compensation > 0 ? compensation.toFixed(2) : 0;

    document.getElementById('result').textContent = `Сумма возмещения: ${result} тенге`;
}
