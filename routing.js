async function loadPage(page) {
    try {
      const res = await fetch(page); // Fetch the page
      if (!res.ok) throw new Error(`Page not found: ${page}`);
      const content = await res.text(); // Get text from response
  
      const element = document.getElementById('content'); // Get the 'content' element
      element.innerHTML = content; // Set innerHTML of the element
    } catch (error) {
      console.error("Error loading the page: ", error.message);
      document.getElementById('content').innerHTML = "<p>Error loading page. Please try again.</p>";
    }
  }
  