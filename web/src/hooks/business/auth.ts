import { useAuthStore } from '@/store/modules/auth';

export function useAuth() {
  const authStore = useAuthStore();

  function hasAuth(codes: string | string[]) {
    if (!authStore.isLogin) {
      return false;
    }

    if (authStore.userInfo.user.roleId === 1) return true;

    if (typeof codes === 'string') {
      return authStore.userInfo.permissions.includes(codes);
    }

    return codes.some(code => authStore.userInfo.permissions.includes(code));
  }

  return {
    hasAuth
  };
}