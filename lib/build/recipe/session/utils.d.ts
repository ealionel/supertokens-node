import { CreateOrRefreshAPIResponse, TypeInput, TypeNormalisedInput } from "./types";
import * as express from "express";
import SessionRecipe from "./recipe";
import { NormalisedAppinfo } from "../../types";
import RecipeModule from "../../recipeModule";
export declare function normaliseSessionScopeOrThrowError(
    recipe: RecipeModule | undefined,
    sessionScope: string
): string;
export declare function getTopLevelDomainForSameSiteResolution(url: string, recipeInstance: SessionRecipe): string;
export declare function validateAndNormaliseUserInput(
    recipeInstance: SessionRecipe,
    appInfo: NormalisedAppinfo,
    config?: TypeInput
): TypeNormalisedInput;
export declare function normaliseSameSiteOrThrowError(
    recipe: RecipeModule | undefined,
    sameSite: string
): "strict" | "lax" | "none";
export declare function attachCreateOrRefreshSessionResponseToExpressRes(
    recipeInstance: SessionRecipe,
    res: express.Response,
    response: CreateOrRefreshAPIResponse
): void;
