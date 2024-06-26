import { CSSProperties, Children, ReactElement, cloneElement, isValidElement } from "react";

interface Props {
  children: React.ReactNode;
  x?: string,
  y?: string,
  style?: CSSProperties;
}

export const Translate = ({ children, x = "0", y = "0", style }: Props) => {
  let rotate: string = "";
  if (style?.transform)
    rotate = style?.transform;

  return (
    <>
      {
        Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return cloneElement(child as ReactElement<any>, {
              key: index,
              style: {
                ...child.props.style,
                transform: `translate(${x}, ${y}) ${rotate}`,
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