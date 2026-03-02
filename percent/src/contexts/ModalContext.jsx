import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [showExportModal, setShowExportModal] = useState(false);

  const openExportModal = () => setShowExportModal(true);
  const closeExportModal = () => setShowExportModal(false);

  return (
    <ModalContext.Provider value={{ showExportModal, openExportModal, closeExportModal }}>
      {children}
    </ModalContext.Provider>
  );
};
