import { Component } from '@angular/core';

import { EstudianteService } from '../services/estudiante.service';
import { Estudiante } from '../models/estudiante';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Usuario } from '../models/usuario';

import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isSingleClick = true;

  myForm: FormGroup;
  submitted = false;
  usuarios: Usuario[] = [];

  public students: Estudiante[];


  constructor(private service: EstudianteService, private router: Router) {
    this.service.getStudents().subscribe(data => {
      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as any
        } as Estudiante;
      });
    });
  }
  
  verDetalle(student: any): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(student)
      }
    };
    this.isSingleClick = true;
    setTimeout(() => {
        if (this.isSingleClick) {
          this.router.navigate(['/view-student'], extras);
        }
     }, 250);
  }

  update(student: Estudiante, active: boolean) {
    student.active = active;
    this.service.updateStudent(student, student.id);
  }



}
