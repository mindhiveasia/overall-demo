// Function to dynamically load the iframe based on the page
function loadIframe(iframeId, src) {
    var iframe = document.getElementById(iframeId);
    if (iframe) {
        console.log(`Loading ${iframeId}`);
        iframe.src = src;
    }
}

// Function to unload the iframe
function unloadIframe(iframeId) {
    var iframe = document.getElementById(iframeId);
    if (iframe) {
        console.log(`Unloading ${iframeId}`);
        iframe.src = "";
    }
}

// Function to check the current page and load/unload iframes accordingly
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.indexOf("sage") > -1) {
        loadIframe('sageIframe', 'https://zus.kodedigital.expert/');
    }  else if (window.location.href.indexOf("page") > -1) {
        // Assuming URLs for 'page' and 'mage' iframes
        loadIframe('pageIframe', 'https://mindhivepage.kodedigital.expert/');
    } else if (window.location.href.indexOf("profile-photo") > -1) {
        loadIframe('photoIframe', 'https://demo-imu-photo.mindhive.asia/');
    }
});

// General function to unload all iframes before leaving the page
window.addEventListener('beforeunload', function() {
    unloadIframe('sageIframe');
    unloadIframe('pageIframe');
    unloadIframe('photoIframe');
});
