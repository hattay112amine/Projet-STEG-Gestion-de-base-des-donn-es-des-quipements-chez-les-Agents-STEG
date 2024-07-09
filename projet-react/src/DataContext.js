// DataContext.js

import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedResource, setSelectedResource] = useState(null);

  return (
    <DataContext.Provider value={{ selectedResource, setSelectedResource }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
