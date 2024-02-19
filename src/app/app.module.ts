import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { StoreModule, provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { scoreboardFeatureKey, scoreboardReducer } from './reducers/scoreboard.reducer';
import { ScoreboardModule } from './scoreboard/scoreboard.module';
import { metaReducers, reducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    BookListComponent,
    BookCollectionComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer, books: booksReducer, collection: collectionReducer, game: scoreboardReducer }),
    StoreModule.forRoot(reducers, { metaReducers }),
    ScoreboardModule,
    // StoreModule.forFeature(scoreboardFeatureKey, scoreboardReducer),
    HttpClientModule,
  ],
  providers: [
    provideStore({ count: counterReducer, books: booksReducer, collection: collectionReducer, game: scoreboardReducer }),
    // provideState({ name: 'game', reducer: scoreboardReducer })
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/