function calculateNetSalary() {
    // Prompt the user to input
    const basicSalary = Number(document.getElementById("basicSalary").value);
    const benefits = Number(document.getElementById("benefits").value);
  
    //calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Fixed NHIF deduction of 500 shillings
    const nhifDeductions = 500; 
  
    //nssf deductions
    const nssfDeductions = 200;
  
    //calculate taxable income and payee
    const taxRate = 0.2;
    const taxableIncome = grossSalary - nssfDeductions;
    const payee = taxableIncome * taxRate;
  
    //calculate net salary
    const netSalary = grossSalary - nssfDeductions - payee - nhifDeductions;
  
    // Display the results in the HTML document
    document.getElementById("grossSalary").innerHTML = `${grossSalary}`;
    document.getElementById("nhifDeductions").innerHTML = `${nhifDeductions}`;
    document.getElementById("nssfDeductions").innerHTML = `${nssfDeductions}`;
    document.getElementById("payee").innerHTML = `${payee}`;
    document.getElementById("netSalary").innerHTML = `${netSalary}`;
  }
  