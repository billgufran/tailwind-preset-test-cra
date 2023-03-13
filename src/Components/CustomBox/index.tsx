import { Box, useTheme } from "@brikl/design-storefront";

function CustomBox({ children }: any) {
  const themeContext = useTheme();

  console.log({ themeContext });

  return <Box className="bg-global-brand-color-500 w-20 h-20">{children}</Box>;
}

export default CustomBox;
