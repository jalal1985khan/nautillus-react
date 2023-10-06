import axios from 'axios';

const baseUrl = 'https://beta.nautilusshipping.com/wp-json/wp/v2';

export const fetchPostsByCategory = async (categorySlug, page = 1, perPage = 10) => {
  try {
    const response = await axios.get(`https://beta.nautilusshipping.com/wp-json/wp/v2/posts?_embed&categories=${categorySlug}&per_page=${perPage}&page=${page}`, {
      params: {
        categories: categorySlug,
        per_page: perPage,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};