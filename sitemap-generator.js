/**
 * Fetches data from the server including static routes, category URLs, and product URLs.
 * @returns {Promise<Array<Object>>} The array of routes including static routes, category URLs, and product URLs.
 */
async function fetchDataFromServer() {
    // Static routes
    const staticRoutes = [
        { url: "https://www.urrnz.com/", lastModified: new Date().toISOString(), changeFreq: "daily" },
        { url: "https://www.urrnz.com/cart", lastModified: new Date().toISOString(), changeFreq: "daily" },
        { url: "https://www.urrnz.com/checkout", lastModified: new Date().toISOString(), changeFreq: "daily" },
        { url: "https://www.urrnz.com/contact", lastModified: new Date().toISOString(), changeFreq: "daily" },
        { url: "https://www.urrnz.com/genres", lastModified: new Date().toISOString(), changeFreq: "daily" },
        { url: "https://www.urrnz.com/landing-page", lastModified: new Date().toISOString(), changeFreq: "daily" },
    ];

    const categoryUrls = await getCategoriesUrls();
    const productUrls = await getProductUrls();

    const routes = [...staticRoutes, ...categoryUrls, ...productUrls];
    return routes;
};

/**
 * Fetches category URLs from the server.
 * @returns {Promise<Array<Object>>} The array of category URLs.
 */
async function getCategoriesUrls() {
    const fetchedCategories = await fetch("https://zzzap.io/Collections/dataFind?search=category&PublicAuthCd=bfe18ab97f8a3a01d68a5a904719880f4cc9eb7a11ff6f09a433dd45145ec3b3&limit=100");
    const rawData = await fetchedCategories.text();
    let parsedCategories;

    try {
        parsedCategories = JSON.parse(rawData);
    } catch (error) {
        console.error("Error parsing JSON data:", error);
        return [];
    }

    if (!Array.isArray(parsedCategories.response)) {
        console.error("Data from the server is not in the expected format.");
        return [];
    }

    const categories = parsedCategories.response;
    const categoryUrls = categories.map((category) => ({
        url: `https://www.urrnz.com/products/${category.name}`,
        lastModified: new Date().toISOString(),
        changeFreq: "daily",
    }));

    // Add the "All" category URL
    categoryUrls.unshift({
        url: "https://www.urrnz.com/All",
        lastModified: new Date().toISOString(),
        changeFreq: "daily"
    });

    return categoryUrls;
};

/**
 * Fetches product URLs from the server.
 * @returns {Promise<Array<Object>>} The array of product URLs.
 */
async function getProductUrls() {
    const fetchedProducts = await fetch("https://zzzap.io/Frontend/googleProductFeedOutput?requestApiAs=urrnz.com");
    const rawData = await fetchedProducts.text();
    let parsedProducts;

    try {
        parsedProducts = JSON.parse(rawData);
    } catch (error) {
        console.error("Error parsing JSON data:", error);
        return [];
    }

    if (!Array.isArray(parsedProducts.response)) {
        console.error("Data from the server is not in the expected format.");
        return [];
    }

    const products = parsedProducts.response;
    const productUrls = products.map((product) => ({
        url: `${product.link}`,
        lastModified: new Date().toISOString(),
        changeFreq: "daily",
    }));

    return productUrls;
};

/**
 * Builds the sitemap XML string based on the provided data.
 * @param {Array<Object>} data - The array of route objects.
 * @returns {string} The sitemap XML string.
 */
function buildSitemap(data) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${data.map(
        ({ url, lastModified, changeFreq }) => `<url>
    <loc>${url}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changeFreq}</changefreq>
  </url>`
    )
            .join("\n")}
</urlset>`;

    return xml;
}

/**
 * Generates the sitemap by fetching data from the server and writing the sitemap XML file.
 * @returns {Promise<void>}
 */
async function generateSitemap() {
    const data = await fetchDataFromServer();
    const sitemapXml = buildSitemap(data);

    fs.writeFileSync("public/sitemap.xml", sitemapXml, "utf-8");
}

generateSitemap();
