import React, { useRef } from 'react';
import NotificationSystem from 'react-notification-system';

export default function React_notification_system() {

    // Use a ref to access the notification system instance
    const notificationSystem = useRef();

    const addNotification = () => {
        // Access the notification system via the ref and add a notification
        notificationSystem.current.addNotification({ //  This method takes an object where you define the message, level, position, and other properties.
            message: 'Notification message!',
            level: 'success', // The type of notification (success, warning, error, info).
            position: 'tr', // Position: 'tl', 'tr', 'tc', 'bl', 'br', 'bc'
            autoDismiss: 3, // Time in seconds to dismiss the notification
        });
    };

    return (
        <div>
            <button onClick={addNotification} className='w-36 h-10 text-white rounded-md m-4 bg-lime-600'>React Notification </button>
            {/* Render the notification system */}
            <NotificationSystem ref={notificationSystem} />
        </div>
    );

}
