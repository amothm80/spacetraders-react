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
import type { WaypointTrait } from './WaypointTrait';
import {
    WaypointTraitFromJSON,
    WaypointTraitFromJSONTyped,
    WaypointTraitToJSON,
    WaypointTraitToJSONTyped,
} from './WaypointTrait';
import type { WaypointOrbital } from './WaypointOrbital';
import {
    WaypointOrbitalFromJSON,
    WaypointOrbitalFromJSONTyped,
    WaypointOrbitalToJSON,
    WaypointOrbitalToJSONTyped,
} from './WaypointOrbital';
import type { WaypointModifier } from './WaypointModifier';
import {
    WaypointModifierFromJSON,
    WaypointModifierFromJSONTyped,
    WaypointModifierToJSON,
    WaypointModifierToJSONTyped,
} from './WaypointModifier';
import type { WaypointType } from './WaypointType';
import {
    WaypointTypeFromJSON,
    WaypointTypeFromJSONTyped,
    WaypointTypeToJSON,
    WaypointTypeToJSONTyped,
} from './WaypointType';
import type { WaypointFaction } from './WaypointFaction';
import {
    WaypointFactionFromJSON,
    WaypointFactionFromJSONTyped,
    WaypointFactionToJSON,
    WaypointFactionToJSONTyped,
} from './WaypointFaction';
import type { Chart } from './Chart';
import {
    ChartFromJSON,
    ChartFromJSONTyped,
    ChartToJSON,
    ChartToJSONTyped,
} from './Chart';

/**
 * A waypoint is a location that ships can travel to such as a Planet, Moon or Space Station.
 * @export
 * @interface Waypoint
 */
export interface Waypoint {
    /**
     * The symbol of the waypoint.
     * @type {string}
     * @memberof Waypoint
     */
    symbol: string;
    /**
     * 
     * @type {WaypointType}
     * @memberof Waypoint
     */
    type: WaypointType;
    /**
     * The symbol of the system.
     * @type {string}
     * @memberof Waypoint
     */
    systemSymbol: string;
    /**
     * Relative position of the waypoint on the system's x axis. This is not an absolute position in the universe.
     * @type {number}
     * @memberof Waypoint
     */
    x: number;
    /**
     * Relative position of the waypoint on the system's y axis. This is not an absolute position in the universe.
     * @type {number}
     * @memberof Waypoint
     */
    y: number;
    /**
     * Waypoints that orbit this waypoint.
     * @type {Array<WaypointOrbital>}
     * @memberof Waypoint
     */
    orbitals: Array<WaypointOrbital>;
    /**
     * The symbol of the parent waypoint, if this waypoint is in orbit around another waypoint. Otherwise this value is undefined.
     * @type {string}
     * @memberof Waypoint
     */
    orbits?: string;
    /**
     * 
     * @type {WaypointFaction}
     * @memberof Waypoint
     */
    faction?: WaypointFaction;
    /**
     * The traits of the waypoint.
     * @type {Array<WaypointTrait>}
     * @memberof Waypoint
     */
    traits: Array<WaypointTrait>;
    /**
     * The modifiers of the waypoint.
     * @type {Array<WaypointModifier>}
     * @memberof Waypoint
     */
    modifiers?: Array<WaypointModifier>;
    /**
     * 
     * @type {Chart}
     * @memberof Waypoint
     */
    chart?: Chart;
    /**
     * True if the waypoint is under construction.
     * @type {boolean}
     * @memberof Waypoint
     */
    isUnderConstruction: boolean;
}



/**
 * Check if a given object implements the Waypoint interface.
 */
export function instanceOfWaypoint(value: object): value is Waypoint {
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('systemSymbol' in value) || value['systemSymbol'] === undefined) return false;
    if (!('x' in value) || value['x'] === undefined) return false;
    if (!('y' in value) || value['y'] === undefined) return false;
    if (!('orbitals' in value) || value['orbitals'] === undefined) return false;
    if (!('traits' in value) || value['traits'] === undefined) return false;
    if (!('isUnderConstruction' in value) || value['isUnderConstruction'] === undefined) return false;
    return true;
}

export function WaypointFromJSON(json: any): Waypoint {
    return WaypointFromJSONTyped(json, false);
}

export function WaypointFromJSONTyped(json: any, ignoreDiscriminator: boolean): Waypoint {
    if (json == null) {
        return json;
    }
    return {
        
        'symbol': json['symbol'],
        'type': WaypointTypeFromJSON(json['type']),
        'systemSymbol': json['systemSymbol'],
        'x': json['x'],
        'y': json['y'],
        'orbitals': ((json['orbitals'] as Array<any>).map(WaypointOrbitalFromJSON)),
        'orbits': json['orbits'] == null ? undefined : json['orbits'],
        'faction': json['faction'] == null ? undefined : WaypointFactionFromJSON(json['faction']),
        'traits': ((json['traits'] as Array<any>).map(WaypointTraitFromJSON)),
        'modifiers': json['modifiers'] == null ? undefined : ((json['modifiers'] as Array<any>).map(WaypointModifierFromJSON)),
        'chart': json['chart'] == null ? undefined : ChartFromJSON(json['chart']),
        'isUnderConstruction': json['isUnderConstruction'],
    };
}

export function WaypointToJSON(json: any): Waypoint {
    return WaypointToJSONTyped(json, false);
}

export function WaypointToJSONTyped(value?: Waypoint | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'symbol': value['symbol'],
        'type': WaypointTypeToJSON(value['type']),
        'systemSymbol': value['systemSymbol'],
        'x': value['x'],
        'y': value['y'],
        'orbitals': ((value['orbitals'] as Array<any>).map(WaypointOrbitalToJSON)),
        'orbits': value['orbits'],
        'faction': WaypointFactionToJSON(value['faction']),
        'traits': ((value['traits'] as Array<any>).map(WaypointTraitToJSON)),
        'modifiers': value['modifiers'] == null ? undefined : ((value['modifiers'] as Array<any>).map(WaypointModifierToJSON)),
        'chart': ChartToJSON(value['chart']),
        'isUnderConstruction': value['isUnderConstruction'],
    };
}

