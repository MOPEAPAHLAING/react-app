import { ReactNode, PropsWithChildren } from "react";

type Props  = {
  onDismiss: () => void;
}


const Alert = ({children, onDismiss}: PropsWithChildren<Props>) => {

  return (
    <div className='alert alert-danger alert-dismissible fade show' role="alert">
      {children}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onDismiss}></button>
    </div>
  )
}

export default Alert
