import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class InstructorGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
