import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function SEO({
    title = "Custom 3D Printed Keepsakes | Urrnz",
    description = "Discover unique custom 3D printed keepsakes for your loved ones at Urrnz. Explore our range of urns and cremation accessories designed to honor cherished memories.",
    name = "Urrnz",
    type = "website", }) {
    return (
        <Helmet>
            <link rel="canonical" href="https://urrnz.com" />

            { /* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="keywords" 
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
            { /* End standard metadata tags */}

            { /* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="../assets/logo192.png" />
            { /* End Facebook tags */}

            { /* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="../assets/logo192.png" />
            { /* End Twitter tags */}
        </Helmet>
    )
}