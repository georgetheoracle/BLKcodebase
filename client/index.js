const countdownElement = document.getElementById("countdown");
const hamburger = document.querySelector('.fa-bars');
const navMenu = document.querySelector('.container');
const navLink = document.querySelectorAll('.nav-link');
// Charts
const myChart = document.querySelector('.my-chart');
// Get the modal and buttons
const loginModal = document.getElementById('loginModal');
const loginButton = document.getElementById('loginButton');
const closeButton = document.getElementById('closeButton');

// Function to open the modal
const openModal = () => {
  loginModal.style.display = 'block';
};

// Function to close the modal
const closeModal = () => {
  loginModal.style.display = 'none';
};

// Event listeners for opening and closing the modal
loginButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

// Close the modal if the user clicks outside the modal
window.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    closeModal();
  }
});

// Close the modal if the user presses the 'Esc' key
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
// HAMBURGER MENU
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})
navLink.forEach(x => x.addEventListener('click', ()=>{
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))
// Set the date we're counting down to
const countDownDate = new Date("march 28, 2024 00:00:00").getTime();

// Update the countdown every 1 second

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, stop updating
  if (distance < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "EXPIRED";
  }
};

// Call updateCountdown immediately to avoid initial delay
updateCountdown();

// Update the countdown every 1000 milliseconds (1 second)
const countdownInterval = setInterval(updateCountdown, 1000);

// Charts
const chartData = {
    labels: ['Initial token Sale 35%', 'Airdrop 25%', 'EcoSystem 15%', 'Team and Advisors 15%', 'Reserve Fund 10%'],
    data: [35, 25, 15, 15, 10]
};
new Chart(myChart, {
    type: 'doughnut',
    data: {
        labels: chartData.labels,
        datasets: [
        {
            label: 'Distribution',
            data: chartData.data,
        }
    ]
    },
    options: {
        borderWidth: 5,
        borderRadius: 2,
        hoverBorderWidth: 0,
        plugins: {
            legend: {
                labels:{
                    fontColor: '#fff',
                    font: {
                        size: 14
                    }
                }

            }
        }
    }
});