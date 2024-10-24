document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', checkCompletion);
    });
  
    function checkCompletion() {
      const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
      if (allChecked) {
        alert('All items are checked!');
        // Trigger SMS notification here
        sendSMSNotification();
      }
    }
  
    function sendSMSNotification() {
      fetch('https://your-function-endpoint.netlify/functions/send-sms', {
        method: 'POST',
        body: JSON.stringify({ message: 'Checklist completed!' }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => console.log('SMS sent:', data))
      .catch(error => console.error('Error sending SMS:', error));
    }
  });
  