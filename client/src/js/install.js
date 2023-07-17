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
butInstall.addEventListener('click', async () => {
    // Handle click event
    if (!deferredPrompt) {
      return;
    }
  
    try {
      // Prompt the user to install the PWA
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
  
      // Log the user's response
      console.log(`User response to the install prompt: ${outcome}`);
  
      // Reset the deferredPrompt
      deferredPrompt = null;
  
      // Hide the install button
      buttonInstall.classList.add('hidden');
    } catch (error) {
      console.error('Error prompting to install the PWA:', error);
    }
  });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // Handle the app installed event
  console.log('App installed successfully');
});