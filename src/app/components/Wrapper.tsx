import { ReactNode } from 'react';

type WrapperProps = {
  children: ReactNode;
  className: string;
};

function Wrapper({ className, children }: WrapperProps) {
  return <div className={className}>{children}</div>;
}

export default Wrapper;
