import React, { FC } from "react";
import reactDom from "react-dom";

interface Props {
  children: React.ReactNode;
}

export const ModalPortal: FC<Props> = ({ children }) => {
  const ModalPortal = document.createElement("div");
  ModalPortal.setAttribute("id", "modal-root");
  document.body.appendChild(ModalPortal);

  return reactDom.createPortal(children, ModalPortal);
};
