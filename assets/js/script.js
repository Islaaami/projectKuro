function showIframe(iframeId) {
  // Hide all iframes
  document.querySelectorAll('.iframe-content').forEach(iframe => {
    iframe.classList.add('hidden');
  });

  // Show the selected iframe
  document.getElementById(iframeId).classList.remove('hidden');

  // Remove 'active' class from all nav items
  document.querySelectorAll('.nav-item').forEach(tab => {
    tab.classList.remove('active');
  });

  // Add 'active' class to the clicked tab
  if (iframeId === 'iframe1') {
    document.getElementById('tab1').classList.add('active');
  } else if (iframeId === 'iframe2') {
    document.getElementById('tab2').classList.add('active');
  }
}

// Initialize the first tab as active by default
document.addEventListener('DOMContentLoaded', () => {
  showIframe('iframe1');
});


    // Function to toggle dropdown visibility
    function toggleDropdown() {
      const dropdown = document.querySelector('.dropdown');
      dropdown.classList.toggle('open');
    }

    // JavaScript to check if the website is in a WebView (Android/iOS)
    function isInApp() {
      const userAgent = navigator.userAgent.toLowerCase();
      return /android|webview|iphone|ipad|ipod/.test(userAgent);
    }

    // Modify link behavior based on if the site is in an app
    document.querySelectorAll('.external-link').forEach(link => {
      link.addEventListener('click', function(event) {
        if (isInApp()) {
          // Open link in the default browser if in an app
          window.open(link.href, '_system');
          event.preventDefault(); // Prevent opening in WebView
        }
      });
    });