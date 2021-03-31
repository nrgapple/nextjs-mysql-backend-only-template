import { useEntries } from "@/lib/swr-hooks";

export default function IndexPage() {
  const { entries, isLoading } = useEntries();

  if (isLoading) {
    return <div>Loading all</div>;
  }

  return (
    <div>
      <h1>Hello World</h1>
      <p>{JSON.stringify(entries)}</p>
    </div>
  );
}
