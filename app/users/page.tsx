import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { DataTableDemo } from "@/components/DataTable";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import { Card } from "@/components/ui/card";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TooltipChartDemo } from "@/utilities/ToolTipChart";
import { ActivePieChartDemo } from "@/utilities/ActivePieChart";
import { Charts } from "@/components/Charts";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";


function Page() {
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
        <header className="flex h-16 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <h1>VRV Security Admin Dashboard</h1>
        </header>
        <AspectRatio ratio={16 / 9}>
        <TooltipChartDemo />
        <Charts/>
        </AspectRatio>
        <DataTableDemo />
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Page;
