// src/pages/HomePage.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation('home');
  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-3xl font-bold">{t('welcome')}</h2>
      <p>Your dream home awaits.</p>
    </div>
  );
};

export default HomePage;
