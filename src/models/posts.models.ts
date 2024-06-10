export interface Post {
    id: number;
    title: string;
    content: string;
  }
  
  const posts: Array<Post> = [
    {
      id: 1,
      title: 'How to make banana cake',
      content: 'Buy banana, make a cake, done'
    },
    {
      id: 2,
      title: 'How to make your crush fall in love in you',
      content: 'step 1. Making much money, .. step 99. Be a crazy rich'
    },
  ];
  
  export const getPosts = (): Array<Post> => {
    return posts;
  };
  
  export const getPostById = (id: number): Post | undefined => {
    return posts.find(post => post.id === id);
  };
  
  export const createPost = (post: Post): void => {
    posts.push(post);
  };
  
  export const updatePost = (post: Post): void => {
    const index = posts.findIndex(u => u.id === post.id);
    posts[index] = post;
  };
  
  export const deletePost = (id: number): void => {
    const index = posts.findIndex(u => u.id === id);
    posts.splice(index, 1);
  };