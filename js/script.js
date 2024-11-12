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
        loadIframe('sageIframe', 'https://zusos.mindhive.asia/');
    } else if (window.location.href.indexOf("page-bo") > -1) {
        // Assuming URLs for 'page' and 'mage' iframes
        loadIframe('pageBoIframe', 'https://dev-page-backoffice.mindhive.asia/');
    } else if (window.location.href.indexOf("page-v0") > -1) {
        // Assuming URLs for 'page' and 'mage' iframes
        loadIframe('pageV0Iframe', 'https://demo-page.mindhive.asia/');
    } else if (window.location.href.indexOf("page") > -1) {
        // Assuming URLs for 'page' and 'mage' iframes
        loadIframe('pageV1Iframe', 'https://dev-page-user.mindhive.asia/dashboard');
    } else if (window.location.href.indexOf("page-arap") > -1) {
        loadIframe('pageArapIframe', 'https://mindhive-arap-demo.vercel.app');
    } else if (window.location.href.indexOf("profile-photo") > -1) {
        loadIframe('photoIframe', 'https://imu.mindhive.asia/');
    } else if (window.location.href.indexOf("location-finder") > -1) {
        loadIframe('locationFinderIframe', 'https://zusos.mindhive.asia/');
    }
});

// General function to unload all iframes before leaving the page
window.addEventListener('beforeunload', function() {
    unloadIframe('sageIframe');
    unloadIframe('pageBoIframe');
    unloadIframe('pageV0Iframe');
    unloadIframe('pageV1Iframe');
    unloadIframe('pageArapIframe');
    unloadIframe('photoIframe');
    unloadIframe('locationFinderIframe');
});
