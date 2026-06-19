import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BASE_URL = 'https://looptica.com';

export interface BreadcrumbItem {
  label: string;
  /** Locale-relative path (e.g. "/services/orto-k"). Omit for non-clickable visual-only crumbs. */
  path?: string;
}

interface BreadcrumbsProps {
  /** Intermediate + current crumbs (Home is auto-prepended). The last item is treated as the current page. */
  items: BreadcrumbItem[];
  /** Locale-relative current path (e.g. "/services/orto-k") used as the canonical URL for the last JSON-LD item. */
  currentPath: string;
  /** Optional override for JSON-LD items. If omitted, derived from Home + clickable items + current page. */
  schemaItems?: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, currentPath, schemaItems }) => {
  const { t, language } = useLanguage();

  const homeLabel = t('home');
  const homePath = `/${language}`;

  // Visible UI crumbs: Home first, then provided items. Last item = current page (not a link).
  const visibleCrumbs: BreadcrumbItem[] = [
    { label: homeLabel, path: homePath },
    ...items,
  ];

  // JSON-LD items: only include entries with real URLs. Always include Home and the current page.
  const lastItem = items[items.length - 1];
  const currentAbsoluteUrl = `${BASE_URL}/${language}${currentPath.startsWith('/') ? currentPath : `/${currentPath}`}`.replace(/\/+$/, (m) => (currentPath === '/' ? m : ''));

  const derivedSchema: BreadcrumbItem[] = [
    { label: homeLabel, path: `${BASE_URL}${homePath}` },
    // Include only intermediate items with real paths (skip visual-only)
    ...items.slice(0, -1)
      .filter((it) => !!it.path)
      .map((it) => ({ label: it.label, path: `${BASE_URL}/${language}${it.path}` })),
    // Current page (last) — always include with absolute URL
    { label: lastItem?.label ?? '', path: currentAbsoluteUrl },
  ];

  const schemaSource = schemaItems ?? derivedSchema;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaSource.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      ...(item.path ? { item: item.path } : {}),
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <div className="w-full bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm">
              {visibleCrumbs.map((crumb, idx) => {
                const isLast = idx === visibleCrumbs.length - 1;
                const fullPath = crumb.path
                  ? crumb.path.startsWith('/')
                    ? crumb.path === homePath
                      ? homePath
                      : `/${language}${crumb.path === homePath ? '' : crumb.path}`
                    : crumb.path
                  : undefined;
                // For Home crumb, path already includes language; avoid double-prefix
                const linkTo = crumb.path === homePath ? homePath : fullPath;

                return (
                  <li key={`${crumb.label}-${idx}`} className="flex items-center gap-2">
                    {idx > 0 && (
                      <ChevronRight className="h-4 w-4 text-gray-400" aria-hidden="true" />
                    )}
                    {isLast ? (
                      <span
                        aria-current="page"
                        className="bg-white px-3 py-1 rounded-md shadow-sm text-[#55afa9] font-medium"
                      >
                        {crumb.label}
                      </span>
                    ) : crumb.path ? (
                      <Link
                        to={linkTo as string}
                        className="bg-white px-3 py-1 rounded-md shadow-sm text-gray-700 hover:text-[#55afa9] transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="bg-white px-3 py-1 rounded-md shadow-sm text-gray-500">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;