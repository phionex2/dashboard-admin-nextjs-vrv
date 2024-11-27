import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuShortcut } from "./ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      items: [
        {
          title: "All Users",
          url: "/users",
          isActive: false,
        },
      ],
    },
    {
      title: "Users",
      url: "#",
      items: [
        {
          title: "Manage Users",
          url: "/user-management",
          isActive: false,
        },
        {
          title: "User Roles",
          url: "/roles",
          isActive: false,
        },
        {
          title: "User Status",
          url: "/status",
          isActive: false,
        },
      ],
    },
    {
      title: "Roles & Permissions",
      url: "/",
      items: [
        {
          title: "Permissions",
          url: "/roles-and-permissions",
          isActive: false,
        },
      ],
    },
    {
      title: "Securty and Authentication",
      url: "/",
      items: [
        {
          title: "Authentication",
          url: "#",
          isActive: false,
        },
        {
          title: "Security",
          url: "#",
          isActive: false,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">VRV Dashboard</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
            <Avatar>
                  <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D0BAQHKiYE5W6PMYw/company-logo_200_200/company-logo_200_200/0/1730042984369?e=2147483647&v=beta&t=fSDePAWhiRIdsKIWUFNihMaMDfzFNicJaEewwi6z6vw" className="rounded-full h-11 w-11" />
                  <AvatarFallback>VRV</AvatarFallback>
                </Avatar>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <br />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
