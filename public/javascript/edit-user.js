// A function to edit a post
async function editFormHandler(event) {
    event.preventDefault();

    // Get the user name, user id, email, and password from the form
    const username = document.querySelector('input[name="user-name"]').value;
    const id = document.querySelector('input[name="user-id"]')
    const email = document.querySelector('input[name="email"]').value;
    // const password = document.querySelector('input[name="password"]').value.trim();
    console.log(username, email)

    // use the update route to update the post
    const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          username,
          email
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    // if the edit action is successful, redirect to the dashboard page, otherwise display the error
    if (response.ok) {
        document.location.replace('/dashboard');
        // otherwise, display the error
        } else {
        alert(response.statusText);
        }

  }
  
  document.querySelector('.edit-user-form').addEventListener('submit', editFormHandler);