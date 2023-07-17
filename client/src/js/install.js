const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default install prompt
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;
  // Show the install button
  buttonInstall.classList.remove('hidden');
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});
// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // Handle the app installed event
  console.log('App installed successfully');
});