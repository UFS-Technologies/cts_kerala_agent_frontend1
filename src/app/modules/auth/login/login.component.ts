import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../../../helpers/custom-validators';
import { UserData } from '../../../services/user-data';
import { Route, Router } from '@angular/router';
import { MatSpinner } from '@angular/material';
import { ROUTES,Get_Page_Permission,Set_Page_Permission } from '../../../components/sidebar/sidebar.component'
import { DialogBox_Component } from '../../../modules/admin/DialogBox/DialogBox.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import { Menu_Service } from '../../../services/Menu.Service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
export var Pointer_Table: number[] = [
]
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  Login_Id:string;
 // menuItems: any[];
 color = 'primary';
 mode = 'indeterminate';
 value = 50;
 issLoading: boolean;
 Notification_count:number;
 Subscription_End_Date:string;
 Substn_End_Date:Date;
  Pointer_Table=new Array(60); 
  menuid:number;  
  constructor(
    public fb: FormBuilder, public Menu_Service_: Menu_Service, public userService: UserData, public router: Router,public dialogBox: MatDialog
  ) {
    this.initForm();
  }
  initForm() {
    this.loginForm = this.fb.group({
      userName: ['', CustomValidators.compose([CustomValidators.required])],
      password: ['', CustomValidators.compose([Validators.required])]
    })
     
  }
  async login() {
    if (this.loginForm.valid) {
      this.issLoading = true;
      ;
      //debugger
      const success = await this.userService.login(this.loginForm.value);
      console.log('success',success);
      
      if (success) 
      {
        console.log('Login successful');
        this.issLoading = false;
       // this.router.navigateByUrl('HomePage');

       //debugger
        this.Login_Id=localStorage.getItem('Login_User');

        // this.Subscription_End_Date=localStorage.getItem('Subscription_End_Date');
        // this.Substn_End_Date = new Date(this.Subscription_End_Date)
        // const currentDate = new Date();
        //debugger
// if(this.Subscription_End_Date!=null||this.Subscription_End_Date!=undefined||this.Subscription_End_Date!="null")
// {
//   if(this.Substn_End_Date > currentDate)
//   { this.router.navigateByUrl('Student');
// }
//   else(this.router.navigateByUrl('Agent'))
// }
// else(this.router.navigateByUrl('Agent'))



        ROUTES.length = 0;
 
        // Pointer_Table=new Array(60);  
        // for(var i=0;i<Pointer_Table.length;i++)
        // Pointer_Table[i]=-1;
        this.Menu_Service_.Get_Menu_Permission_Agent(this.Login_Id).subscribe( Rows => 
          {
            
          // console.log("Menus",Rows);

        //debugger
            if(Rows!=null)
              {
                var Menus;
                Menus=Rows[0];  
                this.menuid =Number(14)           
                Rows=[];
                console.log("Menus",Menus);

                // Store subscription status from DB
                if (Menus && Menus.length > 0 && Menus[0].Subscription_Status) {
                  localStorage.setItem('Subscription_Status', Menus[0].Subscription_Status);
                } else {
                  localStorage.setItem('Subscription_Status', 'Expired');
                }
                
    for(var i=0;i<Menus.length;i++)
    {
       if (Menus[i].Menu_Id == 14){
        this.Push_Menu({ path: '/Student', title: 'Students', icon: 'unarchive', class: '', Menu_Id: Menus[i].Menu_Id, 'View': Menus[i].VIew_All, Save: Menus[i].Menu_Save, Edit: Menus[i].Menu_Edit, Delete: Menus[i].Menu_Delete, Menu_Type: Menus[i].Menu_Type });

      }
       else  if (Menus[i].Menu_Id == 43)
        this.Push_Menu({ path: '/Student_Payment', title: 'Student Payment', icon: 'unarchive', class: '', Menu_Id: Menus[i].Menu_Id, 'View': Menus[i].VIew_All, Save: Menus[i].Menu_Save, Edit: Menus[i].Menu_Edit, Delete: Menus[i].Menu_Delete, Menu_Type: Menus[i].Menu_Type });
      else if (Menus[i].Menu_Id == 12)
        this.Push_Menu({ path: '/Course', title: 'Course', icon: 'unarchive', class: '', Menu_Id: Menus[i].Menu_Id, 'View': Menus[i].VIew_All, Save: Menus[i].Menu_Save, Edit: Menus[i].Menu_Edit, Delete: Menus[i].Menu_Delete, Menu_Type: Menus[i].Menu_Type });
        else if (Menus[i].Menu_Id == 4)
        this.Push_Menu({ path: '/Fees_Type', title: 'Fees Type', icon: 'unarchive', class: '', Menu_Id: Menus[i].Menu_Id, 'View': Menus[i].VIew_All, Save: Menus[i].Menu_Save, Edit: Menus[i].Menu_Edit, Delete: Menus[i].Menu_Delete, Menu_Type: Menus[i].Menu_Type });
      else if (Menus[i].Menu_Id == 5)
        this.Push_Menu({ path: '/Subject', title: 'Subject', icon: 'unarchive', class: '', Menu_Id: Menus[i].Menu_Id, 'View': Menus[i].VIew_All, Save: Menus[i].Menu_Save, Edit: Menus[i].Menu_Edit, Delete: Menus[i].Menu_Delete, Menu_Type: Menus[i].Menu_Type });
     else if (Menus[i].Menu_Id == 20)
        this.Push_Menu({ path: '/Fees_Type', title: 'Fees Type', icon: 'unarchive', class: '', Menu_Id: Menus[i].Menu_Id, 'View': Menus[i].VIew_All, Save: Menus[i].Menu_Save, Edit: Menus[i].Menu_Edit, Delete: Menus[i].Menu_Delete, Menu_Type: Menus[i].Menu_Type });
     
      else if (Menus[i].Menu_Id == 21)
        this.Push_Menu({ path: '/Mark_tab', title: 'Mark Tab', icon: 'unarchive', class: '', Menu_Id: Menus[i].Menu_Id, 'View': Menus[i].VIew_All, Save: Menus[i].Menu_Save, Edit: Menus[i].Menu_Edit, Delete: Menus[i].Menu_Delete, Menu_Type: Menus[i].Menu_Type });
             
      } 
localStorage.setItem("Routes_Temp",JSON.stringify(ROUTES));
localStorage.setItem("Pointer_Temp",JSON.stringify(Pointer_Table));

// Navigate based on subscription status
const subscriptionStatus = localStorage.getItem('Subscription_Status');
if (subscriptionStatus === 'Active') {
  // Active subscription: go to normal page
  if(this.menuid ==23){
    this.router.navigateByUrl('Agent');
  }
  if(this.menuid ==14){
    this.router.navigateByUrl('Student');
  }
} else {
  // Expired/no subscription: always go to Agent profile to see details and subscribe
  this.router.navigateByUrl('Agent');
}
  }
},
Rows => { 
     
});
  }
  }
 else
  {
    this.issLoading = false;
    const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Inavlid User Name/Password', Type:"3"}});
  }
}
  Push_Menu(Menu_Data)
  {
    ROUTES.push(Menu_Data);
    Pointer_Table[Menu_Data.Menu_Id-1] = ROUTES.length-1;
  }
  ngOnInit() {
  }
}
