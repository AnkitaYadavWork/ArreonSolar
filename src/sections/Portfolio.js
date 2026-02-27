import React from 'react';
import SolarPanel1 from '../assets/images/SolarPanel1.jpg'
import SolarPanel2 from '../assets/images/SolarPanel2.jpg'
import SolarPanel3 from '../assets/images/SolarPanel3.jpg'
import SolarPanel4 from '../assets/images/SolarPanel4.jpg'
import SolarPanel5 from '../assets/images/SolarPanel5.jpg'
import SolarPanel6 from '../assets/images/SolarPanel6.jpg'
import SolarPanel7 from '../assets/images/SolarPanel7.jpg'
import SolarPanel8 from '../assets/images/SolarPanel8.jpg'
import SolarPanel9 from '../assets/images/SolarPanel9.jpg'
import SolarPanel10 from '../assets/images/SolarPanel10.jpg'
import SolarPanel11 from '../assets/images/SolarPanel11.jpg'

export default function Portfolio() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ padding: '80px 0', backgroundColor: '#fff8f6' }}>
      <div 
        className="container"
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          padding: '0 15px',
        }}
      >
        <div
          // style={{
          //   marginBottom: '40px',
          //   textAlign: 'left',
          //   borderLeft: '6px solid #e53935',
          //   paddingLeft: '18px',
          // }}
        >
          {/* <h2
            style={{
              margin: 0,
              fontSize: '38px',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: 'black',
            }}
          >
            Our <span style={{ color: 'black' }}>Portfolio</span>
          </h2> */}
          {/* <p
            style={{
              marginTop: '10px',
              maxWidth: '620px',
              color: '#555555',
              lineHeight: 1.6,
              fontSize: '15px',
            }}
          >
            A snapshot of some of our executed solar EPC projects across India, covering
            industrial, commercial and utility scale installations.
          </p> */}
        </div>
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#333',
          marginBottom: '20px',
          textTransform: 'uppercase',
          position: 'relative',
          display: 'inline-block',
          paddingBottom: '10px'
        }}>
          Our <span style={{ color: '#e53935' }}>Project Locations</span>
          <span style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '3px',
            backgroundColor: '#e53935',
            borderRadius: '2px'
          }}></span>
        </h2>
        <p style={{
          color: '#666',
          maxWidth: '700px',
          margin: '0 auto 30px',
          lineHeight: '1.6',
          fontSize: '15px'
        }}>
          Explore our solar power projects across various states in India, contributing to a sustainable future with clean energy solutions.
        </p>
        
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)'
        }}>
          <img 
            src={require('../assets/images/CompanyOperations.jpeg')} 
            alt="India Map showing project locations" 
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              border: '1px solid #eee',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
            }}
          />
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '15px',
            marginTop: '25px',
            padding: '15px 0'
          }}>
            {[
              { state: 'Rajasthan', count: '12+ Projects' },
              { state: 'Uttar Pradesh', count: '10+ Projects' },
              { state: 'Karnataka', count: '4+ Projects' },
              { state: 'Madhya Pradesh', count: '7+ Projects' },
              { state: 'Maharashtra', count: '3+ Projects' },
              { state: 'Tamil Nadu', count: '2+ Projects' },
              { state: 'Haryana', count: '1+ Project' },
              { state: 'Jharkhand', count: '1+ Project' },
              { state: 'Odisha', count: '1+ Project' },
              { state: 'Uttarakhand', count: '1+ Project' },
              { state: 'Delhi NCR', count: '1+ Project' },
            ].map((item, index) => (
              <div key={index} style={{
                backgroundColor: '#FFE4C4', // Light peach color
                padding: '8px 18px',
                borderRadius: '20px',
                border: '1px solid #e0e0e0',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}>
                <span style={{
                  display: 'inline-block',
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#e53935',
                  borderRadius: '50%',
                  flexShrink: 0
                }}></span>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#333'
                }}>
                  {item.state}: <span style={{ color: '#e53935', fontWeight: 600 }}>{item.count}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
        </div>

        <div
          style={{
            backgroundColor: '#ffffff',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
            borderRadius: '6px',
            overflow: 'hidden',
          }}
        >
          {/* <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 24px',
              background: 'linear-gradient(90deg, #b71c1c 0%, #ff5252 50%, #ff8a80 100%)',
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: '20px',
                fontWeight: 600,
                color: '#ffffff',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Client Portfolio
            </h3>
            <span
              style={{
                fontSize: '12px',
                color: '#e8ffe0',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
              }}
            >
              Selected Projects
            </span>
          </div> */}

          {/* <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '14px',
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: '10px 12px',
                      backgroundColor: '#f3f9ea',
                      color: '#1a4b82',
                      fontWeight: 600,
                      textAlign: 'left',
                      borderBottom: '1px solid #e0e0e0',
                    }}
                  >
                    No.
                  </th>
                  <th
                    style={{
                      padding: '10px 12px',
                      backgroundColor: '#f3f9ea',
                      color: '#1a4b82',
                      fontWeight: 600,
                      textAlign: 'left',
                      borderBottom: '1px solid #e0e0e0',
                    }}
                  >
                    Client Name
                  </th>
                  <th
                    style={{
                      padding: '10px 12px',
                      backgroundColor: '#f3f9ea',
                      color: '#1a4b82',
                      fontWeight: 600,
                      textAlign: 'left',
                      borderBottom: '1px solid #e0e0e0',
                    }}
                  >
                    Capacity
                  </th>
                  <th
                    style={{
                      padding: '10px 12px',
                      backgroundColor: '#f3f9ea',
                      color: '#1a4b82',
                      fontWeight: 600,
                      textAlign: 'left',
                      borderBottom: '1px solid #e0e0e0',
                    }}
                  >
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    no: 1,
                    client: 'Helious Solar',
                    capacity: '98 MW',
                    location: 'Rajasthan',
                  },
                  {
                    no: 2,
                    client: 'Solar Park',
                    capacity: '10 MW',
                    location: 'Tamil Nadu',
                  },
                  {
                    no: 3,
                    client: 'Skylet & Ramavari Power Pvt Ltd',
                    capacity: '2.2 MW',
                    location: 'Mysore',
                  },
                  {
                    no: 4,
                    client: 'OneIndig Tech Pvt LTD.',
                    capacity: '7.5 MW',
                    location: 'UP',
                  },
                  {
                    no: 5,
                    client: 'Topseed Engineering Pvt Ltd.',
                    capacity: '1.2 MW',
                    location: 'Bangalore (Karnataka)',
                  },
                  {
                    no: 6,
                    client: 'Shri Ram Murti',
                    capacity: '1.2 MW',
                    location: 'Bareilly, Lucknow (UP)',
                  },
                  {
                    no: 7,
                    client: 'Ambizon Gulbarga',
                    capacity: '1.18 MWp',
                    location: 'Gulbarga (Karnataka)',
                  },
                  {
                    no: 8,
                    client: 'Rayappa Poojari',
                    capacity: '1 MW',
                    location: 'Chikkalaki Village Bagalkot',
                  },
                  {
                    no: 9,
                    client: 'Laxmibai Dalwai',
                    capacity: '1 MW',
                    location: 'Halagani Village Bijapur',
                  },
                  {
                    no: 10,
                    client: 'Gayatri Rahummurthy',
                    capacity: '1 MW',
                    location: 'Hiriyur',
                  },
                  {
                    no: 11,
                    client: 'Akshaya Poultry Farm',
                    capacity: '1 MW',
                    location: 'Kola',
                  },
                  {
                    no: 12,
                    client: 'Mahindra CIE',
                    capacity: '650 KWp',
                    location: 'Rudrapur (UK)',
                  },
                  {
                    no: 13,
                    client: 'Power Grid Corporation of India',
                    capacity: '760 KWp',
                    location: 'Various locations in UP',
                  },
                  {
                    no: 14,
                    client: 'Mahindra CIE',
                    capacity: '540 KWp',
                    location: 'Pune (Maharashtra)',
                  },
                  {
                    no: 15,
                    client: 'M/s Engineer India Limited',
                    capacity: '460 KWp',
                    location: 'Gurgaon (Haryana)',
                  },
                  {
                    no: 16,
                    client: 'Shree Ram Polymers',
                    capacity: '420 KWp',
                    location: 'Bhilwara (Rajasthan)',
                  },
                   {
                    no: 17,
                    client: 'Power Grid Corporation of India',
                    capacity: '265 KWp',
                    location: 'Odisha',
                  },
                   {
                    no: 18,
                    client: 'Century Minechem Private Limited',
                    capacity: '380 KWp',
                    location: 'Rajasthan',
                  },
                   {
                    no: 19,
                    client: 'Aditya Birla Mines',
                    capacity: '357 KWp',
                    location: 'Jharkhand',
                  },
                   {
                    no: 20,
                    client: 'Olympus Glasses',
                    capacity: '350 KWp',
                    location: 'Sandila (UP)',
                  },
                   {
                    no: 21,
                    client: 'Ratan Housing & Development',
                    capacity: '250 KWp',
                    location: 'Kanpur',
                  },
                   {
                    no: 22,
                    client: 'Lulu Shopping Mall',
                    capacity: '200 KWp',
                    location: 'Lucknow (UP)',
                  },
                   {
                    no: 23,
                    client: 'Dental College',
                    capacity: '170 KWp',
                    location: 'Chennai (TN)',
                  },
                   {
                    no: 24,
                    client: 'Shree Bankey Bihari College',
                    capacity: '150 KWp',
                    location: 'Ghaziabad (UP)',
                  },
                   {
                    no: 25,
                    client: 'Mother Dairy',
                    capacity: '150 KWp',
                    location: 'Mumbai (Maharashtra)',
                  },
                   {
                    no: 26,
                    client: 'Shraddha Agro Food',
                    capacity: '90 KWp',
                    location: 'Prayagraj (UP)',
                  },
                   {
                    no: 27,
                    client: 'Cold Storage',
                    capacity: '80 KWp',
                    location: 'Delhi NCR',
                  },
                   {
                    no: 28,
                    client: 'Sai Cold Storage',
                    capacity: '20 KWp',
                    location: 'Bijapur',
                  },
                ].map((row, index) => (
                  <tr
                    key={row.no}
                    style={{
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#fafafa',
                    }}
                  >
                    <td
                      style={{
                        padding: '9px 12px',
                        borderBottom: '1px solid #eeeeee',
                        color: '#555555',
                        width: '60px',
                      }}
                    >
                      {row.no}
                    </td>
                    <td
                      style={{
                        padding: '9px 12px',
                        borderBottom: '1px solid #eeeeee',
                        color: '#333333',
                        fontWeight: 500,
                      }}
                    >
                      {row.client}
                    </td>
                    <td
                      style={{
                        padding: '9px 12px',
                        borderBottom: '1px solid #eeeeee',
                        color: '#555555',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {row.capacity}
                    </td>
                    <td
                      style={{
                        padding: '9px 12px',
                        borderBottom: '1px solid #eeeeee',
                        color: '#555555',
                      }}
                    >
                      {row.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
        </div>

        {/* Project Philosophy section */}
      

       
        {/* <div
          style={{
            marginTop: '70px',
            padding: '26px 24px 10px',
            borderRadius: '12px',
            backgroundColor: '#ffffff',
            boxShadow: '0 16px 38px rgba(0,0,0,0.06)',
          }}
        >
         
        </div> */}

        {/* Project Images gallery */}
        <div
          style={{
            marginTop: '70px',
            padding: '10px 4px 0',
          }}
        >
          <h2
            style={{
              margin: 0,
              marginBottom: '24px',
              fontSize: '32px',
              fontWeight: 700,
              letterSpacing: '0.04em',
              color: '#f58971ff',
            }}
          >
            Project <span style={{ color: '#f42516ff' }}>Images</span>
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {[0, 1, 2].map((rowIndex) => {
              const rowImages = [
                [SolarPanel1, SolarPanel2, SolarPanel3, SolarPanel4],
                [SolarPanel5, SolarPanel6, SolarPanel7, SolarPanel8],
                [SolarPanel9, SolarPanel10, SolarPanel11],
              ][rowIndex]

              const rowOffset = rowIndex === 0 ? 0 : rowIndex === 1 ? 40 : 80

              return (
                <div
                  key={rowIndex}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    justifyContent: 'flex-start',
                    paddingLeft: `${rowOffset}px`,
                  }}
                >
                  {rowImages.map((src, index) => (
                    <div
                      key={`${rowIndex}-${index}`}
                      style={{
                        flex: index === 0 && rowIndex === 1 ? '1.4' : 1,
                        maxWidth: index === 0 && rowIndex === 1 ? '32%' : '26%',
                        borderRadius: '18px',
                        overflow: 'hidden',
                        backgroundColor: '#ffffff',
                        boxShadow: '0 20px 34px rgba(0,0,0,0.18)',
                      }}
                    >
                      <img
                        src={src}
                        alt={`Project image ${rowIndex * 4 + index + 1}`}
                        style={{
                          display: 'block',
                          width: '100%',
                          height: '180px',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
        </div>

        {/* Kusum Project Portfolio - zig zag cards */}
        <div
          style={{
            marginTop: '80px',
            padding: '26px 22px 40px',
            borderRadius: '18px',
            backgroundColor: '#ffffff',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '22px',
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: '26px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: '#f58971ff',
              }}
            >
              Kusum <span style={{ color: '#f42516ff' }}>Project Portfolio</span>
            </h2>
            <span
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#999999',
              }}
            >
              State-wise Highlights
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
            }}
          >
            {[
              {
                state: 'Rajasthan',
                projects: [
                  { capacity: '5 MW' },
                  // { capacity: '4 MW' },
                  // { capacity: '2.4 MW' },
                  // { capacity: '3 MW' },
                  // { capacity: '1 MW' },
                  // { capacity: '1 MW' },
                  // { capacity: '3 MW' },
                  // { capacity: '2 MW' },
                ],
              },
              {
                state: 'Madhya Pradesh',
                projects: [
                  { capacity: '2 MW' },
                  // { capacity: '1 MW' },
                  // { capacity: '2 MW' },
                  // { capacity: '2 MW' },
                  // { capacity: '1 MW' },
                  // { capacity: '1 MW' },
                  // { capacity: '1.2 MW' },
                ],
              },
              {
                state: 'Maharashtra',
                projects: [{ capacity: '2 MW' }],
              },
            ].map((block, index) => (
              <div
                key={block.state}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'stretch',
                  gap: '26px',
                  padding: '16px 18px',
                  borderRadius: '14px',
                  backgroundColor: '#fdfdfd',
                  boxShadow: index === 1 ? '0 10px 28px rgba(0,0,0,0.08)' : '0 6px 18px rgba(0,0,0,0.04)',
                  transform:
                    index === 0 ? 'translateX(-16px)' : index === 1 ? 'translateX(0)' : 'translateX(16px)',
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '10px 6px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '13px',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: '#a3a3a3',
                    }}
                  >
                    State
                  </span>
                  <span
                    style={{
                      fontSize: '22px',
                      fontWeight: 600,
                      color: '#ec280eff',
                      marginTop: '4px',
                    }}
                  >
                    {block.state}
                  </span>
                </div>

                <div
                  style={{
                    flex: 1.4,
                    borderRadius: '12px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 10px 18px rgba(0,0,0,0.06)',
                    border: '1px solid #e7e2c7',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      padding: '8px 14px',
                       background: 'linear-gradient(90deg,#ff6b6b,#e53935)',
                      color: '#ffffff',
                      fontSize: '12px',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span>Capacity</span>
                  </div>
                  <div>
                    {block.projects.map((p, rowIndex) => (
                      <div
                        key={`${block.state}-${rowIndex}`}
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          padding: '6px 14px',
                          fontSize: '13px',
                          color: '#555555',
                          backgroundColor: rowIndex % 2 === 0 ? '#fffef8' : '#fdf8ec',
                          borderTop: '1px solid #efe6c9',
                        }}
                      >
                        <span style={{ fontWeight: 600 }}>{p.capacity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
