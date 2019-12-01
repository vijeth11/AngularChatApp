import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { UserInfoTabComponent } from './chatappmenu/user-info-tab/user-info-tab.component';
import { ContactlistComponent } from './chatappmenu/contactlist/contactlist.component';
import { FooterComponent } from './chatappmenu/footer/footer.component';
import { ChatappmenuComponent } from './chatappmenu/chatappmenu.component';
import { ChatAppHeaderComponent } from './chatpage/chat-app-header/chat-app-header.component';
import { ChatAppFooterComponent } from './chatpage/chat-app-footer/chat-app-footer.component';
import { ChatMessagesDisplayComponent } from './chatpage/chat-messages-display/chat-messages-display.component';
import { ChatpageComponent } from './chatpage/chatpage.component';



@NgModule({
  declarations: [
    AppComponent,
    UserInfoTabComponent,
    ContactlistComponent,
    FooterComponent,
    ChatappmenuComponent,
    ChatAppHeaderComponent,
    ChatAppFooterComponent,
    ChatMessagesDisplayComponent,
    ChatpageComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
