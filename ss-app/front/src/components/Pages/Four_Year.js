import React , { Component } from 'react';

import { Form, Col, Card, Button, Row, Container } from 'react-bootstrap';
import './basic.css';

//form
//submitted form is exported into an organized pdf; maybe use (table) to organize semester elements

const Four_Year= (props) => (
  <div className='App'>
    <header className='masthead'>
      <div className='container'>
        <div className='intro-text'>
          <div className='intro-heading text-uppercase'>Four Year Plan</div>
        </div>
      </div>
    </header>

    <Card body>

    <div className='row text-center'>
    <div className='col-md-7'>
    <div class="card">
    <div class="card-body">
      <div id="table" class="table-editable">
          <table class="table table-bordered table-responsive-md table-striped text-center">
          <tbody>
            <tr>
              <td class="pt-3-half" contenteditable="false">Name</td>
              <td class="pt-3-half" contenteditable="true">Al Gator</td>
              <td class="pt-3-half" contenteditable="false">UFID</td>
              <td class="pt-3-half" contenteditable="true">0000-0000</td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>

    <div className='col-md-5'>
    <div class="card">
    <div class="card-body">
    <div id="table" class="table-editable">
        <table class="table table-bordered table-responsive-md table-striped text-center">
        <tbody>
          <tr>
            <td class="pt-3-half" contenteditable="false">Expected Graduation Term and Year</td>
            <td class="pt-3-half" contenteditable="true">Spring 20XX</td>
          </tr>
        </tbody>
        </table>
      </div>

    </div>
    </div>
    </div>

    </div>
    <div className='row'>
      <div className='col-lg-12 text-center'>
      <h6 className='section-heading text-uppercase'>Please fill out the following information for all
courses until you graduate</h6>
      </div>
    </div>


    <div className='row text-center'>
    <div className='col-md-4'>
    <div class="card">
      <h3 class="card-header text-center font-weight-bold text-uppercase py-4" contenteditable="true">Fall 20__</h3>
        <div class="card-body">
          <div id="table" class="table-editable">
              <table class="table table-bordered table-responsive-md table-striped text-center">
                <thead>
                <tr>
                    <th class="text-center">Course Number</th>
                    <th class="text-center">Course Name</th>
                    <th class="text-center">Credits</th>
                </tr>
                </thead>
              <tbody>
                <tr>
                  <td class="pt-3-half" contenteditable="true">Type</td>
                  <td class="pt-3-half" contenteditable="true">in</td>
                  <td class="pt-3-half" contenteditable="true">Here</td>
                </tr>
                <tr>
                  <td class="pt-3-half" contenteditable="true"></td>
                  <td class="pt-3-half" contenteditable="true"></td>
                  <td class="pt-3-half" contenteditable="true"></td>
                </tr>
                <tr>
                  <td class="pt-3-half" contenteditable="true"></td>
                  <td class="pt-3-half" contenteditable="true"></td>
                  <td class="pt-3-half" contenteditable="true"></td>
                </tr>
                <tr>
                  <td class="pt-3-half" contenteditable="true"></td>
                  <td class="pt-3-half" contenteditable="true"></td>
                  <td class="pt-3-half" contenteditable="true"></td>
                </tr>
                <tr>
                  <td class="pt-3-half" contenteditable="true"></td>
                  <td class="pt-3-half" contenteditable="true"></td>
                  <td class="pt-3-half" contenteditable="true"></td>
                </tr>
                <tr>
                  <td class="pt-3-half" contenteditable="true"></td>
                  <td class="pt-3-half" contenteditable="true"></td>
                  <td class="pt-3-half" contenteditable="true"></td>
                </tr>
                <tr>
                  <td class="pt-3-half" contenteditable="true"></td>
                  <td class="pt-3-half" contenteditable="true"></td>
                  <td class="pt-3-half" contenteditable="true"></td>
                </tr>
                <tr>
                  <td class="pt-3-half" contenteditable="true"></td>
                  <td class="pt-3-half" contenteditable="true"></td>
                  <td class="pt-3-half" contenteditable="true"></td>
                </tr>
                <tr>
                  <td class="pt-3-half" contenteditable="false"></td>
                  <td class="pt-3-half" contenteditable="false">Total</td>
                  <td class="pt-3-half" contenteditable="true"></td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
          </div>
          </div>

          <div className='col-md-4'>
          <div class="card">
            <h3 class="card-header text-center font-weight-bold text-uppercase py-4" contenteditable="true">Spring 20__</h3>
              <div class="card-body">
                <div id="table" class="table-editable">
                    <table class="table table-bordered table-responsive-md table-striped text-center">
                      <thead>
                      <tr>
                          <th class="text-center">Course Number</th>
                          <th class="text-center">Course Name</th>
                          <th class="text-center">Credits</th>
                      </tr>
                      </thead>
                    <tbody>
                      <tr>
                        <td class="pt-3-half" contenteditable="true"></td>
                        <td class="pt-3-half" contenteditable="true"></td>
                        <td class="pt-3-half" contenteditable="true"></td>
                      </tr>
                      <tr>
                        <td class="pt-3-half" contenteditable="true"></td>
                        <td class="pt-3-half" contenteditable="true"></td>
                        <td class="pt-3-half" contenteditable="true"></td>
                      </tr>
                      <tr>
                        <td class="pt-3-half" contenteditable="true"></td>
                        <td class="pt-3-half" contenteditable="true"></td>
                        <td class="pt-3-half" contenteditable="true"></td>
                      </tr>
                      <tr>
                        <td class="pt-3-half" contenteditable="true"></td>
                        <td class="pt-3-half" contenteditable="true"></td>
                        <td class="pt-3-half" contenteditable="true"></td>
                      </tr>
                      <tr>
                        <td class="pt-3-half" contenteditable="true"></td>
                        <td class="pt-3-half" contenteditable="true"></td>
                        <td class="pt-3-half" contenteditable="true"></td>
                      </tr>
                      <tr>
                        <td class="pt-3-half" contenteditable="true"></td>
                        <td class="pt-3-half" contenteditable="true"></td>
                        <td class="pt-3-half" contenteditable="true"></td>
                      </tr>
                      <tr>
                        <td class="pt-3-half" contenteditable="true"></td>
                        <td class="pt-3-half" contenteditable="true"></td>
                        <td class="pt-3-half" contenteditable="true"></td>
                      </tr>
                      <tr>
                        <td class="pt-3-half" contenteditable="true"></td>
                        <td class="pt-3-half" contenteditable="true"></td>
                        <td class="pt-3-half" contenteditable="true"></td>
                      </tr>
                      <tr>
                        <td class="pt-3-half" contenteditable="false"></td>
                        <td class="pt-3-half" contenteditable="false">Total</td>
                        <td class="pt-3-half" contenteditable="true"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
                </div>
                </div>

                <div className='col-md-4'>
                <div class="card">
                  <h3 class="card-header text-center font-weight-bold text-uppercase py-4" contenteditable="true">Summer 20__</h3>
                    <div class="card-body">
                      <div id="table" class="table-editable">
                          <table class="table table-bordered table-responsive-md table-striped text-center">
                            <thead>
                            <tr>
                                <th class="text-center">Course Number</th>
                                <th class="text-center">Course Name</th>
                                <th class="text-center">Credits</th>
                            </tr>
                            </thead>
                          <tbody>
                            <tr>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                            </tr>
                            <tr>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                            </tr>
                            <tr>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                            </tr>
                            <tr>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                            </tr>
                            <tr>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                            </tr>
                            <tr>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                            </tr>
                            <tr>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                            </tr>
                            <tr>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                            </tr>
                            <tr>
                              <td class="pt-3-half" contenteditable="false"></td>
                              <td class="pt-3-half" contenteditable="false">Total</td>
                              <td class="pt-3-half" contenteditable="true"></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      </div>
                      </div>
                      </div>


                </div>
                <div className='row text-center'>
                <div className='col-md-4'>
                <div class="card">
                  <h3 class="card-header text-center font-weight-bold text-uppercase py-4" contenteditable="true">Fall 20__</h3>
                    <div class="card-body">
                      <div id="table" class="table-editable">
                          <table class="table table-bordered table-responsive-md table-striped text-center">
                            <thead>
                            <tr>
                                <th class="text-center">Course Number</th>
                                <th class="text-center">Course Name</th>
                                <th class="text-center">Credits</th>
                            </tr>
                            </thead>
                          <tbody>
                            <tr>
                              <td class="pt-3-half" contenteditable="true">Type</td>
                              <td class="pt-3-half" contenteditable="true">in</td>
                              <td class="pt-3-half" contenteditable="true">Here</td>
                            </tr>
                            <tr>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                            </tr>
                            <tr>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                            </tr>
                            <tr>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                            </tr>
                            <tr>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                            </tr>
                            <tr>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                            </tr>
                            <tr>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                            </tr>
                            <tr>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                              <td class="pt-3-half" contenteditable="true"></td>
                            </tr>
                            <tr>
                              <td class="pt-3-half" contenteditable="false"></td>
                              <td class="pt-3-half" contenteditable="false">Total</td>
                              <td class="pt-3-half" contenteditable="true"></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      </div>
                      </div>
                      </div>

                      <div className='col-md-4'>
                      <div class="card">
                        <h3 class="card-header text-center font-weight-bold text-uppercase py-4" contenteditable="true">Spring 20__</h3>
                          <div class="card-body">
                            <div id="table" class="table-editable">
                                <table class="table table-bordered table-responsive-md table-striped text-center">
                                  <thead>
                                  <tr>
                                      <th class="text-center">Course Number</th>
                                      <th class="text-center">Course Name</th>
                                      <th class="text-center">Credits</th>
                                  </tr>
                                  </thead>
                                <tbody>
                                  <tr>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                  </tr>
                                  <tr>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                  </tr>
                                  <tr>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                  </tr>
                                  <tr>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                  </tr>
                                  <tr>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                  </tr>
                                  <tr>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                  </tr>
                                  <tr>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                  </tr>
                                  <tr>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                  </tr>
                                  <tr>
                                    <td class="pt-3-half" contenteditable="false"></td>
                                    <td class="pt-3-half" contenteditable="false">Total</td>
                                    <td class="pt-3-half" contenteditable="true"></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            </div>
                            </div>
                            </div>

                            <div className='col-md-4'>
                            <div class="card">
                              <h3 class="card-header text-center font-weight-bold text-uppercase py-4" contenteditable="true">Summer 20__</h3>
                                <div class="card-body">
                                  <div id="table" class="table-editable">
                                      <table class="table table-bordered table-responsive-md table-striped text-center">
                                        <thead>
                                        <tr>
                                            <th class="text-center">Course Number</th>
                                            <th class="text-center">Course Name</th>
                                            <th class="text-center">Credits</th>
                                        </tr>
                                        </thead>
                                      <tbody>
                                        <tr>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                        </tr>
                                        <tr>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                        </tr>
                                        <tr>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                        </tr>
                                        <tr>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                        </tr>
                                        <tr>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                        </tr>
                                        <tr>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                        </tr>
                                        <tr>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                        </tr>
                                        <tr>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                        </tr>
                                        <tr>
                                          <td class="pt-3-half" contenteditable="false"></td>
                                          <td class="pt-3-half" contenteditable="false">Total</td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  </div>
                                  </div>
                                  </div>


                            </div>
                            <div className='row text-center'>
                            <div className='col-md-4'>
                            <div class="card">
                              <h3 class="card-header text-center font-weight-bold text-uppercase py-4" contenteditable="true">Fall 20__</h3>
                                <div class="card-body">
                                  <div id="table" class="table-editable">
                                      <table class="table table-bordered table-responsive-md table-striped text-center">
                                        <thead>
                                        <tr>
                                            <th class="text-center">Course Number</th>
                                            <th class="text-center">Course Name</th>
                                            <th class="text-center">Credits</th>
                                        </tr>
                                        </thead>
                                      <tbody>
                                        <tr>
                                          <td class="pt-3-half" contenteditable="true">Type</td>
                                          <td class="pt-3-half" contenteditable="true">in</td>
                                          <td class="pt-3-half" contenteditable="true">Here</td>
                                        </tr>
                                        <tr>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                        </tr>
                                        <tr>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                        </tr>
                                        <tr>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                        </tr>
                                        <tr>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                        </tr>
                                        <tr>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                        </tr>
                                        <tr>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                        </tr>
                                        <tr>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                        </tr>
                                        <tr>
                                          <td class="pt-3-half" contenteditable="false"></td>
                                          <td class="pt-3-half" contenteditable="false">Total</td>
                                          <td class="pt-3-half" contenteditable="true"></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  </div>
                                  </div>
                                  </div>

                                  <div className='col-md-4'>
                                  <div class="card">
                                    <h3 class="card-header text-center font-weight-bold text-uppercase py-4" contenteditable="true">Spring 20__</h3>
                                      <div class="card-body">
                                        <div id="table" class="table-editable">
                                            <table class="table table-bordered table-responsive-md table-striped text-center">
                                              <thead>
                                              <tr>
                                                  <th class="text-center">Course Number</th>
                                                  <th class="text-center">Course Name</th>
                                                  <th class="text-center">Credits</th>
                                              </tr>
                                              </thead>
                                            <tbody>
                                              <tr>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                              </tr>
                                              <tr>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                              </tr>
                                              <tr>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                              </tr>
                                              <tr>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                              </tr>
                                              <tr>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                              </tr>
                                              <tr>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                              </tr>
                                              <tr>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                              </tr>
                                              <tr>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                              </tr>
                                              <tr>
                                                <td class="pt-3-half" contenteditable="false"></td>
                                                <td class="pt-3-half" contenteditable="false">Total</td>
                                                <td class="pt-3-half" contenteditable="true"></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        </div>
                                        </div>
                                        </div>

                                        <div className='col-md-4'>
                                        <div class="card">
                                          <h3 class="card-header text-center font-weight-bold text-uppercase py-4" contenteditable="true">Summer 20__</h3>
                                            <div class="card-body">
                                              <div id="table" class="table-editable">
                                                  <table class="table table-bordered table-responsive-md table-striped text-center">
                                                    <thead>
                                                    <tr>
                                                        <th class="text-center">Course Number</th>
                                                        <th class="text-center">Course Name</th>
                                                        <th class="text-center">Credits</th>
                                                    </tr>
                                                    </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pt-3-half" contenteditable="false"></td>
                                                      <td class="pt-3-half" contenteditable="false">Total</td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                              </div>
                                              </div>
                                              </div>


                                        </div>
                                        <div className='row text-center'>
                                        <div className='col-md-4'>
                                        <div class="card">
                                          <h3 class="card-header text-center font-weight-bold text-uppercase py-4" contenteditable="true">Fall 20__</h3>
                                            <div class="card-body">
                                              <div id="table" class="table-editable">
                                                  <table class="table table-bordered table-responsive-md table-striped text-center">
                                                    <thead>
                                                    <tr>
                                                        <th class="text-center">Course Number</th>
                                                        <th class="text-center">Course Name</th>
                                                        <th class="text-center">Credits</th>
                                                    </tr>
                                                    </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td class="pt-3-half" contenteditable="true">Type</td>
                                                      <td class="pt-3-half" contenteditable="true">in</td>
                                                      <td class="pt-3-half" contenteditable="true">Here</td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                    </tr>
                                                    <tr>
                                                      <td class="pt-3-half" contenteditable="false"></td>
                                                      <td class="pt-3-half" contenteditable="false">Total</td>
                                                      <td class="pt-3-half" contenteditable="true"></td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                              </div>
                                              </div>
                                              </div>

                                              <div className='col-md-4'>
                                              <div class="card">
                                                <h3 class="card-header text-center font-weight-bold text-uppercase py-4" contenteditable="true">Spring 20__</h3>
                                                  <div class="card-body">
                                                    <div id="table" class="table-editable">
                                                        <table class="table table-bordered table-responsive-md table-striped text-center">
                                                          <thead>
                                                          <tr>
                                                              <th class="text-center">Course Number</th>
                                                              <th class="text-center">Course Name</th>
                                                              <th class="text-center">Credits</th>
                                                          </tr>
                                                          </thead>
                                                        <tbody>
                                                          <tr>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                          </tr>
                                                          <tr>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                          </tr>
                                                          <tr>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                          </tr>
                                                          <tr>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                          </tr>
                                                          <tr>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                          </tr>
                                                          <tr>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                          </tr>
                                                          <tr>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                          </tr>
                                                          <tr>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                          </tr>
                                                          <tr>
                                                            <td class="pt-3-half" contenteditable="false"></td>
                                                            <td class="pt-3-half" contenteditable="false">Total</td>
                                                            <td class="pt-3-half" contenteditable="true"></td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>

                                                    <div className='col-md-4'>
                                                    <div class="card">
                                                      <h3 class="card-header text-center font-weight-bold text-uppercase py-4" contenteditable="true">Summer 20__</h3>
                                                        <div class="card-body">
                                                          <div id="table" class="table-editable">
                                                              <table class="table table-bordered table-responsive-md table-striped text-center">
                                                                <thead>
                                                                <tr>
                                                                    <th class="text-center">Course Number</th>
                                                                    <th class="text-center">Course Name</th>
                                                                    <th class="text-center">Credits</th>
                                                                </tr>
                                                                </thead>
                                                              <tbody>
                                                                <tr>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                </tr>
                                                                <tr>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                </tr>
                                                                <tr>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                </tr>
                                                                <tr>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                </tr>
                                                                <tr>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                </tr>
                                                                <tr>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                </tr>
                                                                <tr>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                </tr>
                                                                <tr>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                </tr>
                                                                <tr>
                                                                  <td class="pt-3-half" contenteditable="false"></td>
                                                                  <td class="pt-3-half" contenteditable="false">Total</td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                          </div>
                                                          </div>
                                                          </div>
                                                          </div>


                                                    </div>



                                                    <div className='row text-center'>
                                                    <div className='col-md-4'>
                                                    <div class="card">
                                                      <h3 class="card-header text-center font-weight-bold text-uppercase py-4" contenteditable="true">Fall 20__</h3>
                                                        <div class="card-body">
                                                          <div id="table" class="table-editable">
                                                              <table class="table table-bordered table-responsive-md table-striped text-center">
                                                                <thead>
                                                                <tr>
                                                                    <th class="text-center">Course Number</th>
                                                                    <th class="text-center">Course Name</th>
                                                                    <th class="text-center">Credits</th>
                                                                </tr>
                                                                </thead>
                                                              <tbody>
                                                                <tr>
                                                                  <td class="pt-3-half" contenteditable="true">Type</td>
                                                                  <td class="pt-3-half" contenteditable="true">in</td>
                                                                  <td class="pt-3-half" contenteditable="true">Here</td>
                                                                </tr>
                                                                <tr>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                </tr>
                                                                <tr>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                </tr>
                                                                <tr>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                </tr>
                                                                <tr>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                </tr>
                                                                <tr>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                </tr>
                                                                <tr>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                </tr>
                                                                <tr>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                </tr>
                                                                <tr>
                                                                  <td class="pt-3-half" contenteditable="false"></td>
                                                                  <td class="pt-3-half" contenteditable="false">Total</td>
                                                                  <td class="pt-3-half" contenteditable="true"></td>
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                          </div>
                                                          </div>
                                                          </div>
                                                          </div>

                                                          <div className='col-md-4'>
                                                          <div class="card">
                                                            <h3 class="card-header text-center font-weight-bold text-uppercase py-4" contenteditable="true">Spring 20__</h3>
                                                              <div class="card-body">
                                                                <div id="table" class="table-editable">
                                                                    <table class="table table-bordered table-responsive-md table-striped text-center">
                                                                      <thead>
                                                                      <tr>
                                                                          <th class="text-center">Course Number</th>
                                                                          <th class="text-center">Course Name</th>
                                                                          <th class="text-center">Credits</th>
                                                                      </tr>
                                                                      </thead>
                                                                    <tbody>
                                                                      <tr>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td class="pt-3-half" contenteditable="false"></td>
                                                                        <td class="pt-3-half" contenteditable="false">Total</td>
                                                                        <td class="pt-3-half" contenteditable="true"></td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </div>
                                                                </div>
                                                                </div>
                                                                </div>

                                                                <div className='col-md-4'>
                                                                <div class="card">
                                                                  <h3 class="card-header text-center font-weight-bold text-uppercase py-4" contenteditable="true">Summer 20__</h3>
                                                                    <div class="card-body">
                                                                      <div id="table" class="table-editable">
                                                                          <table class="table table-bordered table-responsive-md table-striped text-center">
                                                                            <thead>
                                                                            <tr>
                                                                                <th class="text-center">Course Number</th>
                                                                                <th class="text-center">Course Name</th>
                                                                                <th class="text-center">Credits</th>
                                                                            </tr>
                                                                            </thead>
                                                                          <tbody>
                                                                            <tr>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                            </tr>
                                                                            <tr>
                                                                              <td class="pt-3-half" contenteditable="false"></td>
                                                                              <td class="pt-3-half" contenteditable="false">Total</td>
                                                                              <td class="pt-3-half" contenteditable="true"></td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
                                                                      </div>
                                                                      </div>
                                                                      </div>
                                                                      </div>


                                                                </div>
    </Card>
  </div>
);

export default Four_Year;
