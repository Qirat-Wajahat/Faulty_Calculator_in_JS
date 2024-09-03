// Theme toggle functionality
const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.addEventListener('click', function () {
    const body = document.body;
    const card = document.querySelector('.card');
    const labels = document.querySelectorAll('.form-label');
    const output = document.getElementById('output');
    
    body.classList.toggle('dark-mode');
    card.classList.toggle('dark-mode');
    output.classList.toggle('dark-mode');
    
    labels.forEach(label => {
        label.classList.toggle('dark-mode');
    });

    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Switch to Light Mode';
        themeToggleBtn.classList.add('btn-dark-mode');
    } else {
        themeToggleBtn.textContent = 'Switch to Dark Mode';
        themeToggleBtn.classList.remove('btn-dark-mode');
    }
});

// Calculator functionality
function calculate() {
    const num_1 = parseFloat(document.getElementById("num_1").value);
    const operator = document.getElementById("operator").value;
    const num_2 = parseFloat(document.getElementById("num_2").value);
    const output = document.getElementById('output');

    let Obj = {
        "+": "-",
        "-": "/",
        "*": "+",
        "/": "**"
    };

    let random = Math.random(); // Define random value between 0 and 1

    let result;
    if (random > 0.1) {
        result = eval(num_1 + operator + num_2);
    } else {
        let faultyOperator = Obj[operator];
        result = eval(num_1 + faultyOperator + num_2);
    }

    output.textContent = `Result: ${result}`;
    console.log(result);
}

// Event listener for submit button
document.getElementById("submitBtn").addEventListener("click", calculate);

// Event listener for Enter key press
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission if inside a form
            document.getElementById('submitBtn').click();
        }
    });
});
