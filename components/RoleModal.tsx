import React from 'react';
import { X } from 'lucide-react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

interface RoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (role: Partial<Role>) => void;
  role?: Role;
  title: string;
}

interface Permission {
  id: string;
  name: string;
  description: string;
}

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
  users: number;
}

const availablePermissions: Permission[] = [
  { id: '1', name: 'create', description: 'Create resources' },
  { id: '2', name: 'read', description: 'Read resources' },
  { id: '3', name: 'update', description: 'Update resources' },
  { id: '4', name: 'delete', description: 'Delete resources' },
];

export default function RoleModal({ isOpen, onClose, onSubmit, role, title }: RoleModalProps) {
  const [formData, setFormData] = React.useState({
    name: role?.name || '',
    description: role?.description || '',
    permissions: role?.permissions.map(p => p.id) || [],
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedPermissions = availablePermissions.filter(p => 
      formData.permissions.includes(p.id)
    );
    onSubmit({
      ...formData,
      permissions: selectedPermissions,
    });
    onClose();
  };

  const handlePermissionToggle = (permissionId: string) => {
    setFormData(prev => ({
      ...prev,
      permissions: prev.permissions.includes(permissionId)
        ? prev.permissions.filter(id => id !== permissionId)
        : [...prev.permissions, permissionId],
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="dark:bg-[#0A0A0A] bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
            <Label htmlFor="Role">Role</Label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <Label htmlFor="Description">Description</Label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                rows={3}
                required
              />
            </div>

            <div>
              <Label htmlFor='Permissions'>Permissions</Label>
              <div className="space-y-2">
                {availablePermissions.map((permission) => (
                  <Label key={permission.id} className="flex items-center">
                    <Input
                      type="checkbox"
                      checked={formData.permissions.includes(permission.id)}
                      onChange={() => handlePermissionToggle(permission.id)}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                    />
                    <span className="ml-2 text-sm text-gray-700 dark:text-white">{permission.name}</span>
                  </Label>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <Button
              type="button"
              onClick={onClose}
              variant={'outline'}
            >
              Cancel
            </Button>
            <Button
              type="submit"
            >
              {role ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}