import classNames from "classnames";
import { useEffect, useState, memo } from "react";
import ReactModal from "react-modal";

import "./Modal.scss";

ReactModal.setAppElement("#root");

export type Props = {
  className?: string;
  isOpen: boolean;
  children?: any;
  contentLabel: string;
  onClose(): void;
  type?: "confirm";
  withClose?: boolean;
};

type ContentProps = {
  children?: any;
  withClose?: boolean;
  isOpen: boolean;
  onClose(): void;
};

const ModalContent = ({
  children,
  withClose,
  isOpen,
  onClose,
}: ContentProps) => (
  <div className="popup-content">
    {withClose !== false && (
      <button type="button" className="close" onClick={onClose}>
        Close
      </button>
    )}
    {children}
  </div>
);

const ModalContentMemoized = memo(ModalContent, (prev) => !prev.isOpen);

const Modal = ({
  className,
  onClose,
  type,
  children,
  withClose,
  ...otherProps
}: Props) => {
  const [isOpen, setIsOpen] = useState(otherProps.isOpen);

  useEffect(() => {
    setTimeout(() => setIsOpen(otherProps.isOpen), 300);
  }, [otherProps.isOpen]);

  const someIsOpen = otherProps.isOpen || isOpen;

  return (
    <ReactModal
      bodyOpenClassName="popup-open"
      style={{
        overlay: {
          width: "100%",
          height: "100%",
          overflow: "auto",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          padding: "0",
          flexDirection: "column",
        },
      }}
      portalClassName={classNames("popup", className, type, {
        hidden: !otherProps.isOpen,
        transition: isOpen !== otherProps.isOpen,
      })}
      className={{
        base: "popup-container",
        afterOpen: " ",
        beforeClose: " ",
      }}
      overlayClassName={{
        base: " ",
        afterOpen: " ",
        beforeClose: " ",
      }}
      onRequestClose={onClose}
      {...otherProps}
      isOpen={someIsOpen}
    >
      <ModalContentMemoized
        isOpen={isOpen}
        onClose={onClose}
        withClose={withClose}
      >
        {children}
      </ModalContentMemoized>
    </ReactModal>
  );
};

export default Modal;
