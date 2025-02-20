import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import { cn } from "@/lib/utils";

// Variantes para o botão
const button = cva("rounded-full w-full p-4", {
  variants: {
    variant: {
      primary: ["bg-primary", "border-transparent"],
      secondary: ["bg-transparent", "border border-2 border-primary"],
      danger: ["bg-red-500", "border-transparent"],
      ghost: ["bg-transparent", "border-transparent"],
    },
    size: {
      sm: [],
      base: [],
      lg: [],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

// Variantes para o texto dentro do botão
const text = cva("text-center font-bold", {
  variants: {
    size: {
      sm: ["text-sm"],
      base: ["text-lg"],
      lg: ["text-xl"],
    },
    variant: {
      primary: ["text-white"],
      secondary: ["text-primary"],
      danger: ["text-white"],
      ghost: ["text-black", "dark:text-white"],
    },
  },
  defaultVariants: {
    size: "base",
    variant: "primary",
  },
});

export interface ButtonProps
  extends TouchableOpacityProps,
    VariantProps<typeof button> {
  className?: string;
  textClassName?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  textClassName,
  variant,
  size,
  disabled,
  children,
  isLoading,
  ...props
}) => {
  return (
    <TouchableOpacity
      className={cn(button({ variant, size }), className)}
      disabled={disabled}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className={cn(text({ variant, size }), textClassName)}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
