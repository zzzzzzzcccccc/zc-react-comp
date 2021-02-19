import React, { FC } from 'react';
import { ILocal } from '../Local';
export interface IConfigContext {
    local?: ILocal;
}
export interface ConfigProviderProps {
    local?: ILocal;
}
export declare const ConfigContext: React.Context<IConfigContext>;
declare const ConfigProvider: FC<ConfigProviderProps>;
export default ConfigProvider;
