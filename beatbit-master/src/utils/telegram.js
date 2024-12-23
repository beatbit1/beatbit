const initializeTelegramWebApp = () => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
  
      // Initialize Telegram WebApp
      tg.ready();
  
      // Optional: Log initial data for debugging
      console.log("Telegram WebApp initialized:", tg.initData);
  
      // Set up background color and theme
      tg.MainButton.setParams({
        text: "Open App",
        color: "#0088cc", // Telegram blue
        textColor: "#ffffff",
      });
  
      return tg;
    } else {
      console.warn("Telegram WebApp context not found!");
      return null;
    }
  };
  
  export default initializeTelegramWebApp;