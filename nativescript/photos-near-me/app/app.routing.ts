import { ImagesListComponent } from "./components/imagesList-component/imagesList.component";
import { ImageComponent } from "./components/image-component/image.component";

export const routes = [
    { path: "", component: ImagesListComponent },
    { path: "image-component/:photo_id", component: ImageComponent },
];

export const navigatableComponents = [
    ImagesListComponent,
    ImageComponent
];
