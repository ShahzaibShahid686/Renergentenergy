
import Link from 'next/link';
import Image from 'next/image';
import { client, urlFor } from '@/lib/sanity';

export async function getBlogs() {
  return await client.fetch(`*[_type == "post"] | order(publishedAt desc){
    title,
    slug,
    excerpt,
    publishedAt,
    categories,
    thumbnail
  }`);
}

export default async function BlogListPage() {
  const blogs = await getBlogs();

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-12">
      {blogs.map((post) => (
        <div key={post.slug.current} className="flex flex-col md:flex-row gap-6 border-b pb-6">
          {post.thumbnail && (
            <div className="w-full md:w-1/3">
              <Image
                src={urlFor(post.thumbnail).url()}
                alt={post.title}
                width={500}
                height={300}
                className="rounded-md object-cover"
              />
            </div>
          )}
          <div className="w-full">
            <p className="text-sm text-gray-500 mb-2">
              {new Date(post.publishedAt).toLocaleDateString()} — {post.categories?.join(', ')}
            </p>
            <Link href={`/blogs/${post.slug.current}`}>
              <h2 className="text-xl font-bold text-[#1e2a52] hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-700 mt-2 text-sm">{post.excerpt}</p>
            <Link href={`/blogs/${post.slug.current}`}>
              <button className="mt-4 bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded">
                Read more →
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>

    
  );
}
