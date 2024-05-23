const salary = (inHand, callback) => {
    const deduction = callback();
    let totalDeduction = 0;
    for (let key in deduction) {
        totalDeduction += (inHand * deduction[key]) / 100;
    }
    return inHand - totalDeduction;
};

const taxes = () => {
    return {
        gst: 5.5,
        itr: 2.3,
        homeloan: 8.9,
        educationloan: 10.2,
        iPhoneLoan: 9.2
    };
};

const netSalary = salary(50000, taxes);
console.log("net salary=", netSalary); 
