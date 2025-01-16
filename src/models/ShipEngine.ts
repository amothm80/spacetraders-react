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
import type { ShipRequirements } from './ShipRequirements';
import {
    ShipRequirementsFromJSON,
    ShipRequirementsFromJSONTyped,
    ShipRequirementsToJSON,
    ShipRequirementsToJSONTyped,
} from './ShipRequirements';

/**
 * The engine determines how quickly a ship travels between waypoints.
 * @export
 * @interface ShipEngine
 */
export interface ShipEngine {
    /**
     * The symbol of the engine.
     * @type {string}
     * @memberof ShipEngine
     */
    symbol: ShipEngineSymbolEnum;
    /**
     * The name of the engine.
     * @type {string}
     * @memberof ShipEngine
     */
    name: string;
    /**
     * The description of the engine.
     * @type {string}
     * @memberof ShipEngine
     */
    description: string;
    /**
     * The repairable condition of a component. A value of 0 indicates the component needs significant repairs, while a value of 1 indicates the component is in near perfect condition. As the condition of a component is repaired, the overall integrity of the component decreases.
     * @type {number}
     * @memberof ShipEngine
     */
    condition: number;
    /**
     * The overall integrity of the component, which determines the performance of the component. A value of 0 indicates that the component is almost completely degraded, while a value of 1 indicates that the component is in near perfect condition. The integrity of the component is non-repairable, and represents permanent wear over time.
     * @type {number}
     * @memberof ShipEngine
     */
    integrity: number;
    /**
     * The speed stat of this engine. The higher the speed, the faster a ship can travel from one point to another. Reduces the time of arrival when navigating the ship.
     * @type {number}
     * @memberof ShipEngine
     */
    speed: number;
    /**
     * 
     * @type {ShipRequirements}
     * @memberof ShipEngine
     */
    requirements: ShipRequirements;
}


/**
 * @export
 */
export const ShipEngineSymbolEnum = {
    ImpulseDriveI: 'ENGINE_IMPULSE_DRIVE_I',
    IonDriveI: 'ENGINE_ION_DRIVE_I',
    IonDriveIi: 'ENGINE_ION_DRIVE_II',
    HyperDriveI: 'ENGINE_HYPER_DRIVE_I'
} as const;
export type ShipEngineSymbolEnum = typeof ShipEngineSymbolEnum[keyof typeof ShipEngineSymbolEnum];


/**
 * Check if a given object implements the ShipEngine interface.
 */
export function instanceOfShipEngine(value: object): value is ShipEngine {
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('condition' in value) || value['condition'] === undefined) return false;
    if (!('integrity' in value) || value['integrity'] === undefined) return false;
    if (!('speed' in value) || value['speed'] === undefined) return false;
    if (!('requirements' in value) || value['requirements'] === undefined) return false;
    return true;
}

export function ShipEngineFromJSON(json: any): ShipEngine {
    return ShipEngineFromJSONTyped(json, false);
}

export function ShipEngineFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipEngine {
    if (json == null) {
        return json;
    }
    return {
        
        'symbol': json['symbol'],
        'name': json['name'],
        'description': json['description'],
        'condition': json['condition'],
        'integrity': json['integrity'],
        'speed': json['speed'],
        'requirements': ShipRequirementsFromJSON(json['requirements']),
    };
}

export function ShipEngineToJSON(json: any): ShipEngine {
    return ShipEngineToJSONTyped(json, false);
}

export function ShipEngineToJSONTyped(value?: ShipEngine | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'symbol': value['symbol'],
        'name': value['name'],
        'description': value['description'],
        'condition': value['condition'],
        'integrity': value['integrity'],
        'speed': value['speed'],
        'requirements': ShipRequirementsToJSON(value['requirements']),
    };
}

