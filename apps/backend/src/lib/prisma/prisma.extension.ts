import { Prisma } from '@prisma/client';

export const softDeleteExtension = Prisma.defineExtension({
    model: {
        $allModels: {
            async delete<T>(this: T, args: Prisma.Args<T, 'delete'>) {
                const context = Prisma.getExtensionContext(this);
                return (context as any).update({
                    ...args,
                    data: { deletedAt: new Date() }
                });
            }
        }
    }
});
