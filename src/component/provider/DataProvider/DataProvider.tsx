import {initMockDb} from 'const';
import React from 'react';

const mockDb = initMockDb();
const DataContext = React.createContext(mockDb);

export const DataProvider: React.FC = ({children}) => {
  return (
    <DataContext.Provider value={{...mockDb}}>{children}</DataContext.Provider>
  );
};

export const useData = () => {
  if (!DataContext) {
    throw Error(
      '[DataProviderError] useData hook called from outside of DataProvider -- couldnt access DataContext',
    );
  }
  const val = React.useContext(DataContext);
  if (!val) {
    throw Error(
      '[DataProviderError] useData hook called from outside of DataProvider -- couldnt access DataContext',
    );
  }
  return val;
};
