import React from 'react'
import Image from 'next/image'
import { checkUser } from '../lib/checkUser'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from './ui/button'
import { LayoutDashboard, PenBox } from 'lucide-react'

const Header = async () => {
  await checkUser();
  return (
    <div className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
      <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>

        <Link href='/'>
          <Image src={"/logo.png"}
            alt="Logo image"
            height={60}
            width={200}
            className="h-12 w-auto object-contain" />
        </Link>

        <div className='flex items-center gap-4'>
          <SignedIn>
            <Link href="/dashboard" className='text-gray-600 hover:text-blue-600'>
              <Button variant="outline">
                <LayoutDashboard size={18}>

                </LayoutDashboard>
                <span className='hidden md:inline'>Dashboard</span>
              </Button>
            </Link>

            <Link href="/transaction/create">
              <Button>

                <PenBox size={18}></PenBox>
                <span className='hidden md:inline'>Transaction</span>
              </Button>
            </Link>
          </SignedIn>


          <SignedOut>
            <SignInButton forceRedirectUrl='/dashboard'>
              <Button variant="outline">Sign in </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{
              elements: {
                avatarBox: "h-20 w-20"
              }
            }} />
          </SignedIn>
        </div>
      </nav>
    </div>
  )
}

export default Header
