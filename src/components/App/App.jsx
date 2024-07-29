import React, {useState, useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';

import MainPage from '../MainPage/MainPage';
import AgeVerificationPopup from '../AgeVerificationPopup/AgeVerificationPopup';
import AdultNotification from '../AdultNotification/AdultNotification';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import UslugiPage from '../UslugiPage/UslugiPage';

const App = () => {
  const [ageVerified, setAgeVerified] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified');
    if (verified === 'true') {
      setAgeVerified(true);
      setIsPopupVisible(false);
    } else {
      setAgeVerified(false);
      setIsPopupVisible(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('ageVerified', 'true');
    setAgeVerified(true);
    setIsPopupVisible(false);
    navigate('/');
  };

  const handleReject = () => {
    localStorage.setItem('ageVerified', 'false');
    setAgeVerified(false);
    setIsPopupVisible(false);
    navigate('/adult-notification');
  };

  return (
    <>
      {isPopupVisible && <AgeVerificationPopup onConfirm={handleConfirm} onReject={handleReject} isPopupVisible= {isPopupVisible} />}
      <Routes>
        <Route path='/' element={<ProtectedRoute element={MainPage} ageVerified={ageVerified} />} />
        <Route path='/uslugi' element={<ProtectedRoute element={UslugiPage} ageVerified={ageVerified} />} />
        <Route path='/adult-notification' element={<AdultNotification isPopupVisible={isPopupVisible} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
