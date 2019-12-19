import { GetPhotosParamType, GetPhotosReturnType } from 'react-native';
export default function useCameraRoll(): (GetPhotosReturnType | ((config?: GetPhotosParamType) => Promise<void>) | ((tag: string, type?: "photo" | "video") => Promise<void>))[];
