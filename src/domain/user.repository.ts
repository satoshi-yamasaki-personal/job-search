import { User } from './user.entity';

export interface UserRepository {
  save(user: User): Promise<void>

  findById(id: string): Promise<User | null>
}