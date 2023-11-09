// TranslationExample.jsx

/* import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import translate from 'google-translate-api';


const Eng = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // Replace 'YOUR_API_KEY' with your actual Google Translate API key
    const apiKey = 'YOUR_API_KEY';
    
    try {
      // Fetch data from your API
      const response = await fetch('YOUR_API_ENDPOINT');
      const result = await response.json();

      // Translate data to Arabic
      const translatedData = await Promise.all(
        result.map(async (item) => {
          const translation = await translate(item.text, { to: 'ar', key: apiKey });
          return { ...item, text: translation.text };
        })
      );

      setData(translatedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on component mount

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ar')}>Arabic</button>

      <h1>{t('appTitle')}</h1>

      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Eng;*/
