import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    submenu:any[];
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard',     title: 'Dashboard',                    icon:'fa-home',       class: '',submenu:[{title:'Employee'},{title:'Faculty'}] },
    { path: 'employees',         title: 'Students',             icon:'fa-users',    class: '',submenu:[] },
    { path: 'faculty',          title: 'Statff',              icon:'fa-user-secret',      class: '',submenu:[] },
    // { path: 'study-materials', title: 'Resources',                    icon:'fa-book',    class: '',submenu:[] },
    // { path: 'assessment',          title: 'Assessment',                   icon:'fa-question',  class: '',submenu:[] },
    { path: 'table',         title: 'Reports',                      icon:'fa-chart-line',    class: '',submenu:[] },
    { path: 'settings',       title: 'Settings',                  icon:'fa fa-gear',  class: 'active-pro',submenu:[] },
    { path: 'typography',    title: 'Help Center',                   icon:'fa-info', class: '',submenu:[] },
];

@Component({
    selector: 'sidebar-cmp',
    templateUrl: './sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    public submenuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.submenuItems = ROUTES.filter(submenu => submenu)
    }
}
