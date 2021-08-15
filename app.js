const correctAnswers = ['B', 'A', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('#result');
const feedback = document.querySelector('#feedback');
const resultContainer = document.querySelector('#resultContainer');

const total = correctAnswers.length * 5;
form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    userAnswers.forEach((answer, index) => {
        if (answer == correctAnswers[index])
            score += 5;
    });
    let percent = score / total * 100;
    scrollTo(0, 0);
    resultContainer.classList.remove('d-none');
    if (percent === 100) {
        feedback.textContent = 'GG 🎉';
    } else {
        feedback.textContent = 'Try again...';
    }
    let output = 0;
    const timer = setInterval(() => {
        result.textContent = `${output}%`;
        if (output === percent) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});