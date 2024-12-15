import { isAdmin } from '@/utils/auth'
import { isAdminOrSelf } from '@/utils/auth'
import type { CollectionConfig, PayloadRequest } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      required: true,
      defaultValue: 'user',
      access: {
        create: isAdmin,
        update: isAdmin,
        read: isAdmin,
      }
    },
  ],
  access: {
    create: isAdmin,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdminOrSelf
  },
  auth: true,
}
