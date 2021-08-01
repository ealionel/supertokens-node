import { Querier } from "../querier";
import { maxVersion } from "../utils";
import NormalisedURLPath from "../normalisedURLPath";

export class UserDeleter {
    public static async create(querier: Querier) {
        const apiVersion = await querier.getAPIVersion();

        if (maxVersion(apiVersion, "2.7") === "2.7") {
            throw new Error("Please use core version >= 3.5 to call this function.");
        }

        return new UserDeleter(querier, new NormalisedURLPath("/user/remove"));
    }

    private constructor(private readonly querier: Querier, private readonly path: NormalisedURLPath) {}

    public deleteUser(userId: string): Promise<void> {
        return this.querier.sendPostRequest(this.path, {
            userId,
        });
    }
}
