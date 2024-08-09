import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

import { type Cookie } from 'lucia'

import { validateRequest } from './lucia'

export type AuthSession = {
  session: {
    user: {
      id: string
      name?: string
      email?: string
      username?: string
    }
  } | null
}
export const getUserAuth = async (): Promise<AuthSession> => {
  const { session, user } = await validateRequest()
  if (!session) return { session: null }
  return {
    session: {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    },
  }
}

export const checkAuth = async () => {
  const { session } = await validateRequest()
  if (!session) redirect('/sign-in')
}

export const genericError = { error: 'Error, please try again.' }

export const setAuthCookie = (cookie: Cookie) => {
  cookies().set(cookie.name, cookie.value, cookie.attributes); // <- suggested approach from the docs, but does not work with `next build` locally
  cookies().set(cookie);
}
