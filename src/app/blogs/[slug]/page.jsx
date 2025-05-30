import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { client, urlFor } from '@/lib/sanity';

async function getPost(slug) {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      ...,
      content,
      "next": *[_type == "post" && publishedAt < ^.publishedAt] | order(publishedAt desc)[0] {
        title,
        "slug": slug.current,
        thumbnail
      }
    }`,
    { slug }
  );
}

// Portable Text Components (custom rendering)
const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value).url()}
        alt="Post image"
        width={700}
        height={400}
        className="my-6 rounded-lg"
      />
    ),
  },
};

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug);
  
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Thumbnail */}
      {post.thumbnail && (
        <div className="mb-8">
          <Image
            src={urlFor(post.thumbnail).url()}
            alt={post.title}
            width={800}
            height={450}
            className="rounded-lg object-cover w-full"
          />
        </div>
      )}
      
      {/* Title and Metadata */}
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <div className="flex items-center text-sm text-gray-600 mb-6">
        <span>
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
        {post.categories?.length > 0 && (
          <span className="mx-2">•</span>
        )}
        <div className="flex flex-wrap gap-2">
          {post.categories?.map((cat) => (
            <span key={cat} className="bg-gray-100 px-2 py-1 rounded">
              {cat}
            </span>
          ))}
        </div>
      </div>
      
      {/* Excerpt */}
      {post.excerpt && (
        <p className="text-lg text-gray-700 italic mb-8">{post.excerpt}</p>
      )}
      
      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <PortableText 
          value={post.content} 
          components={portableTextComponents} 
        />
      </div>
      
      {/* Next Post Section */}
      {post.next && (
        <div className="mt-16 border-t pt-8">
          <h2 className="text-xl font-semibold mb-4">Next Post</h2>
          <Link 
            href={`/blogs/${post.next.slug}`}
            className="flex flex-col sm:flex-row gap-4 items-start group hover:bg-gray-50 p-4 rounded-lg transition"
          >
            {post.next.thumbnail && (
              <div className="w-full sm:w-32 flex-shrink-0">
                <Image
                  src={urlFor(post.next.thumbnail).url()}
                  alt={post.next.title}
                  width={300}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>
            )}
            <div>
              <h3 className="font-bold group-hover:underline">{post.next.title}</h3>
              <p className="text-sm text-gray-500 mt-1">Continue reading →</p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}