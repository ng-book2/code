interface Owner {
    username: string;
    realname: string;
}

export class GetInfoResponse {
    owner: Owner;
    farm: number;
    server: number;
    secret: string;
    id: number;
    url: string;
}