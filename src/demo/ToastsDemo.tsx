import React from 'react';

import { useCustomToast } from '../components';

const Toasts = () => {
  const toast = useCustomToast();

  const handleCreateSuccessToast = () => {
    toast.addToast({
      title: 'This is a success toast title demo',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: 'success',
    })
  }

  const handleCreateErrorToast = () => {
    toast.addToast({
      title: 'This is an error toast title demo with a long description',
      description: 'This is a short error toast description',
      type: 'error',
    })
  }

  const handleCreateWarningToast = () => {
    toast.addToast({
      title: 'Warning',
      description: 'Something went wrong',
      type: 'info',
    })
  }

  return (
    <div>
      <h1>Toasts demo</h1>
      
      <button onClick={handleCreateSuccessToast}>
        Show success toast
      </button>
      
      <button onClick={handleCreateErrorToast}>
        Show error toast
      </button>
      
      <button onClick={handleCreateWarningToast}>
        Show info toast
      </button>
    </div>
  );
};

export default Toasts;
