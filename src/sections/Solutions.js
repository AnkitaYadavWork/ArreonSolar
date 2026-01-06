import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSun, FiZap, FiHome, FiHardDrive, FiTrendingUp, FiShield, FiCheckCircle, FiDollarSign, FiClock, FiAward, FiArrowRight } from 'react-icons/fi';
import residentialImage from '../assets/images/residentialimages.jpg';
import industrialImage from '../assets/images/industrialimages.jpg';
import agricultureImage from '../assets/images/agricultureimages.jpg';

function Solutions() {
  const [activeTab, setActiveTab] = useState('commercial');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const containerStyle = { maxWidth: 1180, margin: '0 auto', padding: '0 24px' };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const solutions = [
    {
      id: 'commercial',
      title: "Commercial & Industrial",
      icon: <FiHardDrive className="solution-icon" />,
      highlight: "Power Your Business Growth",
      description: "High-capacity solar plants designed for businesses seeking to reduce operational costs and achieve sustainability goals with attractive ROI.",
      image: industrialImage,
      features: [
        { text: "50kW to 5MW+ capacity", icon: <FiCheckCircle /> },
        { text: "OPEX/PPA financing", icon: <FiZap /> },
        { text: "24/7 monitoring", icon: <FiTrendingUp /> },
        { text: "Tax benefits", icon: <FiShield /> }
      ],
      cta: "Request Business Proposal"
    },
    {
      id: 'agriculture',
      title: "Agricultural Solutions",
      icon: <FiSun className="solution-icon" />,
      highlight: "Empowering Farmers with Solar",
      description: "Reliable solar pump solutions for irrigation, helping farmers reduce dependency on grid power and diesel generators.",
      image: agricultureImage,
      features: [
        { text: "3HP to 10HP solar pumps", icon: <FiCheckCircle /> },
        { text: "KUSUM scheme benefits", icon: <FiZap /> },
        { text: "Drought-proof farming", icon: <FiTrendingUp /> },
        { text: "Up to 90% subsidy", icon: <FiShield /> }
      ],
      cta: "Know More About KUSUM"
    },
    //  {
    //   id: 'residential',
    //   title: "Residential Solutions",
    //   icon: <FiHome className="solution-icon" />,
    //   highlight: "Power Your Home with Sunshine",
    //   description: "Transform your home into an energy-efficient haven with our customized rooftop solar solutions. Enjoy up to 90% reduction in electricity bills while contributing to a greener planet.",
    //   image: residentialImage,
    //   features: [
    //     { text: "3-10 kW systems", icon: <FiCheckCircle /> },
    //     { text: "Smart energy monitoring", icon: <FiZap /> },
    //     { text: "Subsidy assistance", icon: <FiTrendingUp /> },
    //     { text: "25-year performance warranty", icon: <FiShield /> }
    //   ],
    //   cta: "Get Free Consultation"
    // }
  ];

  return (
    <section className="solutions-section" style={{ 
      padding: isMobile ? '60px 15px 60px' : '100px 20px 80px',
      background: 'linear-gradient(180deg, #fff7f4 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden',
      maxWidth: '1200px',
      margin: '0 auto',
      lineHeight: '1.7',
      color: '#333',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ 
          textAlign: 'center', 
          marginBottom: isMobile ? '30px' : '50px',
          padding: isMobile ? '0 10px' : '0 20px'
        }}>
          <span style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg,#ff6b6b,#e53935)',
            color: 'white',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: isMobile ? '0.8rem' : '0.9rem',
            fontWeight: '600',
            marginBottom: isMobile ? '12px' : '15px'
          }}>
            Our Services
          </span>
          <h2 style={{ 
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            color: 'black',
            margin: '0 0 15px',
            fontWeight: '800',
            lineHeight: '1.2',
            padding: isMobile ? '0 10px' : '0'
          }}>
            Solar Services for Every Need
          </h2>
          <p style={{ 
            maxWidth: '700px', 
            margin: '0 auto',
            fontSize: isMobile ? '1rem' : '1.1rem',
            color: 'black',
            lineHeight: '1.7',
            padding: isMobile ? '0 10px' : '0'
          }}>
            Customized solar energy solutions designed to maximize your savings and minimize your carbon footprint
          </p>
        </div>

        <div style={{
          display: isMobile ? 'grid' : 'flex',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, auto))',
          justifyContent: isMobile ? 'stretch' : 'center',
          marginBottom: isMobile ? '25px' : '40px',
          gap: isMobile ? '8px' : '10px',
          width: '100%',
          maxWidth: isMobile ? '100%' : '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: isMobile ? '0 15px' : '0',
        }}>
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(solution.id)}
              style={{
                padding: isMobile ? '12px 16px' : '12px 24px',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === solution.id
                  ? 'linear-gradient(90deg,#ff6b6b,#e53935)'
                  : '#fff1eb',
                color: activeTab === solution.id ? '#ffffff' : '#78350f',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isMobile ? 'center' : 'flex-start',
                gap: '10px',
                fontSize: isMobile ? '0.95rem' : '1rem',
                width: isMobile ? '100%' : 'auto',
                boxShadow: activeTab === solution.id ? '0 4px 12px rgba(248, 113, 113, 0.25)' : 'none',
                ':hover': {
                  transform: activeTab !== solution.id ? 'translateY(-2px)' : 'none',
                  boxShadow: activeTab !== solution.id ? '0 4px 8px rgba(0,0,0,0.1)' : '0 4px 12px rgba(59, 130, 246, 0.2)'
                }
              }}
            >
              <span style={{
                color: activeTab === solution.id ? '#ffffff' : '#f97316',
                display: 'flex',
                alignItems: 'center'
              }}>
                {solution.icon}
              </span>
              {solution.title}
            </button>
          ))}
        </div>

        <div style={{
          background: 'white',
          borderRadius: isMobile ? '12px' : '16px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          margin: isMobile ? '0 10px' : '0',
          width: isMobile ? 'calc(100% - 20px)' : 'auto'
        }}>
          {solutions.map((solution) => (
            <div 
              key={solution.id}
              style={{
                display: activeTab === solution.id ? (isMobile ? 'block' : 'grid') : 'none',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: isMobile ? '30px' : '40px',
                padding: isMobile ? '30px 20px' : '50px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                paddingRight: isMobile ? '0' : '20px'
              }}>
                <span style={{
                  display: 'inline-block',
                  color: '#c2410c',
                  marginBottom: '15px',
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  fontWeight: '600',
                  backgroundColor: 'rgba(253, 186, 116, 0.2)',
                  padding: '6px 12px',
                  borderRadius: '6px'
                }}>
                  {solution.highlight}
                </span>
                <h3 style={{
                  fontSize: isMobile ? '1.6rem' : '2rem',
                  color: '#0f172a',
                  margin: '0 0 20px',
                  fontWeight: '700',
                  lineHeight: '1.3'
                }}>
                  {solution.title}
                </h3>
                <p style={{
                  color: '#7c2d12',
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  lineHeight: '1.7',
                  marginBottom: '30px'
                }}>
                  {solution.description}
                </p>
                <div style={{ 
                  marginBottom: '30px',
                  backgroundColor: isMobile ? '#fff7f4' : 'transparent',
                  padding: isMobile ? '20px' : '0',
                  borderRadius: '12px'
                }}>
                  <h4 style={{
                    color: '#7c2d12',
                    fontSize: isMobile ? '0.95rem' : '1rem',
                    marginBottom: '15px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{
                      display: 'inline-flex',
                      width: '24px',
                      height: '24px',
                      backgroundColor: '#fb923c',
                      borderRadius: '6px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '14px'
                    }}>
                      ✓
                    </span>
                    Key Benefits:
                  </h4>
                  <ul style={{
                    margin: 0,
                    padding: 0,
                    listStyle: 'none',
                    display: 'grid',
                    gap: '12px',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    '& li': {
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      padding: isMobile ? '8px 0' : '0'
                    },
                    '& svg': {
                      color: '#3b82f6',
                      flexShrink: 0,
                      marginTop: '4px'
                    }
                  }}>
                    {solution.features.map((feature, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: '#7c2d12',
                        fontSize: '1rem'
                      }}>
                        <span style={{
                          color: '#f97316',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          {feature.icon}
                        </span>
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '15px',
                  marginTop: isMobile ? '30px' : '10px'
                }}>
                  <button onClick={() => navigate(`/contact?solution=${solution.id}`)} style={{
                    background: 'linear-gradient(90deg,#ff6b6b,#e53935)',
                    color: 'white',
                    border: 'none',
                    padding: isMobile ? '14px 20px' : '14px 28px',
                    borderRadius: '8px',
                    fontSize: isMobile ? '0.95rem' : '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: isMobile ? '100%' : 'auto',
                    ':hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 20px rgba(248, 113, 113, 0.35)'
                    }
                  }}>
                    {solution.cta}
                    <FiArrowRight />
                  </button>
                </div>
              </div>
              <div style={{
                background: '#fff7f4',
                borderRadius: '12px',
                padding: isMobile ? '20px' : '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop: isMobile ? '20px' : '0',
                border: '1px solid #e2e8f0'
              }}>
                {/* Only image in this box, filling the area similar to previous content */}
                <div
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    width: '100%',
                    height: isMobile ? '260px' : '280px',
                    boxShadow: '0 12px 30px rgba(15,23,42,0.12)',
                    backgroundColor: '#000'
                  }}
                >
                  <img
                    src={solution.image}
                    alt={solution.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Comprehensive Benefits Section */}
      {/* <div style={{
        marginTop: isMobile ? '40px' : '80px',
        padding: isMobile ? '40px 15px' : '80px 20px',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: isMobile ? '30px' : '60px',
            padding: isMobile ? '0 10px' : '0 20px'
          }}>
            <span style={{
              display: 'inline-block',
              background: '#fff7f4',
              color: '#7c2d12',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '15px',
              border: '1px solid #fed7aa'
            }}>
              Benefits of Solar Energy
            </span>
            <h2 style={{ 
              fontSize: isMobile ? '1.8rem' : '2.5rem',
              color: '#0f172a',
              margin: '0 0 20px',
              fontWeight: '800',
              lineHeight: '1.2'
            }}>
              Benefits of Solar Energy
            </h2>
            <p style={{ 
              maxWidth: '700px', 
              margin: '0 auto',
              color: '#64748b',
              fontSize: isMobile ? '1rem' : '1.1rem',
              lineHeight: '1.7'
            }}>
              Discover how our solar solutions can transform your energy consumption and contribute to a sustainable future.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '25px' : '30px',
            marginTop: '40px'
          }}>
            {[
              {
                icon: <FiDollarSign size={28} />,
                title: 'Cost Savings',
                description: 'Reduce your electricity bills by up to 90% with our efficient solar solutions.',
                color: '#10b981'
              },
              {
                icon: <FiTrendingUp size={28} />,
                title: 'Increased Property Value',
                description: 'Homes with solar panels sell faster and at higher prices.',
                color: '#3b82f6'
              },
              {
                icon: <FiShield size={28} />,
                title: 'Government Subsidies',
                description: 'Avail up to 90% subsidy under various government schemes.',
                color: '#8b5cf6'
              },
              {
                icon: <FiZap size={28} style={{ transform: 'rotate(90deg)' }} />,
                title: 'Energy Independence',
                description: 'Reduce dependency on grid power and diesel generators.',
                color: '#f59e0b'
              },
              {
                icon: <FiAward size={28} />,
                title: '25+ Years Warranty',
                description: 'Long-term performance guarantee on all our installations.',
                color: '#ec4899'
              },
              {
                icon: <FiClock size={28} />,
                title: 'Quick ROI',
                description: 'Recover your investment in just 3-5 years with our efficient systems.',
                color: '#14b8a6'
              }
            ].map((benefit, index) => (
              <div key={index} style={{
                background: '#ffffff',
                padding: '30px 25px',
                borderRadius: '16px',
                boxShadow: '0 5px 30px rgba(0, 0, 0, 0.04)',
                border: '1px solid #f1f5f9',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                ':hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)'
                }
              }}>
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '4px',
                  background: `linear-gradient(90deg, ${benefit.color}, ${benefit.color}80)`,
                  transition: 'all 0.3s ease'
                }}></div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: `${benefit.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '22px',
                  color: benefit.color,
                  fontSize: '28px',
                  transition: 'all 0.3s ease'
                }}>
                  {benefit.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  color: '#0f172a',
                  margin: '0 0 12px',
                  fontWeight: '700',
                  lineHeight: '1.3'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  color: '#64748b',
                  margin: '0',
                  lineHeight: '1.7',
                  fontSize: '1rem'
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

         
          <div
            style={{
              marginTop: isMobile ? '50px' : '70px',
              background: '#fff7f4',
              borderRadius: '20px',
              padding: isMobile ? '24px 18px' : '28px 32px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              border: '1px solid #fed7aa',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '20px' : '26px'
              }}
            >
             
              <div
                style={{
                  background: 'linear-gradient(90deg,#ff6b6b,#e53935)',
                  borderRadius: '999px',
                  padding: isMobile ? '10px 16px' : '12px 24px',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  boxShadow: '0 10px 25px rgba(248, 181, 71, 0.45)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  alignSelf: 'flex-start'
                }}
              >
                <span
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: '999px',
                    border: '2px solid rgba(255,255,255,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem'
                  }}
                >
                  ☀
                </span>
                <span>Solar Power Generating System</span>
              </div>

              
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
                  gap: isMobile ? 18 : 22,
                  marginTop: isMobile ? 8 : 4
                }}
              >
                {[
                  {
                    title: 'On Grid Connection',
                    description:
                      'Works along with the utility grid. Surplus solar power is exported back to the grid through net metering, maximising savings on your bill.'
                  },
                  {
                    title: 'Off Grid Connection',
                    description:
                      'Ideal for remote areas and independent homes. Solar power charges batteries and supplies your load without relying on public utilities.'
                  },
                  {
                    title: 'Hybrid Connection',
                    description:
                      'Combines grid, solar and battery. When batteries are full, excess energy is intelligently exported to the grid via a smart meter.'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      background: '#ffffff',
                      borderRadius: '18px',
                      padding: isMobile ? '18px 16px' : '22px 20px',
                      boxShadow: '0 8px 24px rgba(15,23,42,0.06)',
                      border: '1px solid #e5e7eb',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          index === 0
                            ? 'radial-gradient(circle at top left, rgba(248, 250, 252, 0.9) 0, rgba(255,255,255,0) 60%)'
                            : index === 1
                            ? 'radial-gradient(circle at top, rgba(254, 249, 195, 0.7) 0, rgba(255,255,255,0) 65%)'
                            : 'radial-gradient(circle at top right, rgba(254, 243, 199, 0.7) 0, rgba(255,255,255,0) 65%)',
                        opacity: 0.9,
                        pointerEvents: 'none'
                      }}
                    />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <h3
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: '#7c2d12',
                          margin: '0 0 8px'
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '0.9rem',
                          lineHeight: 1.7,
                          color: '#4b5563',
                          margin: 0
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div> */}

      {/* Solar EPC Section */}
      <div style={{ 
        margin: '60px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: '#1e293b',
              marginBottom: '15px',
              position: 'relative',
              display: 'inline-block'
            }}>
              Solar EPC – By Arreion
              <span style={{
                display: 'block',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #EF4444 0%, #F97316 100%)',
                margin: '15px auto 0',
                borderRadius: '2px'
              }}></span>
            </h2>
            <p style={{
              color: '#64748b',
              fontSize: '1.1rem',
              maxWidth: '800px',
              margin: '20px auto 0',
              lineHeight: '1.7'
            }}>
              At Arreion, we deliver complete Solar EPC (Engineering, Procurement & Construction) solutions, 
              making your shift to renewable energy simple, efficient, and worry-free.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            {/* Engineering Card */}
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '35px 30px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              border: '1px solid rgba(239, 68, 68, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(90deg,#ff6b6b,#e53935)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px'
              }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="white"/>
                  <path d="M12 2V4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 20V22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4.92999 4.92999L6.33999 6.33999" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M17.66 17.66L19.07 19.07" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2 12H4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M20 12H22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M6.33999 17.66L4.92999 19.07" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M19.07 4.92999L17.66 6.33999" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#1e293b',
                marginBottom: '15px'
              }}>Engineering</h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.7',
                margin: 0
              }}>
                We study your power requirements, perform a detailed site survey, check weather and shadow conditions, and design a customized solar system. Our precise planning and 3D layouts ensure maximum efficiency and safety.
              </p>
            </div>

            {/* Procurement Card */}
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '35px 30px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              border: '1px solid rgba(239, 68, 68, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(90deg,#ff6b6b,#e53935)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px'
              }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#1e293b',
                marginBottom: '15px'
              }}>Procurement</h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.7',
                margin: 0
              }}>
                Arreion sources premium-quality components — Tier-1 solar panels, high-efficiency inverters, mounting structures, cables, and safety devices. Every material is chosen for durability, performance, and long life.
              </p>
            </div>

            {/* Construction Card */}
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '35px 30px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              border: '1px solid rgba(239, 68, 68, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(90deg,#ff6b6b,#e53935)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px'
              }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.25013C11.8996 1.7849 14.1003 2.02173 16.07 2.92" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01L9 11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#1e293b',
                marginBottom: '15px'
              }}>Construction</h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.7',
                margin: 0
              }}>
                Our experts handle the complete installation, including panel mounting, electrical connections, system integration, safety setup, testing and final commissioning. We offer both on-grid and off-grid options depending on your needs.
              </p>
            </div>
          </div>

          <div style={{
            marginTop: '40px',
            textAlign: 'center',
            padding: '25px',
            background: 'linear-gradient(135deg, rgb(254, 202, 202), rgb(249, 115, 115))',
            borderRadius: '12px',
            borderLeft: '4px solid #EF4444'
          }}>
            <p style={{
              margin: 0,
              fontSize: '1.1rem',
              color: '#0c0300ff',
              lineHeight: '1.7',
              fontWeight: 500
            }}>
              With Arreion, you get a seamless solar experience backed by quality, transparency, and consistent support — ensuring your solar plant runs smoothly for years.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Services Section (with imagery) */}
      <div
        style={{
          marginTop: isMobile ? '50px' : '80px',
          padding: isMobile ? '40px 15px 20px' : '60px 20px 50px',
          background: 'linear-gradient(180deg,#fef2f2 0%,#ffffff 40%,#f9fafb 100%)',
          borderTop: '1px solid #fee2e2',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Title + Description */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: isMobile ? '24px' : '32px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '6px 18px',
                borderRadius: 999,
                background: 'linear-gradient(90deg,#ff6b6b,#e53935)',
                color: 'white',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Extended Services
            </span>
            <h2
              style={{
                margin: '10px 0 8px',
                fontSize: isMobile ? '1.8rem' : '2.2rem',
                fontWeight: 800,
                color: '#0f172a',
              }}
            >
              Other Energy & Infra Services
            </h2>
            <p
              style={{
                margin: 0,
                marginTop: '6px',
                color: '#64748b',
                fontSize: isMobile ? '0.95rem' : '1.05rem',
              }}
            >
              Beyond solar, we support power infrastructure, wind, hydrogen and civil works for end-to-end projects.
            </p>
          </div>

          {/* Imagery strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))',
              gap: isMobile ? '10px' : '14px',
              marginBottom: isMobile ? '24px' : '32px',
            }}
          >
            <div
              style={{
                borderRadius: isMobile ? '18px' : '22px',
                overflow: 'hidden',
                position: 'relative',
                minHeight: isMobile ? '140px' : '180px',
                backgroundImage: `url(${require('../assets/images/windimages.jpg')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 16px 40px rgba(15,23,42,0.35)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(135deg, rgba(15,23,42,0.75) 0%, rgba(15,23,42,0.15) 60%, rgba(15,23,42,0) 100%)',
                }}
              />
              <div
                style={{
                  position: 'relative',
                  padding: isMobile ? '16px 16px 18px' : '18px 22px 20px',
                  color: '#f9fafb',
                  maxWidth: '260px',
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    opacity: 0.85,
                    marginBottom: '6px',
                  }}
                >
                  ENERGY INFRA
                </div>
                <div
                  style={{
                    fontSize: isMobile ? '1.05rem' : '1.2rem',
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  High-voltage, wind & hybrid assets under one roof.
                </div>
              </div>
            </div>

            <div
              style={{
                borderRadius: isMobile ? '18px' : '22px',
                overflow: 'hidden',
                position: 'relative',
                minHeight: isMobile ? '140px' : '180px',
                backgroundImage: `url(${industrialImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 16px 40px rgba(15,23,42,0.28)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(225deg, rgba(15,23,42,0.75) 0%, rgba(15,23,42,0.18) 55%, rgba(15,23,42,0) 100%)',
                }}
              />
              <div
                style={{
                  position: 'relative',
                  padding: isMobile ? '16px 16px 18px' : '18px 22px 20px',
                  color: '#f9fafb',
                  maxWidth: '260px',
                  marginLeft: isMobile ? '0' : 'auto',
                  textAlign: isMobile ? 'left' : 'right',
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    opacity: 0.85,
                    marginBottom: '6px',
                  }}
                >
                  CIVIL & MEP
                </div>
                <div
                  style={{
                    fontSize: isMobile ? '1.05rem' : '1.2rem',
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  Infra, buildings & utilities that support your plants.
                </div>
              </div>
            </div>
          </div>

          {/* Service lists */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))',
              gap: isMobile ? '18px' : '22px',
              alignItems: 'stretch',
            }}
          >
            {/* Other Energy Infra Services */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                boxShadow: '0 10px 32px rgba(248,113,113,0.18)',
                border: '1px solid #fee2e2',
                padding: isMobile ? '18px 18px 20px' : '20px 22px 22px',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '6px 14px',
                  borderRadius: 999,
                  background: 'linear-gradient(90deg,#ff6b6b,#e53935)',
                  color: '#f9fafb',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  marginBottom: '10px',
                }}
              >
                Other Energy Infra Services
              </div>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '18px',
                  color: '#4b5563',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                }}
              >
                <li>Power transmission and distribution</li>
                <li>Wind energy solutions</li>
                <li>RTC (Round-the-Clock) power solutions</li>
                <li>Biofuels and alternative fuels</li>
                <li>Hydrogen & green fuels infrastructure</li>
                <li>Electric vehicle charging stations</li>
                <li>Waste-to-energy projects</li>
                <li>Other OEM-based energy solutions</li>
              </ul>
            </div>

            {/* Infra Services */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                boxShadow: '0 10px 32px rgba(148,163,184,0.25)',
                border: '1px solid #e5e7eb',
                padding: isMobile ? '18px 18px 20px' : '20px 22px 22px',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '6px 14px',
                  borderRadius: 999,
                  background: 'linear-gradient(90deg,#ff6b6b,#e53935)',
                  color: '#f9fafb',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  marginBottom: '10px',
                }}
              >
                Infra Services
              </div>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '18px',
                  color: '#4b5563',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                }}
              >
                <li>Civil engineering structures and roads construction</li>
                <li>Industrial and commercial building construction</li>
                <li>MEP (Mechanical, Electrical & Plumbing) services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
       {/* Team Section */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{
            color: 'black',
            marginBottom: '10px',
            fontSize: '2.3rem',
            textAlign: 'center'
          }}>Client Testimonial</h2>
          <p style={{
            textAlign: 'center',
            color: 'black',
            marginBottom: '35px',
            fontSize: '1rem'
          }}>
            Hear from our customers who trusted Arreion for their solar projects.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px',
            marginTop: '20px'
          }}>
            {[
              {
                name: 'Dheeraj Singh',  
                location: 'Solar Park, Tamil Nadu',
                quote:
                  'We would like to thank the entire Arreion team for their excellent service. Our inquiries are always responded to promptly; the technical managers are thorough and knowledgeable; the follow-ups have always been courteous and pleasant.'
              },
              {
                name: 'Aman Sharma',
                location: 'Chhindwara, M.P.',
                quote:
                  'Consistently maintained the quality of work without compromising the timeline is why we decided to give you turnkey EPC for our solar PV plant. A team full of cutting edge talent.'
              },
              {
                name: 'Monoj Kumar',
                location: 'Kanpur, U.P.',
                quote:
                  'We have been lucky to have found one of the finest solar companies in the country. Your concepts to commissioning services have enabled us to focus on our core business and simultaneously develop a second line of business under your expert guidance.'
              },
              {
                name: 'Akshay Patel',
                location: 'Bikaner, Rajasthan',
                quote:
                  'Would like to thank you for the professionalism shown by your company all throughout the project. Arreion consistently went the extra mile to ensure that the project becomes operational at the earliest date.'
              }
            ].map((t, index) => (
              <div
                key={index}
                style={{
                  background: 'linear-gradient(145deg, #ffe4e1, #fff7f4)',
                  borderRadius: '24px',
                  boxShadow: '0 12px 28px rgba(248, 113, 113, 0.25)',
                  padding: '26px 26px 30px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '18px',
                    fontSize: '50px',
                    color: '#fbbf2440',
                    fontWeight: 700
                  }}
                >
                  “
                </div>
                <div style={{ marginTop: '20px' }}>
                  <h3
                    style={{
                      margin: '0 0 4px',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#7f1d1d'
                    }}
                  >
                    {t.name}
                  </h3>
                  <div
                    style={{
                      marginBottom: '12px',
                      fontSize: '0.9rem',
                      color: '#9f1239'
                    }}
                  >
                    {t.location}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      color: '#7c2d12'
                    }}
                  >
                    {t.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

    </section>
  );
}

export default Solutions;


