import { Component } from '@angular/core';
import { ToastrService } from "ngx-toastr";


@Component({
    selector: 'notifications-cmp',
    moduleId: module.id,
    templateUrl: 'notifications.component.html'
})

export class NotificationsComponent{
  public studyMaterials : any =[
    {
      title:'LMS Course part-1',
      type:"PDF",
      imagePath:'../../../assets/img/study-material-img/0001.jpg',
      noOf:'40 Pages',
      author:'Effe',
      price:"$56",
      size:"12.02",
      category:"Industry",
      subCategory:"Safety Studies",
      language:"English",
      modifiedDate:"02/04/2022 02:34 PM",
    },
    {title:'LMS Course part-2',type:"PDF",imagePath:'../../../assets/img/study-material-img/0002.jpg',noOf:'40 Pages',author:'Effe',price:"Free", size:"12.02",
    category:"Industry",
    subCategory:"Safety Studies",
    language:"English",
    modifiedDate:"02/04/2022 02:34 PM",},
    {title:'LMS Course part-3',type:"PDF",imagePath:'../../../assets/img/study-material-img/0003.jpg',noOf:'40 Pages',author:'Effe',price:"$67", size:"12.02",
    category:"Industry",
    subCategory:"Safety Studies",
    language:"English",
    modifiedDate:"02/04/2022 02:34 PM",},
    {title:'LMS Course part-4',type:"PDF",imagePath:'../../../assets/img/study-material-img/0004.jpg',noOf:'40 Pages',author:'Effe',price:"Free", size:"12.02",
    category:"Industry",
    subCategory:"Safety Studies",
    language:"English",
    modifiedDate:"02/04/2022 02:34 PM",},
    {title:'LMS Course part-5',type:"PDF",imagePath:'../../../assets/img/study-material-img/0005.jpg',noOf:'40 Pages',author:'Effe',price:"$200", size:"12.02",
    category:"Industry",
    subCategory:"Safety Studies",
    language:"English",
    modifiedDate:"02/04/2022 02:34 PM",},
    {title:'LMS Course part-6',type:"PDF",imagePath:'../../../assets/img/study-material-img/0006.jpg',noOf:'40 Pages',author:'Effe',price:"$20", size:"12.02",
    category:"Industry",
    subCategory:"Safety Studies",
    language:"English",
    modifiedDate:"02/04/2022 02:34 PM",}
  ];
  constructor(private toastr: ToastrService) {}
  showNotification(from, align) {
    const color = Math.floor(Math.random() * 5 + 1);

    switch (color) {
      case 1:
        this.toastr.info(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-info alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 2:
        this.toastr.success(
          '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-success alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 3:
        this.toastr.warning(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-warning alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 4:
        this.toastr.error(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            enableHtml: true,
            closeButton: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 5:
        this.toastr.show(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-primary alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      default:
        break;
    }
  }
}
