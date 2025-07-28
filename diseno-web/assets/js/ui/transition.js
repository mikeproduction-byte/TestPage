  const loader = document.getElementById('loader-transition');

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('loader-hidden');
    }, 200); 
  });

  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      const sameHost = link.hostname === window.location.hostname;
      const isInternal = !link.hasAttribute('target') && !link.href.includes('#');
      if (sameHost && isInternal) {
        e.preventDefault();
        loader.classList.remove('loader-hidden');
        setTimeout(() => {
          window.location.href = link.href;
        }, 100);
      }
    });
  });

  window.addEventListener('beforeunload', () => {
    loader.classList.remove('loader-hidden');
  });