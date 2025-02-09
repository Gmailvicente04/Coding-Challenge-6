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

  // Task 4 - Subscription Pricing Model
function calculateSubscriptionCost(plan, months, discount = 0) {
    let costPerMonth;
    if (plan === "Basic") {
      costPerMonth = 10;
    } else if (plan === "Premium") {
      costPerMonth = 20;
    } else if (plan === "Enterprise") {
      costPerMonth = 50;
    } else {
      return "Invalid plan";
    }
    let totalCost = costPerMonth * months * (1 - discount / 100);
    return `Total Cost: $${totalCost}`;
  }
  
  console.log(calculateSubscriptionCost("Basic", 6, 10)); // Expected output: "Total Cost: $50"
  console.log(calculateSubscriptionCost("Premium", 12, 0)); // Expected output: "Total Cost: $240"
  

  // Task 5 - Currency Conversion
function convertCurrency(amount, exchangeRate) {
    let convertedAmount = amount * exchangeRate;
    return `Converted Amount: $${convertedAmount.toFixed(2)}`;
  }
  
  console.log(convertCurrency(100, 1.1)); // Expected output: "Converted Amount: $110.00"
  console.log(convertCurrency(250, 0.85)); // Expected output: "Converted Amount: $212.50"
  

  // Task 6 - Higher-Order Function for Bulk Orders
let orders = [200, 600, 1200, 450, 800];

function applyBulkDiscount(orders, discountFunction) {
  return orders.map(discountFunction);
}

console.log(applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount));
// Expected output: [200, 540, 1080, 450, 720]

// Task 7 - Business Expense Tracker
function createExpenseTracker() {
    let totalExpenses = 0;
    return function(expense) {
      totalExpenses += expense;
      return `Total Expenses: $${totalExpenses}`;
    };
  }
  
  let tracker = createExpenseTracker();
  console.log(tracker(200)); // Expected output: "Total Expenses: $200"
  console.log(tracker(150)); // Expected output: "Total Expenses: $350"
  

