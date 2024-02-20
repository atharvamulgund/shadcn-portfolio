import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface blog {
  id: string;
  title: string;
  tags: [];
  brief: string;
  url: string;
}

interface tag {
  id: string;
  name: string;
}
const Blog = () => {
  const [posts, setPosts] = useState([]);

  const fetchPostsByUsername = async () => {
    const query = JSON.stringify({
      query: `
          {
            publication(host:"atharvamulgund.hashnode.dev"){
              posts(first:3){
                edges{
                  node{
                    id
                    title
                    tags{
                      name
                    }
                    url
                    coverImage{
                      url
                    }
                    subtitle
                    brief
                  }
                }
              }
            }
          }
        `,
    });

    const response = await fetch("https://gql.hashnode.com", {
      method: "post",
      body: query,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const jsonResponse = await response.json();
    const data = jsonResponse.data.publication.posts.edges;
    setPosts(data);
  };

  useEffect(() => {
    fetchPostsByUsername();
  }, []);
  return (
    <section className="flex items-center justify-center sm:flex-row flex-col">
      {/* <img src={aboutImage} alt='aboutimg' className='sm:w-[380px] w-s[280px]' /> */}
      <div className="max-w-2xl p-8 rounded-md">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ">
          Recent Tech Blogs
        </h1>
        <div className="flex justify-between items-center gap-8 flex-wrap">
          {posts &&
            posts?.map(({ node }: { node: blog }, key) => (
              <>
                <div className="max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={node?.id}>
                  <a href={node?.url} rel="canonical">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {node?.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {node?.brief}
                  </p>
                  <div className="flex flex-wrap gap-2 my-4">
                    {node.tags?.map((tag: tag) => (
                      <Badge key={tag.id}>{tag.name}</Badge>
                    ))}
                  </div>
                  <a href={node?.url} rel="canonical">
                    <Button
                      className={`${
                        key === 0
                          ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white"
                          : key === 1
                          ? "bg-gradient-to-b from-purple-600 to-pink-500 text-white"
                          : key === 2
                          ? "bg-gradient-to-b from-red-500 to-yellow-300 text-white"
                          : ""
                      }`}
                    >
                      Read more about the blog
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Button>
                  </a>
                </div>
              </>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
