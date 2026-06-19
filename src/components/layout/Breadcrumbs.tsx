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
  const homeAbsoluteUrl = `${BASE_URL}/${language}`;

  // Build absolute URL helper for locale-relative paths like "/services/orto-k".
  const toAbsolute = (localePath: string) =>
    `${BASE_URL}/${language}${localePath.startsWith('/') ? localePath : `/${localePath}`}`;

  // JSON-LD items: only include entries with real URLs. Always include Home and the current page.
  const lastItem = items[items.length - 1];

  const derivedSchema: BreadcrumbItem[] = [
    { label: homeLabel, path: homeAbsoluteUrl },
    ...items
      .slice(0, -1)
      .filter((it) => !!it.path)
      .map((it) => ({ label: it.label, path: toAbsolute(it.path as string) })),
    { label: lastItem?.label ?? '', path: toAbsolute(currentPath) },
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
              {/* Home crumb (always first, always a link) */}
              <li className="flex items-center gap-2">
                <Link
                  to={`/${language}`}
                  className="bg-white px-3 py-1 rounded-md shadow-sm text-gray-700 hover:text-[#55afa9] transition-colors"
                >
                  {homeLabel}
                </Link>
              </li>
              {items.map((crumb, idx) => {
                const isLast = idx === items.length - 1;
                return (
                  <li key={`${crumb.label}-${idx}`} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-gray-400" aria-hidden="true" />
                    {isLast ? (
                      <span
                        aria-current="page"
                        className="bg-white px-3 py-1 rounded-md shadow-sm text-[#55afa9] font-medium"
                      >
                        {crumb.label}
                      </span>
                    ) : crumb.path ? (
                      <Link
                        to={`/${language}${crumb.path}`}
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