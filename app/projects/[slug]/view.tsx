"use client";

// Import useEffect from React.
import { useEffect } from "react";

// Define a functional component named ReportView.
// It takes a single prop, slug, which is a string.
export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {
  
  // Use the useEffect hook to perform side effects.
  useEffect(() => {
    
    // Use the fetch function to send a POST request to the /api/incr endpoint.
    fetch("/api/incr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ slug }),
    })
    .then(response => {
      // If the request was unsuccessful, throw an error.
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // If the request was successful, parse the response as JSON.
      return response.json();
    })
    .then(data => {
      // If the JSON data was successfully parsed, log it to the console.
      console.log(data);
    })
    .catch(error => {
      // If an error was thrown at any point, log it to the console.
      console.error('There was an error!', error);
    });
  }, [slug]); // The useEffect hook depends on the slug prop.

  // The component does not render anything.
  return null;
};
