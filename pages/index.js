import PropTypes from 'prop-types';
// @mui
import { Box, Container } from '@mui/material';
// utils
import { getAllPosts } from '../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../src/hooks';
// _data
import { _testimonials } from '../_data/mock';
// layouts
import Layout from '../src/layouts';
// components
import { Page, ErrorScreen } from '../src/components';
// sections
import { NewsletterTravel } from '../src/sections/newsletter';
import { TestimonialsTravel } from '../src/sections/testimonials';
import { BlogTravelLandingLatestPosts } from '../src/sections/blog';
import {
  TravelLandingHero,
  TravelLandingSummary,
  TravelTourBarFilters,
  TravelLandingIntroduce,
  TravelLandingToursByCity,
  TravelLandingTourFeatured,
  TravelLandingFavoriteDestinations,
} from '../src/sections/@travel';

// ----------------------------------------------------------------------

TravelLandingPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function TravelLandingPage({ posts }) {
  const { data: tours = [], error } = useRequest({
    url: `/api/travel/tours`,
  });

  return (
    <Page title="Bunty Hair Stodio">
      <Box sx={{ position: 'relative' }}>
        <TravelLandingHero tours={tours.slice(0, 5)} />
      </Box>
      <TravelLandingIntroduce />

      <TravelLandingSummary />

      <TravelLandingFavoriteDestinations tours={tours.slice(0, 4)} />

      <TravelLandingTourFeatured tours={tours.slice(0, 4)} />

      <TravelLandingToursByCity tours={tours.slice(0, 8)} />

      <BlogTravelLandingLatestPosts posts={posts.slice(0, 4)} />

      <TestimonialsTravel testimonials={_testimonials} />

      <NewsletterTravel />
    </Page>
  );
}

// ----------------------------------------------------------------------

TravelLandingPage.getLayout = function getLayout(page) {
  return <Layout transparentHeader simpleFooter={true}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
