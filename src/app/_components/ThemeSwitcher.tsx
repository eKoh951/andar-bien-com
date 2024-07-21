'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Switch } from '@nextui-org/react'
import { SunIcon } from '../_icons/SunIcon'
import { MoonIcon } from '../_icons/MoonIcon'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Switch
      defaultSelected={theme === 'dark'}
      size="lg"
      color="secondary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onValueChange={(isSelected) => {
        setTheme(isSelected ? 'dark' : 'light')
      }}
    />
  )
}
