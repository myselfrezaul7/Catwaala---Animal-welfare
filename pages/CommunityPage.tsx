import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreatePostForm from '../components/CreatePostForm';
import PostCard from '../components/PostCard';
import { useAuth } from '../contexts/AuthContext';
import { MOCK_POSTS } from '../constants';
import type { Post } from '../types';
import PostCardSkeleton from '../components/PostCardSkeleton';
import { useLanguage } from '../contexts/LanguageContext';

const POSTS_STORAGE_KEY = 'catwaala_posts';

const getInitialPosts = (): Post[] => {
  try {
    const posts = window.localStorage.getItem(POSTS_STORAGE_KEY);
    if (posts) {
      return JSON.parse(posts);
    } else {
      // If no posts, initialize with mock data
      window.localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(MOCK_POSTS));
      return MOCK_POSTS;
    }
  } catch (error) {
    console.error("Error reading posts from localStorage", error);
    return MOCK_POSTS;
  }
};

const CommunityPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Simulate fetching posts to show loading state
    setLoading(true);
    setTimeout(() => {
        setPosts(getInitialPosts());
        setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!loading) {
        try {
            window.localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(posts));
        } catch (error) {
            console.error("Error writing posts to localStorage", error);
        }
    }
  }, [posts, loading]);

  const handleAddPost = (newPost: Post) => {
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-3xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">{t('community.title')}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
          {t('community.subtitle')}
        </p>
      </div>

      {isAuthenticated ? (
        <CreatePostForm onAddPost={handleAddPost} />
      ) : (
        <div className="bg-orange-500/10 border-l-4 border-orange-500 text-orange-800 dark:text-orange-200 p-6 rounded-r-lg mb-8 text-center">
          <p className="font-bold text-lg">{t('community.loginPrompt.title')}</p>
          <p className="mt-2">
            <Link to="/login" className="font-bold text-orange-600 dark:text-orange-400 hover:underline">{t('nav.login')}</Link> {t('community.loginPrompt.or')} <Link to="/signup" className="font-bold text-orange-600 dark:text-orange-400 hover:underline">{t('nav.signup')}</Link> {t('community.loginPrompt.action')}
          </p>
        </div>
      )}

      <div className="space-y-8">
        {loading ? (
          <>
            <PostCardSkeleton />
            <PostCardSkeleton />
          </>
        ) : (
          posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
};

export default CommunityPage;