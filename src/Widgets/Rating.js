import React from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Rating = ({ score }) => {
  // 计算完整星星、半星和空星的数量
  const fullStars = Math.floor(score);
  const halfStar = score % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <Box display="flex" alignItems="center">
      {/* 渲染完整星星 */}
      {Array(fullStars+halfStar)
        .fill(0)
        .map((_, index) => (
          <Icon key={`full-${index}`} as={StarIcon} color="#F4CE14" />
        ))}
      {/* 渲染空星 */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <Icon key={`empty-${index}`} as={StarIcon} color="#EDEFEE" />
        ))}
    </Box>
  );
};

export default Rating;
