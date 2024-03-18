document.querySelector('.downloadBtn').addEventListener('click', function() {
    const targetElement = document.querySelector('.mobileHead');
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
  
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
});