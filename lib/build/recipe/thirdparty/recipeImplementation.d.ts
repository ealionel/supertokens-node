// @ts-nocheck
import { RecipeInterface, User } from "./types";
import { Querier } from "../../querier";
export default class RecipeImplementation implements RecipeInterface {
    querier: Querier;
    constructor(querier: Querier);
    getUsers: (
        timeJoinedOrder: "ASC" | "DESC",
        limit?: number | undefined,
        paginationToken?: string | undefined
    ) => Promise<{
        users: User[];
        nextPaginationToken?: string | undefined;
    }>;
    signInUp: ({
        thirdPartyId,
        thirdPartyUserId,
        email,
    }: {
        thirdPartyId: string;
        thirdPartyUserId: string;
        email: {
            id: string;
            isVerified: boolean;
        };
    }) => Promise<
        | {
              status: "OK";
              createdNewUser: boolean;
              user: User;
          }
        | {
              status: "FIELD_ERROR";
              error: string;
          }
    >;
    getUserById: ({ userId }: { userId: string }) => Promise<User | undefined>;
    getUsersByEmail: ({ email }: { email: string }) => Promise<User[]>;
    getUserByThirdPartyInfo: ({
        thirdPartyId,
        thirdPartyUserId,
    }: {
        thirdPartyId: string;
        thirdPartyUserId: string;
    }) => Promise<User | undefined>;
}
