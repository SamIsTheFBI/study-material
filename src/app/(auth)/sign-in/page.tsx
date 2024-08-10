import SignInForm from "@/components/auth/SignInForm";

export default function SignInPage() {
  return (
    <>
      <main className="flex space-y-6 min-h-dvh">
        <section className="m-auto mt-12 lg:mt-24">
          <SignInForm />
        </section>
      </main>
    </>
  )
}
