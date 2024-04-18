//SCREEN SIZES
export const SIZES = {
  xs: "375px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

//ITEM COLOR OPTION
export const COLORS = [
  "#B80000",
  "#DB3E00",
  "#FCCB00",
  "#008B02",
  "#006B76",
  "#1273DE",
  "#004DCF",
  "#5300EB",
  "#EB9694",
  "#FAD0C3",
  "#FEF3BD",
  "#C1E1C5",
  "#BEDADC",
  "#C4DEF6",
  "#BED3F3",
  "#D4C4FB",
];

export const COLOR_CODE_TO_NAME = {
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

//CHECKOUT STEPS
export const CHECKOUT_STEPS = ["Shipping Details", "Shipping Options", "Payment Details", "Review"];

//END POINTS
export const FETCH_ALL_PRODUCTS =
  "https://zzzap.io/Collections/dataFind?search=product&PublicAuthCd=bfe18ab97f8a3a01d68a5a904719880f4cc9eb7a11ff6f09a433dd45145ec3b3&limit=100";
export const FETCH_CATEGORIES =
  "https://zzzap.io/Collections/dataFind?search=category&PublicAuthCd=bfe18ab97f8a3a01d68a5a904719880f4cc9eb7a11ff6f09a433dd45145ec3b3&limit=100";
export const FETCH_TAX =
  "https://zzzap.io/Process/orderTaxesOnly?requestApiAs=urrnz.com&PublicAuthCd=bfe18ab97f8a3a01d68a5a904719880f4cc9eb7a11ff6f09a433dd45145ec3b3";
export const FETCH_TEMPLATE_CHAT =
  "https://zzzap.io/Template/contact/extend?PublicAuthCd=bfe18ab97f8a3a01d68a5a904719880f4cc9eb7a11ff6f09a433dd45145ec3b3";
export const FETCH_TEMPLATE_ORDER =
  "https://zzzap.io/Template/order/extend?PublicAuthCd=bfe18ab97f8a3a01d68a5a904719880f4cc9eb7a11ff6f09a433dd45145ec3b3";
export const POST_MESSAGE =
  "https://zzzap.io/Process/chat?requestApiAs=urrnz.com&PublicAuthCd=bfe18ab97f8a3a01d68a5a904719880f4cc9eb7a11ff6f09a433dd45145ec3b3";
export const POST_ORDER =
  "https://zzzap.io/Process/order?requestApiAs=urrnz.com&PublicAuthCd=bfe18ab97f8a3a01d68a5a904719880f4cc9eb7a11ff6f09a433dd45145ec3b3";

//SITE IDENTITY
export const GOOGLE_TRACKING_ID = "G-8ST98TVJ83";

export const ABOUT_TEXT = [
  "At Urrnz, we recognized a significant gap in the market for urns that resonated with the individuality and uniqueness of each person's life story. Traditional urns often lacked the personal touch that many families sought to honor their loved ones' memories. To address this, we innovated a state-of-the-art 3D printing service that revolutionizes the concept of memorial urns.",
  "Our cutting-edge 3D printing technology empowers us to craft urns in a vast array of shapes, sizes, and colors. This flexibility enables us to create intricate designs and incorporate personalized details that go beyond the limitations of conventional manufacturing processes. Whether you envision incorporating a cherished photograph, a special symbol, or you wish to design an urn entirely from scratch, our dedicated team of designers and technicians is here to assist you every step of the way.",
  "What sets Urrnz apart is our commitment to individuality and personalization. Each urn we produce is a bespoke creation, tailored to capture the essence of your loved one's life journey. By choosing Urrnz, you're not just selecting an urn; you're honoring your loved one's legacy with a timeless piece of art that truly reflects their spirit and the love you shared.",
];

export const FAQ_QUESTIONS = [
  "How long does it take to receive my custom urn?",
  "Can I customize the shape and size of my urn?",
  "What materials do you use to create your urns?",
  "Can I include personalization on my urn?",
  "How do I know that my urn will be secure and durable?",
  "What is your return policy?",
];

export const FAQ_ANSWERS = [
  "Our custom urns are made to order, so it typically takes 2-3 weeks for us to create and ship your urn.",
  "Yes! We offer a variety of shapes and sizes to choose from, and we can also create completely custom designs upon request.",
  "We use a variety of high-quality materials, including PLA, ABS, and PETG, to create our urns using 3D printing technology.",
  "Absolutely! We offer a variety of personalization options, including symbols and images, to create a truly unique and personalized urn for your loved one.",
  "We take great care to ensure that our urns are secure and durable, and we perform rigorous testing to ensure that they can remain on display for many, many years to come.",
  "We want you to be completely satisfied with your purchase, so we offer a 100% satisfaction guarantee. If for any reason you are not satisfied with your urn, please contact us and we will do everything we can to make it right.",
];

//Stringed Variables
export const ALL = "All";
