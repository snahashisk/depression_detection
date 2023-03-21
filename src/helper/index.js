export function sleepQuality(hours) {
  if (hours < 6) {
    return "Your sleep duration is considered bad. You may experience fatigue, difficulty concentrating, and increased irritability. It is recommended to increase your sleep duration to improve your overall health and well-being.";
  } else if (hours >= 6 && hours < 8) {
    return "Your sleep duration is considered good. You may still experience some tiredness during the day, but it should not significantly impact your functioning. However, increasing your sleep duration to 8 hours per night can further improve your health and well-being.";
  } else {
    return "Your sleep duration is considered excellent. You should experience good energy levels and overall well-being. Keep up the good work!";
  }
}

export function getWeightCategory(bmi) {
  if (bmi < 18.5) {
    return "You are Underweight. Eat healthy foods.";
  } else if (bmi < 25) {
    return "You have a Healthy Body. Keep it up.";
  } else if (bmi < 30) {
    return "You are Overweight. You should workout.";
  } else {
    return "You are Obese. Eat less exercise more.";
  }
}

export function checkBMI(bmi) {
  let result = "";
  if (bmi < 18.5) {
    result =
      "Your BMI is considered underweight. You may want to consider increasing your caloric intake and participating in regular strength training to build muscle mass.";
  } else if (bmi >= 18.5 && bmi < 25) {
    result =
      "Your BMI is considered normal. Keep up the good work by maintaining a balanced diet and staying physically active.";
  } else if (bmi >= 25 && bmi < 30) {
    result =
      "Your BMI is considered overweight. You may want to consider reducing your caloric intake and increasing your physical activity to lose weight and improve your health.";
  } else if (bmi >= 30) {
    result =
      "Your BMI is considered obese. You may want to consider speaking with a healthcare professional or registered dietitian to create a personalized plan to lose weight and improve your health.";
  }
  return result;
}

export function drinking_index(str) {
  if (str === "Excessive") {
    return 95;
  } else if (str === "Modrate") {
    return 50;
  } else {
    return 5;
  }
}

export function smoking_risk(num) {
  if (num <= 50) {
    return (
      <span className="bg-green-500 px-4 py-2 rounded-full text-white">
        Not At Risk
      </span>
    );
  } else {
    return (
      <span className="bg-red-500 px-4 py-2 rounded-full text-white">
        At Risk
      </span>
    );
  }
}

export function drinking_risk(str) {
  if (str === "Excessive") {
    return (
      <span className="bg-red-500 px-4 py-2 rounded-full text-white">
        At Risk
      </span>
    );
  } else {
    return (
      <span className="bg-green-500 px-4 py-2 rounded-full text-white">
        Not At Risk
      </span>
    );
  }
}
