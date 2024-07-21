import React from 'react'
import Link from 'next/link'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'
import { ThemeSwitcher } from './ThemeSwitcher'

const AppNavbar = () => {
  return (
    <Navbar isBordered maxWidth="2xl">
      <NavbarBrand>
        <Link href="/">
          <p className="font-bold text-inherit">AndarBien.com</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/api-doc" className="text-foreground">
            API Docs
          </Link>
        </NavbarItem>
        <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
  )
}

export default AppNavbar
