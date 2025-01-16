/* tslint:disable */
/* eslint-disable */
/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.   
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Survey } from './Survey';
import {
    SurveyFromJSON,
    SurveyFromJSONTyped,
    SurveyToJSON,
    SurveyToJSONTyped,
} from './Survey';

/**
 * 
 * @export
 * @interface ExtractResourcesRequest
 */
export interface ExtractResourcesRequest {
    /**
     * 
     * @type {Survey}
     * @memberof ExtractResourcesRequest
     */
    survey?: Survey;
}

/**
 * Check if a given object implements the ExtractResourcesRequest interface.
 */
export function instanceOfExtractResourcesRequest(value: object): value is ExtractResourcesRequest {
    return true;
}

export function ExtractResourcesRequestFromJSON(json: any): ExtractResourcesRequest {
    return ExtractResourcesRequestFromJSONTyped(json, false);
}

export function ExtractResourcesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtractResourcesRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'survey': json['survey'] == null ? undefined : SurveyFromJSON(json['survey']),
    };
}

export function ExtractResourcesRequestToJSON(json: any): ExtractResourcesRequest {
    return ExtractResourcesRequestToJSONTyped(json, false);
}

export function ExtractResourcesRequestToJSONTyped(value?: ExtractResourcesRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'survey': SurveyToJSON(value['survey']),
    };
}

