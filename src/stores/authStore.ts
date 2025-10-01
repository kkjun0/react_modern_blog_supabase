import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { Claims } from '../types/user';
import type { Profile } from '../types/profiles';
import supabase from '../utils/supabase';

type AuthStore = {
  isLoading: boolean; // 데이터 패칭 로딩 여부
  claims: Claims; // JWTPayload(사용자 정보)
  profile: Profile | null; // Profiles 테이블의 데이터
  setProfile: (profile: Profile | null) => void;
  setClaims: (c: Claims) => void;
  hydrateFromAuth: () => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      immer((set) => ({
        isLoading: true, // 데이터 패칭 로딩 여부
        claims: null, // JWTPayload
        profile: null, // profiles 테이블 데이터
        setProfile: (profile: Profile | null) =>
          set((state) => {
            state.profile = profile;
          }),
        setClaims: (c: Claims) =>
          set((state) => {
            state.claims = c;
          }),
        hydrateFromAuth: async () => {
          set({ isLoading: true });
          const { data, error } = await supabase.auth.getClaims();
          if (error) {
            // 세션 없음 or 초기화 전일 수 있음.
            set({ claims: null, profile: null, isLoading: false });
            return;
          }

          const claims = data?.claims as Claims;
          set({ claims: claims });

          if (claims?.sub) {
            const { data: profiles, error: profilesError } = await supabase
              .from('profiles')
              .select('*')
              .eq('id', claims?.sub || '') // 현재 로그인한 사용자의 id와 일치하는 프로필만 조회
              .single(); // 단일 행을 기대하므로 single() 사용

            if (profilesError) {
              set({ claims: null, profile: null, isLoading: false });
            }
            set({ profile: profiles ?? null });
          }

          set({ isLoading: false });
        },
        clearAuth: () =>
          set((state) => {
            state.claims = null;
            state.profile = null;
          }),
      })),
      { name: 'auth-store' }
    )
  )
);
