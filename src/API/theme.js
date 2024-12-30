import { extendTheme } from '@chakra-ui/react';

// 扩展 Chakra UI 默认主题
const theme = extendTheme({
  fonts: {
    heading: 'Markazi Text, serif', // 设置标题字体
    body: 'Karla, sans-serif',    // 设置正文字体
  },
});

export default theme;
