import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { metaData } from "app/lib/config";
import { serialize } from "next-mdx-remote/serialize";

export async function generateStaticParams() {
  const posts = getBlogPosts() ?? [];
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// ✅ FIX 1: await params
export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata | undefined> {
  const { slug } = await params; // ✅ await here
  const post = getBlogPosts()?.find((p) => p.slug === slug);

  if (!post) return;

  const { title, publishedAt: publishedTime, summary: description, image } = post.metadata;

  const ogImage = image
    ? image
    : `${metaData.baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${metaData.baseUrl}/blog/${slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// ✅ FIX 2: update interface and await params
interface BlogProps {
  params: Promise<{ slug: string }>; // ✅ Promise now
}

export default async function Blog({ params }: BlogProps) {
  const { slug } = await params; // ✅ await here
  const post = getBlogPosts()?.find((p) => p.slug === slug);

  if (!post) return notFound();

  // MDX v6: serialize content before passing to CustomMDX
  const mdxSource = await serialize(post.content ?? "");

  return (
    <section>
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${metaData.baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${metaData.baseUrl}/blog/${slug}`,
            author: {
              "@type": "Person",
              name: metaData.name,
            },
          }),
        }}
      />

      {/* Title */}
      <h1 className="title mb-3 font-medium text-2xl">{post.metadata.title}</h1>

      {/* Published date */}
      <div className="flex justify-between items-center mt-2 mb-8 text-medium">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>

      {/* MDX content */}
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={mdxSource} />
      </article>
    </section>
  );
}
