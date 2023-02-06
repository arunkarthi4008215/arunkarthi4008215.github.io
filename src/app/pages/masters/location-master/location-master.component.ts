import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from 'services/utility.service';
import { DataTableService } from 'app/services/data-table.service';
import { forkJoin, Observable, of, Subject, Subscription } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LocationService } from './location-master.service';
import { BranchModalComponent } from '../master-modal/branch-modal/branch-modal.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-location-master',
  templateUrl: './location-master.component.html',
  styleUrls: ['./location-master.component.css']
})
export class LocationMasterComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  

  isFilterModalOpen: boolean = false;
  loader: boolean;
  nodata: boolean;
  locationList: any;
  locationForm:FormGroup;
  submitted:boolean;
  closeResult: string;
  popupTitle: string;
  edit: boolean;
  locationId: any;
  constructor(private utility:UtilityService,
              private dataTable:DataTableService,
              private ngmodal:NgbModal,
              private formBuilder:FormBuilder,
              private locationService:LocationService) {
                this.locationForm =  this.formBuilder.group({
                  locationCode: ['', Validators.required],
                  locationName: ['', Validators.required],
                  city: ['', Validators.required],
                  state: ['', Validators.required],
                  country: ['', Validators.required],
                  address1: [''],
                  address2: [''],
                  pincode: ['', Validators.required],
                  contactPersonName: ['', Validators.required],
                  contactPersonNo: ['', Validators.required]
                });
               }

  ngOnInit(): void {
    this.dtOptions = this.dataTable.getDataTableOptions(false, true, 'Stock Receive List');
    this.getLocationList();
  }

  get loctionform() {
    return this.locationForm.controls;
  }

  getLocationList(){
    this.loader = true;
    this.nodata = true;                          
    this.locationService.getLocationList().subscribe(response=>{
      const locationlist = response.data || {};
      this.loader = false
      if(locationlist.length > 0 ){
       setTimeout( ()=>(this.nodata = false),500);
        this.locationList = locationlist; 
      }

    },error => {this.loader = false ,this.nodata = true,this.utility.toast('top','right','!Response Error','warning')}
    );
  }
  getLocationCode(){
    this.locationService.getLocationCode().subscribe( resp =>{
      const locationCode = resp.data[0] || {};
          this.locationForm.controls['locationCode'].setValue(locationCode.Location_Code); 
      },error => {console.log(error);
    });
  }
  addLocation(content) {
    this.getLocationCode();
    const addDialog = this.ngmodal.open(content,{size:'xl',backdropClass: 'bg-secondary'})
    this.popupTitle = 'Addbranch';
    this.edit = false;
    addDialog.result.then((result) => {
      this.getLocationList()
    }).catch((error)=>{
    })
  }

  editLocation(content,id):void{
    const editDialog = this.ngmodal.open(content,{size:'md',backdropClass: 'bg-secondary'})
    this.popupTitle = 'Editbranch';
    this.edit = true;
    this.locationId = id;
    this.locationService.getLocationData(id).subscribe( resp =>{
      const locationData = resp.data || {};
          this.locationForm.controls['locationCode'].setValue(locationData[0].locationCode); 
          this.locationForm.controls['locationName'].setValue(locationData[0].locationName); 
          this.locationForm.controls['pincode'].setValue(locationData[0].pincode); 
          this.locationForm.controls['address1'].setValue(locationData[0].address_line1); 
          this.locationForm.controls['address1'].setValue(locationData[0].address_line2); 
          this.locationForm.controls['city'].setValue(locationData[0].city); 
          this.locationForm.controls['state'].setValue(locationData[0].state); 
          this.locationForm.controls['country'].setValue(locationData[0].country); 
          this.locationForm.controls['contactPersonName'].setValue(locationData[0].locationContactPerson); 
          this.locationForm.controls['contactPersonNo'].setValue(locationData[0].locationContactPersonNo); 
      },error => {console.log(error);
    });
    editDialog.result.then((result) => {
      this.getLocationList()
    }).catch((error)=>{
    })
  }

  onSubmit():void{
    this.submitted = true;

    // stop here if form is invalid
    if (this.locationForm.invalid) {
        return;
    }else{
      if(this.locationId){
          this.locationForm.value.locationId = this.locationId;
          this.locationService.updateLocationMaster(this.locationForm.value).subscribe( resp =>{
            const branchCode = resp.data || {};
            if(resp.success){
              this.utility.toast('top','right','Updated Successfully','success');
              this.locationForm.reset()
              this.ngmodal.dismissAll()
            }else if(resp.status == 404){
              this.utility.toast('top','right','Failed to Update','warning');
            }
                
            },error => {this.utility.toast('top','right','!Server Error','warning');
          });
        }else{
          this.locationService.saveLocationMaster(this.locationForm.value).subscribe( resp =>{
            const branchCode = resp.data || {};
            if(resp.success){
              this.utility.toast('top','right','Saved Successfully','success');
              this.ngmodal.dismissAll()
            }else if(resp.status == 404){
              this.utility.toast('top','right','Failed to Save','warning');
            }
                
            },error => {this.utility.toast('top','right','!Server Error','warning');
          });
        }
    }
    }

    deleteLocation(){
      Swal.fire({
        title: 'Are you sure?',
        text: 'This process is irreversible.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, go ahead.',
        cancelButtonText: 'No, let me think',
      }).then((result) => {
        if (result.value) {
          this.locationService.deleteLocationMaster(this.locationId).subscribe(resp=>{
            if(resp.status == 200){
              Swal.fire('Removed!', 'Location removed successfully.', 'success');
              this.ngmodal.dismissAll()
              this.getLocationList();
            }
            else{
              Swal.fire('Cancelled', 'Location still in our database.)', 'error');
              this.ngmodal.dismissAll()
            }
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          this.ngmodal.dismissAll()
          Swal.fire('Cancelled', 'Location still in our database.)', 'error');
        }
      });
    }
}
