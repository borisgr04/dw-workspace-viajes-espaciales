import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'projects/dw-common/src/public-api';
import { first } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'lib-dw-login',
  templateUrl: './dw-login.component.html',
  styleUrls: ['./dw-login.component.css']
})
export class DwLoginComponent implements OnInit {

    loginForm: FormGroup=new FormGroup(
      {
        identificacion: new FormControl('', [Validators.required]),
        password:new FormControl('', [Validators.required]),
      }
    );
    loading = false;
    submitted = false;
    returnUrl: string="";

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private modalService: NgbModal
    ) {
        // redirect to home if already logged in

        this.authenticationService.isAuthenticatedAsync().subscribe(isAuthenticate=>
          {
            if(isAuthenticate)
            {
              this.router.navigate(['/']);
            }
          });
        
    }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f["identificacion"].value, this.f["password"].value)
        .subscribe(isAuthenticate=> this.procesarLogin(isAuthenticate));
              
    }
    
    procesarLogin(isAuthenticate:boolean)
    {
      if(isAuthenticate)
      {
        this.router.navigate(['/']);
      }
      else
      {
        const modalRef = this.modalService.open(AlertModalComponent);
        modalRef.componentInstance.title = 'Acceso Denegado';
        modalRef.componentInstance.message = "Las credenciales son inválidas!.";
        this.loading = false;
      }

    }
}
