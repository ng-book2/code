export class PhotosSearchResponse {
    id: string;
    owner: string;
    secret: string;
    server: number;
    title: string;
    latitude: string;
    longitude: string;
    datetaken: string;
    url_t: string;
    url_m: string;
    url_q: string;
    url_n: string;
    distance: string;

    constructor() {
        this.url_n = " ";
    }
}