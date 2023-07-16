//SCREEN SIZES
export const sizesArr = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
];

export const sizes = {
    xs: "375px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
};


//ITEM COLOR OPTION
export const colors = [
    "#B80000", "#DB3E00", "#FCCB00", "#008B02",
    "#006B76", "#1273DE", "#004DCF", "#5300EB",
    "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5",
    "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"
];

export const colorCodeToName = {
    "#B80000": "Red",
    "#DB3E00": "Orange",
    "#FCCB00": "Yellow",
    "#008B02": "Green",
    "#006B76": "Teal",
    "#1273DE": "Blue",
    "#004DCF": "Navy",
    "#5300EB": "Purple",
    "#EB9694": "Pink",
    "#FAD0C3": "Light Pink",
    "#FEF3BD": "Light Yellow",
    "#C1E1C5": "Light Green",
    "#BEDADC": "Light Blue",
    "#C4DEF6": "Light Sky Blue",
    "#BED3F3": "Light Slate Blue",
    "#D4C4FB": "Light Lavender",
};


//CATEGORY IMAGES 
export const CATEGORY_IMAGES = {
    "all": require("../assets/allProducts.jpg"),
    "Emojis": require("../assets/emoji.jpg"),
    "Services": require("../assets/services.jpg"),
    "Shapes": require("../assets/shapes.jpg"),
    "Test": require("../assets/allProducts.jpg"),
    // add more categories and their corresponding image URLs here ~ category image from server would be best!
};

//CHECKOUT STEPS 
export const STEPS = ["Shipping Details", "Payment Details", "Review"];


//END POINTS
export const FETCH_ALL_PRODUCTS = "https://zzzap.io/Collections/dataFind?search=product&PublicAuthCd=bfe18ab97f8a3a01d68a5a904719880f4cc9eb7a11ff6f09a433dd45145ec3b3&limit=100";
export const FETCH_CATEGORIES = "https://zzzap.io/Collections/dataFind?search=category&PublicAuthCd=bfe18ab97f8a3a01d68a5a904719880f4cc9eb7a11ff6f09a433dd45145ec3b3&limit=100";
export const FETCH_TAX = "https://zzzap.io/Process/orderTaxesOnly?requestApiAs=urrnz.com&PublicAuthCd=bfe18ab97f8a3a01d68a5a904719880f4cc9eb7a11ff6f09a433dd45145ec3b3";
export const FETCH_TEMPLATE_CHAT = "https://zzzap.io/Template/contact/extend?PublicAuthCd=bfe18ab97f8a3a01d68a5a904719880f4cc9eb7a11ff6f09a433dd45145ec3b3";
export const FETCH_TEMPLATE_ORDER = "https://zzzap.io/Template/order/extend?PublicAuthCd=bfe18ab97f8a3a01d68a5a904719880f4cc9eb7a11ff6f09a433dd45145ec3b3";
export const POST_MESSAGE = "https://zzzap.io/Process/chat?requestApiAs=urrnz.com&PublicAuthCd=bfe18ab97f8a3a01d68a5a904719880f4cc9eb7a11ff6f09a433dd45145ec3b3";
export const POST_ORDER = "https://zzzap.io/Process/order?requestApiAs=urrnz.com&PublicAuthCd=bfe18ab97f8a3a01d68a5a904719880f4cc9eb7a11ff6f09a433dd45145ec3b3";


//SITE IDENTITY
export const ABOUT_TEXT_P1 = "At Urrnz, we saw a need in the industry for custom urns that were truly unique and personalized to honor the memory of loved ones. That's why we created a 3D printing service that allows us to create custom urns on demand, using state-of-the-art technology to ensure the highest level of quality and customization.";
export const ABOUT_TEXT_P2 = "Our 3D printing process allows us to create urns in a variety of shapes, sizes, and colors, with intricate designs and personalized details that traditional manufacturing methods simply can't match. Whether you want to incorporate a favorite photo or symbol, or create a completely custom design from scratch, our team of skilled designers and technicians can bring your vision to life. And because we print on demand, you can be sure that your urn will be one-of-a-kind, created just for you and your loved one.";
export const ABOUT_TEXT_P3 = "With Urrnz, you can honor the memory of your loved one with a truly unique and personalized urn that reflects their life and legacy.";