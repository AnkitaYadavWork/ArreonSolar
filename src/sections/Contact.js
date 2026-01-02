import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
// Button component removed as requested

function Contact() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState(null);

  React.useEffect(() => {
    // When Contact page mounts, scroll to the top of the contact section
    if (typeof window === 'undefined') return;
    const el = document.getElementById('contact');
    if (el && typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('https://arreion.com/api/send-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: '*/*',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ type: 'success', msg: data.msg || 'Message sent successfully!' });
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setStatus({ type: 'error', msg: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      setStatus({ type: 'error', msg: 'Unable to connect to server.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{
      padding: '80px 20px',
      background: '#f8fafc',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <span style={{
          display: 'inline-block',
          background: '#e4684f52',
          color: '#a10303ff',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '0.9rem',
          fontWeight: '600',
          marginBottom: '15px'
        }}>
          Get In Touch
        </span>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#0f172a',
          margin: '0 0 15px',
          fontWeight: '800',
          lineHeight: '1.2'
        }}>
          Contact Us
        </h2>
        <p style={{
          maxWidth: '700px',
          margin: '0 auto',
          fontSize: '1.1rem',
          color: '#475569',
          lineHeight: '1.7'
        }}>
          Have questions about solar solutions? Our team is here to help you with any inquiries.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        overflow: 'hidden'
      }}>
        {/* Contact Form */}
        <div style={{ padding: '50px' }}>
          <h3 style={{
            fontSize: '1.5rem',
            color: '#0f172a',
            margin: '0 0 25px',
            fontWeight: '700'
          }}>
            Send us a Message
          </h3>
          
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                style={inputStyle}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                style={inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                style={inputStyle}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <textarea 
                rows="5" 
                placeholder="Your Message" 
                required 
                style={{...inputStyle, minHeight: '120px', resize: 'vertical'}}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            {status && (
              <div
                style={{
                  padding: '10px 12px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  background:
                    status.type === 'success'
                      ? 'rgba(22, 163, 74, 0.1)'
                      : 'rgba(220, 38, 38, 0.1)',
                  color: status.type === 'success' ? '#16a34a' : '#dc2626',
                  border:
                    status.type === 'success'
                      ? '1px solid rgba(22, 163, 74, 0.2)'
                      : '1px solid rgba(220, 38, 38, 0.2)',
                }}
              >
                {status.msg}
              </div>
            )}
            <button 
              type="submit"
              style={{
                background: 'linear-gradient(90deg,#ff6b6b,#e53935)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.2s',
              }}
              disabled={loading}
            >
              <FiSend />
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div style={{
          background: 'linear-gradient(135deg, #fff7f4 0%, #ffe4e1 40%, #ffe9e3 100%)',
          color: '#7c2d12',
          padding: '50px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            margin: '0 0 30px',
            fontWeight: '700',
            color: 'black',
          }}>
            Contact Information
          </h3>
          
          <div style={{ display: 'grid', gap: '30px' }}>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <FiMail size={20} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px', fontSize: '1rem', fontWeight: '600' }}>Email Us</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>
                  <a
                    href="mailto: info@arreion.com"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                     info@arreion.com
                  </a>
                </p>  
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <FiPhone size={20} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px', fontSize: '1rem', fontWeight: '600' }}>Call Us</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>
                  <a
                    href="tel:0522-4338941"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    0522-4338941
                  </a>
                </p>
                {/* <p style={{ margin: '5px 0 0', opacity: 0.9 }}>
                  <a
                    href="tel:0522-4338941"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    0522-4338941
                  </a>
                </p> */}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <FiMapPin size={20} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px', fontSize: '1rem', fontWeight: '600' }}>Our Location</h4>
                <a
                  href="https://www.google.com/maps?q=26.869624629623797,81.00982909835611"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <p style={{ margin: 0, opacity: 0.9 }}>
                    Office No-117 – A Cyber Heights Vibhuti Khand Gomti Nagar
                  </p>
                  <p style={{ margin: '5px 0 0', opacity: 0.9 }}>
                    Lucknow - 226025
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h4 style={{ margin: '0 0 15px', fontSize: '1rem', fontWeight: '600', color: 'black' }}>Business Hours</h4>
            <p style={{ margin: '0 0 5px', opacity: 0.9 }}>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p style={{ margin: '5px 0 0', opacity: 0.9 }}>Saturday: 10:00 AM - 4:00 PM</p>
            <p style={{ margin: '5px 0 0', opacity: 0.9 }}>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  ':focus': {
    outline: 'none',
    borderColor: '#0ea5e9',
    boxShadow: '0 0 0 3px rgba(14, 165, 233, 0.2)'
  },
  '::placeholder': {
    color: '#94a3b8'
  }
};

export default Contact;


