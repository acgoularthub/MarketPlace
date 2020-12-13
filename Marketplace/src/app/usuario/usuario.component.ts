import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(
    public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  loginGoogle(){
    this.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  }

  logoutGoogle(){
    this.auth.signOut();
}
}
