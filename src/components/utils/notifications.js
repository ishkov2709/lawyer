import { toast } from 'react-toastify';

export const notifySuccess = () => {
  toast.success(
    'Дякуємо за Ваше звернення. Незабаром ми передзвонимо за вказаним номером',
    {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    }
  );
};

export const notifyError = () => {
  toast.error(
    'На жаль форма не була відправлена, будь ласка спробуйте ще раз',
    {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    }
  );
};
