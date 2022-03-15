import React, { FC } from "react";
import reactDom from "react-dom";

interface Props {
  children: React.ReactNode;
}

const modalPortal = document.createElement("div");
modalPortal.setAttribute("id", "modal-root");
document.body.appendChild(modalPortal);

export const ModalPortal: FC<Props> = ({ children }) => {
  return reactDom.createPortal(children, modalPortal);
};
