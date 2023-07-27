// script.js

document.addEventListener("DOMContentLoaded", function () {
    const distractionsForm = document.getElementById("distractionsForm");
    const distractionInput = document.getElementById("distractionInput");
    const solutionsList = document.getElementById("solutionsList");

    // Load solutions from local storage on page load
    loadSolutions();

    distractionsForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const distraction = distractionInput.value.trim();

        if (distraction !== "") {
            addDistraction(distraction);
            distractionInput.value = "";
        }
    });

    function addDistraction(distraction) {
        const solution = prompt(`What's your solution for "${distraction}"?`);

        if (solution !== null && solution.trim() !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${distraction}:</strong> ${solution}`;
            solutionsList.appendChild(listItem);

            // Save the solution to local storage
            saveSolution(distraction, solution);
        }
    }

    function loadSolutions() {
        for (let i = 0; i < localStorage.length; i++) {
            const distraction = localStorage.key(i);
            const solution = localStorage.getItem(distraction);

            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${distraction}:</strong> ${solution}`;
            solutionsList.appendChild(listItem);
        }
    }

    function saveSolution(distraction, solution) {
        localStorage.setItem(distraction, solution);
    }
});
