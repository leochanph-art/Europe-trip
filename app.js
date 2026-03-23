async function loadItineraryData() {
  try {
    // 1. Fetch the JSON file
    const response = await fetch('/data.json');
    
    // 2. Check if the fetch was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // 3. Parse the data into a JavaScript object
    const data = await response.json();
    
    // 4. Log it to the console to verify it works
    console.log("Itinerary Data Loaded:", data);
    
    // Next: Pass this 'data' to a function that builds the HTML
    // renderTrips(data.trips); 
    
  } catch (error) {
    console.error("Could not load the itinerary data:", error);
  }
}

// Execute the function when the script loads
loadItineraryData();
