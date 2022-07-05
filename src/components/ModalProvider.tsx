import React, { createContext, useState } from "react";
import "../styles/modal.css";
type ModalProviderProps = {
  content: any;
  visible: boolean;
  showModal: (children: React.ReactNode) => void;
  hideModal: () => void;
};
const initialContext: ModalProviderProps = {
  visible: false,
  content: null,
  showModal: () => {},
  hideModal: () => {},
};

export const ModalContext = createContext<ModalProviderProps>(initialContext);

const ModalProvider = ({ children }: any) => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);
  const hideModal = () => {
    setVisible(false);
  };
  const doNothing = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const showModal = (children: React.ReactNode) => {
    setContent(children);
    setVisible(true);
  };
  return (
    <ModalContext.Provider value={{ visible, content, showModal, hideModal }}>
      <>
        <div
          className={`modal ${visible ? "visible" : ""}`}
          onClick={hideModal}
        >
          <div className="modal-content" onClick={doNothing}>
            {content}
          </div>
        </div>
        {children}
      </>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
