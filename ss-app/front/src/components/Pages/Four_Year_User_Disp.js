import React from 'react';

import { Card } from 'react-bootstrap';
import './basic.css';
import { ExportReactCSV } from './ExportReactCSV'

const Four_Year_Disp = props => {
    // Print a general warning if user isn't logged in
    const print_warnings = props => {
        if(props == 1){
        return(
            <div className='alert alert-danger' id='conflicts_div'>
                <strong>Please log in to view this page.</strong>
            </div>
        )
        }
        else{
        return(<div></div> )
        }
    };


  let data = []; 
  if(props.initVar)
  {
      let UserName = props.user.FullName; 
      //console.log(UserName); 
      if(props.user.y1_sp.length != 0){
      var Y1_Sp_C1_Num = props.user.y1_sp[0].course1.number; 
      var Y1_Sp_C1_Name = props.user.y1_sp[0].course1.name; 
      var Y1_Sp_C1_Credit = props.user.y1_sp[0].course1.credits; 
      var Y1_Sp_C2_Num = props.user.y1_sp[0].course2.number; 
      var Y1_Sp_C2_Name = props.user.y1_sp[0].course2.name; 
      var Y1_Sp_C2_Credit = props.user.y1_sp[0].course2.credits; 
      var Y1_Sp_C3_Num = props.user.y1_sp[0].course3.number; 
      var Y1_Sp_C3_Name = props.user.y1_sp[0].course3.name; 
      var Y1_Sp_C3_Credit = props.user.y1_sp[0].course3.credits;  
      var Y1_Sp_C4_Num = props.user.y1_sp[0].course4.number; 
      var Y1_Sp_C4_Name = props.user.y1_sp[0].course4.name; 
      var Y1_Sp_C4_Credit = props.user.y1_sp[0].course4.credits;  
      var Y1_Sp_C5_Num = props.user.y1_sp[0].course5.number; 
      var Y1_Sp_C5_Name = props.user.y1_sp[0].course5.name; 
      var Y1_Sp_C5_Credit = props.user.y1_sp[0].course5.credits;  
      var Y1_Sp_C6_Num = props.user.y1_sp[0].course6.number; 
      var Y1_Sp_C6_Name = props.user.y1_sp[0].course6.name; 
      var Y1_Sp_C6_Credit = props.user.y1_sp[0].course6.credits;  
      }
      if(props.user.y1_su.length != 0){
      var Y1_Su_C1_Num = props.user.y1_su[0].course1.number; 
      var Y1_Su_C1_Name = props.user.y1_su[0].course1.name; 
      var Y1_Su_C1_Credit = props.user.y1_su[0].course1.credits; 
      var Y1_Su_C2_Num = props.user.y1_su[0].course2.number; 
      var Y1_Su_C2_Name = props.user.y1_su[0].course2.name; 
      var Y1_Su_C2_Credit = props.user.y1_su[0].course2.credits; 
      var Y1_Su_C3_Num = props.user.y1_su[0].course3.number; 
      var Y1_Su_C3_Name = props.user.y1_su[0].course3.name; 
      var Y1_Su_C3_Credit = props.user.y1_su[0].course3.credits;  
      var Y1_Su_C4_Num = props.user.y1_su[0].course4.number; 
      var Y1_Su_C4_Name = props.user.y1_su[0].course4.name; 
      var Y1_Su_C4_Credit = props.user.y1_su[0].course4.credits;  
      var Y1_Su_C5_Num = props.user.y1_su[0].course5.number; 
      var Y1_Su_C5_Name = props.user.y1_su[0].course5.name; 
      var Y1_Su_C5_Credit = props.user.y1_su[0].course5.credits;  
      var Y1_Su_C6_Num = props.user.y1_su[0].course6.number; 
      var Y1_Su_C6_Name = props.user.y1_su[0].course6.name; 
      var Y1_Su_C6_Credit = props.user.y1_su[0].course6.credits;
      }
      if(props.user.y1_fl.length != 0){
      var Y1_Fa_C1_Num = props.user.y1_fl[0].course1.number; 
      var Y1_Fa_C1_Name = props.user.y1_fl[0].course1.name; 
      var Y1_Fa_C1_Credit = props.user.y1_fl[0].course1.credits; 
      var Y1_Fa_C2_Num = props.user.y1_fl[0].course2.number; 
      var Y1_Fa_C2_Name = props.user.y1_fl[0].course2.name; 
      var Y1_Fa_C2_Credit = props.user.y1_fl[0].course2.credits; 
      var Y1_Fa_C3_Num = props.user.y1_fl[0].course3.number; 
      var Y1_Fa_C3_Name = props.user.y1_fl[0].course3.name; 
      var Y1_Fa_C3_Credit = props.user.y1_fl[0].course3.credits;  
      var Y1_Fa_C4_Num = props.user.y1_fl[0].course4.number; 
      var Y1_Fa_C4_Name = props.user.y1_fl[0].course4.name; 
      var Y1_Fa_C4_Credit = props.user.y1_fl[0].course4.credits;  
      var Y1_Fa_C5_Num = props.user.y1_fl[0].course5.number; 
      var Y1_Fa_C5_Name = props.user.y1_fl[0].course5.name; 
      var Y1_Fa_C5_Credit = props.user.y1_fl[0].course5.credits;  
      var Y1_Fa_C6_Num = props.user.y1_fl[0].course6.number; 
      var Y1_Fa_C6_Name = props.user.y1_fl[0].course6.name; 
      var Y1_Fa_C6_Credit = props.user.y1_fl[0].course6.credits;
      }
  
      if(props.user.y2_sp.length != 0){
      var Y2_Sp_C1_Num = props.user.y2_sp[0].course1.number; 
      var Y2_Sp_C1_Name = props.user.y2_sp[0].course1.name; 
      var Y2_Sp_C1_Credit = props.user.y2_sp[0].course1.credits; 
      var Y2_Sp_C2_Num = props.user.y2_sp[0].course2.number; 
      var Y2_Sp_C2_Name = props.user.y2_sp[0].course2.name; 
      var Y2_Sp_C2_Credit = props.user.y2_sp[0].course2.credits; 
      var Y2_Sp_C3_Num = props.user.y2_sp[0].course3.number; 
      var Y2_Sp_C3_Name = props.user.y2_sp[0].course3.name; 
      var Y2_Sp_C3_Credit = props.user.y2_sp[0].course3.credits;  
      var Y2_Sp_C4_Num = props.user.y2_sp[0].course4.number; 
      var Y2_Sp_C4_Name = props.user.y2_sp[0].course4.name; 
      var Y2_Sp_C4_Credit = props.user.y2_sp[0].course4.credits;  
      var Y2_Sp_C5_Num = props.user.y2_sp[0].course5.number; 
      var Y2_Sp_C5_Name = props.user.y2_sp[0].course5.name; 
      var Y2_Sp_C5_Credit = props.user.y2_sp[0].course5.credits;  
      var Y2_Sp_C6_Num = props.user.y2_sp[0].course6.number; 
      var Y2_Sp_C6_Name = props.user.y2_sp[0].course6.name; 
      var Y2_Sp_C6_Credit = props.user.y2_sp[0].course6.credits;  
      }
      if(props.user.y2_su.length != 0){
        var Y2_Su_C1_Num = props.user.y2_su[0].course1.number; 
        var Y2_Su_C1_Name = props.user.y2_su[0].course1.name; 
        var Y2_Su_C1_Credit = props.user.y2_su[0].course1.credits; 
        var Y2_Su_C2_Num = props.user.y2_su[0].course2.number; 
        var Y2_Su_C2_Name = props.user.y2_su[0].course2.name; 
        var Y2_Su_C2_Credit = props.user.y2_su[0].course2.credits; 
        var Y2_Su_C3_Num = props.user.y2_su[0].course3.number; 
        var Y2_Su_C3_Name = props.user.y2_su[0].course3.name; 
        var Y2_Su_C3_Credit = props.user.y2_su[0].course3.credits;  
        var Y2_Su_C4_Num = props.user.y2_su[0].course4.number; 
        var Y2_Su_C4_Name = props.user.y2_su[0].course4.name; 
        var Y2_Su_C4_Credit = props.user.y2_su[0].course4.credits;  
        var Y2_Su_C5_Num = props.user.y2_su[0].course5.number; 
        var Y2_Su_C5_Name = props.user.y2_su[0].course5.name; 
        var Y2_Su_C5_Credit = props.user.y2_su[0].course5.credits;  
        var Y2_Su_C6_Num = props.user.y2_su[0].course6.number; 
        var Y2_Su_C6_Name = props.user.y2_su[0].course6.name; 
        var Y2_Su_C6_Credit = props.user.y2_su[0].course6.credits;
      }
      if(props.user.y2_fl.length != 0){
      var Y2_Fa_C1_Num = props.user.y2_fl[0].course1.number; 
      var Y2_Fa_C1_Name = props.user.y2_fl[0].course1.name; 
      var Y2_Fa_C1_Credit = props.user.y2_fl[0].course1.credits; 
      var Y2_Fa_C2_Num = props.user.y2_fl[0].course2.number; 
      var Y2_Fa_C2_Name = props.user.y2_fl[0].course2.name; 
      var Y2_Fa_C2_Credit = props.user.y2_fl[0].course2.credits; 
      var Y2_Fa_C3_Num = props.user.y2_fl[0].course3.number; 
      var Y2_Fa_C3_Name = props.user.y2_fl[0].course3.name; 
      var Y2_Fa_C3_Credit = props.user.y2_fl[0].course3.credits;  
      var Y2_Fa_C4_Num = props.user.y2_fl[0].course4.number; 
      var Y2_Fa_C4_Name = props.user.y2_fl[0].course4.name; 
      var Y2_Fa_C4_Credit = props.user.y2_fl[0].course4.credits;  
      var Y2_Fa_C5_Num = props.user.y2_fl[0].course5.number; 
      var Y2_Fa_C5_Name = props.user.y2_fl[0].course5.name; 
      var Y2_Fa_C5_Credit = props.user.y2_fl[0].course5.credits;  
      var Y2_Fa_C6_Num = props.user.y2_fl[0].course6.number; 
      var Y2_Fa_C6_Name = props.user.y2_fl[0].course6.name; 
      var Y2_Fa_C6_Credit = props.user.y2_fl[0].course6.credits;
      }
  
      if(props.user.y3_sp.length != 0){
      var Y3_Sp_C1_Num = props.user.y3_sp[0].course1.number; 
      var Y3_Sp_C1_Name = props.user.y3_sp[0].course1.name; 
      var Y3_Sp_C1_Credit = props.user.y3_sp[0].course1.credits; 
      var Y3_Sp_C2_Num = props.user.y3_sp[0].course2.number; 
      var Y3_Sp_C2_Name = props.user.y3_sp[0].course2.name; 
      var Y3_Sp_C2_Credit = props.user.y3_sp[0].course2.credits; 
      var Y3_Sp_C3_Num = props.user.y3_sp[0].course3.number; 
      var Y3_Sp_C3_Name = props.user.y3_sp[0].course3.name; 
      var Y3_Sp_C3_Credit = props.user.y3_sp[0].course3.credits;  
      var Y3_Sp_C4_Num = props.user.y3_sp[0].course4.number; 
      var Y3_Sp_C4_Name = props.user.y3_sp[0].course4.name; 
      var Y3_Sp_C4_Credit = props.user.y3_sp[0].course4.credits;  
      var Y3_Sp_C5_Num = props.user.y3_sp[0].course5.number; 
      var Y3_Sp_C5_Name = props.user.y3_sp[0].course5.name; 
      var Y3_Sp_C5_Credit = props.user.y3_sp[0].course5.credits;  
      var Y3_Sp_C6_Num = props.user.y3_sp[0].course6.number; 
      var Y3_Sp_C6_Name = props.user.y3_sp[0].course6.name; 
      var Y3_Sp_C6_Credit = props.user.y3_sp[0].course6.credits;  
      }
      if(props.user.y3_su.length != 0){
      var Y3_Su_C1_Num = props.user.y3_su[0].course1.number; 
      var Y3_Su_C1_Name = props.user.y3_su[0].course1.name; 
      var Y3_Su_C1_Credit = props.user.y3_su[0].course1.credits; 
      var Y3_Su_C2_Num = props.user.y3_su[0].course2.number; 
      var Y3_Su_C2_Name = props.user.y3_su[0].course2.name; 
      var Y3_Su_C2_Credit = props.user.y3_su[0].course2.credits; 
      var Y3_Su_C3_Num = props.user.y3_su[0].course3.number; 
      var Y3_Su_C3_Name = props.user.y3_su[0].course3.name; 
      var Y3_Su_C3_Credit = props.user.y3_su[0].course3.credits;  
      var Y3_Su_C4_Num = props.user.y3_su[0].course4.number; 
      var Y3_Su_C4_Name = props.user.y3_su[0].course4.name; 
      var Y3_Su_C4_Credit = props.user.y3_su[0].course4.credits;  
      var Y3_Su_C5_Num = props.user.y3_su[0].course5.number; 
      var Y3_Su_C5_Name = props.user.y3_su[0].course5.name; 
      var Y3_Su_C5_Credit = props.user.y3_su[0].course5.credits;  
      var Y3_Su_C6_Num = props.user.y3_su[0].course6.number; 
      var Y3_Su_C6_Name = props.user.y3_su[0].course6.name; 
      var Y3_Su_C6_Credit = props.user.y3_su[0].course6.credits;
      }
      if(props.user.y3_fl.length != 0){
      var Y3_Fa_C1_Num = props.user.y3_fl[0].course1.number; 
      var Y3_Fa_C1_Name = props.user.y3_fl[0].course1.name; 
      var Y3_Fa_C1_Credit = props.user.y3_fl[0].course1.credits; 
      var Y3_Fa_C2_Num = props.user.y3_fl[0].course2.number; 
      var Y3_Fa_C2_Name = props.user.y3_fl[0].course2.name; 
      var Y3_Fa_C2_Credit = props.user.y3_fl[0].course2.credits; 
      var Y3_Fa_C3_Num = props.user.y3_fl[0].course3.number; 
      var Y3_Fa_C3_Name = props.user.y3_fl[0].course3.name; 
      var Y3_Fa_C3_Credit = props.user.y3_fl[0].course3.credits;  
      var Y3_Fa_C4_Num = props.user.y3_fl[0].course4.number; 
      var Y3_Fa_C4_Name = props.user.y3_fl[0].course4.name; 
      var Y3_Fa_C4_Credit = props.user.y3_fl[0].course4.credits;  
      var Y3_Fa_C5_Num = props.user.y3_fl[0].course5.number; 
      var Y3_Fa_C5_Name = props.user.y3_fl[0].course5.name; 
      var Y3_Fa_C5_Credit = props.user.y3_fl[0].course5.credits;  
      var Y3_Fa_C6_Num = props.user.y3_fl[0].course6.number; 
      var Y3_Fa_C6_Name = props.user.y3_fl[0].course6.name; 
      var Y3_Fa_C6_Credit = props.user.y3_fl[0].course6.credits;
      }
  
      if(props.user.y4_sp.length != 0){
      var Y4_Sp_C1_Num = props.user.y4_sp[0].course1.number; 
      var Y4_Sp_C1_Name = props.user.y4_sp[0].course1.name; 
      var Y4_Sp_C1_Credit = props.user.y4_sp[0].course1.credits; 
      var Y4_Sp_C2_Num = props.user.y4_sp[0].course2.number; 
      var Y4_Sp_C2_Name = props.user.y4_sp[0].course2.name; 
      var Y4_Sp_C2_Credit = props.user.y4_sp[0].course2.credits; 
      var Y4_Sp_C3_Num = props.user.y4_sp[0].course3.number; 
      var Y4_Sp_C3_Name = props.user.y4_sp[0].course3.name; 
      var Y4_Sp_C3_Credit = props.user.y4_sp[0].course3.credits;  
      var Y4_Sp_C4_Num = props.user.y4_sp[0].course4.number; 
      var Y4_Sp_C4_Name = props.user.y4_sp[0].course4.name; 
      var Y4_Sp_C4_Credit = props.user.y4_sp[0].course4.credits;  
      var Y4_Sp_C5_Num = props.user.y4_sp[0].course5.number; 
      var Y4_Sp_C5_Name = props.user.y4_sp[0].course5.name; 
      var Y4_Sp_C5_Credit = props.user.y4_sp[0].course5.credits;  
      var Y4_Sp_C6_Num = props.user.y4_sp[0].course6.number; 
      var Y4_Sp_C6_Name = props.user.y4_sp[0].course6.name; 
      var Y4_Sp_C6_Credit = props.user.y4_sp[0].course6.credits;  
      }
      if(props.user.y4_su.length != 0){
      var Y4_Su_C1_Num = props.user.y4_su[0].course1.number; 
      var Y4_Su_C1_Name = props.user.y4_su[0].course1.name; 
      var Y4_Su_C1_Credit = props.user.y4_su[0].course1.credits; 
      var Y4_Su_C2_Num = props.user.y4_su[0].course2.number; 
      var Y4_Su_C2_Name = props.user.y4_su[0].course2.name; 
      var Y4_Su_C2_Credit = props.user.y4_su[0].course2.credits; 
      var Y4_Su_C3_Num = props.user.y4_su[0].course3.number; 
      var Y4_Su_C3_Name = props.user.y4_su[0].course3.name; 
      var Y4_Su_C3_Credit = props.user.y4_su[0].course3.credits;  
      var Y4_Su_C4_Num = props.user.y4_su[0].course4.number; 
      var Y4_Su_C4_Name = props.user.y4_su[0].course4.name; 
      var Y4_Su_C4_Credit = props.user.y4_su[0].course4.credits;  
      var Y4_Su_C5_Num = props.user.y4_su[0].course5.number; 
      var Y4_Su_C5_Name = props.user.y4_su[0].course5.name; 
      var Y4_Su_C5_Credit = props.user.y4_su[0].course5.credits;  
      var Y4_Su_C6_Num = props.user.y4_su[0].course6.number; 
      var Y4_Su_C6_Name = props.user.y4_su[0].course6.name; 
      var Y4_Su_C6_Credit = props.user.y4_su[0].course6.credits;
      }
      if(props.user.y4_fl.length != 0){
      var Y4_Fa_C1_Num = props.user.y4_fl[0].course1.number; 
      var Y4_Fa_C1_Name = props.user.y4_fl[0].course1.name; 
      var Y4_Fa_C1_Credit = props.user.y4_fl[0].course1.credits; 
      var Y4_Fa_C2_Num = props.user.y4_fl[0].course2.number; 
      var Y4_Fa_C2_Name = props.user.y4_fl[0].course2.name; 
      var Y4_Fa_C2_Credit = props.user.y4_fl[0].course2.credits; 
      var Y4_Fa_C3_Num = props.user.y4_fl[0].course3.number; 
      var Y4_Fa_C3_Name = props.user.y4_fl[0].course3.name; 
      var Y4_Fa_C3_Credit = props.user.y4_fl[0].course3.credits;  
      var Y4_Fa_C4_Num = props.user.y4_fl[0].course4.number; 
      var Y4_Fa_C4_Name = props.user.y4_fl[0].course4.name; 
      var Y4_Fa_C4_Credit = props.user.y4_fl[0].course4.credits;  
      var Y4_Fa_C5_Num = props.user.y4_fl[0].course5.number; 
      var Y4_Fa_C5_Name = props.user.y4_fl[0].course5.name; 
      var Y4_Fa_C5_Credit = props.user.y4_fl[0].course5.credits;  
      var Y4_Fa_C6_Num = props.user.y4_fl[0].course6.number; 
      var Y4_Fa_C6_Name = props.user.y4_fl[0].course6.name; 
      var Y4_Fa_C6_Credit = props.user.y4_fl[0].course6.credits;
      }
  
      if(props.user.y5_sp.length != 0){
      var Y5_Sp_C1_Num = props.user.y5_sp[0].course1.number; 
      var Y5_Sp_C1_Name = props.user.y5_sp[0].course1.name; 
      var Y5_Sp_C1_Credit = props.user.y5_sp[0].course1.credits; 
      var Y5_Sp_C2_Num = props.user.y5_sp[0].course2.number; 
      var Y5_Sp_C2_Name = props.user.y5_sp[0].course2.name; 
      var Y5_Sp_C2_Credit = props.user.y5_sp[0].course2.credits; 
      var Y5_Sp_C3_Num = props.user.y5_sp[0].course3.number; 
      var Y5_Sp_C3_Name = props.user.y5_sp[0].course3.name; 
      var Y5_Sp_C3_Credit = props.user.y5_sp[0].course3.credits;  
      var Y5_Sp_C4_Num = props.user.y5_sp[0].course4.number; 
      var Y5_Sp_C4_Name = props.user.y5_sp[0].course4.name; 
      var Y5_Sp_C4_Credit = props.user.y5_sp[0].course4.credits;  
      var Y5_Sp_C5_Num = props.user.y5_sp[0].course5.number; 
      var Y5_Sp_C5_Name = props.user.y5_sp[0].course5.name; 
      var Y5_Sp_C5_Credit = props.user.y5_sp[0].course5.credits;  
      var Y5_Sp_C6_Num = props.user.y5_sp[0].course6.number; 
      var Y5_Sp_C6_Name = props.user.y5_sp[0].course6.name; 
      var Y5_Sp_C6_Credit = props.user.y5_sp[0].course6.credits;  
      }
      if(props.user.y5_su.length != 0){
      var Y5_Su_C1_Num = props.user.y5_su[0].course1.number; 
      var Y5_Su_C1_Name = props.user.y5_su[0].course1.name; 
      var Y5_Su_C1_Credit = props.user.y5_su[0].course1.credits; 
      var Y5_Su_C2_Num = props.user.y5_su[0].course2.number; 
      var Y5_Su_C2_Name = props.user.y5_su[0].course2.name; 
      var Y5_Su_C2_Credit = props.user.y5_su[0].course2.credits; 
      var Y5_Su_C3_Num = props.user.y5_su[0].course3.number; 
      var Y5_Su_C3_Name = props.user.y5_su[0].course3.name; 
      var Y5_Su_C3_Credit = props.user.y5_su[0].course3.credits;  
      var Y5_Su_C4_Num = props.user.y5_su[0].course4.number; 
      var Y5_Su_C4_Name = props.user.y5_su[0].course4.name; 
      var Y5_Su_C4_Credit = props.user.y5_su[0].course4.credits;  
      var Y5_Su_C5_Num = props.user.y5_su[0].course5.number; 
      var Y5_Su_C5_Name = props.user.y5_su[0].course5.name; 
      var Y5_Su_C5_Credit = props.user.y5_su[0].course5.credits;  
      var Y5_Su_C6_Num = props.user.y5_su[0].course6.number; 
      var Y5_Su_C6_Name = props.user.y5_su[0].course6.name; 
      var Y5_Su_C6_Credit = props.user.y5_su[0].course6.credits;
      }
      if(props.user.y5_fl.length != 0){
      var Y5_Fa_C1_Num = props.user.y5_fl[0].course1.number; 
      var Y5_Fa_C1_Name = props.user.y5_fl[0].course1.name; 
      var Y5_Fa_C1_Credit = props.user.y5_fl[0].course1.credits; 
      var Y5_Fa_C2_Num = props.user.y5_fl[0].course2.number; 
      var Y5_Fa_C2_Name = props.user.y5_fl[0].course2.name; 
      var Y5_Fa_C2_Credit = props.user.y5_fl[0].course2.credits; 
      var Y5_Fa_C3_Num = props.user.y5_fl[0].course3.number; 
      var Y5_Fa_C3_Name = props.user.y5_fl[0].course3.name; 
      var Y5_Fa_C3_Credit = props.user.y5_fl[0].course3.credits;  
      var Y5_Fa_C4_Num = props.user.y5_fl[0].course4.number; 
      var Y5_Fa_C4_Name = props.user.y5_fl[0].course4.name; 
      var Y5_Fa_C4_Credit = props.user.y5_fl[0].course4.credits;  
      var Y5_Fa_C5_Num = props.user.y5_fl[0].course5.number; 
      var Y5_Fa_C5_Name = props.user.y5_fl[0].course5.name; 
      var Y5_Fa_C5_Credit = props.user.y5_fl[0].course5.credits;  
      var Y5_Fa_C6_Num = props.user.y5_fl[0].course6.number; 
      var Y5_Fa_C6_Name = props.user.y5_fl[0].course6.name; 
      var Y5_Fa_C6_Credit = props.user.y5_fl[0].course6.credits;
      }

      data = [
        ["Student:", UserName],
        [" "],
        ["2021"],
        ["Spring", " ", " ", " ", "Summer", " ", " ", " ", "Fall"],
        ["Course Number", "Course Name", "Credits", " ", "Course Number", "Course Name", "Credits", " ", "Course Number", "Course Name", "Credits"],
        [Y1_Sp_C1_Num, Y1_Sp_C1_Name, Y1_Sp_C1_Credit, " ", Y1_Su_C1_Num, Y1_Su_C1_Name, Y1_Su_C1_Credit, " ", Y1_Fa_C1_Num, Y1_Fa_C1_Name, Y1_Fa_C1_Credit], 
        [Y1_Sp_C2_Num, Y1_Sp_C2_Name, Y1_Sp_C2_Credit, " ", Y1_Su_C2_Num, Y1_Su_C2_Name, Y1_Su_C2_Credit, " ", Y1_Fa_C2_Num, Y1_Fa_C2_Name, Y1_Fa_C2_Credit], 
        [Y1_Sp_C3_Num, Y1_Sp_C3_Name, Y1_Sp_C3_Credit, " ", Y1_Su_C3_Num, Y1_Su_C3_Name, Y1_Su_C3_Credit, " ", Y1_Fa_C3_Num, Y1_Fa_C3_Name, Y1_Fa_C3_Credit], 
        [Y1_Sp_C4_Num, Y1_Sp_C4_Name, Y1_Sp_C4_Credit, " ", Y1_Su_C4_Num, Y1_Su_C4_Name, Y1_Su_C4_Credit, " ", Y1_Fa_C4_Num, Y1_Fa_C4_Name, Y1_Fa_C4_Credit], 
        [Y1_Sp_C5_Num, Y1_Sp_C5_Name, Y1_Sp_C5_Credit, " ", Y1_Su_C5_Num, Y1_Su_C5_Name, Y1_Su_C5_Credit, " ", Y1_Fa_C5_Num, Y1_Fa_C5_Name, Y1_Fa_C5_Credit], 
        [Y1_Sp_C6_Num, Y1_Sp_C6_Name, Y1_Sp_C6_Credit, " ", Y1_Su_C6_Num, Y1_Su_C6_Name, Y1_Su_C6_Credit, " ", Y1_Fa_C6_Num, Y1_Fa_C6_Name, Y1_Fa_C6_Credit], 
        [" "],
        ["2022"],
        ["Spring", " ", " ", " ", "Summer", " ", " ", " ", "Fall"],
        ["Course Number", "Course Name", "Credits", " ", "Course Number", "Course Name", "Credits", " ", "Course Number", "Course Name", "Credits"],
        [Y2_Sp_C1_Num, Y2_Sp_C1_Name, Y2_Sp_C1_Credit, " ", Y2_Su_C1_Num, Y2_Su_C1_Name, Y2_Su_C1_Credit, " ", Y2_Fa_C1_Num, Y2_Fa_C1_Name, Y2_Fa_C1_Credit], 
        [Y2_Sp_C2_Num, Y2_Sp_C2_Name, Y2_Sp_C2_Credit, " ", Y2_Su_C2_Num, Y2_Su_C2_Name, Y2_Su_C2_Credit, " ", Y2_Fa_C2_Num, Y2_Fa_C2_Name, Y2_Fa_C2_Credit], 
        [Y2_Sp_C3_Num, Y2_Sp_C3_Name, Y2_Sp_C3_Credit, " ", Y2_Su_C3_Num, Y2_Su_C3_Name, Y2_Su_C3_Credit, " ", Y2_Fa_C3_Num, Y2_Fa_C3_Name, Y2_Fa_C3_Credit], 
        [Y2_Sp_C4_Num, Y2_Sp_C4_Name, Y2_Sp_C4_Credit, " ", Y2_Su_C4_Num, Y2_Su_C4_Name, Y2_Su_C4_Credit, " ", Y2_Fa_C4_Num, Y2_Fa_C4_Name, Y2_Fa_C4_Credit], 
        [Y2_Sp_C5_Num, Y2_Sp_C5_Name, Y2_Sp_C5_Credit, " ", Y2_Su_C5_Num, Y2_Su_C5_Name, Y2_Su_C5_Credit, " ", Y2_Fa_C5_Num, Y2_Fa_C5_Name, Y2_Fa_C5_Credit], 
        [Y2_Sp_C6_Num, Y2_Sp_C6_Name, Y2_Sp_C6_Credit, " ", Y2_Su_C6_Num, Y2_Su_C6_Name, Y2_Su_C6_Credit, " ", Y2_Fa_C6_Num, Y2_Fa_C6_Name, Y2_Fa_C6_Credit],
        [" "],
        ["2023"],
        ["Spring", " ", " ", " ", "Summer", " ", " ", " ", "Fall"],
        ["Course Number", "Course Name", "Credits", " ", "Course Number", "Course Name", "Credits", " ", "Course Number", "Course Name", "Credits"],
        [Y3_Sp_C1_Num, Y3_Sp_C1_Name, Y3_Sp_C1_Credit, " ", Y3_Su_C1_Num, Y3_Su_C1_Name, Y3_Su_C1_Credit, " ", Y3_Fa_C1_Num, Y3_Fa_C1_Name, Y3_Fa_C1_Credit], 
        [Y3_Sp_C2_Num, Y3_Sp_C2_Name, Y3_Sp_C2_Credit, " ", Y3_Su_C2_Num, Y3_Su_C2_Name, Y3_Su_C2_Credit, " ", Y3_Fa_C2_Num, Y3_Fa_C2_Name, Y3_Fa_C2_Credit], 
        [Y3_Sp_C3_Num, Y3_Sp_C3_Name, Y3_Sp_C3_Credit, " ", Y3_Su_C3_Num, Y3_Su_C3_Name, Y3_Su_C3_Credit, " ", Y3_Fa_C3_Num, Y3_Fa_C3_Name, Y3_Fa_C3_Credit], 
        [Y3_Sp_C4_Num, Y3_Sp_C4_Name, Y3_Sp_C4_Credit, " ", Y3_Su_C4_Num, Y3_Su_C4_Name, Y3_Su_C4_Credit, " ", Y3_Fa_C4_Num, Y3_Fa_C4_Name, Y3_Fa_C4_Credit], 
        [Y3_Sp_C5_Num, Y3_Sp_C5_Name, Y3_Sp_C5_Credit, " ", Y3_Su_C5_Num, Y3_Su_C5_Name, Y3_Su_C5_Credit, " ", Y3_Fa_C5_Num, Y3_Fa_C5_Name, Y3_Fa_C5_Credit], 
        [Y3_Sp_C6_Num, Y3_Sp_C6_Name, Y3_Sp_C6_Credit, " ", Y3_Su_C6_Num, Y3_Su_C6_Name, Y3_Su_C6_Credit, " ", Y3_Fa_C6_Num, Y3_Fa_C6_Name, Y3_Fa_C6_Credit],
        [" "],
        ["2024"],
        ["Spring", " ", " ", " ", "Summer", " ", " ", " ", "Fall"],
        ["Course Number", "Course Name", "Credits", " ", "Course Number", "Course Name", "Credits", " ", "Course Number", "Course Name", "Credits"],
        [Y4_Sp_C1_Num, Y4_Sp_C1_Name, Y4_Sp_C1_Credit, " ", Y4_Su_C1_Num, Y4_Su_C1_Name, Y4_Su_C1_Credit, " ", Y4_Fa_C1_Num, Y4_Fa_C1_Name, Y4_Fa_C1_Credit], 
        [Y4_Sp_C2_Num, Y4_Sp_C2_Name, Y4_Sp_C2_Credit, " ", Y4_Su_C2_Num, Y4_Su_C2_Name, Y4_Su_C2_Credit, " ", Y4_Fa_C2_Num, Y4_Fa_C2_Name, Y4_Fa_C2_Credit], 
        [Y4_Sp_C3_Num, Y4_Sp_C3_Name, Y4_Sp_C3_Credit, " ", Y4_Su_C3_Num, Y4_Su_C3_Name, Y4_Su_C3_Credit, " ", Y4_Fa_C3_Num, Y4_Fa_C3_Name, Y4_Fa_C3_Credit], 
        [Y4_Sp_C4_Num, Y4_Sp_C4_Name, Y4_Sp_C4_Credit, " ", Y4_Su_C4_Num, Y4_Su_C4_Name, Y4_Su_C4_Credit, " ", Y4_Fa_C4_Num, Y4_Fa_C4_Name, Y4_Fa_C4_Credit], 
        [Y4_Sp_C5_Num, Y4_Sp_C5_Name, Y4_Sp_C5_Credit, " ", Y4_Su_C5_Num, Y4_Su_C5_Name, Y4_Su_C5_Credit, " ", Y4_Fa_C5_Num, Y4_Fa_C5_Name, Y4_Fa_C5_Credit], 
        [Y4_Sp_C6_Num, Y4_Sp_C6_Name, Y4_Sp_C6_Credit, " ", Y4_Su_C6_Num, Y4_Su_C6_Name, Y4_Su_C6_Credit, " ", Y4_Fa_C6_Num, Y4_Fa_C6_Name, Y4_Fa_C6_Credit],
        [" "],
        ["2025"],
        ["Spring", " ", " ", " ", "Summer", " ", " ", " ", "Fall"],
        ["Course Number", "Course Name", "Credits", " ", "Course Number", "Course Name", "Credits", " ", "Course Number", "Course Name", "Credits"],
        [Y5_Sp_C1_Num, Y5_Sp_C1_Name, Y5_Sp_C1_Credit, " ", Y5_Su_C1_Num, Y5_Su_C1_Name, Y5_Su_C1_Credit, " ", Y5_Fa_C1_Num, Y5_Fa_C1_Name, Y5_Fa_C1_Credit], 
        [Y5_Sp_C2_Num, Y5_Sp_C2_Name, Y5_Sp_C2_Credit, " ", Y5_Su_C2_Num, Y5_Su_C2_Name, Y5_Su_C2_Credit, " ", Y5_Fa_C2_Num, Y5_Fa_C2_Name, Y5_Fa_C2_Credit], 
        [Y5_Sp_C3_Num, Y5_Sp_C3_Name, Y5_Sp_C3_Credit, " ", Y5_Su_C3_Num, Y5_Su_C3_Name, Y5_Su_C3_Credit, " ", Y5_Fa_C3_Num, Y5_Fa_C3_Name, Y5_Fa_C3_Credit], 
        [Y5_Sp_C4_Num, Y5_Sp_C4_Name, Y5_Sp_C4_Credit, " ", Y5_Su_C4_Num, Y5_Su_C4_Name, Y5_Su_C4_Credit, " ", Y5_Fa_C4_Num, Y5_Fa_C4_Name, Y5_Fa_C4_Credit], 
        [Y5_Sp_C5_Num, Y5_Sp_C5_Name, Y5_Sp_C5_Credit, " ", Y5_Su_C5_Num, Y5_Su_C5_Name, Y5_Su_C5_Credit, " ", Y5_Fa_C5_Num, Y5_Fa_C5_Name, Y5_Fa_C5_Credit], 
        [Y5_Sp_C6_Num, Y5_Sp_C6_Name, Y5_Sp_C6_Credit, " ", Y5_Su_C6_Num, Y5_Su_C6_Name, Y5_Su_C6_Credit, " ", Y5_Fa_C6_Num, Y5_Fa_C6_Name, Y5_Fa_C6_Credit],    
      ];
  
      console.log(data); 

    console.log('Table Content Pulled from variables');
    document.getElementById('Y1_Sp_C1_Num').innerHTML = Y1_Sp_C1_Num;
    document.getElementById('Y1_Sp_C1_Name').innerHTML = Y1_Sp_C1_Name;
    document.getElementById('Y1_Sp_C1_Credit').innerHTML = Y1_Sp_C1_Credit;
    document.getElementById('Y1_Sp_C2_Num').innerHTML = Y1_Sp_C2_Num;
    document.getElementById('Y1_Sp_C2_Name').innerHTML = Y1_Sp_C2_Name;
    document.getElementById('Y1_Sp_C2_Credit').innerHTML = Y1_Sp_C2_Credit;
    document.getElementById('Y1_Sp_C3_Num').innerHTML = Y1_Sp_C3_Num;
    document.getElementById('Y1_Sp_C3_Name').innerHTML = Y1_Sp_C3_Name;
    document.getElementById('Y1_Sp_C3_Credit').innerHTML = Y1_Sp_C3_Credit;
    document.getElementById('Y1_Sp_C4_Num').innerHTML = Y1_Sp_C4_Num;
    document.getElementById('Y1_Sp_C4_Name').innerHTML = Y1_Sp_C4_Name;
    document.getElementById('Y1_Sp_C4_Credit').innerHTML = Y1_Sp_C4_Credit;
    document.getElementById('Y1_Sp_C5_Num').innerHTML = Y1_Sp_C5_Num;
    document.getElementById('Y1_Sp_C5_Name').innerHTML = Y1_Sp_C5_Name;
    document.getElementById('Y1_Sp_C5_Credit').innerHTML = Y1_Sp_C5_Credit;
    document.getElementById('Y1_Sp_C6_Num').innerHTML = Y1_Sp_C6_Num;
    document.getElementById('Y1_Sp_C6_Name').innerHTML = Y1_Sp_C6_Name;
    document.getElementById('Y1_Sp_C6_Credit').innerHTML = Y1_Sp_C6_Credit;
    document.getElementById('Y1_Su_C1_Num').innerHTML = Y1_Su_C1_Num;
    document.getElementById('Y1_Su_C1_Name').innerHTML = Y1_Su_C1_Name;
    document.getElementById('Y1_Su_C1_Credit').innerHTML = Y1_Su_C1_Credit;
    document.getElementById('Y1_Su_C2_Num').innerHTML = Y1_Su_C2_Num;
    document.getElementById('Y1_Su_C2_Name').innerHTML = Y1_Su_C2_Name;
    document.getElementById('Y1_Su_C2_Credit').innerHTML = Y1_Su_C2_Credit;
    document.getElementById('Y1_Su_C3_Num').innerHTML = Y1_Su_C3_Num;
    document.getElementById('Y1_Su_C3_Name').innerHTML = Y1_Su_C3_Name;
    document.getElementById('Y1_Su_C3_Credit').innerHTML = Y1_Su_C3_Credit;
    document.getElementById('Y1_Su_C4_Num').innerHTML = Y1_Su_C4_Num;
    document.getElementById('Y1_Su_C4_Name').innerHTML = Y1_Su_C4_Name;
    document.getElementById('Y1_Su_C4_Credit').innerHTML = Y1_Su_C4_Credit;
    document.getElementById('Y1_Su_C5_Num').innerHTML = Y1_Su_C5_Num;
    document.getElementById('Y1_Su_C5_Name').innerHTML = Y1_Su_C5_Name;
    document.getElementById('Y1_Su_C5_Credit').innerHTML = Y1_Su_C5_Credit;
    document.getElementById('Y1_Su_C6_Num').innerHTML = Y1_Su_C6_Num;
    document.getElementById('Y1_Su_C6_Name').innerHTML = Y1_Su_C6_Name;
    document.getElementById('Y1_Su_C6_Credit').innerHTML = Y1_Su_C6_Credit;
    document.getElementById('Y1_Fa_C1_Num').innerHTML = Y1_Fa_C1_Num;
    document.getElementById('Y1_Fa_C1_Name').innerHTML = Y1_Fa_C1_Name;
    document.getElementById('Y1_Fa_C1_Credit').innerHTML = Y1_Fa_C1_Credit;
    document.getElementById('Y1_Fa_C2_Num').innerHTML = Y1_Fa_C2_Num;
    document.getElementById('Y1_Fa_C2_Name').innerHTML = Y1_Fa_C2_Name;
    document.getElementById('Y1_Fa_C2_Credit').innerHTML = Y1_Fa_C2_Credit;
    document.getElementById('Y1_Fa_C3_Num').innerHTML = Y1_Fa_C3_Num;
    document.getElementById('Y1_Fa_C3_Name').innerHTML = Y1_Fa_C3_Name;
    document.getElementById('Y1_Fa_C3_Credit').innerHTML = Y1_Fa_C3_Credit;
    document.getElementById('Y1_Fa_C4_Num').innerHTML = Y1_Fa_C4_Num;
    document.getElementById('Y1_Fa_C4_Name').innerHTML = Y1_Fa_C4_Name;
    document.getElementById('Y1_Fa_C4_Credit').innerHTML = Y1_Fa_C4_Credit;
    document.getElementById('Y1_Fa_C5_Num').innerHTML = Y1_Fa_C5_Num;
    document.getElementById('Y1_Fa_C5_Name').innerHTML = Y1_Fa_C5_Name;
    document.getElementById('Y1_Fa_C5_Credit').innerHTML = Y1_Fa_C5_Credit;
    document.getElementById('Y1_Fa_C6_Num').innerHTML = Y1_Fa_C6_Num;
    document.getElementById('Y1_Fa_C6_Name').innerHTML = Y1_Fa_C6_Name;
    document.getElementById('Y1_Fa_C6_Credit').innerHTML = Y1_Fa_C6_Credit;
    document.getElementById('Y2_Sp_C1_Num').innerHTML = Y2_Sp_C1_Num;
    document.getElementById('Y2_Sp_C1_Name').innerHTML = Y2_Sp_C1_Name;
    document.getElementById('Y2_Sp_C1_Credit').innerHTML = Y2_Sp_C1_Credit;
    document.getElementById('Y2_Sp_C2_Num').innerHTML = Y2_Sp_C2_Num;
    document.getElementById('Y2_Sp_C2_Name').innerHTML = Y2_Sp_C2_Name;
    document.getElementById('Y2_Sp_C2_Credit').innerHTML = Y2_Sp_C2_Credit;
    document.getElementById('Y2_Sp_C3_Num').innerHTML = Y2_Sp_C3_Num;
    document.getElementById('Y2_Sp_C3_Name').innerHTML = Y2_Sp_C3_Name;
    document.getElementById('Y2_Sp_C3_Credit').innerHTML = Y2_Sp_C3_Credit;
    document.getElementById('Y2_Sp_C4_Num').innerHTML = Y2_Sp_C4_Num;
    document.getElementById('Y2_Sp_C4_Name').innerHTML = Y2_Sp_C4_Name;
    document.getElementById('Y2_Sp_C4_Credit').innerHTML = Y2_Sp_C4_Credit;
    document.getElementById('Y2_Sp_C5_Num').innerHTML = Y2_Sp_C5_Num;
    document.getElementById('Y2_Sp_C5_Name').innerHTML = Y2_Sp_C5_Name;
    document.getElementById('Y2_Sp_C5_Credit').innerHTML = Y2_Sp_C5_Credit;
    document.getElementById('Y2_Sp_C6_Num').innerHTML = Y2_Sp_C6_Num;
    document.getElementById('Y2_Sp_C6_Name').innerHTML = Y2_Sp_C6_Name;
    document.getElementById('Y2_Sp_C6_Credit').innerHTML = Y2_Sp_C6_Credit;
    document.getElementById('Y2_Su_C1_Num').innerHTML = Y2_Su_C1_Num;
    document.getElementById('Y2_Su_C1_Name').innerHTML = Y2_Su_C1_Name;
    document.getElementById('Y2_Su_C1_Credit').innerHTML = Y2_Su_C1_Credit;
    document.getElementById('Y2_Su_C2_Num').innerHTML = Y2_Su_C2_Num;
    document.getElementById('Y2_Su_C2_Name').innerHTML = Y2_Su_C2_Name;
    document.getElementById('Y2_Su_C2_Credit').innerHTML = Y2_Su_C2_Credit;
    document.getElementById('Y2_Su_C3_Num').innerHTML = Y2_Su_C3_Num;
    document.getElementById('Y2_Su_C3_Name').innerHTML = Y2_Su_C3_Name;
    document.getElementById('Y2_Su_C3_Credit').innerHTML = Y2_Su_C3_Credit;
    document.getElementById('Y2_Su_C4_Num').innerHTML = Y2_Su_C4_Num;
    document.getElementById('Y2_Su_C4_Name').innerHTML = Y2_Su_C4_Name;
    document.getElementById('Y2_Su_C4_Credit').innerHTML = Y2_Su_C4_Credit;
    document.getElementById('Y2_Su_C5_Num').innerHTML = Y2_Su_C5_Num;
    document.getElementById('Y2_Su_C5_Name').innerHTML = Y2_Su_C5_Name;
    document.getElementById('Y2_Su_C5_Credit').innerHTML = Y2_Su_C5_Credit;
    document.getElementById('Y2_Su_C6_Num').innerHTML = Y2_Su_C6_Num;
    document.getElementById('Y2_Su_C6_Name').innerHTML = Y2_Su_C6_Name;
    document.getElementById('Y2_Su_C6_Credit').innerHTML = Y2_Su_C6_Credit;
    document.getElementById('Y2_Fa_C1_Num').innerHTML = Y2_Fa_C1_Num;
    document.getElementById('Y2_Fa_C1_Name').innerHTML = Y2_Fa_C1_Name;
    document.getElementById('Y2_Fa_C1_Credit').innerHTML = Y2_Fa_C1_Credit;
    document.getElementById('Y2_Fa_C2_Num').innerHTML = Y2_Fa_C2_Num;
    document.getElementById('Y2_Fa_C2_Name').innerHTML = Y2_Fa_C2_Name;
    document.getElementById('Y2_Fa_C2_Credit').innerHTML = Y2_Fa_C2_Credit;
    document.getElementById('Y2_Fa_C3_Num').innerHTML = Y2_Fa_C3_Num;
    document.getElementById('Y2_Fa_C3_Name').innerHTML = Y2_Fa_C3_Name;
    document.getElementById('Y2_Fa_C3_Credit').innerHTML = Y2_Fa_C3_Credit;
    document.getElementById('Y2_Fa_C4_Num').innerHTML = Y2_Fa_C4_Num;
    document.getElementById('Y2_Fa_C4_Name').innerHTML = Y2_Fa_C4_Name;
    document.getElementById('Y2_Fa_C4_Credit').innerHTML = Y2_Fa_C4_Credit;
    document.getElementById('Y2_Fa_C5_Num').innerHTML = Y2_Fa_C5_Num;
    document.getElementById('Y2_Fa_C5_Name').innerHTML = Y2_Fa_C5_Name;
    document.getElementById('Y2_Fa_C5_Credit').innerHTML = Y2_Fa_C5_Credit;
    document.getElementById('Y2_Fa_C6_Num').innerHTML = Y2_Fa_C6_Num;
    document.getElementById('Y2_Fa_C6_Name').innerHTML = Y2_Fa_C6_Name;
    document.getElementById('Y2_Fa_C6_Credit').innerHTML = Y2_Fa_C6_Credit;
    document.getElementById('Y3_Sp_C1_Num').innerHTML = Y3_Sp_C1_Num;
    document.getElementById('Y3_Sp_C1_Name').innerHTML = Y3_Sp_C1_Name;
    document.getElementById('Y3_Sp_C1_Credit').innerHTML = Y3_Sp_C1_Credit;
    document.getElementById('Y3_Sp_C2_Num').innerHTML = Y3_Sp_C2_Num;
    document.getElementById('Y3_Sp_C2_Name').innerHTML = Y3_Sp_C2_Name;
    document.getElementById('Y3_Sp_C2_Credit').innerHTML = Y3_Sp_C2_Credit;
    document.getElementById('Y3_Sp_C3_Num').innerHTML = Y3_Sp_C3_Num;
    document.getElementById('Y3_Sp_C3_Name').innerHTML = Y3_Sp_C3_Name;
    document.getElementById('Y3_Sp_C3_Credit').innerHTML = Y3_Sp_C3_Credit;
    document.getElementById('Y3_Sp_C4_Num').innerHTML = Y3_Sp_C4_Num;
    document.getElementById('Y3_Sp_C4_Name').innerHTML = Y3_Sp_C4_Name;
    document.getElementById('Y3_Sp_C4_Credit').innerHTML = Y3_Sp_C4_Credit;
    document.getElementById('Y3_Sp_C5_Num').innerHTML = Y3_Sp_C5_Num;
    document.getElementById('Y3_Sp_C5_Name').innerHTML = Y3_Sp_C5_Name;
    document.getElementById('Y3_Sp_C5_Credit').innerHTML = Y3_Sp_C5_Credit;
    document.getElementById('Y3_Sp_C6_Num').innerHTML = Y3_Sp_C6_Num;
    document.getElementById('Y3_Sp_C6_Name').innerHTML = Y3_Sp_C6_Name;
    document.getElementById('Y3_Sp_C6_Credit').innerHTML = Y3_Sp_C6_Credit;
    document.getElementById('Y3_Su_C1_Num').innerHTML = Y3_Su_C1_Num;
    document.getElementById('Y3_Su_C1_Name').innerHTML = Y3_Su_C1_Name;
    document.getElementById('Y3_Su_C1_Credit').innerHTML = Y3_Su_C1_Credit;
    document.getElementById('Y3_Su_C2_Num').innerHTML = Y3_Su_C2_Num;
    document.getElementById('Y3_Su_C2_Name').innerHTML = Y3_Su_C2_Name;
    document.getElementById('Y3_Su_C2_Credit').innerHTML = Y3_Su_C2_Credit;
    document.getElementById('Y3_Su_C3_Num').innerHTML = Y3_Su_C3_Num;
    document.getElementById('Y3_Su_C3_Name').innerHTML = Y3_Su_C3_Name;
    document.getElementById('Y3_Su_C3_Credit').innerHTML = Y3_Su_C3_Credit;
    document.getElementById('Y3_Su_C4_Num').innerHTML = Y3_Su_C4_Num;
    document.getElementById('Y3_Su_C4_Name').innerHTML = Y3_Su_C4_Name;
    document.getElementById('Y3_Su_C4_Credit').innerHTML = Y3_Su_C4_Credit;
    document.getElementById('Y3_Su_C5_Num').innerHTML = Y3_Su_C5_Num;
    document.getElementById('Y3_Su_C5_Name').innerHTML = Y3_Su_C5_Name;
    document.getElementById('Y3_Su_C5_Credit').innerHTML = Y3_Su_C5_Credit;
    document.getElementById('Y3_Su_C6_Num').innerHTML = Y3_Su_C6_Num;
    document.getElementById('Y3_Su_C6_Name').innerHTML = Y3_Su_C6_Name;
    document.getElementById('Y3_Su_C6_Credit').innerHTML = Y3_Su_C6_Credit;
    document.getElementById('Y3_Fa_C1_Num').innerHTML = Y3_Fa_C1_Num;
    document.getElementById('Y3_Fa_C1_Name').innerHTML = Y3_Fa_C1_Name;
    document.getElementById('Y3_Fa_C1_Credit').innerHTML = Y3_Fa_C1_Credit;
    document.getElementById('Y3_Fa_C2_Num').innerHTML = Y3_Fa_C2_Num;
    document.getElementById('Y3_Fa_C2_Name').innerHTML = Y3_Fa_C2_Name;
    document.getElementById('Y3_Fa_C2_Credit').innerHTML = Y3_Fa_C2_Credit;
    document.getElementById('Y3_Fa_C3_Num').innerHTML = Y3_Fa_C3_Num;
    document.getElementById('Y3_Fa_C3_Name').innerHTML = Y3_Fa_C3_Name;
    document.getElementById('Y3_Fa_C3_Credit').innerHTML = Y3_Fa_C3_Credit;
    document.getElementById('Y3_Fa_C4_Num').innerHTML = Y3_Fa_C4_Num;
    document.getElementById('Y3_Fa_C4_Name').innerHTML = Y3_Fa_C4_Name;
    document.getElementById('Y3_Fa_C4_Credit').innerHTML = Y3_Fa_C4_Credit;
    document.getElementById('Y3_Fa_C5_Num').innerHTML = Y3_Fa_C5_Num;
    document.getElementById('Y3_Fa_C5_Name').innerHTML = Y3_Fa_C5_Name;
    document.getElementById('Y3_Fa_C5_Credit').innerHTML = Y3_Fa_C5_Credit;
    document.getElementById('Y3_Fa_C6_Num').innerHTML = Y3_Fa_C6_Num;
    document.getElementById('Y3_Fa_C6_Name').innerHTML = Y3_Fa_C6_Name;
    document.getElementById('Y3_Fa_C6_Credit').innerHTML = Y3_Fa_C6_Credit;
    document.getElementById('Y4_Sp_C1_Num').innerHTML = Y4_Sp_C1_Num;
    document.getElementById('Y4_Sp_C1_Name').innerHTML = Y4_Sp_C1_Name;
    document.getElementById('Y4_Sp_C1_Credit').innerHTML = Y4_Sp_C1_Credit;
    document.getElementById('Y4_Sp_C2_Num').innerHTML = Y4_Sp_C2_Num;
    document.getElementById('Y4_Sp_C2_Name').innerHTML = Y4_Sp_C2_Name;
    document.getElementById('Y4_Sp_C2_Credit').innerHTML = Y4_Sp_C2_Credit;
    document.getElementById('Y4_Sp_C3_Num').innerHTML = Y4_Sp_C3_Num;
    document.getElementById('Y4_Sp_C3_Name').innerHTML = Y4_Sp_C3_Name;
    document.getElementById('Y4_Sp_C3_Credit').innerHTML = Y4_Sp_C3_Credit;
    document.getElementById('Y4_Sp_C4_Num').innerHTML = Y4_Sp_C4_Num;
    document.getElementById('Y4_Sp_C4_Name').innerHTML = Y4_Sp_C4_Name;
    document.getElementById('Y4_Sp_C4_Credit').innerHTML = Y4_Sp_C4_Credit;
    document.getElementById('Y4_Sp_C5_Num').innerHTML = Y4_Sp_C5_Num;
    document.getElementById('Y4_Sp_C5_Name').innerHTML = Y4_Sp_C5_Name;
    document.getElementById('Y4_Sp_C5_Credit').innerHTML = Y4_Sp_C5_Credit;
    document.getElementById('Y4_Sp_C6_Num').innerHTML = Y4_Sp_C6_Num;
    document.getElementById('Y4_Sp_C6_Name').innerHTML = Y4_Sp_C6_Name;
    document.getElementById('Y4_Sp_C6_Credit').innerHTML = Y4_Sp_C6_Credit;
    document.getElementById('Y4_Su_C1_Num').innerHTML = Y4_Su_C1_Num;
    document.getElementById('Y4_Su_C1_Name').innerHTML = Y4_Su_C1_Name;
    document.getElementById('Y4_Su_C1_Credit').innerHTML = Y4_Su_C1_Credit;
    document.getElementById('Y4_Su_C2_Num').innerHTML = Y4_Su_C2_Num;
    document.getElementById('Y4_Su_C2_Name').innerHTML = Y4_Su_C2_Name;
    document.getElementById('Y4_Su_C2_Credit').innerHTML = Y4_Su_C2_Credit;
    document.getElementById('Y4_Su_C3_Num').innerHTML = Y4_Su_C3_Num;
    document.getElementById('Y4_Su_C3_Name').innerHTML = Y4_Su_C3_Name;
    document.getElementById('Y4_Su_C3_Credit').innerHTML = Y4_Su_C3_Credit;
    document.getElementById('Y4_Su_C4_Num').innerHTML = Y4_Su_C4_Num;
    document.getElementById('Y4_Su_C4_Name').innerHTML = Y4_Su_C4_Name;
    document.getElementById('Y4_Su_C4_Credit').innerHTML = Y4_Su_C4_Credit;
    document.getElementById('Y4_Su_C5_Num').innerHTML = Y4_Su_C5_Num;
    document.getElementById('Y4_Su_C5_Name').innerHTML = Y4_Su_C5_Name;
    document.getElementById('Y4_Su_C5_Credit').innerHTML = Y4_Su_C5_Credit;
    document.getElementById('Y4_Su_C6_Num').innerHTML = Y4_Su_C6_Num;
    document.getElementById('Y4_Su_C6_Name').innerHTML = Y4_Su_C6_Name;
    document.getElementById('Y4_Su_C6_Credit').innerHTML = Y4_Su_C6_Credit;
    document.getElementById('Y4_Fa_C1_Num').innerHTML = Y4_Fa_C1_Num;
    document.getElementById('Y4_Fa_C1_Name').innerHTML = Y4_Fa_C1_Name;
    document.getElementById('Y4_Fa_C1_Credit').innerHTML = Y4_Fa_C1_Credit;
    document.getElementById('Y4_Fa_C2_Num').innerHTML = Y4_Fa_C2_Num;
    document.getElementById('Y4_Fa_C2_Name').innerHTML = Y4_Fa_C2_Name;
    document.getElementById('Y4_Fa_C2_Credit').innerHTML = Y4_Fa_C2_Credit;
    document.getElementById('Y4_Fa_C3_Num').innerHTML = Y4_Fa_C3_Num;
    document.getElementById('Y4_Fa_C3_Name').innerHTML = Y4_Fa_C3_Name;
    document.getElementById('Y4_Fa_C3_Credit').innerHTML = Y4_Fa_C3_Credit;
    document.getElementById('Y4_Fa_C4_Num').innerHTML = Y4_Fa_C4_Num;
    document.getElementById('Y4_Fa_C4_Name').innerHTML = Y4_Fa_C4_Name;
    document.getElementById('Y4_Fa_C4_Credit').innerHTML = Y4_Fa_C4_Credit;
    document.getElementById('Y4_Fa_C5_Num').innerHTML = Y4_Fa_C5_Num;
    document.getElementById('Y4_Fa_C5_Name').innerHTML = Y4_Fa_C5_Name;
    document.getElementById('Y4_Fa_C5_Credit').innerHTML = Y4_Fa_C5_Credit;
    document.getElementById('Y4_Fa_C6_Num').innerHTML = Y4_Fa_C6_Num;
    document.getElementById('Y4_Fa_C6_Name').innerHTML = Y4_Fa_C6_Name;
    document.getElementById('Y4_Fa_C6_Credit').innerHTML = Y4_Fa_C6_Credit;
    document.getElementById('Y5_Sp_C1_Num').innerHTML = Y5_Sp_C1_Num;
    document.getElementById('Y5_Sp_C1_Name').innerHTML = Y5_Sp_C1_Name;
    document.getElementById('Y5_Sp_C1_Credit').innerHTML = Y5_Sp_C1_Credit;
    document.getElementById('Y5_Sp_C2_Num').innerHTML = Y5_Sp_C2_Num;
    document.getElementById('Y5_Sp_C2_Name').innerHTML = Y5_Sp_C2_Name;
    document.getElementById('Y5_Sp_C2_Credit').innerHTML = Y5_Sp_C2_Credit;
    document.getElementById('Y5_Sp_C3_Num').innerHTML = Y5_Sp_C3_Num;
    document.getElementById('Y5_Sp_C3_Name').innerHTML = Y5_Sp_C3_Name;
    document.getElementById('Y5_Sp_C3_Credit').innerHTML = Y5_Sp_C3_Credit;
    document.getElementById('Y5_Sp_C4_Num').innerHTML = Y5_Sp_C4_Num;
    document.getElementById('Y5_Sp_C4_Name').innerHTML = Y5_Sp_C4_Name;
    document.getElementById('Y5_Sp_C4_Credit').innerHTML = Y5_Sp_C4_Credit;
    document.getElementById('Y5_Sp_C5_Num').innerHTML = Y5_Sp_C5_Num;
    document.getElementById('Y5_Sp_C5_Name').innerHTML = Y5_Sp_C5_Name;
    document.getElementById('Y5_Sp_C5_Credit').innerHTML = Y5_Sp_C5_Credit;
    document.getElementById('Y5_Sp_C6_Num').innerHTML = Y5_Sp_C6_Num;
    document.getElementById('Y5_Sp_C6_Name').innerHTML = Y5_Sp_C6_Name;
    document.getElementById('Y5_Sp_C6_Credit').innerHTML = Y5_Sp_C6_Credit;
    document.getElementById('Y5_Su_C1_Num').innerHTML = Y5_Su_C1_Num;
    document.getElementById('Y5_Su_C1_Name').innerHTML = Y5_Su_C1_Name;
    document.getElementById('Y5_Su_C1_Credit').innerHTML = Y5_Su_C1_Credit;
    document.getElementById('Y5_Su_C2_Num').innerHTML = Y5_Su_C2_Num;
    document.getElementById('Y5_Su_C2_Name').innerHTML = Y5_Su_C2_Name;
    document.getElementById('Y5_Su_C2_Credit').innerHTML = Y5_Su_C2_Credit;
    document.getElementById('Y5_Su_C3_Num').innerHTML = Y5_Su_C3_Num;
    document.getElementById('Y5_Su_C3_Name').innerHTML = Y5_Su_C3_Name;
    document.getElementById('Y5_Su_C3_Credit').innerHTML = Y5_Su_C3_Credit;
    document.getElementById('Y5_Su_C4_Num').innerHTML = Y5_Su_C4_Num;
    document.getElementById('Y5_Su_C4_Name').innerHTML = Y5_Su_C4_Name;
    document.getElementById('Y5_Su_C4_Credit').innerHTML = Y5_Su_C4_Credit;
    document.getElementById('Y5_Su_C5_Num').innerHTML = Y5_Su_C5_Num;
    document.getElementById('Y5_Su_C5_Name').innerHTML = Y5_Su_C5_Name;
    document.getElementById('Y5_Su_C5_Credit').innerHTML = Y5_Su_C5_Credit;
    document.getElementById('Y5_Su_C6_Num').innerHTML = Y5_Su_C6_Num;
    document.getElementById('Y5_Su_C6_Name').innerHTML = Y5_Su_C6_Name;
    document.getElementById('Y5_Su_C6_Credit').innerHTML = Y5_Su_C6_Credit;
    document.getElementById('Y5_Fa_C1_Num').innerHTML = Y5_Fa_C1_Num;
    document.getElementById('Y5_Fa_C1_Name').innerHTML = Y5_Fa_C1_Name;
    document.getElementById('Y5_Fa_C1_Credit').innerHTML = Y5_Fa_C1_Credit;
    document.getElementById('Y5_Fa_C2_Num').innerHTML = Y5_Fa_C2_Num;
    document.getElementById('Y5_Fa_C2_Name').innerHTML = Y5_Fa_C2_Name;
    document.getElementById('Y5_Fa_C2_Credit').innerHTML = Y5_Fa_C2_Credit;
    document.getElementById('Y5_Fa_C3_Num').innerHTML = Y5_Fa_C3_Num;
    document.getElementById('Y5_Fa_C3_Name').innerHTML = Y5_Fa_C3_Name;
    document.getElementById('Y5_Fa_C3_Credit').innerHTML = Y5_Fa_C3_Credit;
    document.getElementById('Y5_Fa_C4_Num').innerHTML = Y5_Fa_C4_Num;
    document.getElementById('Y5_Fa_C4_Name').innerHTML = Y5_Fa_C4_Name;
    document.getElementById('Y5_Fa_C4_Credit').innerHTML = Y5_Fa_C4_Credit;
    document.getElementById('Y5_Fa_C5_Num').innerHTML = Y5_Fa_C5_Num;
    document.getElementById('Y5_Fa_C5_Name').innerHTML = Y5_Fa_C5_Name;
    document.getElementById('Y5_Fa_C5_Credit').innerHTML = Y5_Fa_C5_Credit;
    document.getElementById('Y5_Fa_C6_Num').innerHTML = Y5_Fa_C6_Num;
    document.getElementById('Y5_Fa_C6_Name').innerHTML = Y5_Fa_C6_Name;
    document.getElementById('Y5_Fa_C6_Credit').innerHTML = Y5_Fa_C6_Credit;

    }// end if 

  return(
  <div className='App'>
    <header className='masthead'>
      <div className='container'>
        <div className='intro-text'>
          <div className='intro-heading text-uppercase'>4 Year Plan User Info</div>
        </div>
      </div>
    </header>

    <Card body>
      {print_warnings(props.print_warn)}
      <table>
            <thead>
                <tr>
                    <th>2021</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <thead>
                            <tr>
                                <th>Spring</th>
                            </tr>
                        </thead>
                        <tbody>
                            <colgroup></colgroup>
                            <tr>
                                <th>Course Number</th>
                                <th>Course Name</th>
                                <th>Credits</th>
                            </tr>
                            <tr>
                                <td> <p id='Y1_Sp_C1_Num'></p></td>
                                <td> <p id='Y1_Sp_C1_Name'></p></td>
                                <td> <p id='Y1_Sp_C1_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y1_Sp_C2_Num'></p></td>
                                <td> <p id='Y1_Sp_C2_Name'></p></td>
                                <td> <p id='Y1_Sp_C2_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y1_Sp_C3_Num'></p></td>
                                <td> <p id='Y1_Sp_C3_Name'></p></td>
                                <td> <p id='Y1_Sp_C3_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y1_Sp_C4_Num'></p></td>
                                <td> <p id='Y1_Sp_C4_Name'></p></td>
                                <td> <p id='Y1_Sp_C4_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y1_Sp_C5_Num'></p></td>
                                <td> <p id='Y1_Sp_C5_Name'></p></td>
                                <td> <p id='Y1_Sp_C5_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y1_Sp_C6_Num'></p></td>
                                <td> <p id='Y1_Sp_C6_Name'></p></td>
                                <td> <p id='Y1_Sp_C6_Credit'></p></td>
                            </tr>
                        </tbody>
                    </td>
                    <td>
                        <thead>
                            <tr>
                                <th>Summer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <colgroup></colgroup>
                            <tr>
                                <th>Course Number</th>
                                <th>Course Name</th>
                                <th>Credits</th>
                            </tr>
                            <tr>
                                <td> <p id='Y1_Su_C1_Num'></p></td>
                                <td> <p id='Y1_Su_C1_Name'></p></td>
                                <td> <p id='Y1_Su_C1_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y1_Su_C2_Num'></p></td>
                                <td> <p id='Y1_Su_C2_Name'></p></td>
                                <td> <p id='Y1_Su_C2_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y1_Su_C3_Num'></p></td>
                                <td> <p id='Y1_Su_C3_Name'></p></td>
                                <td> <p id='Y1_Su_C3_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y1_Su_C4_Num'></p></td>
                                <td> <p id='Y1_Su_C4_Name'></p></td>
                                <td> <p id='Y1_Su_C4_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y1_Su_C5_Num'></p></td>
                                <td> <p id='Y1_Su_C5_Name'></p></td>
                                <td> <p id='Y1_Su_C5_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y1_Su_C6_Num'></p></td>
                                <td> <p id='Y1_Su_C6_Name'></p></td>
                                <td> <p id='Y1_Su_C6_Credit'></p></td>
                            </tr>
                        </tbody>
                    </td>
                    <td>
                    <thead>
                            <tr>
                                <th>Fall</th>
                            </tr>
                        </thead>
                        <tbody>
                            <colgroup></colgroup>
                            <tr>
                                <th>Course Number</th>
                                <th>Course Name</th>
                                <th>Credits</th>
                            </tr>
                            <tr>
                                <td> <p id='Y1_Fa_C1_Num'></p></td>
                                <td> <p id='Y1_Fa_C1_Name'></p></td>
                                <td> <p id='Y1_Fa_C1_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y1_Fa_C2_Num'></p></td>
                                <td> <p id='Y1_Fa_C2_Name'></p></td>
                                <td> <p id='Y1_Fa_C2_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y1_Fa_C3_Num'></p></td>
                                <td> <p id='Y1_Fa_C3_Name'></p></td>
                                <td> <p id='Y1_Fa_C3_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y1_Fa_C4_Num'></p></td>
                                <td> <p id='Y1_Fa_C4_Name'></p></td>
                                <td> <p id='Y1_Fa_C4_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y1_Fa_C5_Num'></p></td>
                                <td> <p id='Y1_Fa_C5_Name'></p></td>
                                <td> <p id='Y1_Fa_C5_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y1_Fa_C6_Num'></p></td>
                                <td> <p id='Y1_Fa_C6_Name'></p></td>
                                <td> <p id='Y1_Fa_C6_Credit'></p></td>
                            </tr>
                        </tbody>
                    </td>
                </tr>
            </tbody>
        </table>
        <table>
            <thead>
                <tr>
                    <th>2022</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <thead>
                            <tr>
                                <th>Spring</th>
                            </tr>
                        </thead>
                        <tbody>
                            <colgroup></colgroup>
                            <tr>
                                <th>Course Number</th>
                                <th>Course Name</th>
                                <th>Credits</th>
                            </tr>
                            <tr>
                                <td> <p id='Y2_Sp_C1_Num'></p></td>
                                <td> <p id='Y2_Sp_C1_Name'></p></td>
                                <td> <p id='Y2_Sp_C1_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y2_Sp_C2_Num'></p></td>
                                <td> <p id='Y2_Sp_C2_Name'></p></td>
                                <td> <p id='Y2_Sp_C2_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y2_Sp_C3_Num'></p></td>
                                <td> <p id='Y2_Sp_C3_Name'></p></td>
                                <td> <p id='Y2_Sp_C3_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y2_Sp_C4_Num'></p></td>
                                <td> <p id='Y2_Sp_C4_Name'></p></td>
                                <td> <p id='Y2_Sp_C4_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y2_Sp_C5_Num'></p></td>
                                <td> <p id='Y2_Sp_C5_Name'></p></td>
                                <td> <p id='Y2_Sp_C5_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y2_Sp_C6_Num'></p></td>
                                <td> <p id='Y2_Sp_C6_Name'></p></td>
                                <td> <p id='Y2_Sp_C6_Credit'></p></td>
                            </tr>
                        </tbody>
                    </td>
                    <td>
                        <thead>
                            <tr>
                                <th>Summer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <colgroup></colgroup>
                            <tr>
                                <th>Course Number</th>
                                <th>Course Name</th>
                                <th>Credits</th>
                            </tr>
                            <tr>
                                <td> <p id='Y2_Su_C1_Num'></p></td>
                                <td> <p id='Y2_Su_C1_Name'></p></td>
                                <td> <p id='Y2_Su_C1_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y2_Su_C2_Num'></p></td>
                                <td> <p id='Y2_Su_C2_Name'></p></td>
                                <td> <p id='Y2_Su_C2_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y2_Su_C3_Num'></p></td>
                                <td> <p id='Y2_Su_C3_Name'></p></td>
                                <td> <p id='Y2_Su_C3_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y2_Su_C4_Num'></p></td>
                                <td> <p id='Y2_Su_C4_Name'></p></td>
                                <td> <p id='Y2_Su_C4_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y2_Su_C5_Num'></p></td>
                                <td> <p id='Y2_Su_C5_Name'></p></td>
                                <td> <p id='Y2_Su_C5_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y2_Su_C6_Num'></p></td>
                                <td> <p id='Y2_Su_C6_Name'></p></td>
                                <td> <p id='Y2_Su_C6_Credit'></p></td>
                            </tr>
                        </tbody>
                    </td>
                    <td>
                    <thead>
                            <tr>
                                <th>Fall</th>
                            </tr>
                        </thead>
                        <tbody>
                            <colgroup></colgroup>
                            <tr>
                                <th>Course Number</th>
                                <th>Course Name</th>
                                <th>Credits</th>
                            </tr>
                            <tr>
                                <td> <p id='Y2_Fa_C1_Num'></p></td>
                                <td> <p id='Y2_Fa_C1_Name'></p></td>
                                <td> <p id='Y2_Fa_C1_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y2_Fa_C2_Num'></p></td>
                                <td> <p id='Y2_Fa_C2_Name'></p></td>
                                <td> <p id='Y2_Fa_C2_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y2_Fa_C3_Num'></p></td>
                                <td> <p id='Y2_Fa_C3_Name'></p></td>
                                <td> <p id='Y2_Fa_C3_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y2_Fa_C4_Num'></p></td>
                                <td> <p id='Y2_Fa_C4_Name'></p></td>
                                <td> <p id='Y2_Fa_C4_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y2_Fa_C5_Num'></p></td>
                                <td> <p id='Y2_Fa_C5_Name'></p></td>
                                <td> <p id='Y2_Fa_C5_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y2_Fa_C6_Num'></p></td>
                                <td> <p id='Y2_Fa_C6_Name'></p></td>
                                <td> <p id='Y2_Fa_C6_Credit'></p></td>
                            </tr>
                        </tbody>
                    </td>
                </tr>
            </tbody>
        </table>
        <table>
            <thead>
                <tr>
                    <th>2023</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <thead>
                            <tr>
                                <th>Spring</th>
                            </tr>
                        </thead>
                        <tbody>
                            <colgroup></colgroup>
                            <tr>
                                <th>Course Number</th>
                                <th>Course Name</th>
                                <th>Credits</th>
                            </tr>
                            <tr>
                                <td> <p id='Y3_Sp_C1_Num'></p></td>
                                <td> <p id='Y3_Sp_C1_Name'></p></td>
                                <td> <p id='Y3_Sp_C1_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y3_Sp_C2_Num'></p></td>
                                <td> <p id='Y3_Sp_C2_Name'></p></td>
                                <td> <p id='Y3_Sp_C2_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y3_Sp_C3_Num'></p></td>
                                <td> <p id='Y3_Sp_C3_Name'></p></td>
                                <td> <p id='Y3_Sp_C3_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y3_Sp_C4_Num'></p></td>
                                <td> <p id='Y3_Sp_C4_Name'></p></td>
                                <td> <p id='Y3_Sp_C4_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y3_Sp_C5_Num'></p></td>
                                <td> <p id='Y3_Sp_C5_Name'></p></td>
                                <td> <p id='Y3_Sp_C5_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y3_Sp_C6_Num'></p></td>
                                <td> <p id='Y3_Sp_C6_Name'></p></td>
                                <td> <p id='Y3_Sp_C6_Credit'></p></td>
                            </tr>
                        </tbody>
                    </td>
                    <td>
                        <thead>
                            <tr>
                                <th>Summer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <colgroup></colgroup>
                            <tr>
                                <th>Course Number</th>
                                <th>Course Name</th>
                                <th>Credits</th>
                            </tr>
                            <tr>
                                <td> <p id='Y3_Su_C1_Num'></p></td>
                                <td> <p id='Y3_Su_C1_Name'></p></td>
                                <td> <p id='Y3_Su_C1_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y3_Su_C2_Num'></p></td>
                                <td> <p id='Y3_Su_C2_Name'></p></td>
                                <td> <p id='Y3_Su_C2_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y3_Su_C3_Num'></p></td>
                                <td> <p id='Y3_Su_C3_Name'></p></td>
                                <td> <p id='Y3_Su_C3_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y3_Su_C4_Num'></p></td>
                                <td> <p id='Y3_Su_C4_Name'></p></td>
                                <td> <p id='Y3_Su_C4_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y3_Su_C5_Num'></p></td>
                                <td> <p id='Y3_Su_C5_Name'></p></td>
                                <td> <p id='Y3_Su_C5_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y3_Su_C6_Num'></p></td>
                                <td> <p id='Y3_Su_C6_Name'></p></td>
                                <td> <p id='Y3_Su_C6_Credit'></p></td>
                            </tr>
                        </tbody>
                    </td>
                    <td>
                    <thead>
                            <tr>
                                <th>Fall</th>
                            </tr>
                        </thead>
                        <tbody>
                            <colgroup></colgroup>
                            <tr>
                                <th>Course Number</th>
                                <th>Course Name</th>
                                <th>Credits</th>
                            </tr>
                            <tr>
                                <td> <p id='Y3_Fa_C1_Num'></p></td>
                                <td> <p id='Y3_Fa_C1_Name'></p></td>
                                <td> <p id='Y3_Fa_C1_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y3_Fa_C2_Num'></p></td>
                                <td> <p id='Y3_Fa_C2_Name'></p></td>
                                <td> <p id='Y3_Fa_C2_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y3_Fa_C3_Num'></p></td>
                                <td> <p id='Y3_Fa_C3_Name'></p></td>
                                <td> <p id='Y3_Fa_C3_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y3_Fa_C4_Num'></p></td>
                                <td> <p id='Y3_Fa_C4_Name'></p></td>
                                <td> <p id='Y3_Fa_C4_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y3_Fa_C5_Num'></p></td>
                                <td> <p id='Y3_Fa_C5_Name'></p></td>
                                <td> <p id='Y3_Fa_C5_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y3_Fa_C6_Num'></p></td>
                                <td> <p id='Y3_Fa_C6_Name'></p></td>
                                <td> <p id='Y3_Fa_C6_Credit'></p></td>
                            </tr>
                        </tbody>
                    </td>
                </tr>
            </tbody>
        </table>
        <table>
            <thead>
                <tr>
                    <th>2024</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <thead>
                            <tr>
                                <th>Spring</th>
                            </tr>
                        </thead>
                        <tbody>
                            <colgroup></colgroup>
                            <tr>
                                <th>Course Number</th>
                                <th>Course Name</th>
                                <th>Credits</th>
                            </tr>
                            <tr>
                                <td> <p id='Y4_Sp_C1_Num'></p></td>
                                <td> <p id='Y4_Sp_C1_Name'></p></td>
                                <td> <p id='Y4_Sp_C1_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y4_Sp_C2_Num'></p></td>
                                <td> <p id='Y4_Sp_C2_Name'></p></td>
                                <td> <p id='Y4_Sp_C2_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y4_Sp_C3_Num'></p></td>
                                <td> <p id='Y4_Sp_C3_Name'></p></td>
                                <td> <p id='Y4_Sp_C3_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y4_Sp_C4_Num'></p></td>
                                <td> <p id='Y4_Sp_C4_Name'></p></td>
                                <td> <p id='Y4_Sp_C4_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y4_Sp_C5_Num'></p></td>
                                <td> <p id='Y4_Sp_C5_Name'></p></td>
                                <td> <p id='Y4_Sp_C5_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y4_Sp_C6_Num'></p></td>
                                <td> <p id='Y4_Sp_C6_Name'></p></td>
                                <td> <p id='Y4_Sp_C6_Credit'></p></td>
                            </tr>
                        </tbody>
                    </td>
                    <td>
                        <thead>
                            <tr>
                                <th>Summer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <colgroup></colgroup>
                            <tr>
                                <th>Course Number</th>
                                <th>Course Name</th>
                                <th>Credits</th>
                            </tr>
                            <tr>
                                <td> <p id='Y4_Su_C1_Num'></p></td>
                                <td> <p id='Y4_Su_C1_Name'></p></td>
                                <td> <p id='Y4_Su_C1_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y4_Su_C2_Num'></p></td>
                                <td> <p id='Y4_Su_C2_Name'></p></td>
                                <td> <p id='Y4_Su_C2_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y4_Su_C3_Num'></p></td>
                                <td> <p id='Y4_Su_C3_Name'></p></td>
                                <td> <p id='Y4_Su_C3_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y4_Su_C4_Num'></p></td>
                                <td> <p id='Y4_Su_C4_Name'></p></td>
                                <td> <p id='Y4_Su_C4_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y4_Su_C5_Num'></p></td>
                                <td> <p id='Y4_Su_C5_Name'></p></td>
                                <td> <p id='Y4_Su_C5_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y4_Su_C6_Num'></p></td>
                                <td> <p id='Y4_Su_C6_Name'></p></td>
                                <td> <p id='Y4_Su_C6_Credit'></p></td>
                            </tr>
                        </tbody>
                    </td>
                    <td>
                    <thead>
                            <tr>
                                <th>Fall</th>
                            </tr>
                        </thead>
                        <tbody>
                            <colgroup></colgroup>
                            <tr>
                                <th>Course Number</th>
                                <th>Course Name</th>
                                <th>Credits</th>
                            </tr>
                            <tr>
                                <td> <p id='Y4_Fa_C1_Num'></p></td>
                                <td> <p id='Y4_Fa_C1_Name'></p></td>
                                <td> <p id='Y4_Fa_C1_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y4_Fa_C2_Num'></p></td>
                                <td> <p id='Y4_Fa_C2_Name'></p></td>
                                <td> <p id='Y4_Fa_C2_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y4_Fa_C3_Num'></p></td>
                                <td> <p id='Y4_Fa_C3_Name'></p></td>
                                <td> <p id='Y4_Fa_C3_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y4_Fa_C4_Num'></p></td>
                                <td> <p id='Y4_Fa_C4_Name'></p></td>
                                <td> <p id='Y4_Fa_C4_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y4_Fa_C5_Num'></p></td>
                                <td> <p id='Y4_Fa_C5_Name'></p></td>
                                <td> <p id='Y4_Fa_C5_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y4_Fa_C6_Num'></p></td>
                                <td> <p id='Y4_Fa_C6_Name'></p></td>
                                <td> <p id='Y4_Fa_C6_Credit'></p></td>
                            </tr>
                        </tbody>
                    </td>
                </tr>
            </tbody>
        </table>
        <table>
            <thead>
                <tr>
                    <th>2025</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <thead>
                            <tr>
                                <th>Spring</th>
                            </tr>
                        </thead>
                        <tbody>
                            <colgroup></colgroup>
                            <tr>
                                <th>Course Number</th>
                                <th>Course Name</th>
                                <th>Credits</th>
                            </tr>
                            <tr>
                                <td> <p id='Y5_Sp_C1_Num'></p></td>
                                <td> <p id='Y5_Sp_C1_Name'></p></td>
                                <td> <p id='Y5_Sp_C1_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y5_Sp_C2_Num'></p></td>
                                <td> <p id='Y5_Sp_C2_Name'></p></td>
                                <td> <p id='Y5_Sp_C2_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y5_Sp_C3_Num'></p></td>
                                <td> <p id='Y5_Sp_C3_Name'></p></td>
                                <td> <p id='Y5_Sp_C3_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y5_Sp_C4_Num'></p></td>
                                <td> <p id='Y5_Sp_C4_Name'></p></td>
                                <td> <p id='Y5_Sp_C4_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y5_Sp_C5_Num'></p></td>
                                <td> <p id='Y5_Sp_C5_Name'></p></td>
                                <td> <p id='Y5_Sp_C5_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y5_Sp_C6_Num'></p></td>
                                <td> <p id='Y5_Sp_C6_Name'></p></td>
                                <td> <p id='Y5_Sp_C6_Credit'></p></td>
                            </tr>
                        </tbody>
                    </td>
                    <td>
                        <thead>
                            <tr>
                                <th>Summer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <colgroup></colgroup>
                            <tr>
                                <th>Course Number</th>
                                <th>Course Name</th>
                                <th>Credits</th>
                            </tr>
                            <tr>
                                <td> <p id='Y5_Su_C1_Num'></p></td>
                                <td> <p id='Y5_Su_C1_Name'></p></td>
                                <td> <p id='Y5_Su_C1_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y5_Su_C2_Num'></p></td>
                                <td> <p id='Y5_Su_C2_Name'></p></td>
                                <td> <p id='Y5_Su_C2_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y5_Su_C3_Num'></p></td>
                                <td> <p id='Y5_Su_C3_Name'></p></td>
                                <td> <p id='Y5_Su_C3_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y5_Su_C4_Num'></p></td>
                                <td> <p id='Y5_Su_C4_Name'></p></td>
                                <td> <p id='Y5_Su_C4_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y5_Su_C5_Num'></p></td>
                                <td> <p id='Y5_Su_C5_Name'></p></td>
                                <td> <p id='Y5_Su_C5_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y5_Su_C6_Num'></p></td>
                                <td> <p id='Y5_Su_C6_Name'></p></td>
                                <td> <p id='Y5_Su_C6_Credit'></p></td>
                            </tr>
                        </tbody>
                    </td>
                    <td>
                    <thead>
                            <tr>
                                <th>Fall</th>
                            </tr>
                        </thead>
                        <tbody>
                            <colgroup></colgroup>
                            <tr>
                                <th>Course Number</th>
                                <th>Course Name</th>
                                <th>Credits</th>
                            </tr>
                            <tr>
                                <td> <p id='Y5_Fa_C1_Num'></p></td>
                                <td> <p id='Y5_Fa_C1_Name'></p></td>
                                <td> <p id='Y5_Fa_C1_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y5_Fa_C2_Num'></p></td>
                                <td> <p id='Y5_Fa_C2_Name'></p></td>
                                <td> <p id='Y5_Fa_C2_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y5_Fa_C3_Num'></p></td>
                                <td> <p id='Y5_Fa_C3_Name'></p></td>
                                <td> <p id='Y5_Fa_C3_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y5_Fa_C4_Num'></p></td>
                                <td> <p id='Y5_Fa_C4_Name'></p></td>
                                <td> <p id='Y5_Fa_C4_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y5_Fa_C5_Num'></p></td>
                                <td> <p id='Y5_Fa_C5_Name'></p></td>
                                <td> <p id='Y5_Fa_C5_Credit'></p></td>
                            </tr>
                            <tr>
                                <td> <p id='Y5_Fa_C6_Num'></p></td>
                                <td> <p id='Y5_Fa_C6_Name'></p></td>
                                <td> <p id='Y5_Fa_C6_Credit'></p></td>
                            </tr>
                        </tbody>
                    </td>
                </tr>
            </tbody>
        </table>
            <div className='container'>
                <Card body style={{ width: '100%' }}>
                    <ExportReactCSV csvData={data} fileName= {"SuccessPlan"} />
                </Card>
            </div>  

    </Card>
  </div>
  );
};

export default Four_Year_Disp;