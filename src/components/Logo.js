import PropTypes from 'prop-types';
import { memo } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Image from 'next/image';

// ----------------------------------------------------------------------

Logo.propTypes = {
  isSimple: PropTypes.bool,
  onDark: PropTypes.bool,
  sx: PropTypes.object,
};

function Logo({ onDark = false, isSimple = false, sx }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const PRIMARY_MAIN = theme.palette.primary.main;
  const LIGHT_COLOR = theme.palette.common.white;
  const DARK_COLOR = theme.palette.grey[800];

  return (
    <NextLink href="/" passHref>
      <Box
        sx={{
          width: isSimple ? 64 : 75,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        <Image src="/logo.svg" width="100%" height="100%"/>
      </Box>
    </NextLink>
  );
}

export default memo(Logo);
