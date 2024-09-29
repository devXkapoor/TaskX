import { handleSignOut } from "@/actions/AuthActions"
import { Button } from "@/components/ui/button"
import { signOut } from "@/lib/auth"

export function SignOutButtonComponent() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <Button type="submit">Sign Out</Button>
    </form>
  )
}