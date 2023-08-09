const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');


const answersArray = ['Yes!', 'No.', 'Maybe...', 'Ask again...later!', `'If I were you...I wouldn't do it!'`];


const shakeBall = () => {

    ball.classList.add('shake-animaton');
    setTimeout(checkInput, 1000)
}

const checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = '';       
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'Where is the question mark?';
        answer.textContent = ''        
    } else {
        error.textContent = 'You need to ask the question first!';
        answer.textContent = ''  
    }
    
    ball.classList.remove('shake-animaton');      
}


const generateAnswer = () => {
    const number = Math.floor(Math.random() * 5);
    answer.innerHTML = `<span>And the answer is:</span> ${answersArray[number]}`
}


ball.addEventListener('click', shakeBall)