import { AppSidebar } from '@/components/app-sidebar'
import { Charts } from '@/components/Charts'
import { DataTableDemo } from '@/components/DataTable'
import { RolesTable } from '@/components/RolesTable'
import ToggleThemeButton from '@/components/ToggleThemeButton'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { UserRolesTable } from '@/components/UserRolesTable'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import React from 'react'

const page = () => {
  return (
    <>
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
       <UserRolesTable/>
       <RolesTable/>
      </SidebarInset>
    </SidebarProvider>
  </>
  )
}

export default page
