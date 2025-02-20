import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Text } from "react-native";
import { useColorScheme } from "@/lib/useColorScheme";
import { cn } from "@/lib/utils";

// Definindo variantes para tipografia usando CVA
const typography = cva("light:text-zinc-800 dark:text-zinc-50", {
  variants: {
    variant: {
      h1: ["text-6xl", "font-bold"],
      h2: ["text-5xl", "font-bold"],
      h3: ["text-4xl", "font-bold"],
      h4: ["text-3xl", "font-semibold"],
      h5: ["text-2xl", "font-semibold"],
      h6: ["text-xl", "font-semibold"],
      p: ["text-base", "font-normal"],
    },
    weight: {
      normal: ["font-normal"],
      bold: ["font-bold"],
      semibold: ["font-semibold"],
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

// Definindo os tipos de propriedades para o componente Typography
export interface TypographyProps
  extends React.PropsWithChildren,
    VariantProps<typeof typography> {
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  className,
  variant,
  weight,
  children,
  ...props
}) => {
  const classes = typography({ variant, weight });

  return (
    <Text className={cn(classes, className)} {...props}>
      {children}
    </Text>
  );
};

export default Typography;

export const Heading: React.FC<TypographyProps> = (props) => {
  return <Typography variant="h1" {...props} />;
};

export const Paragraph: React.FC<TypographyProps> = (props) => {
  return <Typography {...props} />;
};
