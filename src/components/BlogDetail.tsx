import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import { marked } from 'marked';
import { BlogPost } from '@/data/blogPosts';

interface BlogDetailProps {
  post: BlogPost;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ post }) => {
  const renderMarkdown = (content: string) => {
    const processedContent = content
      .replace(/^#{1}\s(.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/^#{2}\s(.+)$/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
      .replace(/^#{3}\s(.+)$/gm, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>')
      .replace(/^#{4}\s(.+)$/gm, '<h4 class="text-lg font-bold mt-4 mb-2">$1</h4>')
      .replace(/^#{5}\s(.+)$/gm, '<h5 class="text-base font-bold mt-3 mb-2">$1</h5>')
      .replace(/^#{6}\s(.+)$/gm, '<h6 class="text-sm font-bold mt-3 mb-2">$1</h6>');
      
    return { __html: marked(processedContent) };
  };

  return (
    <article className="max-w-4xl mx-auto">
      <Link to="/blog" className="flex items-center text-primary mb-8 hover:underline">
        <ArrowLeft size={16} className="mr-2" />
        Back to all posts
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60 mb-6">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <User size={14} className="mr-1" />
            {post.author.name}
          </span>
          <span className="flex items-center">
            <Clock size={14} className="mr-1" />
            {post.readTime}
          </span>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden mb-10 h-96">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="blog-content prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={renderMarkdown(post.content)} />
      </div>

      {post.code && Object.keys(post.code).length > 0 && (
        <div className="mt-12 space-y-8">
          <h3 className="text-xl font-bold mb-4">Code Examples</h3>
          {Object.entries(post.code).map(([key, example]) => (
            <div key={key} className="mb-6">
              <h4 className="font-medium mb-2">{key}</h4>
              <CodeBlock
                code={example.code}
                language={example.language}
                filename={example.filename}
              />
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 py-6 border-t border-border">
        <div className="flex flex-wrap gap-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center bg-secondary px-3 py-1 rounded-full text-sm text-foreground/70"
            >
              <Tag size={14} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
