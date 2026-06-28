import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { listContactSubmissions } from "@/lib/contact.functions";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin")({
  component: AdminPage,
  head: () => ({ meta: [{ title: "Admin | Rivik Labs" }] }),
});

function AdminPage() {
  const navigate = useNavigate();
  const fetchSubs = useServerFn(listContactSubmissions);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["contact_submissions"],
    queryFn: () => fetchSubs(),
  });

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  return (
    <main className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl font-bold">Contact submissions</h1>
          <div className="flex gap-2">
            <button onClick={() => refetch()} className="rounded-full border border-border px-4 py-2 text-sm hover:bg-accent">
              Refresh
            </button>
            <button onClick={signOut} className="rounded-full bg-foreground text-background px-4 py-2 text-sm">
              Sign out
            </button>
          </div>
        </div>

        {isLoading && <p className="text-muted-foreground">Loading…</p>}
        {error && (
          <p className="text-destructive text-sm">
            {(error as Error).message === "Forbidden"
              ? "Your account is not an admin. Ask an existing admin to grant you the 'admin' role."
              : (error as Error).message}
          </p>
        )}

        {data && data.length === 0 && <p className="text-muted-foreground">No submissions yet.</p>}

        <div className="space-y-3">
          {data?.map((s: any) => (
            <div key={s.id} className="rounded-2xl glass p-5">
              <div className="flex items-center justify-between text-sm">
                <div className="font-medium">{s.name} <span className="text-muted-foreground">· {s.email}</span></div>
                <div className="text-xs text-muted-foreground">{new Date(s.created_at).toLocaleString()}</div>
              </div>
              <p className="mt-2 text-sm whitespace-pre-wrap">{s.message}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
