export default {
      proxy: "localhost:5000", // Proxy your local server
      files: [
          "public/**/*", // Watch all files in the public directory
          "views/**/*",  // Watch all files in the views directory
      ],
      notify: false,    // Disable BrowserSync notifications
      open: true,       // Automatically open the browser
      logLevel: "info", // Set the log level
  };
  