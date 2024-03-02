
var messages = {
    'Ira': 'hi princess, happy birthday to you my dear princess, you\'re the rainbow after the rain eme, I hope Indi mo na taguon mga gamit ko Kasi u know na  I\'m so tangadal, thankyouu for being the nicest friend to me, halaaa way ko may ma hambal princess but thankyou for being there for me in my grays and chaos days. You\'re my sword in times of my trouble. Thankyou for making me feel I am worth to trust for bisan sungaran lang balaa HAHAHHAH more bulgaran pa HAHAHHAHAHAH more chika to come kabalo ka nga Ang sekreto ga gwa kung upod ta nga duha (tatlo) mwa mwaaaa',
    
    'Angelyne': 'Happy 19th birthday Princess! I\'m grateful to be your friend, thank you for the friendship. I wish you all the best in life, you deserve all the good things. More chika and kadlaw to come pa HAHAHA, may we enjoy together the remaining months of SHS. I\'m rooting for you budeng. Enjoy your day! Love lots 🤗❤️',
    
    'Wincis': 'On your special day, I want to take a moment to celebrate the incredible person you are. You bring so much love, and laughter into my life, and I am grateful every day to have you as my besh. As we celebrate another year of your amazing existence, I want you to know how much you mean to me. Our friendship is a treasure that I hold dear to my heart, and I am so lucky to have you by my side through all of life\'s adventures. May this birthday be just the beginning of a year filled with happy moments, cherished memories, and exciting opportunities. I wish you all the love, success, and happiness in the world because you truly deserve it. Cheers to another year of friendship, laughter, and unforgettable moments with you, my dear besh.God bless you prinkssss mwaaaa Love you.Happy Birthday!🫶✨💖'};

function displayMessage(friendId, element) {
    var textContainer = document.getElementById('textContainer');
    var messageContent = messages[friendId] || '';
    textContainer.innerHTML = `<p class="message-content">${messageContent}</p>`;

    // Para mag sanag itlog mo kung i click mo
    element.classList.add('clicked');

    // Optional kakson betlog mo nga class sa container 
    var allFriendBoxes = document.querySelectorAll('.friendBox');
    allFriendBoxes.forEach(box => {
      if (box !== element) {
        box.classList.remove('clicked');
      }
    });
  }
  
  
function clearMessage() {
    document.getElementById('textContainer').innerHTML = '';
}

function validateLogin() {
    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;

    if (username === 'The Birthday Girl' && password === 'tupamydisneyprincess121005') {
        window.location.href = 'personal.html';
    } else {
        Swal.fire({
            icon: 'error',
            title: 'BAWWW BUDENGHH',
            text: 'Sala kapa sa login babiiii, Ikaw lang na gn gaan ko pass BWHAHAHA, Iloveyouu',
            confirmButtonColor: '#4158d0',
        });
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('passwordInput');
    var passwordToggle = document.querySelector('.password-toggle');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.textContent = '🙉';
    } else {
        passwordInput.type = 'password';
        passwordToggle.textContent = '🙈'; // Change the icon to a closed eye
    }
}


// Wrap the JavaScript code inside a DOMContentLoaded event listener to ensure it runs after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // JavaScript to generate sparkling hearts with random positions
  const flowerBox = document.getElementById('flowerBox');
  const numHearts = 200; // Number of sparkling hearts

  for (let i = 0; i < numHearts; i++) {
    const heart = document.createElement('div');
    heart.className = 'sparkle-dot';
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.left = `${Math.random() * 100}%`;
    flowerBox.appendChild(heart);
  }
});
