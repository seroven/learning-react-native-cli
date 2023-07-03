import React from "react";

export interface FloatingButtonActionType {
  setCounter: React.Dispatch<React.SetStateAction<number>>,
  text: string,
  right?: boolean,
  left?: boolean,
  bottom?: boolean,
  top?: boolean
}