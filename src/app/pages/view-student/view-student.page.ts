import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteService } from '../../services/estudiante.service';
import { Estudiante } from '../../models/estudiante';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.page.html',
  styleUrls: ['./view-student.page.scss'],
})
export class ViewStudentPage  implements OnInit {

  student: any;

  constructor( private actroute: ActivatedRoute, private router: Router) {
    this.actroute.queryParams.subscribe(
    params => {
      this.student = JSON.parse(params.special);
    }
    );
  }

  ngOnInit() {
  }


}
