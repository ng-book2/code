declare module interestAppNg1 {

  export interface Pin {
    title: string;
    description: string;
    user_name: string;
    avatar_src: string;
    src: string;
    url: string;
    faved: boolean;
    id: string;
  }

  export interface PinsService {
    pins(): Promise<Pin[]>;
    addPin(pin: Pin): Promise<any>;
  }

}

declare module 'interestAppNg1' {
  export = interestAppNg1;
}
