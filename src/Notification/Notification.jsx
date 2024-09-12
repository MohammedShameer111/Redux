// Notification.js
import React, { useEffect, useState } from 'react';
import './Notification.css'; // Import the CSS for styling

function Notification({ onClose ,message}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose(); // Notify parent to close notification
    }, 2000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div className="notification">
      {message}
    </div>
  );
}

export default Notification;
