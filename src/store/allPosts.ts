import {create} from 'zustand';
import firestore from '@react-native-firebase/firestore';
import {DateTime} from 'luxon';

export interface Post {
  id: string;
  title: string;
  urlToImage: string;
  link?: string | null;
  publishedAt: string;
  content: string;
}

interface AllPostsState {
  isLoading: boolean;
  allPosts: Post[];
  getAllPosts: () => Promise<void>;
  addPost: (newPost: Post) => Promise<void>;
  deletePost: (postId: string) => Promise<void>;
}

export const usePostsState = create<AllPostsState>()(set => ({
  isLoading: false,
  allPosts: [],
  getAllPosts: async () => {
    try {
      set({isLoading: true});

      const snapshot = await firestore().collection('posts').get();

      const allPosts = snapshot.docs.map(doc => {
        const data = doc.data();

        return {
          id: doc.id,
          title: data.title,
          urlToImage: data.urlToImage,
          publishedAt: data.publishedAt,
          content: data.content,
        };
      });

      allPosts.sort((a, b) => {
        const dateTimeA = DateTime.fromISO(a.publishedAt);
        const dateTimeB = DateTime.fromISO(b.publishedAt);

        return dateTimeB.toMillis() - dateTimeA.toMillis();
      });

      set({allPosts});
    } catch (error) {
      console.error('Failed to fetch data: ', error);
    } finally {
      set({isLoading: false});
    }
  },
  addPost: async newPost => {
    try {
      await firestore().collection('posts').add(newPost);

      set(state => ({
        allPosts: [newPost, ...state.allPosts],
      }));
    } catch (error) {
      console.error('Failed to add post: ', error);
    }
  },
  deletePost: async postId => {
    try {
      await firestore().collection('posts').doc(postId).delete();

      set(state => ({
        allPosts: state.allPosts.filter(post => post.id !== postId),
      }));
    } catch (error) {
      console.error('Failed to delete post: ', error);
    }
  },
}));
