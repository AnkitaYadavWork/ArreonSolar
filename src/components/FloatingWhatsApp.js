import React from 'react';

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        right: 18,
        bottom: 18,
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: '#25D366',
        color: '#fff',
        display: 'grid',
        placeItems: 'center',
        boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
        zIndex: 200,
        fontWeight: 700,
        textDecoration: 'none',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="waGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#25D366" />
            <stop offset="100%" stopColor="#128C7E" />
          </linearGradient>
        </defs>
        <circle cx="16" cy="16" r="16" fill="url(#waGrad)" />
        <path
          d="M22.4 9.6A7.9 7.9 0 0 0 16 7a7.9 7.9 0 0 0-7.9 7.9c0 1.4.4 2.7 1.1 3.8L8 25l6.4-1.7a8 8 0 0 0 1.6.2 7.9 7.9 0 0 0 7.9-7.9 7.9 7.9 0 0 0-1.5-4.9Zm-6.4 9.9c-1.2 0-2.3-.3-3.3-.9l-.2-.1-2 .5.5-1.9-.1-.2a5.2 5.2 0 0 1-.8-2.7 5.1 5.1 0 0 1 5.2-5.1 5.1 5.1 0 0 1 5.1 5.1 5.1 5.1 0 0 1-5.1 5.2Zm2.8-3.8c-.2-.1-1-.5-1.1-.5s-.3-.1-.5.1l-.4.5s-.2.2-.4.1a4.3 4.3 0 0 1-2.1-1.8c-.2-.3.2-.3.4-.9l.1-.2c0-.1 0-.2-.1-.3l-.5-1.2c-.1-.3-.3-.3-.4-.3h-.3a.8.8 0 0 0-.6.3c-.2.2-.8.8-.8 2s.8 2.3.9 2.4c.1.2 1.6 2.5 3.9 3.4.5.2.9.3 1.2.4.5.2 1 .1 1.3.1.4 0 1.1-.5 1.3-1 .2-.5.2-.9.1-.9-.1-.1-.2-.1-.5-.2Z"
          fill="#ffffff"
        />
      </svg>
    </a>
  );
}

export default FloatingWhatsApp;
