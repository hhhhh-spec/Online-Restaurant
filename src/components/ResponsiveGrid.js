import { Box, Grid } from "@chakra-ui/react";

export default function ResponsiveGrid({
  children,
  baseColumns = 4,
  mdColumns = 8,
  lgColumns = 12,
  gap = 4,
  padding = 4,
  bgColor = "transparent", // 默认背景色
}) {
  return (
    <Grid
      templateColumns={{
        base: `repeat(${baseColumns}, 1fr)`,
        md: `repeat(${mdColumns}, 1fr)`,
        lg: `repeat(${lgColumns}, 1fr)`,
      }}
      gap={gap}
      padding={padding}
      bg={bgColor} // 设置背景色
    >
      <Box
        gridColumn={{
          base: "span 4",
          md: "2 / span 6",
          lg: "3 / span 8",
        }}
      >
        {children}
      </Box>
    </Grid>
  );
}
