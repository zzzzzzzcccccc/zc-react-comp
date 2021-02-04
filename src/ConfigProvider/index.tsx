import React, { FC, createContext } from 'react';
import { ILocal } from '../Local';

export interface IConfigContext {
  local?: ILocal;
}

export interface ConfigProviderProps {
  local?: ILocal;
}

export const ConfigContext = createContext<IConfigContext>(undefined);

const ConfigProvider: FC<ConfigProviderProps> = ({
  local = undefined,
  children,
}) => {
  const context = {
    local,
  };
  return (
    <ConfigContext.Provider value={context}>{children}</ConfigContext.Provider>
  );
};

export default ConfigProvider;
