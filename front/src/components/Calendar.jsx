import React, { useState } from 'react';
import './calendar.css';

function Calendar() {
  // Get current date
  const currentDateObj = new Date();
  const currentYear = currentDateObj.getFullYear();
  const currentMonth = currentDateObj.getMonth() + 1; // Month starts from 0
  const currentDay = currentDateObj.getDate();
  const defaultSelectedDate = `${currentYear}-${currentMonth < 10 ? `0${currentMonth}` : currentMonth}-${currentDay < 10 ? `0${currentDay}` : currentDay}`;

  const [selectedDate, setSelectedDate] = useState(defaultSelectedDate);
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleDateClick = (date) => {
    console.log("Clicked Date:", date);

    setSelectedDate(date);

    // Sending selected date to API as a body parameter
    fetch('http://localhost:5000/api/activity/find/', { // Adjusted API endpoint URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ date: date }) // Sending date in the expected format
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        console.log("API Response:", data);
        setApiResponse(data);
        if (!data || data.length === 0) { // Adjusted condition for no data found
          setError('No record found');
        } else {
          setError(null);
        }
      })
      .catch(error => {
        console.error("Error:", error);
        setError(error.message);
      });
  };

  // Placeholder data for the calendar
  const calendarData = [
    { date: `${currentYear}-${currentMonth}-01`, content: 'Save Energy' },
    { date: `${currentYear}-${currentMonth}-10`, content: 'Make a Note' },
    // Add more dates and content as needed
  ];

  return (
    <div className="calendar-container">
      <div className='action-title'>
        Your Sustainable Progress
      </div>
      <div className="calendar-layout">
        {[...Array(31)].map((_, index) => {
          const date = index + 1;
          const formattedDate = date < 10 ? `0${date}` : date.toString();
          const currentDate = `${currentYear}-${currentMonth}-${formattedDate}`;

          const hasContent = calendarData.some((item) => item.date === currentDate);
          const isSelected = selectedDate === currentDate;

          return (
            <div
              key={index}
              className={`calendar-date ${hasContent ? 'has-content' : ''} ${isSelected ? 'selected' : ''}`}
              onClick={() => handleDateClick(currentDate)}
            >
              {date}
            </div>
          );
        })}
      </div>
      {selectedDate && (
        <div className="selected-date-info">
          <p>{`Selected Date: ${selectedDate}`}</p>
          {apiResponse && apiResponse.length > 0 && (
            <div>
              {apiResponse.map((log, index) => (
                <p key={index}>{`Log ${index + 1}: Total Footprint: ${log.totalFootprint}, Category: ${log.category}`}</p>
              ))}
            </div>
          )}
          {error && <p>{error}</p>}
          {/* You can display additional information or links here */}
        </div>
      )}
    </div>
  );
}

export default Calendar;
