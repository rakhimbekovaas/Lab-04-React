import { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Валидация
    let hasError = false;
    
    if (!name) {
      setNameError('Name is required');
      hasError = true;
    } else if (name.length < 2) {
      setNameError('Name must be at least 2 characters');
      hasError = true;
    } else {
      setNameError('');
    }
    
    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    } else if (!email.includes('@')) {
      setEmailError('Invalid email format');
      hasError = true;
    } else {
      setEmailError('');
    }
    
    if (!age) {
      setAgeError('Age is required');
      hasError = true;
    } else if (Number(age) < 18) {
      setAgeError('Age must be 18 or older');
      hasError = true;
    } else {
      setAgeError('');
    }
    
    if (hasError) return;
    
    // Успешная отправка
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setName('');
      setEmail('');
      setAge('');
    }, 2000);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
          {nameError && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{nameError}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
          {emailError && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{emailError}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
          {ageError && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{ageError}</p>}
        </div>

        <button 
          type="submit"
          style={{ 
            backgroundColor: '#007bff', 
            color: 'white', 
            padding: '10px 20px', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          Submit
        </button>
      </form>

      {success && (
        <div style={{ 
          color: 'green', 
          marginTop: '15px', 
          padding: '10px', 
          backgroundColor: '#d4edda',
          borderRadius: '5px',
          textAlign: 'center'
        }}>
          ✅ Registration successful!
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
