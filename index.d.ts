declare enum Category {FACE_FILTERS = 'Face Filters'}
declare enum StereoscopicType {NONE = 'none', TOP_BOTTOM = 'top-bottom', LEFT_RIGHT = 'left-right'}
declare enum MediaType {PHOTO = 'photo', VIDEO = 'video', MODEL_3D = '3d'}

declare namespace SvrfApiClient {
  export interface Enums {
    category: typeof Category;
    stereoscopicType: typeof StereoscopicType;
    mediaType: typeof MediaType;
  }

  export interface MediaFiles {
    images: Object;
    videos: Object;
    stereo: Object;
  }

  export interface Media {
    id: string;
    src: string;
    title: string;
    description: string;
    authors: Array<string>;
    site: string;
    canonical: string;
    url: string;
    embedUrl: string;
    embedHtml: string;
    type: string;
    adult: boolean;
    width: number;
    height: number;
    duration: number | null;
    metadata: Object;
    files: MediaFiles;
  }

  export interface SingleMediaApiResponse {
    success: boolean;
    media: Media;
  }

  export interface MultipleMediaApiResponse {
    success: boolean;
    media: Array<Media>;
    nextPageCursor: string;
    nextPageNum: number;
    pageNum: number;
  }

  export interface AppTokenSetInfo {
    appToken: string,
    expiresIn: number;
  }

  export interface AppTokenInfo {
    appToken: string;
    expirationTime: number;
  }

  export interface Storage {
    get(): AppTokenInfo;
    set(appTokenInfo: AppTokenSetInfo): void;
    clear(): void;
  }

  export interface SvrfApiClientOptions {
    storage: Storage;
  }

  export interface HttpRequestParams {
    category?: Category;
    minimumWidth?: number;
    pageNum?: number;
    size?: number;
    stereoscopicType?: StereoscopicType;
    type?: MediaType | Array<MediaType>;
  }

  export interface AuthApi {
    authenticate(): Promise<void>;
  }

  export interface MediaApi {
    getById(id: number | string): Promise<SingleMediaApiResponse>;
    getTrending(params?: HttpRequestParams): Promise<MultipleMediaApiResponse>;
    search(query: string, params?: HttpRequestParams): Promise<MultipleMediaApiResponse>;
  }
}

declare class SvrfApiClient {
  static enums: SvrfApiClient.Enums;
  constructor(apiKey: string, options?: SvrfApiClient.SvrfApiClientOptions);
  auth: SvrfApiClient.AuthApi;
  media: SvrfApiClient.MediaApi;
}

export = SvrfApiClient;