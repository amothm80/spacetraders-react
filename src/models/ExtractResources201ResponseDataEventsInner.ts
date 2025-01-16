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

import type { ShipConditionEvent } from './ShipConditionEvent';
import {
    instanceOfShipConditionEvent,
    ShipConditionEventFromJSON,
    ShipConditionEventFromJSONTyped,
    ShipConditionEventToJSON,
} from './ShipConditionEvent';

/**
 * @type ExtractResources201ResponseDataEventsInner
 * 
 * @export
 */
export type ExtractResources201ResponseDataEventsInner = ShipConditionEvent;

export function ExtractResources201ResponseDataEventsInnerFromJSON(json: any): ExtractResources201ResponseDataEventsInner {
    return ExtractResources201ResponseDataEventsInnerFromJSONTyped(json, false);
}

export function ExtractResources201ResponseDataEventsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtractResources201ResponseDataEventsInner {
    if (json == null) {
        return json;
    }
    if (instanceOfShipConditionEvent(json)) {
        return ShipConditionEventFromJSONTyped(json, true);
    }

    return {} as any;
}

export function ExtractResources201ResponseDataEventsInnerToJSON(json: any): any {
    return ExtractResources201ResponseDataEventsInnerToJSONTyped(json, false);
}

export function ExtractResources201ResponseDataEventsInnerToJSONTyped(value?: ExtractResources201ResponseDataEventsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfShipConditionEvent(value)) {
        return ShipConditionEventToJSON(value as ShipConditionEvent);
    }

    return {};
}

