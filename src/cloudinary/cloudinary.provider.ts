import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: () => {
    return v2.config({
      cloud_name: 'dhphpkm1v',
      api_key: '125382659941329',
      api_secret: 'izcLEDdtHh8E5Uo3CKQhIOn8uRo',
    });
  },
};
