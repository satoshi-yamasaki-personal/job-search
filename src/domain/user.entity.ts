export interface UserCreateArgs {
  id: string
  name: string
  email: string
}

export type UserReconstructArgs = UserCreateArgs

export type UserUpdateArgs = Partial<UserCreateArgs>

export class User {
  private constructor(
    readonly id: string,
    readonly name: string,
    readonly email: string,
  ) {}

  static create(args: UserCreateArgs) {
    return new User(args.id, args.name, args.email)
  }

  static reconstruct(args: UserReconstructArgs) {
    return new User(args.id, args.name, args.email)
  }

  update(args: UserUpdateArgs) {
    return User.reconstruct({ ...this, ...args })
  }
}