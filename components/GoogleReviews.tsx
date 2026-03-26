import GoogleReviewsClient, { type GoogleReview } from './GoogleReviewsClient';

type PlacesAPIResponse = {
  result?: {
    name?: string;
    rating?: number;
    user_ratings_total?: number;
    reviews?: Array<{
      author_name: string;
      rating: number;
      text: string;
      relative_time_description: string;
      profile_photo_url?: string;
    }>;
  };
  status?: string;
};

async function fetchGoogleReviews(): Promise<{
  reviews: GoogleReview[];
  rating?: number;
  totalRatings?: number;
}> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return { reviews: [] };
  }

  try {
    const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
    url.searchParams.set('place_id', placeId);
    url.searchParams.set('fields', 'name,rating,reviews,user_ratings_total');
    url.searchParams.set('language', 'tr');
    url.searchParams.set('reviews_sort', 'newest');
    url.searchParams.set('key', apiKey);

    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return { reviews: [] };

    const data: PlacesAPIResponse = await res.json();

    if (data.status !== 'OK' || !data.result) return { reviews: [] };

    const reviews: GoogleReview[] = (data.result.reviews ?? [])
      .filter((r) => r.text && r.text.trim().length > 10)
      .map((r) => ({
        author_name: r.author_name,
        rating: r.rating,
        text: r.text,
        relative_time_description: r.relative_time_description,
        profile_photo_url: r.profile_photo_url,
      }));

    return {
      reviews,
      rating: data.result.rating,
      totalRatings: data.result.user_ratings_total,
    };
  } catch {
    return { reviews: [] };
  }
}

export default async function GoogleReviews() {
  const { reviews, rating, totalRatings } = await fetchGoogleReviews();

  return (
    <GoogleReviewsClient
      reviews={reviews}
      placeRating={rating ?? 0}
      totalRatings={totalRatings ?? 0}
    />
  );
}
