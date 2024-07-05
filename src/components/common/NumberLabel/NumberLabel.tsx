import { IcNumberLabel } from "@svg"
import { HTMLAttributes, ReactNode } from "react"
import { containerStyle, iconStyle, textStyle } from "src/components/common/NumberLabel/NumberLabel.style";

export interface NumberLabelProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const NumberLabel = ({ children, ...props }: NumberLabelProps) => {
  return (
    <div css={containerStyle} {...props}>
        <IcNumberLabel css={iconStyle}/>
        <span css={textStyle}>
          {children}
        </span>
    </div>
  )
}

export default NumberLabel