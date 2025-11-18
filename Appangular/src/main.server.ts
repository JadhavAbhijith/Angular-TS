import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { SecondCompComponent } from './app/second-comp/second-comp.component';
import { UserInputComponent } from './app/user-input/user-input.component';
import { StructureDirectiveComponent } from './app/structure-directive/structure-directive.component';
import { NgForComponent } from './app/ng-for/ng-for.component';
import { JSONDemoComponent } from './app/jsondemo/jsondemo.component';
import { NgSwitchDemoComponent } from './app/ng-switch-demo/ng-switch-demo.component';
import { NgStyleDemoComponent } from './app/ng-style-demo/ng-style-demo.component';
import { PipeDemoComponent } from './app/pipe-demo/pipe-demo.component';
import { CustomizedPipeComponent } from './app/customized-pipe/customized-pipe.component';
import { MainappComponent } from './app/mainapp/mainapp.component';
import { StudentComponent } from './app/student/student.component';
import { OneWayBindingComponent } from './app/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './app/two-way-binding/two-way-binding.component';
import { TwoWayDemoComponent } from './app/two-way-demo/two-way-demo.component';
import { TemplateFormDemoComponent } from './app/template-form-demo/template-form-demo.component';
import { ReactiveFormDemoComponent } from './app/reactive-form-demo/reactive-form-demo.component';
import { TemplateDrivenFormComponent } from './app/template-driven-form/template-driven-form.component';
import { ContactServiceComponent } from './app/contact-service/contact-service.component';
import { HTTPClientDemoComponent } from './app/httpclient-demo/httpclient-demo.component';

const bootstrap = () => bootstrapApplication(HTTPClientDemoComponent, config);

export default bootstrap;

