"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { RolesTable } from "@/components/RolesTable";
import { TableDemo } from "@/components/Table";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function UserDashboard() {
  return (
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
        <RolesTable/>
        <br />
        <h3>List of Recent Users</h3>
        <TableDemo/>
      </SidebarInset>
    </SidebarProvider>
  );
}
