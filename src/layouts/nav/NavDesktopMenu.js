import PropTypes from 'prop-types';
import { useRef } from 'react';
import Slider from 'react-slick';
import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid, List, Link, Stack, ListItem, ListSubheader } from '@mui/material';
// config
import { HEADER_DESKTOP_HEIGHT } from '../../config';
//
import { Image, CarouselDots, CarouselArrows } from '../../components';
import { DialogAnimate, MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const SubLinkStyle = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => ({
  ...theme.typography.body3,
  padding: 0,
  width: 'auto',
  cursor: 'pointer',
  color: theme.palette.text.secondary,
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: theme.palette.text.primary,
  },
  ...(active && {
    ...theme.typography.subtitle3,
    color: theme.palette.text.primary,
  }),
}));

const IconBulletStyle = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => ({
  width: 12,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  '&:before': {
    content: '""',
    display: 'block',
    width: 4,
    height: 4,
    borderRadius: '50%',
    backgroundColor: theme.palette.text.disabled,
  },
  ...(active && {
    '&:before': {
      content: '""',
      width: 6,
      height: 6,
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      transition: theme.transitions.create('all', {
        duration: theme.transitions.duration.shortest,
      }),
    },
  }),
}));

const ListSubheaderStyled = styled((props) => (
  <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.h5,
  marginBottom: theme.spacing(2.5),
  color: theme.palette.text.primary,
}));

// ----------------------------------------------------------------------

NavDesktopMenu.propTypes = {
  isOpen: PropTypes.bool,
  isScrolling: PropTypes.bool,
  lists: PropTypes.array,
  onClose: PropTypes.func,
};

export default function NavDesktopMenu({ lists, isOpen, onClose, isScrolling }) {
  const router = useRouter();
  const theme = useTheme();

  const carouselRef = useRef(null);

  const carouselList = lists.filter((list) => list.subheader !== 'Common');
  const commonList = lists.filter((list) => list.subheader === 'Common')[0];

  const minList = lists.length > 5;

  const carouselSettings = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots(),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <>
    <DialogAnimate
      hideBackdrop
      maxWidth={false}
      open={isOpen}
      onClose={onClose}
      variants={
        varFade({
          distance: 80,
          durationIn: 0.16,
          durationOut: 0.24,
          easeIn: 'easeIn',
          easeOut: 'easeOut',
        }).inRight
      }
      PaperProps={{
        sx: {
          m: 0,
          position: 'absolute',
          borderRadius: '0 !important',
          top: isScrolling ? HEADER_DESKTOP_HEIGHT - 20 : HEADER_DESKTOP_HEIGHT,
          // Fix scroll on window
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        },
      }}
    >
      <Grid container columns={15} spacing={4}>
        <Grid item xs={12}>
          <Box sx={{ position: 'relative', px: 2, py: 6 }}>
            <Slider ref={carouselRef} {...carouselSettings}>
                  <List  disablePadding sx={{ px: 2 }} component={MotionContainer}>
                    <Stack spacing={1.5} alignItems="flex-start">
                        <LinkItem title="Hair Extention" href="/services/hair-extionls" />
                    </Stack>
                  </List>
            </Slider>
          </Box>
        </Grid>
      </Grid>
        {/* Common List */}
    </DialogAnimate>
    </>
  );
}

// ----------------------------------------------------------------------

LinkItem.propTypes = {
  active: PropTypes.bool,
  href: PropTypes.string,
  title: PropTypes.string,
};

function LinkItem({ title, href, active }) {
  return (
    <>
    {/* <NextLink  href="home" passHref>
      <Link
        color="inherit"
        underline="hover"
        component={m.a}
        variants={
          varFade({
            distance: 12,
            durationIn: 0.16,
            durationOut: 0.12,
            easeIn: 'easeIn',
          }).inRight
        }
      >
        <SubLinkStyle >
          <IconBulletStyle />
          Hello
        </SubLinkStyle>
      </Link>
    </NextLink> */}
    </>
  );
}
