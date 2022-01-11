async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const postContent = document.querySelector('input[name="postContent"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('../views/layouts/main.handlebars');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);
  