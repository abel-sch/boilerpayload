import { Access, PayloadRequest } from "payload";

export const isAdmin = ({ req: { user } }: { req: PayloadRequest }) => Boolean(user && user.role === 'admin');

export const isAccessingSelf: Access = ({ id, req }) => {
    if (!req?.user) {
        return false
    }
    return {
        id: {
            equals: req.user.id
        }
    }
}

export const isAdminOrSelf: Access = (args) => isAdmin(args) || isAccessingSelf(args)