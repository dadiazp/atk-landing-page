import { FC, ReactNode } from "react";

interface SvgIconIntegrationContainerProps {
  children: ReactNode;
}

const SvgIconIntegrationContainer: FC<SvgIconIntegrationContainerProps> = ({
  children,
}) => {
  return <div className="flex justify-center mb-4">{children}</div>;
};

export default SvgIconIntegrationContainer;
