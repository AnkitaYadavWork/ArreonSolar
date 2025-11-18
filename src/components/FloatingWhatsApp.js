import React, { useState } from 'react';

function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'fixed',
        right: 24,
        bottom: 24,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        textDecoration: 'none',
        zIndex: 9999,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: '8px 16px 8px 12px',
        borderRadius: '30px',
        background: isHovered ? 'white' : 'transparent',
        boxShadow: isHovered 
          ? '0 6px 20px rgba(37, 211, 102, 0.2)' 
          : '0 4px 12px rgba(0, 0, 0, 0.1)',
        transform: isHovered ? 'translateY(-2px)' : 'none',
        backdropFilter: isHovered ? 'blur(4px)' : 'none',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}
    >
      {isHovered && (
        <span
          style={{
            color: '#0f172a',
            fontSize: '15px',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            padding: '0 8px',
            textShadow: '0 1px 2px rgba(0,0,0,0.05)',
            letterSpacing: '0.3px',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateX(0)' : 'translateX(-10px)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          Contact Now
        </span>
      )}
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          display: 'grid',
          placeItems: 'center',
          boxShadow: '0 4px 16px rgba(37, 211, 102, 0.3)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          aria-hidden="true"
          style={{
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        >
          <path
            d="M22.4 9.6A7.9 7.9 0 0 0 16 7a7.9 7.9 0 0 0-7.9 7.9c0 1.4.4 2.7 1.1 3.8L8 25l6.4-1.7a8 8 0 0 0 1.6.2 7.9 7.9 0 0 0 7.9-7.9 7.9 7.9 0 0 0-1.5-4.9Zm-6.4 9.9c-1.2 0-2.3-.3-3.3-.9l-.2-.1-2 .5.5-1.9-.1-.2a5.2 5.2 0 0 1-.8-2.7 5.1 5.1 0 0 1 5.2-5.1 5.1 5.1 0 0 1 5.1 5.1 5.1 5.1 0 0 1-5.1 5.2Zm2.8-3.8c-.2-.1-1-.5-1.1-.5s-.3-.1-.5.1l-.4.5s-.2.2-.4.1a4.3 4.3 0 0 1-2.1-1.8c-.2-.3.2-.3.4-.9l.1-.2c0-.1 0-.2-.1-.3l-.5-1.2c-.1-.3-.3-.3-.4-.3h-.3a.8.8 0 0 0-.6.3c-.2.2-.8.8-.8 2s.8 2.3.9 2.4c.1.2 1.6 2.5 3.9 3.4.5.2.9.3 1.2.4.5.2 1 .1 1.3.1.4 0 1.1-.5 1.3-1 .2-.5.2-.9.1-.9-.1-.1-.2-.1-.5-.2Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </a>
  );
}

export default FloatingWhatsApp;