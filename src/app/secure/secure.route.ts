import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DeletedUserComponent } from './deleted-user/deleted-user.component';

export const SECURE_ROUTES: Routes = [
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'deleteduser',
        component: DeletedUserComponent
    }
];

