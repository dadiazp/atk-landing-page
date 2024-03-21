import { FC, ReactNode } from "react";

export enum TextSizeEnum {
  "display-large" = "display-large",
  "display-medium" = "display-medium",
  "display-small" = "display-small",
  "headline-large" = "headline-large",
  "headline-medium" = "headline-medium",
  "headline-small" = "headline-small",
}

export type TextSizeType = keyof typeof TextSizeEnum;

export enum TextColorEnum {
  "text-primary-900" = "text-primary-900",
  "text-primary-200" = "text-primary-200",
  "text-primary-700" = "text-primary-700",
  "text-primary-paper" = "text-primary-paper",
  "text-tertiary-main" = "text-tertiary-main",
  "text-tertiary-footer" = "text-tertiary-footer",
}

export type TextColorType = keyof typeof TextColorEnum;

export enum TextWeightEnum {
  "font-thin" = "font-thin",
  "font-extralight" = "font-extralight",
  "font-light" = "font-light",
  "font-normal" = "font-normal",
  "font-medium" = "font-medium",
  "font-semibold" = "font-semibold",
  "font-bold" = "font-bold",
  "font-extrabold" = "font-extrabold",
  "font-black" = "font-black",
}

export type TextWeightType = keyof typeof TextWeightEnum;

interface TextStyles {
  fontSize: Record<TextSizeEnum, string>;
  fontWeight: Record<TextWeightEnum, string>;
  color: Record<TextColorEnum, string>;
}

const textStyles: TextStyles = {
  fontSize: {
    [TextSizeEnum["display-large"]]: "text-7xl",
    [TextSizeEnum["display-medium"]]: "text-5xl",
    [TextSizeEnum["display-small"]]: "text-4xl",
    [TextSizeEnum["headline-large"]]: "text-xl",
    [TextSizeEnum["headline-medium"]]: "text-base",
    [TextSizeEnum["headline-small"]]: "text-sm",
  },
  fontWeight: {
    [TextWeightEnum["font-thin"]]: "font-thin",
    [TextWeightEnum["font-extralight"]]: "font-extralight",
    [TextWeightEnum["font-light"]]: "font-light",
    [TextWeightEnum["font-normal"]]: "font-normal",
    [TextWeightEnum["font-medium"]]: "font-medium",
    [TextWeightEnum["font-semibold"]]: "font-semibold",
    [TextWeightEnum["font-bold"]]: "font-bold",
    [TextWeightEnum["font-extrabold"]]: "font-extrabold",
    [TextWeightEnum["font-black"]]: "font-black",
  },
  color: {
    [TextColorEnum["text-primary-900"]]: "text-primary-900",
    [TextColorEnum["text-primary-200"]]: "text-primary-200",
    [TextColorEnum["text-primary-700"]]: "text-primary-700",
    [TextColorEnum["text-primary-paper"]]: "text-primary-paper",
    [TextColorEnum["text-tertiary-main"]]: "text-tertiary-main",
    [TextColorEnum["text-tertiary-footer"]]: "text-tertiary-footer",
  },
};

export enum TextComponentEnum {
  "h1" = "h1",
  "h2" = "h2",
  "h3" = "h3",
  "h4" = "h4",
  "h5" = "h5",
  "h6" = "h6",
  "p" = "p",
  "span" = "span",
}

type TextComponentType = keyof typeof TextComponentEnum;

interface TextProps {
  children: ReactNode;
  Component?: TextComponentType;
  fontSizeVariant?: TextSizeType;
  fontWeightVariant?: TextWeightType;
  colorVariant?: TextColorType;
  className?: string;
}
const Text: FC<TextProps> = ({
  children,
  Component = TextComponentEnum["p"],
  fontSizeVariant = TextSizeEnum["headline-medium"],
  fontWeightVariant = TextWeightEnum["font-semibold"],
  colorVariant = TextColorEnum["text-tertiary-main"],
  className,
}) => {
  let classNameString: string = `${textStyles.fontSize[fontSizeVariant]} ${
    textStyles.color[colorVariant]
  } ${fontWeightVariant} ${className ? className : ""}`;
  return <Component className={classNameString}>{children}</Component>;
};

export default Text;
