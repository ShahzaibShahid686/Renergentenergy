import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ slug }`);
  return posts.map((post) => ({ slug: post.slug.current }));
}

export async function getBlog(slug) {
  return await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, {
    slug,
  });
}

export default async function BlogDetailPage({ params }) {
  const post = await getBlog(params.slug);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose">
        <PortableText value={post.content} />
      </div>
    </div>
  );
}
