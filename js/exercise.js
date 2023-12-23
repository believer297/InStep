// Declare elements:
const showExercise = document.getElementById("show-exercise");
const exerciseSelect = document.getElementById("exercise-select");
const exercisePic = document.getElementById("exercise-pic");

// Exercise Guide:
showExercise.addEventListener("click", function (event) {
    const select = exerciseSelect.value;
    if (select != "none"){
      exercisePic.src = "img/exercises/" + select + ".svg";
      exercisePic.style = "background: #EBEBEB; padding: 2rem; border-radius: 16px; box-shadow: 0 0 4px #000";
    }
  });
  // *****************