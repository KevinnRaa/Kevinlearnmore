document.addEventListener('DOMContentLoaded', () => {
   
    const normalWebsiteElement = document.getElementById('normal-website');
    const hackerWebsiteElement = document.getElementById('hacker-website');
    const messageInputField = document.getElementById('secret-message-input');
    const sendMessageButton = document.getElementById('send-message-btn');
    const secretActivationIcon = document.getElementById('secret-trigger-icon');
    const statusMessageDisplay = document.getElementById('message-status');

    
    const secretKeyParts = ['khe', 'mra', 'hac', 'k']; 
    const expectedKey = secretKeyParts.join(''); 


    const displayTempMessage = (msg, color = '#666', duration = 3000) => {
        statusMessageDisplay.textContent = msg;
        statusMessageDisplay.style.color = color;
        setTimeout(() => {
            statusMessageDisplay.textContent = '';
        }, duration);
    };


    sendMessageButton.addEventListener('click', () => {
        const userInput = messageInputField.value.trim().toLowerCase(); 
        messageInputField.value = ''; 

       
        const isSecretUnlocked = userInput.includes(expectedKey);

        if (isSecretUnlocked) {
           
            secretActivationIcon.style.display = 'inline-block'; 
            displayTempMessage('សារត្រូវបានផ្ញើដោយជោគជ័យ! (Message sent successfully!.)', '#28a745');
        } else {
            
            secretActivationIcon.style.display = 'none'; 
            displayTempMessage('សារត្រូវបានផ្ញើដោយជោគជ័យ! (Message sent successfully!)');
        }
    });

   
    secretActivationIcon.addEventListener('click', () => {
     
        normalWebsiteElement.classList.remove('active');
        hackerWebsiteElement.classList.add('active');
      
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#00ff00';
       
        secretActivationIcon.style.display = 'none';
        displayTempMessage(''); 
    });

 
    hackerWebsiteElement.classList.remove('active');
    normalWebsiteElement.classList.add('active');
    secretActivationIcon.style.display = 'none'; 
});