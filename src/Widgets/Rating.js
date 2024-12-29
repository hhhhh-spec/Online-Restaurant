import React from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Rating = ({ score }) => {
  // 计算完整星星、半星和空星的数量
  const fullStars = Math.floor(score);
  const halfStar = score % 1 > 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <Box display="flex" alignItems="center">
      {/* 渲染完整星星 */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <Icon key={`full-${index}`} as={StarIcon} color="yellow.400" />
        ))}
      {/* 渲染半星 */}
      {halfStar === 1 && (
        <Icon as={StarIcon} color="yellow.400" boxSize={5} viewBox="0 0 200 200">
          <path d="M100 156.4l-58.3 31.3 11.2-65.5-47.7-46.5 65.7-9.6L100 12.7l29.1 58.9 65.7 9.6-47.7 46.5 11.2 65.5z" fill="yellow.400" />
          <path d="M100 12.7L70.9 101l-65.7 9.6 47.7 46.5-11.2 65.5L100 156.4l58.3 31.3-11.2-65.5 47.7-46.5-65.7-9.6L100 12.7z" fill="yellow.200" />
        </Icon>
      )}
      {/* 渲染空星 */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <Icon key={`empty-${index}`} as={StarIcon} color="gray.300" />
        ))}
    </Box>
  );
};

export default Rating;
