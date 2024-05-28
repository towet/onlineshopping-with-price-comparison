
  const form = document.getElementById('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const product = document.getElementById('product').value;

    fetch('/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ product })
    })
    .then(response => response.json())
    .then(data => {
      const results = document.getElementById('results');
      results.innerHTML = '';

      // Iterate over the data object
      for (const shop in data) {
        const link = data[shop];

        // Create card elements
        const card = document.createElement('div');
        card.className = 'card';

        const content = document.createElement('div');
        content.className = 'content';

        const img = document.createElement('img');
        img.src = 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/10088b1a-c0aa-42a9-8dff-1a692eb597d6';
        img.alt = '';

        const h1 = document.createElement('h1');

        const p = document.createElement('p');
        p.textContent = 'Whether you are pursuing a career change, entrepreneurship, or personal development, a mentor offers substantial advice and support to navigate your unique path.';

        const button = document.createElement('button');
        button.className = 'btn btn-grad';
        button.innerHTML = `<span>Learn More</span><ion-icon name="arrow-forward-outline"></ion-icon>`;
        // Set the link as data attribute for the button
        button.setAttribute('data-link', link);
        button.addEventListener('click', function() {
          const link = this.getAttribute('data-link');
          window.location.href = link; // Redirect to the link
        });

        content.appendChild(img);
        content.appendChild(h1);
        content.appendChild(p);
        content.appendChild(button);
        card.appendChild(content);

        // Append the card to results
        results.appendChild(card);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });

