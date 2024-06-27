import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${process.env.SITE_URL}`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.SITE_URL}/projects`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.SITE_URL}/contact`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.SITE_URL}/hireme`,
            lastModified: new Date(),
        }
    ]
}