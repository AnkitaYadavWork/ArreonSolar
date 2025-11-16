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
              { number: '60K+', label: 'Projects Completed' },
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
                name: 'Sanjay Khuswaha',
                location: 'Solar Park, Tamil Nadu',
                quote:
                  'We would like to thank the entire Arreon team for their excellent service. Our inquiries are always responded to promptly; the technical managers are thorough and knowledgeable; the follow-ups have always been courteous and pleasant.'
              },
              {
                name: 'Santosh Khare',
                location: 'Chhindwara, M.P.',
                quote:
                  'Consistently maintained the quality of work without compromising the timeline is why we decided to give you turnkey EPC for our solar PV plant. A team full of cutting edge talent.'
              },
              {
                name: 'Atul Kumar',
                location: 'Kanpur, U.P.',
                quote:
                  'We have been lucky to have found one of the finest solar companies in the country. Your concepts to commissioning services have enabled us to focus on our core business and simultaneously develop a second line of business under your expert guidance.'
              },
              {
                name: 'Sushil Gupta',
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






        {/* Content */}



      </section>
    </div>
  );
}

export default About;
