import { useEffect } from "react";

import { Sun, Zap, Droplets, IndianRupee } from "lucide-react";
import pmkusumImage from "../assets/images/pmkusumimages.jpg";

export default function KusumPage() {
    const theme = 'light'

  
  useEffect(() => {
    document.title = "PM KUSUM Scheme - Arreion Power";
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      transition: 'background-color 0.2s, color 0.2s',
      backgroundColor: theme === 'dark' ? '#111827' : '#ffffff',
      color: theme === 'dark' ? '#f3f4f6' : '#000000'
    }}>
      <main style={{ flex: 1 }}>
        {/* Hero Section with Image */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '600px',
          backgroundImage: 'url(\'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80\')',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'linear-gradient(to right, rgba(17, 24, 39, 0.3), rgba(31, 41, 55, 0.3))',
            transition: 'background-color 0.2s'
          }}>
            <div style={{
              margin: '0 auto',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '0 1rem'
            }}>
              <div style={{ maxWidth: '56rem' }}>
                <h1 style={{
                  fontSize: '2.25rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  color: '#111827'
                }}>
                  For PM KUSUM Yojana
                </h1>
                <p style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '1.5rem',
                  lineHeight: '1.25',
                  color: '#111827'
                }}>
                  Empowering Farmers, Powering India – Harness the Sun with <span style={{ color: '#b91c1c' }}>PM-KUSUM Yojana</span>!
                </p>
                <p style={{
                  fontSize: '1.125rem',
                  marginBottom: '2rem',
                  color: '#ffffff'
                }}>
                  India's largest and most trusted brand for the Kusum projects.
                </p>
                <div style={{
                  transition: 'background-color 0.2s, color 0.2s',
                  backgroundColor: theme === 'dark' ? '#fb923c' : '#fdba74',
                  color: theme === 'dark' ? '#111827' : '#7f1d1d',
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.375rem',
                  marginBottom: '2rem',
                  display: 'inline-block'
                }}>
                  Arreion's 90 Days Plant Commissioning Challenge!!!
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {/* <Button style={{
                    backgroundColor: theme === 'dark' ? '#2563eb' : '#2563eb',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    padding: '0.75rem 2rem',
                    borderRadius: '0.375rem',
                    fontSize: '1.125rem',
                    transition: 'background-color 0.2s'
                  }}>
                    Contact Now
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About PM-KUSUM Section */}
        <div style={{
          padding: '4rem 0',
          transition: 'background-color 0.2s',
          backgroundColor: theme === 'dark' ? '#1f2937' : '#fef2f2'
        }}>
          <div style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: theme === 'dark' ? '#ffffff' : '#111827'
              }}>About PM-KUSUM</h2>
              <div style={{ width: '5rem', height: '0.25rem', backgroundColor: '#f43f5e', margin: '0 auto' }}></div>
            </div>
            
            <div style={{
              fontSize: '1.125rem',
              lineHeight: '1.75',
              color: theme === 'dark' ? '#d1d5db' : '#4b5563',
              maxWidth: '64rem',
              margin: '0 auto'
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                The PM-KUSUM (Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan) scheme aims to help farmers in installing solar pumps and grid-connected solar power projects. The scheme was approved by the Government of India in 2019 with the objective of providing financial and water security to farmers.
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '2rem',
                margin: '3rem 0'
              }}>
                <div style={{
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  textAlign: 'center',
                  transition: 'all 0.2s',
                  backgroundColor: theme === 'dark' ? '#374151' : '#ffffff'
                }}>
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    backgroundColor: '#fed7aa',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem'
                  }}>
                    <Sun style={{
                      height: '2rem',
                      width: '2rem',
                      color: theme === 'dark' ? '#fdba74' : '#b91c1c'
                    }} />
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: theme === 'dark' ? '#ffffff' : '#111827'
                  }}>Energy Security</h3>
                  <p style={{ color: theme === 'dark' ? '#d1d5db' : '#4b5563' }}>Reliable solar power for agricultural needs</p>
                </div>
                
                <div style={{
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  textAlign: 'center',
                  transition: 'all 0.2s',
                  backgroundColor: theme === 'dark' ? '#374151' : '#ffffff'
                }}>
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    backgroundColor: '#fed7aa',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem'
                  }}>
                    <Droplets style={{
                      height: '2rem',
                      width: '2rem',
                      color: theme === 'dark' ? '#93c5fd' : '#2563eb'
                    }} />
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: theme === 'dark' ? '#ffffff' : '#111827'
                  }}>Water Security</h3>
                  <p style={{ color: theme === 'dark' ? '#d1d5db' : '#4b5563' }}>Solar-powered irrigation solutions</p>
                </div>
                
                <div style={{
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  textAlign: 'center',
                  transition: 'all 0.2s',
                  backgroundColor: theme === 'dark' ? '#374151' : '#ffffff'
                }}>
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    backgroundColor: '#fed7aa',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem'
                  }}>
                    <IndianRupee style={{
                      height: '2rem',
                      width: '2rem',
                      color: theme === 'dark' ? '#86efac' : '#16a34a'
                    }} />
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: theme === 'dark' ? '#ffffff' : '#111827'
                  }}>Additional Income</h3>
                  <p style={{ color: theme === 'dark' ? '#d1d5db' : '#4b5563' }}>Earn by selling surplus power to the grid</p>
                </div>
              </div>
              
              <p style={{ marginBottom: '1.5rem' }}>
                The scheme aims to add solar capacity of 30,800 MW by 2022 with total central financial support of ₹34,422 crore. It is one of the biggest initiatives in the world to provide clean energy to more than 35 lakh farmers by solarising their agriculture pumps.
              </p>
              
              <div style={{
                padding: '1.5rem',
                borderRadius: '0.5rem',
                borderLeft: '4px solid #dc2626',
                margin: '2rem 0',
                backgroundColor: theme === 'dark' ? '#374151' : '#fed7aa'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  color: theme === 'dark' ? '#ffffff' : '#111827'
                }}>Key Objectives:</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li style={{ color: theme === 'dark' ? '#d1d5db' : '#000000' }}>Ensure energy security for farmers</li>
                  <li style={{ color: theme === 'dark' ? '#d1d5db' : '#000000' }}>Provide water security to farmers through solar pumps</li>
                  <li style={{ color: theme === 'dark' ? '#d1d5db' : '#000000' }}>Help farmers in increasing their income</li>
                  <li style={{ color: theme === 'dark' ? '#d1d5db' : '#000000' }}>Reduce dependence on diesel and kerosene</li>
                  <li style={{ color: theme === 'dark' ? '#d1d5db' : '#000000' }}>Contribute to India's climate change goals</li>
                </ul>
              </div>
              
              <p>
                The scheme is being implemented by the Ministry of New and Renewable Energy (MNRE) and is a major step towards the Government's commitment to increase the share of installed capacity of electric power from non-fossil-fuel sources to 40% by 2030 as part of Intended Nationally Determined Contributions (INDCs).
              </p>
            </div>
          </div>
        </div>

        {/* Components Section */}
        <div style={{
          padding: '4rem 0',
          backgroundColor: theme === 'dark' ? '#111827' : 'rgba(255, 255, 255, 0.7)'
        }}>
          <div style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: theme === 'dark' ? '#ffffff' : '#111827'
              }}>Components of PM-KUSUM</h2>
              <div style={{ width: '5rem', height: '0.25rem', backgroundColor: '#f43f5e', margin: '0 auto' }}></div>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '2rem',
              maxWidth: '72rem',
              margin: '0 auto'
            }}>
              {/* Component A */}
              <div style={{
                padding: '2rem',
                borderRadius: '0.75rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                transition: 'box-shadow 0.2s',
                backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                border: `1px solid ${theme === 'dark' ? '#374151' : '#f3f4f6'}`
              }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  backgroundColor: '#fed7aa',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#b91c1c' }}>A</span>
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  textAlign: 'center',
                  marginBottom: '1rem',
                  color: theme === 'dark' ? '#ffffff' : '#111827'
                }}>Component A</h3>
                <p style={{
                  textAlign: 'center',
                  color: theme === 'dark' ? '#d1d5db' : '#4b5563'
                }}>
                  Installation of <span style={{ fontWeight: '600', color: theme === 'dark' ? '#ffffff' : '#111827' }}>10,000 MW</span> of decentralized ground-mounted grid-connected 
                  renewable power plants of individual plant size up to <span style={{ fontWeight: '600', color: theme === 'dark' ? '#ffffff' : '#111827' }}>2 MW</span>.
                </p>
              </div>
              
              {/* Component B */}
              <div style={{
                padding: '2rem',
                borderRadius: '0.75rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                transition: 'box-shadow 0.2s',
                backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                border: `1px solid ${theme === 'dark' ? '#374151' : '#f3f4f6'}`
              }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  backgroundColor: '#fed7aa',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#b91c1c' }}>B</span>
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  textAlign: 'center',
                  marginBottom: '1rem',
                  color: theme === 'dark' ? '#ffffff' : '#111827'
                }}>Component B</h3>
                <p style={{
                  textAlign: 'center',
                  color: theme === 'dark' ? '#d1d5db' : '#4b5563'
                }}>
                  Installation of <span style={{ fontWeight: '600', color: theme === 'dark' ? '#ffffff' : '#111827' }}>20 lakh</span> standalone solar-powered agriculture pumps of 
                  individual pump capacity up to <span style={{ fontWeight: '600', color: theme === 'dark' ? '#ffffff' : '#111827' }}>7.5 HP</span>.
                </p>
              </div>
              
              {/* Component C */}
              <div style={{
                padding: '2rem',
                borderRadius: '0.75rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                transition: 'box-shadow 0.2s',
                backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                border: `1px solid ${theme === 'dark' ? '#374151' : '#f3f4f6'}`
              }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  backgroundColor: '#fed7aa',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#b91c1c' }}>C</span>
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  textAlign: 'center',
                  marginBottom: '1rem',
                  color: theme === 'dark' ? '#ffffff' : '#111827'
                }}>Component C</h3>
                <p style={{
                  textAlign: 'center',
                  color: theme === 'dark' ? '#d1d5db' : '#4b5563'
                }}>
                  Solarisation of <span style={{ fontWeight: '600', color: theme === 'dark' ? '#ffffff' : '#111827' }}>15 lakh</span> grid-connected agriculture pumps of individual 
                  pump capacity up to <span style={{ fontWeight: '600', color: theme === 'dark' ? '#ffffff' : '#111827' }}>7.5 HP</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div style={{
          padding: '4rem 0',
          backgroundColor: theme === 'dark' ? '#1f2937' : '#ffe4e6'
        }}>
          <div style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '3rem', alignItems: 'center' }}>
              {/* Benefits Content (left) */}
              <div style={{ flex: '1 1 0%' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h2 style={{
                    fontSize: '1.875rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    color: theme === 'dark' ? '#ffffff' : '#111827'
                  }}>Benefits of PM-KUSUM</h2>
                  <div style={{ width: '5rem', height: '0.25rem', backgroundColor: '#f43f5e', margin: '0 auto' }}></div>
                </div>
                
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <div style={{
                      flexShrink: 0,
                      width: '1.5rem',
                      height: '1.5rem',
                      backgroundColor: '#fed7aa',
                      borderRadius: '9999px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '0.75rem',
                      marginTop: '0.25rem'
                    }}>
                      <svg style={{ width: '1rem', height: '1rem', color: '#b91c1c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}>Financial security for farmers through reliable day-time solar power</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <div style={{
                      flexShrink: 0,
                      width: '1.5rem',
                      height: '1.5rem',
                      backgroundColor: '#fed7aa',
                      borderRadius: '9999px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '0.75rem',
                      marginTop: '0.25rem'
                    }}>
                      <svg style={{ width: '1rem', height: '1rem', color: '#b91c1c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}>Reduction of transmission losses for DISCOMs</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <div style={{
                      flexShrink: 0,
                      width: '1.5rem',
                      height: '1.5rem',
                      backgroundColor: '#fed7aa',
                      borderRadius: '9999px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '0.75rem',
                      marginTop: '0.25rem'
                    }}>
                      <svg style={{ width: '1rem', height: '1rem', color: '#b91c1c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}>Support for de-dieselisation of the farm sector</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <div style={{
                      flexShrink: 0,
                      width: '1.5rem',
                      height: '1.5rem',
                      backgroundColor: '#fed7aa',
                      borderRadius: '9999px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '0.75rem',
                      marginTop: '0.25rem'
                    }}>
                      <svg style={{ width: '1rem', height: '1rem', color: '#b91c1c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}>Reduction of carbon emissions</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <div style={{
                      flexShrink: 0,
                      width: '1.5rem',
                      height: '1.5rem',
                      backgroundColor: '#fed7aa',
                      borderRadius: '9999px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '0.75rem',
                      marginTop: '0.25rem'
                    }}>
                      <svg style={{ width: '1rem', height: '1rem', color: '#b91c1c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ color: '#374151' }}>Additional income for farmers by selling surplus power to the grid</span>
                  </li>
                </ul>
              </div>
              
              {/* Benefits Image (right) */}
              <div style={{ flex: '0 0 380px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '0.75rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', overflow: 'hidden', width: '100%' }}>
                  <img 
                    src={pmkusumImage}
                    alt="Solar project under development"
                    style={{ width: '100%', height: '240px', borderRadius: '0.5rem', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility Section */}
        <div style={{ padding: '4rem 0', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
          <div style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: '3rem' }}>
              {/* Eligibility Content */}
              <div style={{ flex: '1 1 0%' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h2 style={{
                    fontSize: '1.875rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    color: '#111827'
                  }}>Eligibility</h2>
                  <div style={{ width: '5rem', height: '0.25rem', backgroundColor: '#f43f5e', margin: '0 auto' }}></div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <p style={{ color: '#374151' }}>
                    The PM-KUSUM scheme is open to a wide range of beneficiaries to ensure maximum participation and benefit from solar power generation and agricultural development.
                  </p>
                  
                  <div style={{ backgroundColor: '#fed7aa', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '4px solid #dc2626' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '0.75rem' }}>Who Can Apply?</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <div style={{
                          flexShrink: 0,
                          width: '1.5rem',
                          height: '1.5rem',
                          backgroundColor: '#fed7aa',
                          borderRadius: '9999px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '0.75rem',
                          marginTop: '0.25rem'
                        }}>
                          <svg style={{ width: '1rem', height: '1rem', color: '#b91c1c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <span>Individual farmers with cultivable land</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <div style={{
                          flexShrink: 0,
                          width: '1.5rem',
                          height: '1.5rem',
                          backgroundColor: '#fed7aa',
                          borderRadius: '9999px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '0.75rem',
                          marginTop: '0.25rem'
                        }}>
                          <svg style={{ width: '1rem', height: '1rem', color: '#b91c1c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <span>Group of farmers/cooperatives/panchayats</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <div style={{
                          flexShrink: 0,
                          width: '1.5rem',
                          height: '1.5rem',
                          backgroundColor: '#fed7aa',
                          borderRadius: '9999px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '0.75rem',
                          marginTop: '0.25rem'
                        }}>
                          <svg style={{ width: '1rem', height: '1rem', color: '#b91c1c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span>Farmer Producer Organizations (FPOs)</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <div style={{
                          flexShrink: 0,
                          width: '1.5rem',
                          height: '1.5rem',
                          backgroundColor: '#fed7aa',
                          borderRadius: '9999px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '0.75rem',
                          marginTop: '0.25rem'
                        }}>
                          <svg style={{ width: '1rem', height: '1rem', color: '#b91c1c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <span>Water User Associations (WUAs)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div style={{ marginTop: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '0.75rem' }}>Basic Requirements</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#374151' }}>
                      <li>Ownership or lease rights of agricultural land</li>
                      <li>Valid electricity connection for agricultural purposes</li>
                      <li>Land should be suitable for solar panel installation</li>
                      <li>Compliance with state-specific guidelines and requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Eligibility Image */}
              <div style={{ flex: '1 1 0%' }}>
                <div style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '0.75rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', overflow: 'hidden' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                    alt="Farmer in agricultural field with solar panels"
                    style={{ width: '100%', height: 'auto', borderRadius: '0.5rem', objectFit: 'cover' }}
                    onError={(e) => {
                      const target = e.target;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjlmOWY5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNnB4IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5GYXJtZXIgd2l0aCBTb2xhciBQYW5lbHMgSW1hZ2UgTm90IEF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ padding: '4rem 0', backgroundColor: '#ffe4e6' }}>
          <div style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#111827'
              }}>Frequently Asked Questions</h2>
              <div style={{ width: '5rem', height: '0.25rem', backgroundColor: '#f43f5e', margin: '0 auto' }}></div>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '2rem',
              maxWidth: '64rem',
              margin: '0 auto'
            }}>
              {[
                {
                  question: "Is there a definite income?",
                  answer: "Yes, with Sinko Energy, our clients going green isn't just good for the planet, but it's also a smart investment that generates income."
                },
                {
                  question: "What costs are involved for the commission?",
                  answer: "There are no hidden charges; we believe in transparency for smart and optimized solar solutions."
                },
                {
                  question: "Any support for Tender Process?",
                  answer: "From paperwork to participation, Sinko Energy guides the clients through the tender process and provides expert support."
                },
                {
                  question: "Will the Generation be good?",
                  answer: "Our service is engineered for performance, providing solar engineering that is optimized for high generation and reliability in long-term."
                },
                {
                  question: "What is the PM-Kusum Yojana?",
                  answer: "The government launched the PM Kusum Yojana to promote solar energy in agriculture and enhance farmers' income through electricity generation."
                },
                {
                  question: "How does Sinko help with the loan process?",
                  answer: "We offer a smooth loan assistance that helps in reducing your investment stress and makes the entire loan process easier."
                }
              ].map((faq, index) => (
                <div key={index} style={{
                  backgroundColor: '#ffffff',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  transition: 'box-shadow 0.2s'
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '0.75rem'
                  }}>{faq.question}</h3>
                  <p style={{ color: '#4b5563' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Documents Required Section */}
        <div style={{ padding: '4rem 0', backgroundColor: '#fff7ed' }}>
          <div style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#111827'
              }}>Documents Required</h2>
              <div style={{ width: '5rem', height: '0.25rem', backgroundColor: '#f43f5e', margin: '0 auto' }}></div>
              <p style={{
                fontSize: '1.125rem',
                color: '#4b5563',
                marginTop: '1rem',
                maxWidth: '48rem',
                margin: '1rem auto 0'
              }}>
                Here's a list of essential documents you'll need to apply for the PM-KUSUM scheme:
              </p>
            </div>
            
            <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                columnGap: '4rem',
                rowGap: '0.75rem'
              }}>
                {[
                  "Aadhaar Card of the applicant",
                  "Land documents (7/12 extract or Property card)",
                  "Latest electricity bill (if any)",
                  "Caste certificate (if applicable)",
                  "Bank account details with IFSC code",
                  "Passport size photograph",
                  "Duly filled application form",
                  "NOC from DISCOM (if required)",
                  "Ration card (if applicable)",
                  "Mobile number linked with Aadhaar"
                ].map((doc, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <div style={{
                      flexShrink: 0,
                      height: '1.5rem',
                      width: '1.5rem',
                      color: '#dc2626',
                      marginRight: '0.75rem',
                      marginTop: '0.2rem'
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1.5rem', width: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p style={{ color: '#111827', fontSize: '0.98rem', lineHeight: 1.5, margin: 0 }}>{doc}</p>
                  </div>
                ))}
              </div>
              
              <div style={{
                marginTop: '3rem',
                backgroundColor: '#fefce8',
                borderLeft: '4px solid #facc15',
                padding: '1rem'
              }}>
                <div style={{ display: 'flex' }}>
                  <div style={{ flexShrink: 0 }}>
                    <svg style={{ height: '1.25rem', width: '1.25rem', color: '#facc15' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div style={{ marginLeft: '0.75rem' }}>
                    <p style={{ fontSize: '0.875rem', color: '#92400e' }}>
                      <strong>Note:</strong> Additional documents may be required based on your specific case. Our team will guide you through the complete documentation process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <section style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(4px)',
          padding: '4rem 1rem'
        }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.25rem',
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#b91c1c',
              marginBottom: '4rem'
            }}>
              Voice of Happy Clients who Choose Sinko
            </h2>

            <div style={{
              display: 'flex',
              flexWrap: 'nowrap',
              justifyContent: 'center',
              gap: '2rem',
              paddingBottom: '1rem',
              marginBottom: '3rem'
            }}>
              {[
                {
                  name: "Krishna Nagar,",
                  location: "Rajasthan",
                  project: "2.52 MWp Solar Power Plant, Krishna Nagar",
                  image: "https://images.pexels.com/photos/3821517/pexels-photo-3821517.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                },
                {
                  name: "Hanumangarh,",
                  location: "Rajasthan",
                  project: "2.52 Solar Power Plant, Hanumangarh",
                  image: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                },
                {
                  name: "Hisar,",
                  location: "Haryana",
                  project: "4.0 MWp Solar Power Plant Hisar, Haryana",
                  image: "https://images.pexels.com/photos/3807516/pexels-photo-3807516.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                },
                {
                  name: "Bikaner,",
                  location: "Rajasthan",
                  project: "2.0MWp Solar Power Plant Bikaner, Rajasthan",
                  image: "https://images.pexels.com/photos/3807515/pexels-photo-3807515.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                },
                {
                  name: "Jhunjhunu,",
                  location: "Rajasthan",
                  project: "2.52 MWp Solar Power Plant, Krishna Nagar",
                  image: "https://images.pexels.com/photos/3807514/pexels-photo-3807514.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                }
              ].map((testimonial, index) => (
                <div key={index} style={{
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '12rem',
                    height: '12rem',
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    marginBottom: '1.5rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  }}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        const target = e.target;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjlmOWY5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNnB4IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5UZXN0aW1vbmlhbCBJbWFnZSBOb3QgQXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                  </div>
                  <div style={{ textAlign: 'center', width: '12rem' }}>
                    <h3 style={{
                      fontWeight: 'bold',
                      color: '#111827',
                      fontSize: '1rem',
                      marginBottom: '0.25rem'
                    }}>
                      {testimonial.name}
                    </h3>
                    <p style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{testimonial.location}</p>
                    <p style={{ color: '#374151', fontSize: '0.75rem', lineHeight: '1.5' }}>{testimonial.project}</p>
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </section>


      </main>
      
    </div>
  );}