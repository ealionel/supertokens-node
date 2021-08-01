import { Querier } from "../querier";
export declare class UserDeleter {
    private readonly querier;
    private readonly path;
    static create(querier: Querier): Promise<UserDeleter>;
    private constructor();
    deleteUser(userId: string): Promise<void>;
}
