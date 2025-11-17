import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #0b1a24;
  color: #94a3b8;
  padding: 40px 5%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

// const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   font-size: 1.5rem;
//   font-weight: 700;
//   color: #e21313ff;
//   text-decoration: none;
//   borderRadius: '8px';
//   img {
//     height: 40px;
//     width: auto;
//   }
// `;

// const FooterLinks = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 20px;
//   margin-top: 10px;
  
//   a {
//     color: #94a3b8;
//     text-decoration: none;
//     transition: color 0.3s ease;
//     font-size: 0.95rem;
    
//     &:hover {
//       color: #16a34a;
//     }
//   }
// `;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 5px;
  
  a {
    color: #94a3b8;
    font-size: 1.2rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #16a34a;
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 5px;
  font-size: 0.9rem;
  color: #64748b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  const year = new Date().getFullYear();
  const containerStyle = { maxWidth: 1180, margin: '0 auto', padding: '0 24px' };
  
  return (
    <>

    <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        width: '100%',
        margin: '0',
        maxWidth: 'none'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80) center/cover no-repeat',
          backgroundSize: '100% auto',
          width: '100%',
          height: '100%',
          opacity: 0.1,
          zIndex: 1
        }}></div>
        
        <div style={{
          ...containerStyle,
          position: 'relative',
          zIndex: 2
        }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 800,
            margin: '0 0 20px',
            lineHeight: '1.3'
          }}>
            Ready to Go Solar?
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#cbd5e1',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            Join thousands of satisfied customers who have already made the switch to clean, renewable energy. Get a free, no-obligation quote today!
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '15px',
            marginBottom: '30px'
          }}>
            <Link
              to="/contact"
              style={{
                background: 'linear-gradient(90deg,#ff6b6b,#e53935)',
                color: 'white',
                border: 'none',
                padding: '14px 32px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                boxShadow: '0 10px 20px rgba(229,57,53,0.35)'
              }}
            >
              <span>Get Free Quote</span>
              <span>→</span>
            </Link>
            <button style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '14px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              ':hover': {
                background: 'rgba(255, 255, 255, 0.2)',
                transform: 'translateY(-2px)'
              }
            }}>
              <span>📞 Call Now</span>
              <span>+91 98765 43210</span>
            </button>
          </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
            marginTop: '50px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {[
              { icon: '🔒', text: 'No upfront cost' },
              { icon: '⚡', text: '30% cost savings on average' },
              { icon: '🌱', text: 'Eco-friendly solution' },
              { icon: '🏆', text: '5-year workmanship warranty' }
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '10px 20px',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <span style={{
                  fontSize: '20px'
                }}>{item.icon}</span>
                <span style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#e2e8f0'
                }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    
    <FooterContainer>
      
      <FooterContent>
        <FooterTop>
          
          
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </SocialIcons>
        </FooterTop>
        
        <FooterBottom>
          <p>© {year} Arreion. All rights reserved.</p>
          <div style={{  fontSize: '0.8rem' }}>
            <Link to="/privacy" style={{ color: '#64748b', margin: '0 10px' }}>Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" style={{ color: '#64748b', margin: '0 10px' }}>Terms of Service</Link>
          </div>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
    </>
  );
}

export default Footer;


