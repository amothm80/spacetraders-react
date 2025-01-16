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
import type { Meta } from './Meta';
import {
    MetaFromJSON,
    MetaFromJSONTyped,
    MetaToJSON,
    MetaToJSONTyped,
} from './Meta';
import type { Faction } from './Faction';
import {
    FactionFromJSON,
    FactionFromJSONTyped,
    FactionToJSON,
    FactionToJSONTyped,
} from './Faction';

/**
 * 
 * @export
 * @interface GetFactions200Response
 */
export interface GetFactions200Response {
    /**
     * 
     * @type {Array<Faction>}
     * @memberof GetFactions200Response
     */
    data: Array<Faction>;
    /**
     * 
     * @type {Meta}
     * @memberof GetFactions200Response
     */
    meta: Meta;
}

/**
 * Check if a given object implements the GetFactions200Response interface.
 */
export function instanceOfGetFactions200Response(value: object): value is GetFactions200Response {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    return true;
}

export function GetFactions200ResponseFromJSON(json: any): GetFactions200Response {
    return GetFactions200ResponseFromJSONTyped(json, false);
}

export function GetFactions200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFactions200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(FactionFromJSON)),
        'meta': MetaFromJSON(json['meta']),
    };
}

export function GetFactions200ResponseToJSON(json: any): GetFactions200Response {
    return GetFactions200ResponseToJSONTyped(json, false);
}

export function GetFactions200ResponseToJSONTyped(value?: GetFactions200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(FactionToJSON)),
        'meta': MetaToJSON(value['meta']),
    };
}

