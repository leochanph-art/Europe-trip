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
loadItineraryData(renderTrips(data.trips););
function renderTrips(trips) {
  // 1. Find the container in the HTML
  const container = document.getElementById('itinerary-container');
  
  // 2. Clear the "Loading itinerary..." text
  container.innerHTML = ''; 

  // 3. Loop through each trip
  trips.forEach(trip => {
    // Create a title for the destination
    const tripHeader = document.createElement('h2');
    tripHeader.textContent = trip.destination;
    container.appendChild(tripHeader);

    // 4. Loop through the daily schedule of that trip
    trip.itinerary.forEach(day => {
      // Create a card for the day
      const dayCard = document.createElement('div');
      dayCard.className = 'day-card';

      // Build the internal HTML for the card
      dayCard.innerHTML = `
        <h3>${day.date} - ${day.location}</h3>
        <p><strong>Accommodation:</strong> ${day.accommodation}</p>
        <ul>
          ${day.activities.map(activity => `<li>${activity}</li>`).join('')}
        </ul>
      `;

      // 5. Append the finished card to the main container
      container.appendChild(dayCard);
    });
  });
}
