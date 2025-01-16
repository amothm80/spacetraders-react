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
import type { ShipEngine } from './ShipEngine';
import {
    ShipEngineFromJSON,
    ShipEngineFromJSONTyped,
    ShipEngineToJSON,
    ShipEngineToJSONTyped,
} from './ShipEngine';
import type { SupplyLevel } from './SupplyLevel';
import {
    SupplyLevelFromJSON,
    SupplyLevelFromJSONTyped,
    SupplyLevelToJSON,
    SupplyLevelToJSONTyped,
} from './SupplyLevel';
import type { ShipMount } from './ShipMount';
import {
    ShipMountFromJSON,
    ShipMountFromJSONTyped,
    ShipMountToJSON,
    ShipMountToJSONTyped,
} from './ShipMount';
import type { ShipFrame } from './ShipFrame';
import {
    ShipFrameFromJSON,
    ShipFrameFromJSONTyped,
    ShipFrameToJSON,
    ShipFrameToJSONTyped,
} from './ShipFrame';
import type { ShipReactor } from './ShipReactor';
import {
    ShipReactorFromJSON,
    ShipReactorFromJSONTyped,
    ShipReactorToJSON,
    ShipReactorToJSONTyped,
} from './ShipReactor';
import type { ShipModule } from './ShipModule';
import {
    ShipModuleFromJSON,
    ShipModuleFromJSONTyped,
    ShipModuleToJSON,
    ShipModuleToJSONTyped,
} from './ShipModule';
import type { ShipyardShipCrew } from './ShipyardShipCrew';
import {
    ShipyardShipCrewFromJSON,
    ShipyardShipCrewFromJSONTyped,
    ShipyardShipCrewToJSON,
    ShipyardShipCrewToJSONTyped,
} from './ShipyardShipCrew';
import type { ShipType } from './ShipType';
import {
    ShipTypeFromJSON,
    ShipTypeFromJSONTyped,
    ShipTypeToJSON,
    ShipTypeToJSONTyped,
} from './ShipType';
import type { ActivityLevel } from './ActivityLevel';
import {
    ActivityLevelFromJSON,
    ActivityLevelFromJSONTyped,
    ActivityLevelToJSON,
    ActivityLevelToJSONTyped,
} from './ActivityLevel';

/**
 * 
 * @export
 * @interface ShipyardShip
 */
export interface ShipyardShip {
    /**
     * 
     * @type {ShipType}
     * @memberof ShipyardShip
     */
    type: ShipType;
    /**
     * 
     * @type {string}
     * @memberof ShipyardShip
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ShipyardShip
     */
    description: string;
    /**
     * 
     * @type {SupplyLevel}
     * @memberof ShipyardShip
     */
    supply: SupplyLevel;
    /**
     * 
     * @type {ActivityLevel}
     * @memberof ShipyardShip
     */
    activity?: ActivityLevel;
    /**
     * 
     * @type {number}
     * @memberof ShipyardShip
     */
    purchasePrice: number;
    /**
     * 
     * @type {ShipFrame}
     * @memberof ShipyardShip
     */
    frame: ShipFrame;
    /**
     * 
     * @type {ShipReactor}
     * @memberof ShipyardShip
     */
    reactor: ShipReactor;
    /**
     * 
     * @type {ShipEngine}
     * @memberof ShipyardShip
     */
    engine: ShipEngine;
    /**
     * 
     * @type {Array<ShipModule>}
     * @memberof ShipyardShip
     */
    modules: Array<ShipModule>;
    /**
     * 
     * @type {Array<ShipMount>}
     * @memberof ShipyardShip
     */
    mounts: Array<ShipMount>;
    /**
     * 
     * @type {ShipyardShipCrew}
     * @memberof ShipyardShip
     */
    crew: ShipyardShipCrew;
}



/**
 * Check if a given object implements the ShipyardShip interface.
 */
export function instanceOfShipyardShip(value: object): value is ShipyardShip {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('supply' in value) || value['supply'] === undefined) return false;
    if (!('purchasePrice' in value) || value['purchasePrice'] === undefined) return false;
    if (!('frame' in value) || value['frame'] === undefined) return false;
    if (!('reactor' in value) || value['reactor'] === undefined) return false;
    if (!('engine' in value) || value['engine'] === undefined) return false;
    if (!('modules' in value) || value['modules'] === undefined) return false;
    if (!('mounts' in value) || value['mounts'] === undefined) return false;
    if (!('crew' in value) || value['crew'] === undefined) return false;
    return true;
}

export function ShipyardShipFromJSON(json: any): ShipyardShip {
    return ShipyardShipFromJSONTyped(json, false);
}

export function ShipyardShipFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipyardShip {
    if (json == null) {
        return json;
    }
    return {
        
        'type': ShipTypeFromJSON(json['type']),
        'name': json['name'],
        'description': json['description'],
        'supply': SupplyLevelFromJSON(json['supply']),
        'activity': json['activity'] == null ? undefined : ActivityLevelFromJSON(json['activity']),
        'purchasePrice': json['purchasePrice'],
        'frame': ShipFrameFromJSON(json['frame']),
        'reactor': ShipReactorFromJSON(json['reactor']),
        'engine': ShipEngineFromJSON(json['engine']),
        'modules': ((json['modules'] as Array<any>).map(ShipModuleFromJSON)),
        'mounts': ((json['mounts'] as Array<any>).map(ShipMountFromJSON)),
        'crew': ShipyardShipCrewFromJSON(json['crew']),
    };
}

export function ShipyardShipToJSON(json: any): ShipyardShip {
    return ShipyardShipToJSONTyped(json, false);
}

export function ShipyardShipToJSONTyped(value?: ShipyardShip | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': ShipTypeToJSON(value['type']),
        'name': value['name'],
        'description': value['description'],
        'supply': SupplyLevelToJSON(value['supply']),
        'activity': ActivityLevelToJSON(value['activity']),
        'purchasePrice': value['purchasePrice'],
        'frame': ShipFrameToJSON(value['frame']),
        'reactor': ShipReactorToJSON(value['reactor']),
        'engine': ShipEngineToJSON(value['engine']),
        'modules': ((value['modules'] as Array<any>).map(ShipModuleToJSON)),
        'mounts': ((value['mounts'] as Array<any>).map(ShipMountToJSON)),
        'crew': ShipyardShipCrewToJSON(value['crew']),
    };
}

