// Calendar.jsx
import React, { useState } from 'react';
import './calendar.css';

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    // You can perform additional actions here, e.g., open links or modals
  };

  // Placeholder data for the calendar
  const calendarData = [
    { date: '2022-02-01', content: 'Save Energy' },
    { date: '2022-02-10', content: 'Make a Note' },
    // Add more dates and content as needed
  ];

  return (
    <div className="calendar-container">
    <h2>Your Sustainable Progress</h2>
      <div className="calendar-layout">
        {[...Array(31)].map((_, index) => {
          const date = index + 1;
          const formattedDate = date < 10 ? `0${date}` : date.toString();
          const currentDate = `2022-02-${formattedDate}`;

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
          {/* You can display additional information or links here */}
        </div>
      )}
    </div>
  );
}

export default Calendar;
