import React, { createContext, useState, useCallback } from 'react';

import ToastComponent from './ToastComponent';

import { ToastPlaceContainer } from './styles';

import {
  ID,
  IToasts,
  IToastContext,
  IToastWhithID,
  IToastProvider,
} from './types';

export const CustomToastContext = createContext<IToastContext>({
  addToast: () => {},
  removeToast: () => {},
});

export const CustomToastProvider = ({ children }: IToastProvider) => {
  const [toasts, setToasts] = useState<IToastWhithID[]>([]);

  const addToast = useCallback(({
    type,
    title,
    customIcon,
    description,
  }: IToasts) => {
    setToasts((oldToasts) => [
      {
        id: oldToasts.length + 1,
        type,
        title,
        customIcon,
        description,
      },
      ...oldToasts,
    ]);
  },
  []);

  const removeToast = useCallback((id: ID) => {
    setToasts((oldToasts) => oldToasts.filter((toast) => toast.id !== id));
  },
  []);

  return (
    <CustomToastContext.Provider value={{ addToast, removeToast }}>
      <ToastPlaceContainer>
        {toasts.map((toast) => (
          <ToastComponent
            key={toast.id}
            id={toast.id}
            type={toast.type}
            title={toast.title}
            customIcon={toast.customIcon}
            description={toast.description}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </ToastPlaceContainer>

      {children}
    </CustomToastContext.Provider>
  );
};

export function useCustomToast() {
  const context = React.useContext(CustomToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
