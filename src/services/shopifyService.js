// src/services/shopifyService.js

const SHOPIFY_STORE_URL = 'artklim.myshopify.com';
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = 'c13016b3ad1df51dadf59acfcb392682';


export const fetchProducts = async () => {
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            description
            images(first: 1) {
              edges {
                node {
                  src
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  price
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch(`https://${SHOPIFY_STORE_URL}/api/2023-01/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();

  // Log the response data to inspect its structure
  console.log('Shopify API Response:', data);

  if (data.errors) {
    console.error('Shopify API Errors:', data.errors);
    throw new Error('Failed to fetch products from Shopify');
  }

  if (!data || !data.data || !data.data.products) {
    throw new Error('Invalid data structure');
  }

  return data.data.products.edges.map(({ node }) => ({
    id: node.id,
    name: node.title,
    description: node.description,
    image: node.images.edges[0]?.node.src,
    price: node.variants.edges[0]?.node.price,
  }));
};
