import React, { useMemo, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
//import logo from '../assets/images/logo solar.jpg';
import logo from '../assets/images/arreion_logo.png';


function Navbar() {
  const links = useMemo(
    () => [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/pmkusum', label: 'PM KUSUM' },
      { to: '/solutions', label: 'Services' },
      { to: '/portfolio', label: 'Portfolio' },
      { to: '/contact', label: 'Contact' },     
      
    ],
    []
  );

  const [active, setActive] = useState('/');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // update active on route changes using location path
    setActive(window.location.pathname || '/');
    const onPop = () => setActive(window.location.pathname || '/');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [active]);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 5%',
    background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.9)',
    color: '#0b1a24',
    zIndex: 1000,
    boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
    backdropFilter: 'saturate(180%) blur(10px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    height: scrolled ? '70px' : '80px'
  };

  const listStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
    flexWrap: 'nowrap',
    '@media (max-width: 768px)': {
      display: 'none'
    }
  };

  // Mobile menu styles
  const mobileMenuStyle = {
    position: 'fixed',
    top: scrolled ? '70px' : '80px',
    left: 0,
    right: 0,
    background: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'saturate(180%) blur(20px)',
    padding: '20px 5%',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    borderTop: '1px solid rgba(0,0,0,0.05)',
    display: isMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '0',
    zIndex: 999,
    animation: isMenuOpen ? 'slideDown 0.3s ease-out' : 'none'
  };

  const mobileLinkStyle = {
    color: '#0b1a24',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1.1rem',
    padding: '16px 0',
    borderBottom: '1px solid rgba(0,0,0,0.05)',
    width: '100%',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .hamburger-button {
              display: block !important;
            }
            .nav-items {
              display: none !important;
            }
          }
          .hamburger-button:hover {
            background-color: rgba(0,0,0,0.05) !important;
          }
        `
      }} />
      <nav style={navStyle} className="navbar">
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          cursor: 'pointer',
          transition: 'transform 0.3s ease'
        }}>
          
          <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <img 
                src={logo} 
                alt="SolarX Logo" 
                style={{
                  height: '45px',
                  width: '180px',
                  marginRight: '12px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
             />
            </div>
            <div style={{ position: 'relative', display: 'inline-block', marginTop: '4px','margin-left': '-10px' }}>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                color: '#4b5563',
                textTransform: 'uppercase',
                position: 'relative',
                display: 'inline-block',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                Renew, Energize, Distribute
              </span>
            </div>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div style={listStyle} className="nav-items">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="nav-link"
              style={{
                color: active === l.to ? '#dd3507ff' : 'inherit',
                textDecoration: 'none',
                fontWeight: active === l.to ? 600 : 500,
                fontSize: '0.95rem',
                letterSpacing: '0.5px',
                position: 'relative',
                padding: '8px 0',
                margin: '0 10px',
                transition: 'all 0.3s ease',
                borderBottom: active === l.to ? '2px solid #dd3507ff' : '2px solid transparent',
                paddingBottom: '6px'
              }}
              onMouseEnter={(e) => {
                if (active !== l.to) {
                  e.target.style.color = '#dd3507ff';
                  e.target.style.borderBottomColor = '#dd3507ff';
                }
              }}
              onMouseLeave={(e) => {
                if (active !== l.to) {
                  e.target.style.color = 'inherit';
                  e.target.style.borderBottomColor = 'transparent';
                }
              }}
              onClick={() => {
      setActive(l.to);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }}
            >
              {l.label}
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                width: active === l.to ? '100%' : '0',
                height: '2px',
                backgroundColor: '#E10210',
                transform: active === l.to ? 'translateX(-50%) scaleX(1.1)' : 'translateX(-50%) scaleX(0.8)',
                transformOrigin: 'center',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                borderRadius: '2px',
                boxShadow: active === l.to ? '0 0 10px rgba(225, 2, 16, 0.4)' : 'none',
                opacity: active === l.to ? 1 : 0.7
              }} />
            </NavLink>
          ))}
        </div>

        {/* Hamburger Menu Button */}
        <button
          aria-label="Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hamburger-button"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M3 12H21M3 6H21M9 18H21" 
              stroke="#0b1a24" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div style={mobileMenuStyle} className="mobile-menu">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            style={{
              ...mobileLinkStyle,
              color: active === l.to ? '#E10210' : '#0b1a24',
              fontWeight: active === l.to ? 600 : 500
            }}
            onClick={() => {
      setActive(l.to);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }}
          >
            {l.label}
            {active === l.to && (
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#E10210'
              }} />
            )}
          </NavLink>
        ))}
        
      </div>

      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: scrolled ? '70px' : '80px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.3)',
            zIndex: 998
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <style>
        {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .nav-items {
              display: none !important;
            }
          }
        `}
      </style>
    </>
  );
}

export default Navbar;