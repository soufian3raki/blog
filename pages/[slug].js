import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../lib/mdx";
import MDXComponents from "../components/MDXComponents";

export default function Post({ source, frontmatter }) {
    return (
        <MDXRemote {...source} components={MDXComponents} />
    );
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug(params.slug);
    return {
        props: {
            source,
            frontmatter,
        },
    };
}

export async function getStaticPaths() {
    const files = await getFiles();
    const paths = files.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/, ""),
        },
    }));

    return {
        paths: files.map((file) => {
            const slug = file.replace(".mdx", "");
            return {
                params: {
                    slug,
                },
            };
        }),
        fallback: false,
    };
}