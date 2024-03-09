import { create } from "zustand";

// Định nghĩa kiểu dữ liệu cho trạng thái màn hình khởi động (splash screen)
type SplashScreenState = {
  isLoadingScreen: boolean;
};

// Định nghĩa kiểu dữ liệu cho toàn bộ trạng thái và hành động của ứng dụng
type Store = {
  isLoadingScreen: boolean;
  setIsLoadingScreen: (isLoading: boolean) => void; // Cập nhật kiểu dữ liệu ở đây
};

// Trạng thái ban đầu của màn hình khởi động
const initialState: SplashScreenState = {
  isLoadingScreen: true,
};

// Tạo hook sử dụng zustand
export const useSplashScreen = create<Store>((set) => ({
  ...initialState,
  setIsLoadingScreen: (isLoading) => {
    set((state) => ({
      ...state,
      isLoadingScreen: isLoading, // Cập nhật trạng thái ở đây
    }));
  },
}));
