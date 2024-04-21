import React from "react";
import { Helmet } from "react-helmet-async";
export default function SEO({
  title = "Custom 3D Printed Keepsakes | Urrnz",
  description = "Explore unique custom 3D-printed keepsakes at Urrnz. Discover a variety of urns and cremation accessories crafted to honor cherished memories.",
  name = "Urrnz",
  type = "website",
}) {
  return (
    <Helmet>
      <link rel="canonical" href="https://urrnz.com" />

      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="urn, 
                urns, 
                cremation, 
                3D printed keepsakes, 
                funeral, 
                end of life planning, 
                cremation urns, 
                3D, 3
                3D print,
                animal urns, 
                pet urns, 
                unique keepsakes"
      />
      {/* End standard metadata tags */}
    </Helmet>
  );
}
