// Task 1 - Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
  }
  
  console.log(calculateProfit(20, 30, 100)); // Expected output: "Total Profit: $1000"
  console.log(calculateProfit(50, 70, 200)); // Expected output: "Total Profit: $4000"

  // Task 2 - Sales Tax Computation
const calculateSalesTax = function(amount, taxRate) {
    let salesTax = amount * taxRate;
    return `Sales Tax: $${salesTax}`;
  }
  
  console.log(calculateSalesTax(100, 0.07)); // Expected output: "Sales Tax: $7"
  console.log(calculateSalesTax(500, 0.1));  // Expected output: "Sales Tax: $50"

  // Task 3 - Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) => {
    let bonusPercentage;
    if (performanceRating === "Excellent") {
      bonusPercentage = 0.2;
    } else if (performanceRating === "Good") {
      bonusPercentage = 0.1;
    } else if (performanceRating === "Average") {
      bonusPercentage = 0.05;
    } else {
      bonusPercentage = 0;
    }
    let bonus = salary * bonusPercentage;
    return `Bonus: $${bonus}`;
  }
  
  console.log(calculateBonus(5000, "Excellent")); // Expected output: "Bonus: $1000"
  console.log(calculateBonus(7000, "Good"));      // Expected output: "Bonus: $700"

  

