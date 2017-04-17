import { Injectable } from "@angular/core";
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from 'ui/enums';
var humanizeDistance = require("humanize-distance");

@Injectable()
export class GeolocationService {

    public latitude: number;
    public longitude: number;

    public getLocation(): Promise<any> {
        return new Promise(
            (resolve, reject) => {
                if (!geolocation.isEnabled()) {
                    geolocation.enableLocationRequest(true).then(() => {
                        this._getCurrentLocation()
                            .then(resolve)
                            .catch(reject);
                    });
                }
                else {
                    this._getCurrentLocation()
                        .then(resolve)
                        .catch(reject);
                }
            }
        );
    }

    public getDistanceFrom(latitude: number, longitude: number): string {
        return humanizeDistance({ latitude: latitude, longitude: longitude }, { latitude: this.latitude, longitude: this.longitude }, 'en-US', 'us');
    }

    private _getCurrentLocation(): Promise<any> {
        return new Promise(
            (resolve, reject) => {
                geolocation.getCurrentLocation({
                    desiredAccuracy: Accuracy.high,
                    timeout: 20000 
                })
                .then(location => {

                    this.latitude = location.latitude;
                    this.longitude = location.longitude;

                    resolve();
                })
                .catch(error => {
                    reject(error);
                })
            }
        );
    }

}
