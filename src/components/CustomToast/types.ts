export type ID = number;
export type IType = 'success' | 'error' | 'info';
export type ICustomIcon = JSX.Element;

export interface IToastProvider {
  children: React.ReactNode;
}

export interface IToasts {
  title: string;
  description: string;
  type: IType;
  customIcon?: ICustomIcon;
}

export interface IToastWhithID extends IToasts {
  id: ID;
}

export interface IToastContext {
  addToast: (args: IToasts) => void;
  removeToast: (id: ID) => void;
}
