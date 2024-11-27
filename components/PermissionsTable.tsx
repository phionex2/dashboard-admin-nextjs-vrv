"use client";
import React, { useState } from "react";
import { Edit, Trash2, Plus, Lock } from "lucide-react";
import DeleteConfirmModal from "./DeleteConfirmModal";
import PermissionModal from "./PermissionModal";

interface Permission {
  id: string;
  name: string;
  description: string;
  type: string;
  roles: string[];
}

const initialPermissions: Permission[] = [
  {
    id: "1",
    name: "Create Users",
    description: "Ability to create new users in the system",
    type: "Create",
    roles: ["Admin", "Manager"],
  },
  {
    id: "2",
    name: "View Users",
    description: "Ability to view user details",
    type: "Read",
    roles: ["Admin", "Manager", "User"],
  },
  {
    id: "3",
    name: "Update Users",
    description: "Ability to modify user information",
    type: "Update",
    roles: ["Admin", "Manager"],
  },
  {
    id: "4",
    name: "Delete Users",
    description: "Ability to remove users from the system",
    type: "Delete",
    roles: ["Admin"],
  },
];

const availableRoles = ["Admin", "Manager", "User"];

export default function PermissionsTable() {
  const [permissions, setPermissions] =
    useState<Permission[]>(initialPermissions);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPermission, setSelectedPermission] =
    useState<Permission | null>(null);

  const handleAddPermission = (newPermission: Partial<Permission>) => {
    const permission: Permission = {
      id: Date.now().toString(),
      name: newPermission.name!,
      description: newPermission.description!,
      type: newPermission.type!,
      roles: newPermission.roles!,
    };
    setPermissions([...permissions, permission]);
  };

  const handleEditPermission = (updatedPermission: Partial<Permission>) => {
    setPermissions(
      permissions.map((permission) =>
        permission.id === selectedPermission?.id
          ? { ...permission, ...updatedPermission }
          : permission
      )
    );
  };

  const handleDeletePermission = () => {
    if (selectedPermission) {
      setPermissions(
        permissions.filter(
          (permission) => permission.id !== selectedPermission.id
        )
      );
      setSelectedPermission(null);
    }
  };

  const getTypeColor = (type: string) => {
    const colors = {
      Create: "bg-green-100 text-green-800",
      Read: "bg-blue-100 text-blue-800",
      Update: "bg-yellow-100 text-yellow-800",
      Delete: "bg-red-100 text-red-800",
      Custom: "bg-purple-100 text-purple-800",
    };
    return colors[type as keyof typeof colors] || colors.Custom;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8 dark:bg-[#0A0A0A0A]">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-0 dark:text-white">
          Permissions List
        </h2>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Permission
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white">
          <thead className="bg-gray-50 dark:bg-[#0A0A0A0A] dark:text-white">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white">
                Permission
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white">
                Description
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white">
                Type
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white">
                Assigned Roles
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-[#0A0A0A0A] dark:text-white divide-y divide-white">
            {permissions.map((permission) => (
              <tr key={permission.id} className="">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Lock className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500 mr-2" />
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {permission.name}
                    </div> 
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-4">
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-white">
                    {permission.description}
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(
                      permission.type
                    )}`}
                  >
                    {permission.type}
                  </span>
                </td>
                <td className="px-4 sm:px-6 py-4">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {permission.roles.map((role) => (
                      <span
                        key={role}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-medium">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => {
                        setSelectedPermission(permission);
                        setIsEditModalOpen(true);
                      }}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <Edit className="w-4 h-4 dark:text-white" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedPermission(permission);
                        setIsDeleteModalOpen(true);
                      }}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PermissionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddPermission}
        title="Add New Permission"
        availableRoles={availableRoles}
      />

      {selectedPermission && (
        <PermissionModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedPermission(null);
          }}
          onSubmit={handleEditPermission}
          permission={selectedPermission}
          title="Edit Permission"
          availableRoles={availableRoles}
        />
      )}

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedPermission(null);
        }}
        onConfirm={handleDeletePermission}
        itemName="Permission"
      />
    </div>
  );
}
