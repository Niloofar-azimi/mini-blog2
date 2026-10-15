
import type { Post } from "@/types/post";
import type { User } from "@/types/user";
import  {apiClient} from"./apiClient";
export function getPosts(): Promise<Post[]> {
  return apiClient<Post[]>("/posts");
}

export async function getPostById(
  id: string
): Promise<Post> {
  

     return apiClient<Post>(`/posts/${id}`);
}

export async function getUserById(
  id: string
): Promise<User> {


    return apiClient<User>(`/users/${id}`);
}
