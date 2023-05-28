import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  listDiv = false;
  noRecordShow = false;
  paginationLimit: number;
  pageTitle: any = ""

  userList: any = [];
  constructor(
    // private route: Router, 
    // private title: NavBarService,
    // private httpApi: HttpService, 
    // private router: Router, 
    // private spinner: NgxSpinnerService, 
    // private toastService: ToastService
  ) {
    this.paginationLimit = 3;
  }

  searchTermIngredient = new FormControl();

  searchTermObservable: Subscription | undefined;

  searchTermSubscriber() {
    this.userList = []
    this.searchTermObservable = this.searchTermIngredient.valueChanges?.pipe(
      debounceTime(500)
    )
      .subscribe(newValue => {

        if (newValue.length > 0 && newValue.trim()) {
          // this.spinner.show()


          // this.httpApi.getUserList(newValue).subscribe(response => {
          //   // this.spinner.hide()

          //   this.userList = response
          //   for (let i = 0; i < this.userList.results.length; i++) {
          //     var dob = new Date(this.userList.results[i].dob);
          //     var month_diff = Date.now() - dob.getTime();
          //     var age_dt = new Date(month_diff);
          //     var year = age_dt.getUTCFullYear();
          //     var age = Math.abs(year - 1970);
          //     this.userList.results[i].age = age;
          //   }
          //   if (this.userList.results.length > 0) {
          //     this.listDiv = true;
          //     this.noRecordShow = false;

          //   } else {
          //     this.listDiv = false;
          //     this.noRecordShow = true;

          //   }
          // },
          //   error => {
          //     this.spinner.hide()

          //   })
        }
        else {
          this.userList = []
        }
      });


  }
  ngOnInit(): void {
    // this.route.events.subscribe((val) => {
    //   let url = this.route.url.slice(7)
    //   this.pageTitle = this.title.getRouteName(url)
    // });
    this.searchTermSubscriber();


  }
  showMoreItems() {
    this.paginationLimit = Number(this.userList.results.length);

  }
  showLessItems() {
    this.paginationLimit = 3;
  }
  getUserDetail(data: any) {
    console.log(data)
    this.listDiv = false;
  }

  logout() {
    // this.spinner.show()
    // this.httpApi.logout().subscribe(response => {
    //   this.spinner.hide()

    // }, error => {
    //   this.spinner.hide()
    // })
    // localStorage.clear();
    // this.router.navigate(['login']);
    // this.toastService.success("Successfully logged out!");
  }
  onClickOutside(event: any): void {
    event.target.value = ""
    this.userList = []
    this.listDiv = false;
    this.noRecordShow = false;
    this.paginationLimit = 3;

  }


  checkTest() {
    console.log('test')
  }
}
