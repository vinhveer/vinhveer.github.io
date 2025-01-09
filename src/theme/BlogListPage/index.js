import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogListPaginator from '@theme/BlogListPaginator';

function SearchInput({ value, onChange }) {
  return (
    <div className="navbar__search margin-bottom--lg">
      <input
        placeholder="Tìm kiếm bài viết..."
        aria-label="Tìm kiếm bài viết"
        className="navbar__search-input"
        type="search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function BlogListPageMetadata(props) {
  const { metadata } = props;
  return (
    <PageMetadata title={metadata.blogTitle} description={metadata.blogDescription} />
  );
}

function BlogListPageContent(props) {
  const { metadata, items } = props;
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter((item) => {
    if (!item.content) return false;
    const { metadata, frontMatter } = item.content;
    const searchString = `${metadata?.title || ''} ${metadata?.description || ''} ${
      metadata?.tags?.map((t) => t.label).join(' ') || ''
    }`.toLowerCase();
    return searchString.includes(searchTerm.toLowerCase());
  });

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <div className="container margin-vert--lg">
        <SearchInput 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="row">
          {filteredItems.map((item) => {
            const { content: BlogPostContent } = item;
            if (!BlogPostContent) return null;

            const { metadata: postMetadata, frontMatter } = BlogPostContent;
            if (!postMetadata) return null;

            return (
              <div key={postMetadata.permalink} className="col col--4 margin-bottom--lg">
                <div 
                  className="card card--pointer" 
                  onClick={() => window.location.href = postMetadata.permalink}
                >
                  {frontMatter.image && (
                    <div className="card__image">
                      <img
                        src={frontMatter.image}
                        alt={postMetadata.title}
                        title={postMetadata.title}
                      />
                    </div>
                  )}
                  <div className="card__body">
                    <h4 className="margin-bottom--sm">
                      <Link href={postMetadata.permalink}>{postMetadata.title}</Link>
                    </h4>
                    <small className="text--secondary">
                      {postMetadata.formattedDate}
                    </small>
                    <p className="margin-vert--md">{postMetadata.description}</p>
                  </div>
                  {postMetadata.tags && postMetadata.tags.length > 0 && (
                    <div className="card__footer">
                      {postMetadata.tags.map((tag) => (
                        <Link
                          key={tag.label}
                          href={tag.permalink}
                          className="badge badge--secondary margin-right--sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = tag.permalink;
                          }}
                        >
                          {tag.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="margin-top--lg">
          <BlogListPaginator metadata={metadata} />
        </div>
      </div>
    </HtmlClassNameProvider>
  );
}

export default function BlogListPage(props) {
  return (
    <Layout>
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </Layout>
  );
}