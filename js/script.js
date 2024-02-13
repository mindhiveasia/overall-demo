function changeContent(url) {
    var contentFrame = document.getElementById('contentFrame');
    if (contentFrame) {
        contentFrame.src = url;
    }
}

function toggleChatWindow() {
    var chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('d-none');
}

function changeLogo(newLogoSrc) {
    var logoImage = document.getElementById('logoImage');
    if (logoImage) {
        logoImage.src = newLogoSrc;
    }
}

function setActiveLink(activeLinkId) {
    // Remove 'active' class from all nav-link elements
    document.querySelectorAll('.nav-link').forEach((navLink) => {
        navLink.classList.remove('active');
    });

    // Add 'active' class to the clicked nav-link element
    var activeLink = document.getElementById(activeLinkId);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function toggleChatWindow() {
    var chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('show');
}


function sendMessage() {
    var input = document.getElementById('chatInput');
    var messagesContainer = document.getElementById('chatMessages');

    if (input.value.trim() !== '') {
        var message = document.createElement('div');
        message.textContent = input.value;
        message.classList.add('user-message');
        messagesContainer.appendChild(message);
        input.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

function receiveMessage(text) {
    var messagesContainer = document.getElementById('chatMessages');
    var message = document.createElement('div');
    message.textContent = text;
    message.classList.add('other-person-message');
    messagesContainer.appendChild(message);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function simulateReceivingMessages() {
    setInterval(function() {
        var testMessage = 'My Name is Tengku Azrin';
        receiveMessage(testMessage);
    }, 5000); // This will send a random message every 5 seconds
}

window.onload = function() {
    simulateReceivingMessages();
};
