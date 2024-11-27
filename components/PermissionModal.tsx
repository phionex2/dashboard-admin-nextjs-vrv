import React from "react";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface PermissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (permission: Partial<Permission>) => void;
  permission?: Permission;
  title: string;
  availableRoles: string[];
}

interface Permission {
  id: string;
  name: string;
  description: string;
  type: string;
  roles: string[];
}

const permissionTypes = ["Create", "Read", "Update", "Delete", "Custom"];

export default function PermissionModal({
  isOpen,
  onClose,
  onSubmit,
  permission,
  title,
  availableRoles,
}: PermissionModalProps) {
  const [formData, setFormData] = React.useState({
    name: permission?.name || "",
    description: permission?.description || "",
    type: permission?.type || "Custom",
    roles: permission?.roles || [],
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const handleRoleToggle = (role: string) => {
    setFormData((prev) => ({
      ...prev,
      roles: prev.roles.includes(role)
        ? prev.roles.filter((r) => r !== role)
        : [...prev.roles, role],
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="dark:bg-[#0A0A0A] bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="Name">Name</Label>
                <Input type="text" id="Name" placeholder="Full Name" required value={formData.name} onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                } />
              </div>
            </div>

            <div>
            <Label htmlFor="Description">Description</Label>
              <Textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Type
              </label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Roles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Permissions</SelectLabel>
                    <SelectItem value="apple">Create</SelectItem>
                    <SelectItem value="banana">Read</SelectItem>
                    <SelectItem value="blueberry">Update</SelectItem>
                    <SelectItem value="grapes">Delete</SelectItem>
                    <SelectItem value="pineapple">Custom</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">
                Assign to Roles
              </label>
              <div className="space-y-2">
                {availableRoles.map((role) => (
                  <label key={role} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.roles.includes(role)}
                      onChange={() => handleRoleToggle(role)}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                    />
                    <span className="ml-2 text-sm text-gray-700 dark:text-white">
                      {role}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 dark:text-white dark:hover:text-black"
            >
              Cancel
            </button>
            <Button
              type="submit"
             
            >
              {permission ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
