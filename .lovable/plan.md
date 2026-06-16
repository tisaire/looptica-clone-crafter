# Apply delete-tagged findings only

Scope: only the items tagged **delete** in the audit. No `shrink`/`yagni` edits (LazyCarousel and RedirectHandler stay as-is).

## Files to delete (27)

Unused shadcn UI primitives (never imported anywhere in `src/`):
- `src/components/ui/sidebar.tsx`
- `src/components/ui/chart.tsx`
- `src/components/ui/menubar.tsx`
- `src/components/ui/context-menu.tsx`
- `src/components/ui/dropdown-menu.tsx`
- `src/components/ui/form.tsx`
- `src/components/ui/command.tsx`
- `src/components/ui/alert-dialog.tsx`
- `src/components/ui/drawer.tsx`
- `src/components/ui/pagination.tsx`
- `src/components/ui/navigation-menu.tsx`
- `src/components/ui/breadcrumb.tsx`
- `src/components/ui/toggle-group.tsx`
- `src/components/ui/alert.tsx`
- `src/components/ui/input-otp.tsx`
- `src/components/ui/calendar.tsx`
- `src/components/ui/tabs.tsx`
- `src/components/ui/avatar.tsx`
- `src/components/ui/scroll-area.tsx`
- `src/components/ui/resizable.tsx`
- `src/components/ui/radio-group.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/toaster.tsx` (app uses Sonner)
- `src/components/ui/checkbox.tsx`
- `src/components/ui/popover.tsx`

Other dead code:
- `src/hooks/use-mobile.tsx` (only consumer was sidebar)
- `src/utils/criticalCssExtractor.js` (commented-out stub)

## Dependencies to remove from `package.json` (11)

All only referenced by files being deleted above:
`recharts`, `@tanstack/react-query`, `react-hook-form`, `@hookform/resolvers`, `zod`, `date-fns`, `cmdk`, `vaul`, `input-otp`, `react-resizable-panels`, `react-day-picker`.

Note: `@tanstack/react-query` — re-verify no usage in `App.tsx`/`main.tsx` before removing; drop only if truly unused.

## Verification steps

1. After deletes, run a project-wide grep for each removed module path and package name to confirm zero remaining imports.
2. Let the build run; fix any stray reference by removing the import (not by restoring the file).

## Out of scope

- `LazyCarousel.tsx` (tagged `yagni`) — keep.
- `RedirectHandler.tsx` duplicate entries (tagged `shrink`) — keep.

**Estimated impact:** ~3,600 lines removed, 27 files deleted, 11 deps dropped.
