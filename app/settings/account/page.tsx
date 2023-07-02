import { Separator } from "../../../components/seperator"
import { AccountForm } from "./account-form"

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-zinc-200">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator className="border border-white/60" />
      <AccountForm />
    </div>
  )
}
