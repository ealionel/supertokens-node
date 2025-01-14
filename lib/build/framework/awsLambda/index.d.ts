// @ts-nocheck
export type { SessionEvent, SessionEventV2 } from "./framework";
export declare const middleware: () => import("aws-lambda").Handler<any, any>;
export declare const wrapRequest: (unwrapped: any) => import("..").BaseRequest;
export declare const wrapResponse: (unwrapped: any) => import("..").BaseResponse;
