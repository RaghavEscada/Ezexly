import React, { useState, useEffect } from 'react';

function App() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollWidth(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollWidth}%`,
          height: '4px',
          background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
          zIndex: 100,
          transition: 'width 0.2s ease-out',
        }}
      />

      <header className="flex justify-between items-center py-7 px-11" style={{ backgroundColor: 'rgb(82, 82, 82)' }}>
        <div className="flex items-center">
          <p className="text-4xl font-poppins pl-1" style={{ color: 'rgb(217, 179, 85)' }}>
            UZEXLY
          </p>
        </div>

        <nav className="flex items-center space-x-8">
          <div className="flex flex-col items-start">
            <ul className="list-none text-right" style={{ color: 'rgb(217, 179, 85)' }}>
              <li>WORK</li>
              <li>COMPANY</li>
              <li>CAPABILITIES</li>
              <li>CONTACT</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <ul className="list-none" style={{ color: 'rgb(217, 179, 85)' }}>
              <li>hello@uzexly.com</li>
              <li>+91 9167953663</li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="flex-col justify-center items-center py-20" style={{ backgroundColor: 'rgb(82,82,82)' }}>
        <div className="p-4 text-white text-center">
          <h3 className="text-4xl font-xf">Hey There!!! We are here to have a conversation</h3>
          <p className="py-7 text-2xl">Got something in mind? We'd love to help!</p>

          <h1 className="text-orange-400 text-[19px] pt-32 font-xf">SAY HELLO</h1>

          <div className="py-1 grid grid-cols-3 gap-x-40 pt-10">
            <div>
              <p style={{ color: 'rgb(217,179,85)' }} className="text-2xl py-2 pl-7 italic text-left">NEW BUSINESS</p>
              <p className="text-[19px] pl-7 text-left">to have a productive, substantive</p>
              <p className="text-[19px] pl-7 text-left" >discussion, we ask that you fill out</p>
              <p className="text-[19px] pl-7 text-left">our project inquiry form. Please note</p>
              <p className="text-[19px] pl-7 text-left">that we typically book projects 2-3</p>
              <p className="text-[19px] pl-7 text-left">months in advance.</p>
              <p style={{ color: 'rgb(217, 179, 85)' }} className="text-sm pl-7 text-left">hello@uzexly.com</p>
            </div>

            <div>
              <p style={{ color: 'rgb(217,179,85)' }} className="text-2xl py-2 italic text-left">GENERAL INQUIRIES</p>
              <p className="text-[19px] text-left">Not looking to partner, but still want</p>
              <p className="text-[19px] text-left">to get in touch? We'd love to hear</p>
              <p className="text-[19px] text-left">from you - drop us a line at</p>
              <p style={{ color: 'rgb(217, 179, 85)' }} className="text-sm text-left">hello@uzexly.com</p>
            </div>

            <div>
              <p style={{ color: 'rgb(217,179,85)' }} className="text-2xl py-2 italic text-left">CONSTRUCT</p>
              <p className="text-[19px] text-left">We help you translate any kind of</p>
              <p className="text-[19px] text-left">idea into pixel perfect, adaptable</p>
              <p className="text-[19px] text-left">and scalable digital products for</p>
              <p className="text-[19px] text-left">businesses.</p>
              <p style={{ color: 'rgb(217, 179, 85)' }} className="text-sm text-left">hello@uzexly.com</p>
            </div>
          </div>







        </div>

        <h1 className="text-orange-400 text-[19px] pt-20 text-center">HEAR EVERYTHING FROM US</h1>
        <p className="pt-20 text-4xl py-2 text-center text-white">NEWSLETTER SIGN UP</p>
        <p className="text-[19px] pt-1 py-2 text-center" style={{ color: 'rgb(217, 179, 85)' }}>
          Join our mailing list to receive the latest insights, how-to articles, industry news, and more.
        </p>

        {/* Text Boxes for Name Input */}
        <div className="pl-0 space-x-4 pt-8 flex justify-center">
          <InputField value={firstName} onChange={setFirstName} placeholder="First Name" />
          <InputField value={middleName} onChange={setMiddleName} placeholder="Middle Name" />
          <InputField value={lastName} onChange={setLastName} placeholder="Last Name" />
          <JoinButton />
        </div>

        <h1 className="text-orange-400 text-[19px] flex justify-center pt-20">WE ARE AVAILABLE SOCIAL</h1>
        <div className="flex justify-between flex-row pl-9 pr-10 pt-16">
          <p style={{ color: 'rgb(217, 179, 85)' }} className="text-[56px] pl-4">LinkedIn</p>
          <p style={{ color: 'rgb(217, 179, 85)' }} className="text-[56px] pl-0 pr-0">/</p>
          <p style={{ color: 'rgb(217, 179, 85)' }} className="text-[56px]">Instagram</p>
          <p style={{ color: 'rgb(217, 179, 85)' }} className="text-[56px]">/</p>
          <p style={{ color: 'rgb(217, 179, 85)' }} className="text-[56px]">Facebook</p>
          <p style={{ color: 'rgb(217, 179, 85)' }} className="text-[56px]">/</p>
          <p style={{ color: 'rgb(217, 179, 85)' }} className="text-[56px]">Dribble</p>
          <p style={{ color: 'rgb(217, 179, 85)' }} className="text-[56px]">/</p>
          <p style={{ color: 'rgb(217, 179, 85)' }} className="text-[56px]">X</p>


        </div>
      </main>

      <footer className="flex justify-between items-center py-7 px-11 pb-0" style={{ backgroundColor: 'rgb(82, 82, 82)' }}>
        <div className="flex items-center">
          <p className="text-3xl font-poppins pl-0 pb-0" style={{ color: 'rgb(217, 179, 85)' }}>UZEXLY</p>
          <p style={{ color: 'rgb(217, 179, 85)' }} className="pl-8 text-3xl">उझेक्सली</p>
        </div>

        <nav className="flex items-center space-x-8">
          <div className="flex flex-col items-start">
            <ul className="list-none text-right" style={{ color: 'rgb(217, 179, 85)' }}>
              <li>WORK</li>
              <li>COMPANY</li>
              <li>CAPABILITIES</li>
              <li>CONTACT</li>
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <ul className="list-none text-right" style={{ color: 'rgb(217, 179, 85)' }}>
              <li>FAQS</li>
              <li>PRIVACY POLICIES</li>
              <li>TERMS OF USE</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <ul className="list-none" style={{ color: 'rgb(217, 179, 85)' }}>
              <li>hello@uzexly.com</li>
              <li>+91 9167953663</li>
            </ul>
          </div>
        </nav>
      </footer>
      <div style={{ background: 'rgb(82,82,82)' }}>

        <p className='pl-11 text-white text-left'>A company crafting meaningful </p>
        <p className='pl-11 text-white text-left'>experiences through Research. Design </p>
        <p className='pl-11  text-white text-left'>and Development.</p>
        <p className='pl-11 pt-5  text-white text-left'>© 2024 Uzexly</p>


      </div>

    </div>
  );
}

const ContactSection = ({ title, children }) => (
  <div>
    <p className="text-2xl py-2 pl-7 italic" style={{ color: 'rgb(217,179,85)' }}>{title}</p>
    {children}
  </div>
);

const InputField = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{
      width: placeholder === "Last Name" ? '39%' : '23%',
      backgroundColor: 'rgb(217,179,85)',
      color: 'black',
    }}
    className="p-7"
  />
);

const JoinButton = () => (
  <button
    style={{
      marginLeft: '10px',
      padding: '10px 15px',
      backgroundColor: 'rgb(82,82,82)',
      color: 'rgb(217,179,85)',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '20px'
    }}
  >
    JOIN
  </button>
);

export default App;
