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
 * A mount is installed on the exterier of a ship.
 * @export
 * @interface ShipMount
 */
export interface ShipMount {
    /**
     * Symbo of this mount.
     * @type {string}
     * @memberof ShipMount
     */
    symbol: ShipMountSymbolEnum;
    /**
     * Name of this mount.
     * @type {string}
     * @memberof ShipMount
     */
    name: string;
    /**
     * Description of this mount.
     * @type {string}
     * @memberof ShipMount
     */
    description?: string;
    /**
     * Mounts that have this value, such as mining lasers, denote how powerful this mount's capabilities are.
     * @type {number}
     * @memberof ShipMount
     */
    strength?: number;
    /**
     * Mounts that have this value denote what goods can be produced from using the mount.
     * @type {Array<string>}
     * @memberof ShipMount
     */
    deposits?: Array<ShipMountDepositsEnum>;
    /**
     * 
     * @type {ShipRequirements}
     * @memberof ShipMount
     */
    requirements: ShipRequirements;
}


/**
 * @export
 */
export const ShipMountSymbolEnum = {
    GasSiphonI: 'MOUNT_GAS_SIPHON_I',
    GasSiphonIi: 'MOUNT_GAS_SIPHON_II',
    GasSiphonIii: 'MOUNT_GAS_SIPHON_III',
    SurveyorI: 'MOUNT_SURVEYOR_I',
    SurveyorIi: 'MOUNT_SURVEYOR_II',
    SurveyorIii: 'MOUNT_SURVEYOR_III',
    SensorArrayI: 'MOUNT_SENSOR_ARRAY_I',
    SensorArrayIi: 'MOUNT_SENSOR_ARRAY_II',
    SensorArrayIii: 'MOUNT_SENSOR_ARRAY_III',
    MiningLaserI: 'MOUNT_MINING_LASER_I',
    MiningLaserIi: 'MOUNT_MINING_LASER_II',
    MiningLaserIii: 'MOUNT_MINING_LASER_III',
    LaserCannonI: 'MOUNT_LASER_CANNON_I',
    MissileLauncherI: 'MOUNT_MISSILE_LAUNCHER_I',
    TurretI: 'MOUNT_TURRET_I'
} as const;
export type ShipMountSymbolEnum = typeof ShipMountSymbolEnum[keyof typeof ShipMountSymbolEnum];

/**
 * @export
 */
export const ShipMountDepositsEnum = {
    QuartzSand: 'QUARTZ_SAND',
    SiliconCrystals: 'SILICON_CRYSTALS',
    PreciousStones: 'PRECIOUS_STONES',
    IceWater: 'ICE_WATER',
    AmmoniaIce: 'AMMONIA_ICE',
    IronOre: 'IRON_ORE',
    CopperOre: 'COPPER_ORE',
    SilverOre: 'SILVER_ORE',
    AluminumOre: 'ALUMINUM_ORE',
    GoldOre: 'GOLD_ORE',
    PlatinumOre: 'PLATINUM_ORE',
    Diamonds: 'DIAMONDS',
    UraniteOre: 'URANITE_ORE',
    MeritiumOre: 'MERITIUM_ORE'
} as const;
export type ShipMountDepositsEnum = typeof ShipMountDepositsEnum[keyof typeof ShipMountDepositsEnum];


/**
 * Check if a given object implements the ShipMount interface.
 */
export function instanceOfShipMount(value: object): value is ShipMount {
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('requirements' in value) || value['requirements'] === undefined) return false;
    return true;
}

export function ShipMountFromJSON(json: any): ShipMount {
    return ShipMountFromJSONTyped(json, false);
}

export function ShipMountFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipMount {
    if (json == null) {
        return json;
    }
    return {
        
        'symbol': json['symbol'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'strength': json['strength'] == null ? undefined : json['strength'],
        'deposits': json['deposits'] == null ? undefined : json['deposits'],
        'requirements': ShipRequirementsFromJSON(json['requirements']),
    };
}

export function ShipMountToJSON(json: any): ShipMount {
    return ShipMountToJSONTyped(json, false);
}

export function ShipMountToJSONTyped(value?: ShipMount | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'symbol': value['symbol'],
        'name': value['name'],
        'description': value['description'],
        'strength': value['strength'],
        'deposits': value['deposits'],
        'requirements': ShipRequirementsToJSON(value['requirements']),
    };
}

