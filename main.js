function showContactInfo(target, contactType) {
    var logo = target.querySelector('img');
    var infoElement = target.querySelector('.' + contactType);

    logo.style.display = 'none';
    infoElement.style.display = 'inline-block';

    setTimeout(function() {
      logo.style.display = 'inline-block';
      infoElement.style.display = 'none';
    }, 600); // Change duration (in milliseconds) as needed (e.g., 1 minute = 60000 milliseconds)
  }

  function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';

    const img = document.createElement('img');
    img.src = 'pics/4407.jpg' // Replace with your shooting star image path
    img.alt = 'Shooting Star';
    shootingStar.appendChild(img);

    const left = Math.random() * 100 + '%';
    shootingStar.style.left = left;

    document.getElementById('stars-container').appendChild(shootingStar);

    setTimeout(() => {
      shootingStar.remove();
    }, 3000); // Remove shooting star after 3 seconds
  }

  setInterval(createShootingStar, 2000); // Create a new shooting star every 2 seconds