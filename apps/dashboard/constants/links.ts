export const ORG_HEADER_LINKS = Object.freeze({
  '/org/[id]': {
    root: true,
    label: 'Overview',
    disabled: false,
  },
  '/org/[id]/activity': {
    root: false,
    label: 'Activity',
    disabled: true,
  },
  '/org/[id]/settings': {
    root: false,
    label: 'Settings',
    disabled: false,
  },
});

export const PROJECT_HEADER_LINKS = Object.freeze({
  '/project/[id]': {
    root: true,
    label: 'Project',
    disabled: false,
  },
  '/project/[id]/logs': {
    root: false,
    label: 'Logs',
    disabled: false,
  },
  '/project/[id]/analytics': {
    root: false,
    label: 'Analytics',
    disabled: true,
  },
  '/project/[id]/settings': {
    root: false,
    label: 'Settings',
    disabled: false,
  },
});
