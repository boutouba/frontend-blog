import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Link } from "react-router-dom";
import styles from './ListPostFront.css';

const ListPostFront = () => {
    return (
        <div class="container d-flex justify-content-center mt-50 mb-50">
            <div class="card">
            <div class="card-header header-elements-inline">
                <h6 class="card-title">Latest posts - BBBootstrap.com</h6>
                <div class="header-elements">
                    <div class="list-icons mb-2">
                                        <a class="fa fa-close" data-action="collapse" data-abc="true"></a>

                                    </div>
                                </div>
                            </div>

            <div class="card-body pb-0">
                <div class="row">
                    <div class="col-xl-6">
                        <div class="media flex-column flex-sm-row mt-0 mb-3">
                                    <div class="mr-sm-3 mb-2 mb-sm-0">
                                <div class="card-img-actions">
                                    <a href="#" data-abc="true">
                                        <img src="https://i.imgur.com/H0SJA0j.jpg" class="img-fluid img-preview
rounded" alt=""/>
                                    </a>
                                </div>
                            </div>

                                    <div class="media-body">
                                <h6 class="media-title"><a href="#" data-abc="true">Java Developer 5th Editions</a></h6>
                                                    <ul class="list-inline list-inline-dotted text-muted mb-2">
                                                        <li class="list-inline-item"><i class="fa fa-book mr-2"></i> Book tutorials</li>
                                                    </ul>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            </div>
                        </div>

                        <div class="media flex-column flex-sm-row mt-0 mb-3">
                                    <div class="mr-sm-3 mb-2 mb-sm-0">
                                <div class="card-img-actions">
                                    <a href="#" data-abc="true">
                                        <img src="https://i.imgur.com/I2Gq4ML.jpg" class="img-fluid img-preview
rounded" alt=""/>

                                    </a>
                                </div>
                            </div>

                                    <div class="media-body">
                                <h6 class="media-title"><a href="#" data-abc="true">Hybris Developer</a></h6>
                                                    <ul class="list-inline list-inline-dotted text-muted mb-2">
                                                        <li class="list-inline-item"><i class="fa fa-video-camera mr-2"></i> Video tutorials</li>
                                                    </ul>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-6">
                        <div class="media flex-column flex-sm-row mt-0 mb-3">
                                    <div class="mr-sm-3 mb-2 mb-sm-0">
                                <div class="card-img-actions">
                                    <a href="#" data-abc="true">
                                        <img src="https://i.imgur.com/4Iu9qtM.jpg" class="img-fluid img-preview rounded"
                                         alt=""/>

                                    </a>
                                </div>
                            </div>

                                    <div class="media-body">
                                <h6 class="media-title"><a href="#" data-abc="true">React Native 2nd Editions</a></h6>
                                                    <ul class="list-inline list-inline-dotted text-muted mb-2">
                                                        <li class="list-inline-item"><i class="fa fa-video-camera mr-2"></i> Video tutorials</li>
                                                    </ul>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            </div>
                        </div>

                        <div class="media flex-column flex-sm-row mt-0 mb-3">
                                    <div class="mr-sm-3 mb-2 mb-sm-0">
                                <div class="card-img-actions">
                                    <a href="#" data-abc="true">
                                        <img src="https://i.imgur.com/8pHTmIb.jpg" class="img-fluid img-preview rounded"
                                         alt=""/>

                                    </a>
                                </div>
                            </div>

                            <div class="media-body">
                                <h6 class="media-title"><a href="#" data-abc="true">Python Architect 3rd Edition</a></h6>
                                                    <ul class="list-inline list-inline-dotted text-muted mb-2">
                                                        <li class="list-inline-item"><i class="fa fa-question-circle mr-2"></i> FAQ section</li>
                                                    </ul>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ListPostFront;
