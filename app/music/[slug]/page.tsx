import { notFound } from "next/navigation";
import { releases } from "@/data/releases";
import ReleaseClientView from "./ReleaseClientView";

export function generateStaticParams() {
  return releases.map((release) => ({
    slug: release.slug,
  }));
}

export default async function ReleaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const release = releases.find((r) => r.slug === slug);

  if (!release) {
    notFound();
  }

  const relatedReleases = releases.filter((r) => r.slug !== slug);

  return <ReleaseClientView release={release} relatedReleases={relatedReleases} />;
}
