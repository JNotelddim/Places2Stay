import {initMockDb} from 'const';
import React from 'react';

const mockDb = initMockDb();
const DataContext = React.createContext(mockDb);

export const DataProvider: React.FC = ({children}) => {
  return (
    <DataContext.Provider value={{...mockDb}}>{children}</DataContext.Provider>
  );
};

export const useMockDb = () => {
  if (!DataContext) {
    throw Error(
      '[DataProviderError] useMockDb hook called from outside of DataProvider -- couldnt access DataContext',
    );
  }
  const val = React.useContext(DataContext);
  if (!val) {
    throw Error(
      '[DataProviderError] useMockDb hook called from outside of DataProvider -- couldnt access DataContext',
    );
  }
  return val;
};
