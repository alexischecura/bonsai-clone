// Functionality Switch

const switchInput = document.querySelector('.switch');
const price = document.querySelectorAll('.price');

switchInput.addEventListener('change', () => {
  price.forEach(plan => {
    plan.classList.toggle('show');
  });
});

// Functionality accordion faq

const faqQuestion = document.querySelectorAll('.faq-question');
const faqContent = document.querySelectorAll('.faq-content');

faqQuestion.forEach((faq, index) => {
  faq.addEventListener('click', () => {
    faqContent[index].classList.toggle('hidden')
  });
});
