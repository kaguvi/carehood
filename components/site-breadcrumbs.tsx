'use client'
import Link from 'next/link'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import {usePathname} from 'next/navigation'
import { Slash } from 'lucide-react'


const Separator = () => {
  return (
    <BreadcrumbSeparator>
      <Slash />
    </BreadcrumbSeparator>
  )
}

const allUpperCaseNames = ['CQC', 'UK']

const CustomBreadcrumb = () => {
  const pathname = usePathname()

  // Create a function to create the breadcrumb name from a segment

  const createBreadcrumbName = (segment: string) => {
    const name = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    const nameParts = name.split(' ')
    const formattedName = nameParts.map(part => allUpperCaseNames.includes(part.toUpperCase()) ? part.toUpperCase() : part)
    return formattedName.join(' ')
  };

  // Split the path and filter out empty segments
  const pathSegments = pathname.split('/').filter(Boolean);

  let breadcrumbs;
  if (pathSegments.length > 3) {
    // Display home, ellipsis, and the last two segments
    const lastTwoSegments = pathSegments.slice(-2);
    breadcrumbs = [
      <BreadcrumbItem key="ellipsis">...</BreadcrumbItem>,
      ...lastTwoSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, pathSegments.length - 2 + index + 1).join('/');
        return (
          <BreadcrumbItem key={href}>
            <Link href={href}>
              {createBreadcrumbName(segment)}
            </Link>
          </BreadcrumbItem>
        );
      })
    ];
  } else {
    // Display all segments as breadcrumbs
    breadcrumbs = pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      const isLast = index === pathSegments.length - 1;
      return (
        <>
          <Separator key={`separator-${href}`}/>
          <BreadcrumbItem key={href}>
            {!isLast ? (
              <Link href={href}>
                {createBreadcrumbName(segment)}
              </Link>
            ) : (
              <span>{createBreadcrumbName(segment)}</span>
            )}
          </BreadcrumbItem>
        </>
      )
    })
  }

  return (
    <Breadcrumb className="mb-3">
      <BreadcrumbList>
        <BreadcrumbItem key="home-link">
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        {breadcrumbs}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb
