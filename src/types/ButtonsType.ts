import React from "react";

export interface FloatingButtonActionType {
  press: () => void,
  text: string,
  right?: boolean,
  left?: boolean,
  bottom?: boolean,
  top?: boolean
}