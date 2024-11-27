"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import EditUserDialogDemo from "@/utilities/EditDialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AddUserDemo } from "@/utilities/AddUser";

// Sample user data with updated roles
const data = [
  { id: "1", name: "Admin01", role: "User", email: "ken99@yahoo.com" },
  { id: "2", name: "Admin02", role: "Employee", email: "Abe45@gmail.com" },
  { id: "3", name: "Super Admin", role: "Viewer", email: "Monserrat44@gmail.com" },
  { id: "4", name: "User02", role: "Admin", email: "Silas22@gmail.com" },
  { id: "5", name: "User", role: "Editor", email: "carmella@hotmail.com" },
];

export function UserRolesTable() {
  const [isModalOpen, setIsModalOpen] = useState(false); // To track the dialog open state
  const [selectedUser, setSelectedUser] = useState(null); // To store the user being edited
  const [userData, setUserData] = useState(data); // User data state

  // Function to open the edit dialog with the selected user data
  const handleEditUser = (user : any) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // Function to close the dialog
  const closeDialog = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  // Function to save updated user data
  const onSaveUser = (updatedUser : any) => {
    setUserData((prevData) =>
      prevData.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    closeDialog();
  };

  // Function to delete a user
  const handleDeleteUser = (userId : any) => {
    setUserData((prevData) => prevData.filter((user) => user.id !== userId));
  };

  // Function to add a user to the table
  const handleAddUser = (newUser : any) => {
    setUserData((prevData) => [...prevData, newUser]);
  };

  return (
    <div className="w-full">
      {/* Add User button and functionality */}
      <AddUserDemo onAddUser={handleAddUser} />
      <br />
      <br />
      <div className="rounded-md border overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Select</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userData.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Checkbox aria-label="Select row" />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem
                        onClick={() => navigator.clipboard.writeText(user.id)}
                      >
                        Copy User ID
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleEditUser(user)}>
                        Edit User Roles
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red-600"
                      >
                        Revoke User Roles
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Render EditUserDialogDemo only when isModalOpen is true */}
      {isModalOpen && selectedUser && (
        <EditUserDialogDemo
          open={isModalOpen}
          onClose={closeDialog}
          onSave={onSaveUser}
          user={selectedUser}
        />
      )}
    </div>
  );
}
