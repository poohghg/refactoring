interface UserInfo {
  id: number;
  name: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
}

const fetchUser = async (userId: string): Promise<UserInfo> => {
  return { id: 1, name: 'user' };
};

const fetchPosts = async (userId: string): Promise<Post[]> => {
  return [
    { id: 1, title: 'title1', content: 'content1' },
    { id: 2, title: 'title2', content: 'content2' },
  ];
};

// 속성값이 불확실하다.
class UserPost {
  private user: UserInfo | null = null;
  private posts: Post[] | null = null;

  constructor() {}

  async init(userId: string) {
    return Promise.all([
      async () => (this.user = await fetchUser(userId)),
      async () => (this.posts = await fetchPosts(userId)),
    ]);
  }
}

class UserPost2 {
  constructor(
    private _user: UserInfo,
    private _posts: Post[],
  ) {}

  get user() {
    return this._user;
  }

  static async init(userId: string) {
    const [user, posts] = await Promise.all([
      fetchUser(userId),
      fetchPosts(userId),
    ]);

    return new UserPost2(user, posts);
  }
}

const getUser = async (userId: string) => {
  const user = await UserPost2.init('1');
  user.user;
  return user;
};
