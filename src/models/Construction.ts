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
import type { ConstructionMaterial } from './ConstructionMaterial';
import {
    ConstructionMaterialFromJSON,
    ConstructionMaterialFromJSONTyped,
    ConstructionMaterialToJSON,
    ConstructionMaterialToJSONTyped,
} from './ConstructionMaterial';

/**
 * The construction details of a waypoint.
 * @export
 * @interface Construction
 */
export interface Construction {
    /**
     * The symbol of the waypoint.
     * @type {string}
     * @memberof Construction
     */
    symbol: string;
    /**
     * The materials required to construct the waypoint.
     * @type {Array<ConstructionMaterial>}
     * @memberof Construction
     */
    materials: Array<ConstructionMaterial>;
    /**
     * Whether the waypoint has been constructed.
     * @type {boolean}
     * @memberof Construction
     */
    isComplete: boolean;
}

/**
 * Check if a given object implements the Construction interface.
 */
export function instanceOfConstruction(value: object): value is Construction {
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('materials' in value) || value['materials'] === undefined) return false;
    if (!('isComplete' in value) || value['isComplete'] === undefined) return false;
    return true;
}

export function ConstructionFromJSON(json: any): Construction {
    return ConstructionFromJSONTyped(json, false);
}

export function ConstructionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Construction {
    if (json == null) {
        return json;
    }
    return {
        
        'symbol': json['symbol'],
        'materials': ((json['materials'] as Array<any>).map(ConstructionMaterialFromJSON)),
        'isComplete': json['isComplete'],
    };
}

export function ConstructionToJSON(json: any): Construction {
    return ConstructionToJSONTyped(json, false);
}

export function ConstructionToJSONTyped(value?: Construction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'symbol': value['symbol'],
        'materials': ((value['materials'] as Array<any>).map(ConstructionMaterialToJSON)),
        'isComplete': value['isComplete'],
    };
}

