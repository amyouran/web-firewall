/* eslint-disable */
/* prettier-ignore */
// Generated by elegant-router
// Read more: https://github.com/soybeanjs/elegant-router

import type { GeneratedRoute } from '@elegant-router/types';

export const generatedRoutes: GeneratedRoute[] = [
  {
    name: '403',
    path: '/403',
    component: 'layout.blank$view.403',
    meta: {
      title: '403',
      i18nKey: 'route.403',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: '404',
    path: '/404',
    component: 'layout.blank$view.404',
    meta: {
      title: '404',
      i18nKey: 'route.404',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: '406',
    path: '/406',
    component: 'layout.base$view.406',
    meta: {
      title: '406',
      i18nKey: 'route.406',
      public: true,
      hideInMenu: true
    }
  },
  {
    name: '500',
    path: '/500',
    component: 'layout.blank$view.500',
    meta: {
      title: '500',
      i18nKey: 'route.500',
      public: true,
      hideInMenu: true,
      constant: true
    }
  },
  {
    name: 'audit',
    path: '/audit',
    component: 'layout.base',
    meta: {
      title: 'audit',
      i18nKey: 'route.audit',
      localIcon: 'menu-log',
      order: 6
    },
    children: [
      {
        name: 'audit_login',
        path: '/audit/login',
        component: 'view.audit_login',
        meta: {
          title: 'audit_login',
          i18nKey: 'route.audit_login',
          localIcon: 'menu-log_login',
          order: 1
        }
      },
      {
        name: 'audit_settings',
        path: '/audit/settings',
        component: 'view.audit_settings',
        meta: {
          title: 'audit_settings',
          i18nKey: 'route.audit_settings',
          localIcon: 'menu-log_setting',
          order: 2
        }
      }
    ]
  },
  {
    name: 'home',
    path: '/home',
    component: 'layout.base$view.home',
    meta: {
      title: 'home',
      i18nKey: 'route.home',
      localIcon: 'menu-dashboard',
      order: 1
    }
  },
  {
    name: 'iframe-page',
    path: '/iframe-page/:url',
    component: 'layout.base$view.iframe-page',
    props: true,
    meta: {
      title: 'iframe-page',
      i18nKey: 'route.iframe-page',
      constant: true,
      hideInMenu: true,
      keepAlive: true
    }
  },
  {
    name: 'login',
    path: '/login/:module(pwd-login|code-login|register|reset-pwd|bind-wechat)?',
    component: 'layout.blank$view.login',
    props: true,
    meta: {
      title: 'login',
      i18nKey: 'route.login',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: 'policy',
    path: '/policy',
    component: 'layout.base',
    meta: {
      title: 'policy',
      i18nKey: 'route.policy',
      localIcon: 'menu-policy',
      order: 3
    },
    children: [
      {
        name: 'policy_input',
        path: '/policy/input',
        component: 'view.policy_input',
        meta: {
          title: 'policy_input',
          i18nKey: 'route.policy_input',
          localIcon: 'menu-policy_input'
        }
      },
      {
        name: 'policy_input-limit',
        path: '/policy/input-limit',
        component: 'view.policy_input-limit',
        meta: {
          title: 'policy_input-limit',
          i18nKey: 'route.policy_input-limit',
          localIcon: 'menu-policy_input-limit'
        }
      },
      {
        name: 'policy_output',
        path: '/policy/output',
        component: 'view.policy_output',
        meta: {
          title: 'policy_output',
          i18nKey: 'route.policy_output',
          localIcon: 'menu-policy_output'
        }
      },
      {
        name: 'policy_output-limit',
        path: '/policy/output-limit',
        component: 'view.policy_output-limit',
        meta: {
          title: 'policy_output-limit',
          i18nKey: 'route.policy_output-limit',
          localIcon: 'menu-policy_output-limit'
        }
      }
    ]
  },
  {
    name: 'system',
    path: '/system',
    component: 'layout.base',
    meta: {
      title: 'system',
      i18nKey: 'route.system',
      localIcon: 'menu-system',
      order: 10
    },
    children: [
      {
        name: 'system_basic',
        path: '/system/basic',
        component: 'view.system_basic',
        meta: {
          title: 'system_basic',
          i18nKey: 'route.system_basic',
          localIcon: 'menu-system_setting',
          order: 1
        }
      },
      {
        name: 'system_shell',
        path: '/system/shell',
        component: 'view.system_shell',
        meta: {
          title: 'system_shell',
          i18nKey: 'route.system_shell',
          localIcon: 'menu-system_shell',
          keepAlive: true,
          order: 5
        }
      }
    ]
  },
  {
    name: 'user-center',
    path: '/user-center',
    component: 'layout.base$view.user-center',
    meta: {
      title: 'user-center',
      i18nKey: 'route.user-center',
      hideInMenu: true,
      public: true
    }
  }
];