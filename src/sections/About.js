import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function About() {
  const solutionsRef = useRef(null);
  const location = useLocation();
  const containerStyle = { maxWidth: 1180, margin: '0 auto', padding: '0 24px' };

  useEffect(() => {
    // Check if we should scroll to solutions
    const shouldScroll = sessionStorage.getItem('scrollToSolutions');

    if (shouldScroll && solutionsRef.current) {
      // Scroll to the solutions section
      setTimeout(() => {
        solutionsRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Reset the flag
        sessionStorage.removeItem('scrollToSolutions');
      }, 100); // Small delay to ensure the page has rendered
    }
  }, [location]);

  const scrollToSolutions = () => {
    solutionsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <section id="about" style={{
        padding: '60px 20px 80px',
        maxWidth: '1200px',
        margin: '0 auto',
        lineHeight: '1.7',
        color: '#333'
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px',
          padding: '40px 20px',
          background: 'linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(255,255,255,0) 70%)',
            borderRadius: '50%'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            left: '-30px',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(255,255,255,0) 70%)',
            borderRadius: '50%'
          }}></div>

          <h1 style={{
            fontSize: '3rem',
            color: '#0b1a24',
            margin: '0 auto 20px',
            fontWeight: '800',
            lineHeight: '1.2',
            maxWidth: '900px',
            position: 'relative',
            textShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            Empowering India's Future with <span style={{ color: '#f04343ff' }}>Clean Energy</span>
          </h1>

          <p style={{
            fontSize: '1.25rem',
            maxWidth: '800px',
            margin: '0 auto 40px',
            color: '#4b5563',
            position: 'relative',
            lineHeight: '1.7'
          }}>
            Arreion Power is revolutionizing India's energy landscape with cutting-edge solar solutions that are sustainable, reliable, and tailored to your needs. Join thousands of satisfied customers who've made the switch to clean energy.
          </p>



          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '40px',
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 2
          }}>
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '200', label: 'Projects Completed' },
              { number: '98%', label: 'Customer Satisfaction' },
              { number: '40+', label: 'States Served' }
            ].map((stat, index) => (
              <div key={index} style={{
                padding: '0 20px',
                textAlign: 'center',
                position: 'relative'
              }}>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#0b1a24',
                  lineHeight: '1.2',
                  marginBottom: '4px'
                }}>{stat.number}</div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  fontWeight: '500'
                }}>{stat.label}</div>
                {index < 3 && <div style={{
                  position: 'absolute',
                  right: '0',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '1px',
                  height: '40px',
                  background: '#e2e8f0'
                }}></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Company Overview */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{
            color: '#0b1a24',
            marginBottom: '20px',
            fontSize: '2rem',
            fontWeight: '700'
          }}>Our Journey in Renewable Energy</h2>

          <p style={{ marginBottom: '20px' }}>
            Established in 2015, Arreion Power has grown into one of India’s fastest-growing EPC brands in the renewable energy sector. What began as a focused effort toward clean and sustainable development has today evolved into a trusted organization delivering high-quality solar and energy infrastructure solutions across the country.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            margin: '30px 0'
          }}>
            <div style={{
              background: '#f8fafc',
              padding: '20px',
              borderRadius: '10px',
              borderLeft: '4px solid #e13939ff'
            }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#e29f9fff' }}>Our Mission</h3>
              <p style={{ margin: 0 }}>Our mission is to prioritize client satisfaction
                by delivering tailored renewable energy
                solutions that are reliable, efficient, and cost-
                effective, we are committed to leading the
                transition to renewable energy by providing
                innovative, reliable, and affordable solutions
                that empower communities, protect the
                environment, and create a brighter future for
                generations to come</p>
            </div>
            <div style={{
              background: '#f8fafc',
              padding: '20px',
              borderRadius: '10px',
              borderLeft: '4px solid #e13939ff'
            }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#e29f9fff' }}>Our Vision</h3>
              <p style={{ margin: 0 }}>Our vision is to become the trusted partner
                for sustainable energy solutions, relentlessly
                committed to exceeding client expectations
                while driving the global transition to
                renewable energy.</p>
            </div>
          </div>

          <p style={{ marginBottom: '20px' }}>
           Backed by a strong team of domain experts, we develop, build, own, operate, and consult for utility-scale energy projects for C&I clients and Government PSUs. With 60+ projects across 20+ locations, a 300% YoY revenue growth, and a team of 80+ on-roll and off-roll professionals, we continue to strengthen India’s transition to clean energy.
          </p>

          <div style={{
            background: '#f0f9ff',
            padding: '25px',
            borderRadius: '10px',
            borderLeft: '4px solid #dd5c5cff',
            margin: '25px 0'
          }}>
            <p style={{
              margin: '0',
              fontStyle: 'italic',
              color: '#1e40af',
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>
              "At Arreion Power, we follow a complete turnkey approach — from site survey, design, engineering, procurement, and construction to commissioning and long-term O&M. Our integrated strategy ensures optimized performance, long life, and maximum value for every project."
            </p>
          </div>
          <p>
           Whether it is rooftop, ground-mounted, hybrid, or open-access solar solutions, our team ensures seamless execution, high-quality engineering documents, best-in-class equipment selection, and complete technical & financial assistance.

We believe in clean energy, transparent execution, and long-term client partnerships — values that define every project we deliver.
          </p>
        </div>

 {/* Team Members Section */}
          <section style={{
        padding: '80px 0',
        background: '#f8fafc',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          ...containerStyle,
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            marginTop: '0',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: 800,
              color: '#0f172a',
              margin: '0 0 60px',
              position: 'relative',
              display: 'inline-block',
              '::after': {
                content: '""',
                position: 'absolute',
                bottom: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #e53e3e, #f56565)',
                borderRadius: '2px'
              }
            }}>
              Our Leadership Team
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              marginTop: '40px'
            }}>
              {[
                {
                  name: 'Rishabh Singh',
                  role: 'CEO',
                  description: 'Mr. Rishabh Singh, CEO, has more than 10 years of expertise in the solar industry and associated fields. Mr. Rishabh Singh adds a distinctive viewpoint to Solar Power, allowing us to create unique solutions that are specifically catered to the needs and demands of our clients. Arreion has become  a strong competitor in the solar energy business thanks to his enthusiasm for quality and innovation. His unique ability to forge long-lasting bonds with his clientele while offering them world-class services and dedication to quality has helped Arreion immensely.',
                  image: '👨‍💼' // Replace with actual image path
                },
                {
                  name: 'Priyanka Singh',
                  role: 'Director',
                  description: 'Priyanka emphasises on execution and meticulous planning for business success. She believes in turning aspirations into achievements through precise strategic execution. Her strong leadership, foresightedness and creative approach drive the company towards sustainable growth.',
                  image: '👩‍💼' // Replace with actual image path
                },
                {
                  name: 'Dhanajay Singh',
                  role: 'Director',
                  description: 'Working on the principle "Network is Net worth", with more than twenty years of experience in management & Entrepreneurship education. He is one of the torch bearers to develop Vision & mission of the company for sustainable and green world.',
                  image: '👨‍💼' // Replace with actual image path
                }
              ].map((member, index) => (
                <div key={index} style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.1)'
                  },
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: '#f8fafc',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '50px',
                    color: '#e53e3e',
                    border: '3px solid #ffebee'
                  }}>
                    {member.image}
                  </div>
                  <h3 style={{
                    fontSize: '22px',
                    color: '#1e293b',
                    margin: '0 0 5px',
                    fontWeight: 700
                  }}>
                    {member.name}
                  </h3>
                  <div style={{
                    color: '#e53e3e',
                    fontWeight: 600,
                    marginBottom: '15px',
                    fontSize: '16px'
                  }}>
                    {member.role}
                  </div>
                  <p style={{
                    color: '#64748b',
                    lineHeight: '1.7',
                    margin: 0,
                    fontSize: '15px'
                  }}>
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>   

      {/* Message from Management */}
      <section style={{
        background: '#FFFFFF',
        padding: '40px 0 100px 0',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '-40px'
      }}>
        <div style={containerStyle}>
          <div style={{
            background: 'transparent',
            padding: '60px 0',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative elements */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(239, 68, 68, 0.08) 0%, rgba(255,255,255,0) 70%)',
              borderRadius: '50%',
              transform: 'translate(30%, -30%)'
            }}></div>
            
            <div style={{
              position: 'relative',
              zIndex: 2
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '30px'
              }}>
                <div style={{
                  width: '5px',
                  height: '50px',
                  background: 'linear-gradient(45deg, #EF4444 0%, #F97316 100%)',
                  marginRight: '20px',
                  borderRadius: '3px'
                }}></div>
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: 'black',
                  margin: 0,
                  letterSpacing: '-0.5px'
                }}>
                  Message from Management
                </h2>
              </div>

              <div style={{
                color: '#4B5563',
                lineHeight: 1.8,
                fontSize: '17px',
                maxWidth: '900px'
              }}>
                <p style={{ 
                  marginBottom: '25px',
                  position: 'relative',
                  paddingLeft: '25px',
                  borderLeft: '3px solid #EF4444'
                }}>
                  At <strong>Arreion</strong>, we are more than just a team — we are a community united by a shared mission: to empower businesses and industries across India with clean, reliable, and cost-efficient solar energy solutions. As a leading B2B Solar EPC (Engineering, Procurement, and Construction) company, we are committed to delivering end-to-end solar solutions that drive operational efficiency and long-term savings.
                </p>
                
                <p style={{ 
                  marginBottom: '25px',
                  position: 'relative',
                  paddingLeft: '25px',
                  borderLeft: '3px solid #EF4444'
                }}>
                  Our work goes far beyond installing solar panels. We believe every project is unique, and our approach reflects that. With a strong philosophy built around the <strong>5 Cs — Customer, Commitment, Conviction, Compassion & Competitor</strong> — we ensure that every solution is tailored to your specific requirements. From the first consultation to project design, execution, commissioning, and ongoing maintenance, our team stands with you at every stage of your solar journey.
                </p>

                <div style={{
                  background: 'linear-gradient(90deg, #FEE2E2 0%, #FEF3C7 100%)',
                  borderRadius: '12px',
                  padding: '25px 30px',
                  margin: '30px 0',
                  borderLeft: '4px solid #EF4444'
                }}>
                  <p style={{
                    fontSize: '18px',
                    fontStyle: 'italic',
                    color: '#9A3412',
                    margin: 0,
                    lineHeight: 1.7
                  }}>
                    "Our vision is bigger than individual projects. We are dedicated to accelerating India's transition to renewable energy by offering innovative, scalable, and affordable solar solutions. Through our work, we aim to reduce carbon footprints, empower communities, and contribute to a greener and more sustainable future for the nation."
                  </p>
                </div>

                <p style={{ 
                  marginBottom: '25px',
                  position: 'relative',
                  paddingLeft: '25px',
                  borderLeft: '3px solid #EF4444'
                }}>
                  We invite you to connect with us and explore how Arreion can help your business adopt clean energy while enhancing productivity and reducing operational costs. Together, let's build a brighter, cleaner, and energy-secure future for India.
                </p>
              </div>

              <div style={{
                marginTop: '40px',
                paddingTop: '30px',
                borderTop: '1px dashed #F87171',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px'
                }}>
                  <div style={{
                    width: '80px',
                    height: '4px',
                    background: 'linear-gradient(45deg, #EF4444 0%, #F97316 100%)',
                    borderRadius: '2px',
                    marginRight: '20px'
                  }}></div>
                  <div>
                    <div style={{
                      fontWeight: 700,
                      color: '#EF44442',
                      fontSize: '18px'
                    }}>The Arreion Management Team</div>
                    <div style={{
                      fontSize: '15px',
                      color: '#EF4444',
                      fontWeight: 500
                    }}>Empowering India's Solar Future</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
        <div ref={solutionsRef} id="solutions" style={{
          marginBottom: '60px',
          scrollMarginTop: '80px' // Adjust this value based on your header height
        }}>
          <h2 style={{
            color: 'black',
            marginBottom: '25px',
            fontSize: '2rem',
            textAlign: 'center'
          }}>Our Solar Solutions</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            marginTop: '30px'
          }}>
            {[
              {
                title: 'Rooftop Solar Solutions',
                description:
                  'Solutions for businesses and institutions to reduce electricity bills with reliable and low-maintenance solar power.',
                features: [
                  'CAPEX / OPEX / EMI models',
                  'Complete turnkey execution (design to commissioning)',
                  'Performance optimization and O&M services',
                  'Net-metering enabled systems'
                ]
              },
              {
                title: 'Ground-Mount Solar Solutions',
                description:
                  'Large-scale solar systems installed on available land areas, designed for high energy generation.',
                features: [
                  'Feasibility study and land assessment',
                  'Engineering, procurement, and construction',
                  '2D/3D GA layouts, PVSyst simulation',
                  'Long-term O&M support'
                ]
              },
              {
                title: 'Hybrid & Advanced Solar Solutions',
                description:
                  'Innovative and future-ready solutions combining multiple clean-energy technologies.',
                features: [
                  'Lithium-ion based storage systems',
                  'Solar-powered EV charging hubs',
                  'Wind-Solar Hybrid (WSH) plants',
                  'Group Captive & Open Access models'
                ]
              }
            ].map((service, index) => (
              <div key={index} style={{
                background: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease',
                ':hover': {
                  transform: 'translateY(-5px)'
                }
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #fecaca, #f97373)',
                  color: '#7f1d1d',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <h3 style={{
                    margin: '0',
                    fontSize: '1.4rem',
                    fontWeight: '700'
                  }}>{service.title}</h3>
                </div>
                <div style={{ padding: '25px' }}>
                  <p style={{
                    margin: '0 0 20px 0',
                    color: 'black'
                  }}>{service.description}</p>
                  <ul style={{
                    margin: '0 0 16px 0',
                    paddingLeft: '20px',
                    color: 'black'
                  }}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={{ marginBottom: '8px' }}>{feature}</li>
                    ))}
                  </ul>
                  <div
                    style={{
                      marginTop: '4px',
                      paddingTop: '10px',
                      borderTop: '1px dashed #e5e7eb',
                      fontSize: '0.8rem',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                    }}
                  >
                    Ideal for {service.title === 'Rooftop Solar Solutions'
                      ? 'commercial & institutional rooftops'
                      : service.title === 'Ground-Mount Solar Solutions'
                      ? 'utility-scale & ground-mounted projects'
                      : 'hybrid, storage & open-access models'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Content */}
      </section>
    </div>
  );
}

export default About;
