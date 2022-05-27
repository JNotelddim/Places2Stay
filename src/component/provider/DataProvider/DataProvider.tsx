import {initMockDb} from 'utils';
import React from 'react';

const mockDb = initMockDb();
const DataContext = React.createContext(mockDb);

export const DataProvider: React.FC = ({children}) => {
  return (
    <DataContext.Provider value={{...mockDb}}>{children}</DataContext.Provider>
  );
};

export const useMockDb = () => {
  const context = React.useContext(DataContext);
  if (!context) {
    throw Error(
      '[DataProviderError] useMockDb hook called from outside of DataProvider -- couldnt access DataContext',
    );
  }
  return context;
};
