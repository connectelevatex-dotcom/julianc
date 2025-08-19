export interface Client {
  id: number;
  handle: string;
  username: string;
  avatar: string;
  followers: string;
}

export const clients: Client[] = [
  {
    id: 1,
    handle: "@AbhijitChavda",
    username: "AbhijitChavda",
    avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    followers: "938K subscribers"
  },
  {
    id: 2,
    handle: "@ShriPrashant",
    username: "ShriPrashant",
    avatar: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    followers: "54.9M subscribers"
  },
  {
    id: 3,
    handle: "@Gustens",
    username: "Gustens",
    avatar: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    followers: "358K subscribers"
  },
  {
    id: 4,
    handle: "@theadityasingh",
    username: "theadityasingh",
    avatar: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    followers: "1.5M subscribers"
  },
  {
    id: 5,
    handle: "@TechBurner",
    username: "TechBurner",
    avatar: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    followers: "12.7M subscribers"
  },
  {
    id: 6,
    handle: "@CarryMinati",
    username: "CarryMinati",
    avatar: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    followers: "40.1M subscribers"
  }
]