import React, { CSSProperties, Children, ReactElement, cloneElement, isValidElement } from "react";

interface Props {
  children: React.ReactNode;
  degrees: number;
  style?: CSSProperties;
}

export const Rotate = ({ children, degrees, style }: Props) => {
  let translate: string = "";
  if (style?.transform)
    translate = style?.transform;

  return (
    <>
      {
        Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return cloneElement(child as ReactElement<any>, {
              key: index,
              style: {
                ...child.props.style,
                transform: `${translate}rotate(${degrees}deg)`,
              }
            });
          } else {
            return child;
          }
        })
      }
    </>
  )
}